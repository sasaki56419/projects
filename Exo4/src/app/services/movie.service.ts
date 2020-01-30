import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
    api_key: "ea29b0158c2988497490476e0b0cfa57";
    base_uri: "http://api.themoviedb.org/3";
    images_uri: "http://image.tmdb.org/t/p";
    timeout: 5000;
    xhr;

    constructor(private httpClient: HttpClient) {

    }

    getData(): Observable<any> {

        let headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        return this.httpClient.get<any>('https://api.themoviedb.org/3/search/movie?api_key=ea29b0158c2988497490476e0b0cfa57&query=%22a%22&year=2020', { headers });


    }
 
    
}