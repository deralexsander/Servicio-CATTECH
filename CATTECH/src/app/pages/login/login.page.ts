import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, AnimationController, Animation } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('logo', { static: false }) logo!: ElementRef;
  @ViewChild('texto', { static: false }) texto!: ElementRef;


  login: any = {
    email: "",
    password: ""
  }

  constructor(
    private alertController: AlertController,
    private router: Router,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Animación del logo con retraso
    const logoAnimation: Animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1200)
      .fromTo('opacity', '0', '1')
      .delay(700); // Retraso de 1 segundo antes de comenzar la animación

    const textoAnimation: Animation = this.animationCtrl.create()
      .addElement(this.texto.nativeElement)
      .duration(1200)
      .fromTo('opacity', '0', '1')
      .delay(1300); // Retraso de 1 segundo antes de comenzar la animación

    logoAnimation.play();
    textoAnimation.play();
  }

  async iniciarSesion() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
  
    if (this.login.email.trim() === '' || this.login.password.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellena todos los campos.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else if (!emailPattern.test(this.login.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, introduce un correo electrónico válido.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else if (this.login.password.length < 8) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener al menos 8 caracteres.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else {
      // Redirige a /tabs/home
      this.router.navigate(['/tabs/home']);
    }
  }
}
