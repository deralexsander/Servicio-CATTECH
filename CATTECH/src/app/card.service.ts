// src/app/card.service.ts
import { Injectable } from '@angular/core';

export interface Card {
  title: string;
  subtitle: string;
  content: string;
  color: string;
}

export interface CardWithDevices {
  card: Card;
  devices: Device[];
}

export interface Device {
  device: string;
  brand: string;
  model: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  // Lista de tarjetas
  private cards: Card[] = [
    { title: 'Mantención', subtitle: '04/09/2024', content: 'Listo', color: 'success' },
    { title: 'Reparación', subtitle: '03/09/2024', content: 'trabajando', color: 'danger' },
    { title: 'Revición', subtitle: '02/09/2024', content: 'problemas', color: 'primary' },
    { title: 'reciclaje', subtitle: '01/09/2024', content: 'Listo', color: 'success' },
    { title: 'Mantención', subtitle: '31/08/2024', content: 'Listo', color: 'success' },
    { title: 'Mantención', subtitle: '30/08/2024', content: 'Listo', color: 'success' },
    { title: 'Mantención', subtitle: '29/08/2024', content: 'Listo', color: 'success' },
    { title: 'Mantención', subtitle: '28/08/2024', content: 'Listo', color: 'success' },
    { title: 'Mantención', subtitle: '27/08/2024', content: 'Listo', color: 'success' },
    { title: 'Mantención', subtitle: '26/08/2024', content: 'Listo', color: 'success' },
    { title: 'Mantención', subtitle: '25/08/2024', content: 'Listo', color: 'success' }
  ];

  // Lista de dispositivos
  private devices: Device[] = [
    { device: 'Laptop', brand: 'Dell', model: 'XPS 13', date: '04/09/2024' },
    { device: 'Smartphone', brand: 'Apple', model: 'iPhone 14', date: '04/09/2024' },
    { device: 'Tablet', brand: 'Samsung', model: 'Galaxy Tab S8', date: '02/09/2024' },
    { device: 'Laptop', brand: 'HP', model: 'Spectre x360', date: '02/09/2024' },
    { device: 'Smartphone', brand: 'Google', model: 'Pixel 7', date: '31/08/2024' },
    { device: 'Smartwatch', brand: 'Apple', model: 'Apple Watch Series 8', date: '30/08/2024' },
    { device: 'Laptop', brand: 'Lenovo', model: 'ThinkPad X1 Carbon', date: '29/08/2024' },
    { device: 'Smartphone', brand: 'Samsung', model: 'Galaxy S22', date: '29/08/2024' },
    { device: 'Tablet', brand: 'Apple', model: 'iPad Pro', date: '27/08/2024' },
    { device: 'Laptop', brand: 'Asus', model: 'ZenBook 14', date: '27/08/2024' },
    { device: 'Smartphone', brand: 'OnePlus', model: 'OnePlus 10 Pro', date: '25/08/2024' }
  ];

  // Método para obtener las tarjetas
  getCards(): Card[] {
    return this.cards;
  }

  getDevices(): Device[] {
    return this.devices;
  }

  getCardsWithDevices(): CardWithDevices[] {
    return this.cards.map(card => {
      const devicesForCard = this.devices.filter(device => device.date === card.subtitle);
      return { card, devices: devicesForCard };
    });
  }
  
}
