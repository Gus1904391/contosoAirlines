import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inicio:  any= 
  [
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
        'Interesante.Muy practicos','Muy buenos'
      ]
    },
    
    {
      id:3,
      nombre:"ACAPULCO",
      precio: 15000,
      imagen: 'assets/imagenes/viaje3.jpg',
      reviews: [
        'Un poco lenta','Buena eleccion'
      ]
    },
    {
      id:4,
      nombre:"CANCUN",
      precio: 12000,
      imagen: 'assets/imagenes/viaje4.jpg',
      reviews: [
        'Muy buena computadora','El empaque llego muy lastimado'
      ]
    },
    
    {
      id:5,
      nombre:"VERACRUZ",
      precio: 250,
      imagen: 'assets/imagenes/viaje5.jpg',
      reviews: [
        'De los mejores balones de futbol','Muy lindo balon'
      ]
    }
  ];
  
  }



