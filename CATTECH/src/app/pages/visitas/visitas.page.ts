import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Servicio } from 'src/app/clases/servicio';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { VisitasService } from 'src/app/services/visitas.service';
import { ToastController } from '@ionic/angular'; // Importa el ToastController
import { Router } from '@angular/router'; // Importa el Router para redirección

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  visitaForm!: FormGroup;
  imagenes: string[] = [];
  maxImages = 5;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private visitasService: VisitasService,
    private toastController: ToastController, // Inyecta el ToastController
    private router: Router // Inyecta el Router
  ) {}

  ngOnInit() {
    this.visitaForm = this.fb.group({
      cliente: ['', Validators.required],
      titulo: ['', Validators.required], // Asegúrate de que el campo 'titulo' sea requerido
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  get cliente() { return this.visitaForm.get('cliente'); }
  get titulo() { return this.visitaForm.get('titulo'); }
  get fecha() { return this.visitaForm.get('fecha'); }
  get hora() { return this.visitaForm.get('hora'); }
  get direccion() { return this.visitaForm.get('direccion'); }
  get motivo() { return this.visitaForm.get('motivo'); }

  async onSubmit() {
    if (this.visitaForm.valid) {
      const visita = this.visitaForm.value;
      visita.imagenes = this.imagenes;
      visita.tipo_tarjeta = 'Visita'; // Establece el tipo de tarjeta como "visita"
  
      try {
        await this.visitasService.addVisita(visita);
        console.log('Visita guardada con éxito');
  
        const toast = await this.toastController.create({
          message: 'Enviado correctamente.',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
  
        // Redirige a la página tabs/home después de enviar el formulario
        this.router.navigate(['/tabs/home']);
        
        this.visitaForm.reset();
        this.imagenes = [];
      } catch (error) {
        console.error('Error al guardar la visita:', error);
  
        const toast = await this.toastController.create({
          message: 'Hubo un error al enviar. Intenta nuevamente.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
    }
  }
  

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      console.log('Imagen capturada:', image.webPath);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}
