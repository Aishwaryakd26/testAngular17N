import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // http=inject(HttpClient);
  // data:any=[];

  ngOnInit(): void {
    
  }

  // fetchPost(){
  //   this.http.get('http://localhost:4200/movies')
  //   .subscribe((data:any)=>{
  //     console.log(data);
  //     this.data=data;
  //   })
  // }
  

  
  
}
