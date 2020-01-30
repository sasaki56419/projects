import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  movies : Movie[];
  movie : Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getData()
    .subscribe(
      data => {
        this.movies = data['results'];
        this.movie = this.movies[0];
        this.movies.splice(0,1)

      }
    );
  }


}
