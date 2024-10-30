export class Servicio {
    id?: number;  //  se genera auto en la base de datos
    fecha: string;
    hora: string;
    motivo: string;
    direccion: string;
    imagenes: string;
    nombre_dispositivo: string;
    estado_servicio: string;
    tipo_servicio: string;
    cliente_id: number;
  
    constructor(
      fecha: string,
      hora: string,
      motivo: string,
      direccion: string,
      imagenes: string,
      nombre_dispositivo: string,
      estado_servicio: string,
      tipo_servicio: string,
      cliente_id: number,
      id?: number
    ) {
      this.id = id;
      this.fecha = fecha;
      this.hora = hora;
      this.motivo = motivo;
      this.direccion = direccion;
      this.imagenes = imagenes;
      this.nombre_dispositivo = nombre_dispositivo;
      this.estado_servicio = estado_servicio;
      this.tipo_servicio = tipo_servicio;
      this.cliente_id = cliente_id;
    }
  }
  