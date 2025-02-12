import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  imports: [NgFor, NgIf, FormsModule]
})
export class MoviesListComponent {
  // 🔹 Lista de películas disponibles
  movies = [
    { 
      title: 'Joker 2', 
      director: 'Todd Phillips', 
      year: 2024, 
      image: 'assets/Joker2.jpeg',
      synopsis: 'Arthur Fleck regresa en una nueva historia llena de locura y caos en Gotham City.',
      schedules: ['15:00', '18:00', '21:00']
    },
    { 
      title: 'DeadPool 3', 
      director: 'Shawn Levy', 
      year: 2024, 
      image: 'assets/Deadpool3.jpg',
      synopsis: 'Deadpool se une al universo de Marvel en una aventura irreverente y llena de acción.',
      schedules: ['16:00', '19:00', '22:00']
    },
    { 
      title: 'Dune 2', 
      director: 'Denis Villeneuve', 
      year: 2024, 
      image: 'assets/Dune2.jpg',
      synopsis: 'Paul Atreides continúa su viaje en Arrakis mientras enfrenta nuevas amenazas y desafíos.',
      schedules: ['14:30', '17:30', '20:30']
    }
  ];

  // 🔹 Variables de control de modales
  selectedMovie: any = null;
  showScheduleModal = false;
  showSeatsModal = false;
  showTicketTypeModal = false;
  showPaymentModal = false;

  // 🔹 Variables para la selección de horarios, asientos y tipos de entradas
  availableSchedules: string[] = [];
  selectedSchedule: string = '';
  seats = Array.from({ length: 40 }, (_, i) => ({
    number: i + 1,
    selected: false,
    occupied: Math.random() < 0.2, // 🔸 Simulación de asientos ocupados
    type: ''
  }));
  selectedSeats: any[] = [];
  ticketTypes = ['Joven', 'Adulto', 'Mayores 65'];

  // 🔹 Datos de pago
  paymentData = {
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  };

  // 🔸 Abrir modal con información de la película seleccionada
  openModal(movie: any) {
    this.selectedMovie = movie;
    this.showScheduleModal = false;
    this.showSeatsModal = false;
    this.showTicketTypeModal = false;
    this.showPaymentModal = false;
  }

  // 🔸 Cerrar todos los modales
  closeModal() {
    this.selectedMovie = null;
  }

  // 🔸 Abrir modal de selección de horario
  openScheduleModal() {
    this.availableSchedules = this.selectedMovie.schedules;
    this.selectedSchedule = this.availableSchedules[0];
    this.showScheduleModal = true;
  }

  closeScheduleModal() {
    this.showScheduleModal = false;
  }

  // 🔸 Confirmar horario y abrir selección de asientos
  confirmSchedule() {
    alert(`Has seleccionado el horario de ${this.selectedSchedule} para ${this.selectedMovie.title}.`);
    this.showScheduleModal = false;
    this.showSeatsModal = true;
  }

  closeSeatsModal() {
    this.showSeatsModal = false;
  }

  // 🔸 Seleccionar o deseleccionar un asiento
  toggleSeatSelection(index: number) {
    const seat = this.seats[index];
    if (!seat.occupied) {
      seat.selected = !seat.selected;
    }
  }

  // 🔸 Confirmar asientos y abrir selección de tipo de entrada
  confirmSeats() {
    this.selectedSeats = this.seats.filter(seat => seat.selected);
    if (this.selectedSeats.length > 0) {
      this.showSeatsModal = false;
      this.showTicketTypeModal = true;
    } else {
      alert('¡Debes seleccionar al menos un asiento!');
    }
  }

  closeTicketTypeModal() {
    this.showTicketTypeModal = false;
  }

  // 🔸 Confirmar tipos de entrada y abrir modal de pago
  confirmTicketTypes() {
    if (this.selectedSeats.every(seat => seat.type)) {
      this.showTicketTypeModal = false;
      this.showPaymentModal = true;
    } else {
      alert('¡Selecciona el tipo de entrada para todos los asientos!');
    }
  }

  closePaymentModal() {
    this.showPaymentModal = false;
  }

  // 🔸 Procesar el pago
  processPayment(event: Event) {
    event.preventDefault();

    // 🔹 Validaciones básicas de pago
    if (!this.paymentData.cardName || !this.paymentData.cardNumber || 
        !this.paymentData.expiration || !this.paymentData.cvv) {
      alert('Por favor, completa todos los campos de pago.');
      return;
    }

    if (this.paymentData.cardNumber.length !== 16 || isNaN(+this.paymentData.cardNumber)) {
      alert('Número de tarjeta inválido. Debe tener 16 dígitos.');
      return;
    }

    if (this.paymentData.cvv.length !== 3 || isNaN(+this.paymentData.cvv)) {
      alert('CVV inválido. Debe tener 3 dígitos.');
      return;
    }

    // 🔹 Simulación de procesamiento de pago
    alert(`¡Pago realizado con éxito para ${this.selectedMovie.title}!`);
    this.resetFlow();
  }

  // 🔹 Reiniciar el flujo de compra
  resetFlow() {
    this.selectedMovie = null;
    this.showScheduleModal = false;
    this.showSeatsModal = false;
    this.showTicketTypeModal = false;
    this.showPaymentModal = false;
    this.seats.forEach(seat => {
      seat.selected = false;
      seat.type = '';
    });
    this.paymentData = {
      cardName: '',
      cardNumber: '',
      expiration: '',
      cvv: ''
    };
  }
}
