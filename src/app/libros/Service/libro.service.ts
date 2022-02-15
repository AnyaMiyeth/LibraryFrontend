import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../Model/libro';
import { tap, catchError } from 'rxjs/operators';
import { Observable , of} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  baseUrl: string;
  constructor(
      private http: HttpClient)
  {
    this.baseUrl = environment.baseUrl;
  }

  get(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl + 'Libro')
        .pipe(
            tap(_ => console.log('datos enviados')),
            catchError(this.handleError<any>('Consulta de Libros', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
