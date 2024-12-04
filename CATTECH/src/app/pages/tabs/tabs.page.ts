import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'; // Importa tu UserService
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private afAuth: AngularFireAuth // Para obtener el UID del usuario actual
  ) {}

  async ngOnInit() {
    const user = await this.afAuth.currentUser;
    if (user) {
      this.isAdmin = await this.userService.isAdmin(user.uid);
    }
  }
}
