import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {
  verificar: any = {
    email: "",
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async enviar() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.verificar.email.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellena todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (!emailPattern.test(this.verificar.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, introduce un correo electrónico válido.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      try {
        await this.authService.sendPasswordResetEmail(this.verificar.email);
        this.presentToast("bottom", "Se envió un correo de recuperación.");
        this.router.navigate(['/login']);
      } catch (error) {
        const errorMessage = this.getErrorMessage(error); // Obtén el mensaje de error
        const alert = await this.alertController.create({
          header: 'Error',
          message: errorMessage,
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  // Método para obtener el mensaje de error
  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message; // Si error es una instancia de Error, devuelve el mensaje
    }
    return 'Ocurrió un error al enviar el correo.'; // Mensaje predeterminado
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position,
    });
    await toast.present();
  }
}
