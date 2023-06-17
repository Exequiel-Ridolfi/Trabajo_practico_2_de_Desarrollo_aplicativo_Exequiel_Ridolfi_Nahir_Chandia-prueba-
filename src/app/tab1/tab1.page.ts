import { Component,OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';
import { Result } from '../interfaces/interfaces'; 
import { register } from 'swiper/element/bundle'
register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  arraypokemon:Result[]=[]
  constructor(private service:ServicioService) {}
  ngOnInit(){
   this.service.pokedex().subscribe(respuesta => {
    console.log(respuesta)
    this.arraypokemon=respuesta.results
   })
  }
 
}
