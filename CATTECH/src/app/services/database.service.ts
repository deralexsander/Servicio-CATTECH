import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject , Observable} from 'rxjs';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Servicio } from '../clases/servicio';  // Importar la clase Servicio
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public database!: SQLiteObject;
  tblServicio: string = `
    CREATE TABLE IF NOT EXISTS servicio (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      fecha TEXT, 
      hora TEXT, 
      motivo TEXT, 
      direccion TEXT, 
      imagenes TEXT, 
      nombre_dispositivo TEXT, 
      estado_servicio TEXT, 
      tipo_servicio TEXT, 
      cliente_id INTEGER
    )`;

  listaServicio = new BehaviorSubject<Servicio[]>([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.crearBD();
  }

  crearBD(): Promise<SQLiteObject> {
    return this.platform.ready().then(() => {
      return this.sqlite.create({
        name: 'servicio.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD creada");
        this.crearTablas();
        this.isDbReady.next(true); // BD lista
        return db;
      }).catch(e => {
        this.presentToast('Error al crear BD');
        throw new Error(e);
      });
    });
  }

  crearTablas() {
    const query = this.tblServicio;
    this.database.executeSql(query, []).then(() => {
      this.presentToast('Tabla de servicio creada');
    }).catch(e => this.presentToast('Error al crear la tabla'));
  }

  async addServicio(servicio: Servicio): Promise<void> {
    const query = `
      INSERT INTO servicio (
        fecha, hora, motivo, direccion, imagenes, nombre_dispositivo, estado_servicio, tipo_servicio, cliente_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      servicio.fecha, servicio.hora, servicio.motivo, servicio.direccion,
      servicio.imagenes, servicio.nombre_dispositivo, servicio.estado_servicio,
      servicio.tipo_servicio, servicio.cliente_id
    ];

    try {
      await this.database.executeSql(query, values);
      this.presentToast('Servicio agregado exitosamente');
      await this.getServicio().then(data => {
        this.listaServicio.next(data);
      });
    } catch (e) {
      this.presentToast('Error al agregar servicio: ' + e);
      throw e;
    }
  }

  async getServicio(): Promise<Servicio[]> {
    const query = 'SELECT * FROM servicio';
    try {
      const res = await this.database.executeSql(query, []);
      let servicios: Servicio[] = [];
      for (let i = 0; i < res.rows.length; i++) {
        servicios.push(res.rows.item(i));
      }
      return servicios;
    } catch (e) {
      this.presentToast('Error al obtener los servicios: ' + e);
      return [];
    }
  }

  async getServicioId(id: number): Promise<Servicio | null> {
    const query = 'SELECT * FROM servicio WHERE id = ?';
    try {
      const res = await this.database.executeSql(query, [id]);
      if (res.rows.length > 0) {
        return res.rows.item(0) as Servicio;
      }
      return null;
    } catch (e) {
      this.presentToast('Error al obtener servicio por ID: ' + e);
      return null;
    }
  }

  async eliminarServicio(id: number): Promise<void> {
    const query = 'DELETE FROM servicio WHERE id = ?';
    try {
      await this.database.executeSql(query, [id]);
      this.presentToast('Servicio eliminado');
      await this.getServicio().then(data => {
        this.listaServicio.next(data);
      });
    } catch (e) {
      this.presentToast('Error al eliminar servicio: ' + e);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  dbReady(): Observable<boolean> {
    return this.isDbReady.asObservable();
  }

  get dbState(): Observable<boolean> {
    return this.isDbReady.asObservable();
  }
  
  // Método para que el usuario elija o capture una imagen
  async seleccionarImagen(): Promise<string | null> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt // Permite al usuario elegir entre cámara o galería
      });
      return image.base64String ?? null; // Retorna la imagen en Base64 si se seleccionó alguna
    } catch (error) {
      this.presentToast('Error al seleccionar imagen');
      return null;
    }
  }

  // Método para guardar la imagen en el sistema de archivos
  async saveImageToFilesystem(base64Data: string, fileName: string): Promise<string> {
    try {
      const result = await Filesystem.writeFile({
        path: `images/${fileName}`,
        data: base64Data,
        directory: Directory.Data
      });
      return result.uri; // Devuelve la URI para guardarla en la BD
    } catch (error) {
      this.presentToast('Error al guardar imagen');
  
      // Manejo del error de manera correcta
      if (error instanceof Error) {
        throw new Error(error.message); // Proporciona un mensaje de error
      } else {
        throw new Error('Error desconocido'); // Maneja cualquier otro tipo de error
      }
    }
  }
  // Método para agregar el servicio con la ruta de imagen
  async addServicioConImagen(servicio: Servicio): Promise<void> {
    // Permite al usuario seleccionar una imagen
    const base64Image = await this.seleccionarImagen();

    // Guarda la imagen en el sistema de archivos y almacena la ruta en SQLite
    let imagePath = '';
    if (base64Image) {
      imagePath = await this.saveImageToFilesystem(base64Image, `servicio_${new Date().getTime()}.jpg`);
    }

    // Luego, guarda el servicio en la BD con la ruta de la imagen
    servicio.imagenes = imagePath; // Actualiza el servicio con la ruta de la imagen
    await this.addServicio(servicio);
  }


}
