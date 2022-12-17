import { Component, Input, OnInit, Output } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { viajes } from '../variables.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  inicio:  any= [
    {
      id:1,
      nombre:"CIUDAD DE MEXICO",
      precio: 200,
      imagen: 'assets/imagenes/viaje1.jpg',
      reviews: [
        'UN LUGAR MUY ENCANTADOR, CON UNA ENORME CANTIDAD DE LUGARES PARA COMER, TURISTEAR Y TENER UNA GRAN EXPERIENCIA'
      ]
    },
    {
      id:2,
      nombre:"TOLUCA",
      precio: 100,
      imagen: 'assets/imagenes/viaje2.jpg',
      reviews: [
        'UN LUGAR MUY ESPECIAL PARA PASAR CON TODA LA FAMILIA'
      ]
    },
    
    {
      id:3,
      nombre:"ACAPULCO",
      precio: 15000,
      imagen: 'assets/imagenes/viaje3.jpg',
      reviews: [
        'UNO DE LO MEJORES DESTINOS PARA TUS VACACIONES, CON HERMOSAS PLAYAS Y EXCELENTES RESTAURANTES'
      ]
    },
    {
      id:4,
      nombre:"CANCUN",
      precio: 12000,
      imagen: 'assets/imagenes/viaje4.jpg',
      reviews: [
        'UNO DE LO MEJORES DESTINOS PARA TUS VACACIONES, CON HERMOSAS PLAYAS Y EXCELENTES RESTAURANTES'
      ]
    },
    
    {
      id:5,
      nombre:"VERACRUZ",
      precio: 250,
      imagen: 'assets/imagenes/viaje5.jpg',
      reviews: [
        'LA MEJOR ZONA PARA COMER MARISCOS '
      ]
    }
  ];
  total:number= 0;
  cantidad: number=0;
  carro: number=0;
  horario: number=0;

  constructor() { }

  ngOnInit(): void {
    this.inicio.forEach((): void => {
      this.total += this.inicio.cantidad * this.inicio.precio
    });
  }
  @Output() carroCopia: number = 0;
  @Input() carrito: number = 0;
 
  seleccionarHorario(ev:any):void{
    this.horario=parseInt(ev.target.value)
  }
  seleccionarCantidad(ev: any): void{
    this.cantidad = parseInt(ev.target.value);
  }
}
