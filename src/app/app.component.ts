import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'khabari';
  api='488ffcf910fb45768a262eb3b3c92e2c';
  url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey='+this.api;
  articles:any;
  

  constructor(private update:SwUpdate,private _http:HttpClient){
    update.available.subscribe(event=>{
      update.activateUpdate().then(()=> document.location.reload());
    })
    // window.addEventListener('beforeinstallprompt', event => {
    //   this.promptEvent = event;
    // });
  }

  ngOnInit(){
    this._http.get(this.url).subscribe(res=>{
      console.log(res)
      if(res['status'] == "ok"){
        this.articles = res['articles']
      }
    },err=>{
      console.log(err)
    })
  }

  
  getmore(){

  }
}
