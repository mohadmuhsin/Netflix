import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}
  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }
  //bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }
  trendingData() {
    this.service.trendigMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }
  // action
  actionMovie() {
    this.service.FetchActionMovies().subscribe((result) => {
      // console.log(result,'actionMovie#');
      this.actionMovieResult = result.results;
    });
  }
  // adventure
  adventureMovie() {
    this.service.FetchAdventureMovies().subscribe((result) => {
      // console.log(result,'actionMovie#');
      this.adventureMovieResult = result.results;
    });
  } // animation
  animationMovie() {
    this.service.FetchAnimationMovies().subscribe((result) => {
      // console.log(result,'actionMovie#');
      this.animationMovieResult = result.results;
    });
  } // comedy
  comedyMovie() {
    this.service.FetchComedyMovies().subscribe((result) => {
      // console.log(result,'actionMovie#');
      this.comedyMovieResult = result.results;
    });
  } // documentary
  documentaryMovie() {
    this.service.FetchDocumentaryMovies().subscribe((result) => {
      // console.log(result,'actionMovie#');
      this.documentaryMovieResult = result.results;
    });
  } // scienceFiction
  scienceFictionMovie() {
    this.service.FetchScienceFictionMovies().subscribe((result) => {
      // console.log(result,'actionMovie#');
      this.scienceFictionMovieResult = result.results;
    });
  } // thriller
  thrillerMovie() {
    this.service.FetchThrillerMovies().subscribe((result) => {
      // console.log(result,'actionMovie#');
      this.thrillerMovieResult = result.results;
    });
  }
}
