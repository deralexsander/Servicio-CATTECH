import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, AnimationController, Animation } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthError } from 'firebase/auth'; // Importar el tipo de error de Firebase

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit, AfterViewInit {
  @ViewChild('logo', { static: false }) logo!: ElementRef;
  @ViewChild('texto', { static: false }) texto!: ElementRef;

  register: any = {
    user: "",
    email: "",
    password: "",
    repeatPassword: ""
  }

  constructor(
    private alertController: AlertController,
    private router: Router,
    private animationCtrl: AnimationController,
    private afAuth: AngularFireAuth // Inyección de AngularFireAuth
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Animación del logo con retraso
    const logoAnimation: Animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1200)
      .fromTo('opacity', '0', '1')
      .delay(700);

    const textoAnimation: Animation = this.animationCtrl.create()
      .addElement(this.texto.nativeElement)
      .duration(1200)
      .fromTo('opacity', '0', '1')
      .delay(1300);

    logoAnimation.play();
    textoAnimation.play();
  }

  async registerSesion() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.register.user.trim() === '' || this.register.email.trim() === '' || this.register.password.trim() === '' || this.register.repeatPassword.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellena todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (!emailPattern.test(this.register.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, introduce un correo electrónico válido.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (this.register.password.length < 8) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener al menos 8 caracteres.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (this.register.password !== this.register.repeatPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Intentar registrar al usuario con Firebase
      try {
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.register.email, this.register.password);
        // Usuario registrado correctamente, redirige a /tabs/home
        this.router.navigate(['/tabs/home']);
      } catch (error: unknown) {
        const authError = error as AuthError; // Cast de error a AuthError
        
        // Verifica si el error es que el correo ya está en uso
        let errorMessage: string;
        if (authError.code === 'auth/email-already-in-use') {
          errorMessage = 'El correo electrónico ya está en uso por otra cuenta.';
        } else {
          errorMessage = authError.message; // Para otros errores, muestra el mensaje original
        }

        const alert = await this.alertController.create({
          header: 'Error',
          message: errorMessage,
          buttons: ['OK']
        });

        await alert.present();
      }
    }
  }
}
