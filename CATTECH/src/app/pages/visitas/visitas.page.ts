import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  visitaForm!: FormGroup;
  imagenes: File[] = [];
  maxImages = 5; // Número máximo de imágenes permitidas
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.visitaForm = this.fb.group({
      cliente: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      motivo: ['',Validators.required]
    });
  }
  get cliente() {
    return this.visitaForm.get('cliente');
  }

  get fecha() {
    return this.visitaForm.get('fecha');
  }

  get hora() {
    return this.visitaForm.get('hora');
  }

  get direccion() {
    return this.visitaForm.get('direccion');
  }

  get motivo() {
    return this.visitaForm.get('motivo')
  }

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > this.maxImages) {
      // Mostrar mensaje de error si se excede el número máximo de imágenes
      alert(`Solo puedes subir hasta ${this.maxImages} imágenes.`);
      return;
    }
    this.imagenes = Array.from(files);
  }

  onSubmit() {
    if (this.visitaForm.valid && this.imagenes.length <= this.maxImages) {
      const visitaData = this.visitaForm.value;
      console.log('Visita agendada:', visitaData);
      console.log('Imágenes adjuntadas:', this.imagenes);
      // Aquí puedes añadir la lógica para enviar los datos y las imágenes a un servicio o API
    }
  }  
}
