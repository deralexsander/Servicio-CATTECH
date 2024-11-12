import { Component, OnInit } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { DatabaseService } from '../../services/database.service'; // Importar el servicio de la base de datos
import { Servicio } from '../../clases/servicio'; // Importar la clase Servicio
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importar AngularFireAuth

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  database!: SQLiteObject; // Objeto de la base de datos
  cards: any[] = [];
  user: any;  // Propiedad para almacenar los datos del usuario

  constructor(
    private databaseService: DatabaseService,
    private afAuth: AngularFireAuth  // Inyectar el servicio de autenticación
  ) {}

  ngOnInit() {
    // Suscribirse al estado de autenticación del usuario
    this.afAuth.authState.subscribe(user => {
      this.user = user;  // Asigna el objeto de usuario
      console.log(this.user);  // Muestra los detalles del usuario en la consola
    });

    // Inicializar la base de datos y esperar hasta que esté lista
    this.databaseService.crearBD().then((db: SQLiteObject) => {
      this.database = db;
      console.log('Base de datos creada');
      this.addFakeServicios(); // Agregar servicios de prueba
    }).catch(e => console.error('Error al crear la BD', e));

    // Esperar hasta que la base de datos esté lista para cargar servicios
    this.databaseService.dbReady().subscribe((isReady: boolean) => {
      if (isReady) {
        console.log('Base de datos lista');
        this.cargarServicios(); // Cargar servicios cuando la base de datos esté lista
      }
    });
  }

  // Agregar servicios de prueba
  async addFakeServicios() {
    const servicios: Servicio[] = [
      new Servicio('2024-10-07', '10:00', 'Reparación de pantalla', 'Calle Falsa 123', 'ruta/a/imagen1.jpg', 'Laptop', 'listo', 'Reparación', 1),
      new Servicio('2024-10-06', '14:30', 'Mantenimiento general', 'Calle Verdadera 456', 'ruta/a/imagen2.jpg', 'PC de escritorio', 'trabajando', 'Mantenimiento', 2),
      new Servicio('2024-10-05', '09:00', 'Cambio de batería', 'Avenida Siempreviva 742', 'ruta/a/imagen3.jpg', 'Smartphone', 'problemas', 'Reparación', 3)
    ];

    // Insertar todos los servicios de prueba en la base de datos
    try {
      await Promise.all(servicios.map(servicio => this.databaseService.addServicio(servicio)));
      console.log('Todos los servicios de prueba agregados');
    } catch (e) {
      console.error('Error al agregar servicios de prueba', e);
    }
  }

  // Método para cargar los servicios desde la base de datos
  async cargarServicios() {
    try {
      const servicios = await this.databaseService.getServicio(); // Obtener los servicios del servicio de la BD
      this.cards = servicios.map(servicio => ({
        title: servicio.tipo_servicio,
        subtitle: servicio.fecha,
        content: `${servicio.nombre_dispositivo} - ${servicio.estado_servicio || 'Desconocido'}`,
        color: this.obtenerColorTipo(servicio.tipo_servicio) // Cambiar el color según el tipo de servicio
      }));
    } catch (e) {
      console.error('Error al cargar servicios', e);
    }
  }

  // Método para definir el color según el tipo de servicio
  obtenerColorTipo(tipoServicio: string): string {
    switch (tipoServicio.toLowerCase()) {
      case 'mantenimiento':
        return 'success';
      case 'reparacion':
        return 'danger';
      case 'revision':
        return 'primary';
      default:
        return 'secondary';
    }
  }
}
