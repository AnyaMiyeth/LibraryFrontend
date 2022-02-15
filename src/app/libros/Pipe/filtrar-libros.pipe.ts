import { Pipe, PipeTransform } from '@angular/core';
import { Libro } from '../Model/libro';

@Pipe({
  name: 'filtrarLibros'
})
export class FiltrarLibrosPipe implements PipeTransform {

  transform(libros: Libro[], searchText: string): any {
    if (searchText == null) return libros;
       
         console.log(searchText);
        
        return libros.filter(p=> 
            p.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
            ||
            p.autor.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
            ||
            p.year.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
        );
    }

}
