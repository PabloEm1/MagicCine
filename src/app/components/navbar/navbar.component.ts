import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Importar RouterModule
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule], // ✅ Agregar RouterModule aquí
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoginModalOpen = false;
  isRegisterModalOpen = false;

  username = '';
  password = '';

  registerUsername = '';
  registerEmail = '';
  registerPassword = '';

  // ✅ Estado para controlar si el usuario ha iniciado sesión
  isLoggedIn = false;
  loggedInUser = '';

  // ✅ Abrir modal de inicio de sesión
  openLoginModal() {
    this.isLoginModalOpen = true;
    this.isRegisterModalOpen = false;
  }

  // ✅ Abrir modal de registro
  openRegisterModal() {
    this.isRegisterModalOpen = true;
    this.isLoginModalOpen = false;
  }

  // ✅ Cerrar ambos modales
  closeModals() {
    this.isLoginModalOpen = false;
    this.isRegisterModalOpen = false;
  }

  // ✅ Simulación de inicio de sesión
  login() {
    this.loggedInUser = 'Mario';  // Simular el nombre de usuario como 'Mario'
    this.isLoggedIn = true;
    this.closeModals();
  }

  // ✅ Simulación de registro
  register() {
    alert(`Usuario: ${this.registerUsername}, Correo: ${this.registerEmail}, Contraseña: ${this.registerPassword}`);
    this.closeModals();
  }

  // ✅ Cerrar sesión
  logout() {
    this.isLoggedIn = false;
    this.loggedInUser = '';
  }
}
