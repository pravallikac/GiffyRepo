import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
  // replaces previous Http service
import { FormsModule } from '@angular/forms';
//import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {SelectGiphyService} from './select-giphy.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giphy App!';
  //link = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC=';
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  discription='';
    http: Http;
    giphies:any = [];

    constructor(http: Http, private selectGiphy:SelectGiphyService) {
      this.http = http;
      
  }
  

  ngOnInit() {
    // this.http.request(this.link)
    //     .subscribe((res: Response) => {
    //           this.giphies = res.json().data;
    //           console.log(this.giphies);
    //     });
  }

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.link + searchTerm.value;

    this.http.request(apiLink)
        .subscribe((res: Response) => {
          this.giphies = res.json().data;
              console.log(res.json());
        });
}
    
display(type,slug):void{
 //this.discription=type+slug;

 alert("The Giffy type is "+type+" "+slug);
}

// performSearch(searchTerm: HTMLInputElement): void {
//       var searchValue=searchTerm.value;
//       this.selectGiphy.getData(searchValue).subscribe(res=>{
//         this.giphies = res
//         console.log(res);
//       })
     
//   }

}
