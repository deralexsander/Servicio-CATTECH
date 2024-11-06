import { TestBed } from '@angular/core/testing';
import { Servicio } from './clases/servicio';
import { CardService } from './card.service';
import { DatabaseService } from './services/database.service';  // Asegúrate de importar el servicio de base de datos
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';   // Para inicializar correctamente el servicio de base de datos

describe('CardService', () => {
  let service: CardService;
  let databaseService: DatabaseService; // Declaramos el servicio de base de datos
  let nuevoServicio = new Servicio(
    '2024-10-06', '14:30', 'Reparación de pantalla', 'Calle Falsa 123',
    'ruta/a/imagen.jpg', 'Smartphone', 'trabajando', 'Reparación', 1
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatabaseService,   // Aseguramos que DatabaseService está disponible
        SQLite             // Incluimos SQLite en los providers
      ]
    });
    service = TestBed.inject(CardService);
    databaseService = TestBed.inject(DatabaseService); // Inyectamos el servicio de base de datos
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new service to the database', (done) => {
    // Llamar al método para agregar un servicio y verificar que se agregó correctamente
    databaseService.addServicio(nuevoServicio)
      .then(() => {
        console.log('Servicio agregado con éxito');
        done();  // Llamamos done para indicar que el test asíncrono ha terminado
      })
      .catch(e => {
        console.error('Error al agregar servicio', e);
        done.fail(e);  // Indicamos que la prueba ha fallado
      });
  });
});
