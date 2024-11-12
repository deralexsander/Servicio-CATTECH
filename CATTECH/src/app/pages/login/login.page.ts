import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, AnimationController, Animation } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importa Firebase Auth
import { GoogleAuthProvider } from 'firebase/auth'; // Cambia esta línea

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
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private animationCtrl: AnimationController,
    private afAuth: AngularFireAuth  // Inyecta Firebase Auth
  ) {}

  ngOnInit() {
    // Si el usuario ya está autenticado, lo redirigimos al home
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/tabs/home']);
      }
    });
  }

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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (this.login.email.trim() === '' || this.login.password.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    } else if (!emailPattern.test(this.login.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Correo electrónico no válido.',
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
      try {
        const userCredential = await this.afAuth.signInWithEmailAndPassword(
          this.login.email.trim(), 
          this.login.password.trim()
        );
        // Si el inicio de sesión es exitoso
        this.router.navigate(['/tabs/home']);
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales incorrectas o usuario no registrado.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }
  
  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider(); // Usa GoogleAuthProvider aquí
      await this.afAuth.signInWithPopup(provider);
      this.router.navigate(['/tabs/home']);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un problema al iniciar sesión con Google.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
