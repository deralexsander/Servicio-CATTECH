import { Injectable } from '@angular/core';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; // Importa las funciones necesarias

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async sendPasswordResetEmail(email: string) {
    const auth = getAuth(); // Obtén la instancia de autenticación
    return sendPasswordResetEmail(auth, email); // Llama a la función para enviar el correo
  }
}
