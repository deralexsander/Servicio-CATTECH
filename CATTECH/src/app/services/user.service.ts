import { Injectable } from '@angular/core';
import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private db = getFirestore(); // Instancia de Firestore

  constructor() {}

  // Crear un usuario en Firestore
  async createUser(uid: string, correo: string, rol: string): Promise<void> {
    try {
      await setDoc(doc(this.db, 'users', uid), {
        correo: correo,
        rol: rol,
      });
      console.log('Usuario creado exitosamente');
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }

  // Obtener un usuario por UID
  async getUser(uid: string): Promise<any> {
    try {
      const userDoc = await getDoc(doc(this.db, 'users', uid));
      if (userDoc.exists()) {
        return userDoc.data(); // Devuelve los datos del usuario
      } else {
        console.log('No se encontró el usuario');
        return null;
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw error;
    }
  }

  // Verificar si un usuario es admin
  async isAdmin(uid: string): Promise<boolean> {
    const user = await this.getUser(uid);
    return user ? user.rol === 'admin' : false;
  }
}
