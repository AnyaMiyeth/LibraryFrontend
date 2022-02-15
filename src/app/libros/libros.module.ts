import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroComponent } from './libro/libro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibrosRoutingModule } from './libros-routing.module';
import { FiltrarLibrosPipe } from './Pipe/filtrar-libros.pipe';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'consulta', component: LibroComponent
   }
  ];
@NgModule({
  declarations: [
    LibroComponent,
    FiltrarLibrosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class LibrosModule { }