import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { VisitasService } from 'src/app/services/visitas.service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-reciclar',
  templateUrl: './reciclar.page.html',
  styleUrls: ['./reciclar.page.scss'],
})
export class ReciclarPage implements OnInit {
  reciclarForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private visitasService: VisitasService,
    private toastController: ToastController,
    private router: Router // Inyecta Router aquí
  ) {}

  ngOnInit() {
    this.reciclarForm = this.fb.group({
      cliente: ['', Validators.required],
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  get cliente() { return this.reciclarForm.get('cliente'); }
  get titulo() { return this.reciclarForm.get('titulo'); }
  get fecha() { return this.reciclarForm.get('fecha'); }
  get hora() { return this.reciclarForm.get('hora'); }
  get direccion() { return this.reciclarForm.get('direccion'); }
  get motivo() { return this.reciclarForm.get('motivo'); }

  async onSubmit() {
    if (this.reciclarForm.valid) {
      const visita = this.reciclarForm.value;
      visita.tipo_tarjeta = 'donacion'; // Establece el tipo de tarjeta como "donación"
  
      try {
        await this.visitasService.addVisita(visita);
        console.log('Donación guardada con éxito');
  
        const toast = await this.toastController.create({
          message: 'Enviado correctamente.',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
  
        this.reciclarForm.reset();
      } catch (error) {
        console.error('Error al guardar la donación:', error);
  
        const toast = await this.toastController.create({
          message: 'Hubo un error al enviar. Intenta nuevamente.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
      this.router.navigate(['/tabs/home']); // Redirige a la página de inicio
    }
  }  
}
