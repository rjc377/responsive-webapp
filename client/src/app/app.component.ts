import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  dogBreeds: Array<any>;

  ngOnInit() {
    this.http.get('http://localhost:3000/dog/breeds').subscribe(
      data => {
        this.dogBreeds = data as Array<any>;
        for (let dogBreed of this.dogBreeds) {
          dogBreed.hidden = false;
          this.bindImageUrl(dogBreed)
        }
      },
      error => console.log(error));
  }

  bindImageUrl(dogBreed: any) {
    this.http.get('http://localhost:3000/dog/breed/' + dogBreed.name + '/imageUrl').subscribe(
      data => dogBreed.imageUrl = data as String,
      error => console.log(error));
  }

  filter(event: any) {
    console.log(event.target.value);
    for (let dogBreed of this.dogBreeds) {
      if (dogBreed.name.startsWith(event.target.value)) {
        dogBreed.hidden = false;
      }
      else {
        dogBreed.hidden = true;
      }
    }
  }
}
