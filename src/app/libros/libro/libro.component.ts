import { Component, OnInit } from '@angular/core';
import { Libro } from '../Model/libro';
import { LibroService } from '../Service/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  filter:string="";
  libros: Libro[]=[];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {

    this.libroService.get().subscribe(result => {
      this.libros = result;
    });
    
  }

}
