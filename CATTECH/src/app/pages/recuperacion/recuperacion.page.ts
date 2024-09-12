import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  verificar: any = {
    email: ""
  }

  constructor(
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  async enviar() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
  
    if (this.verificar.email.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellena todos los campos.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else if (!emailPattern.test(this.verificar.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, introduce un correo electrónico válido.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else {
      this.presentToast("bottom", "Se envió un correo de recuperación.");
      this.router.navigate(['/login']);
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position
    });
    await toast.present();
  }
}
