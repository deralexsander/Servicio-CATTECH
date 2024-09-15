import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verclientes',
  templateUrl: './verclientes.page.html',
  styleUrls: ['./verclientes.page.scss'],
})
export class VerclientesPage implements OnInit {
  clientes: any[] = [
    { nombre: 'Cliente 1' },
    { nombre: 'Cliente 2' },
    { nombre: 'Cliente 3' }
  ];

  constructor() { }

  ngOnInit() {
  }
 
    
  
}
