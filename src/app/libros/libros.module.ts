import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroComponent } from './libro/libro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FiltrarLibrosPipe } from './Pipe/filtrar-libros.pipe';

@NgModule({
  declarations: [
    LibroComponent,
    FiltrarLibrosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LibrosModule { }
