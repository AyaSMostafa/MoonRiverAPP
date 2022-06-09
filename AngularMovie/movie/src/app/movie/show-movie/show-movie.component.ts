import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  constructor(private service:SharedService) { }
  MovieList:any=[];

  ModalTitle:string | undefined;
 
  ActivateAddEditMovComp:boolean=false;

  
  mov:any;

  ngOnInit(): void {
    this.refreshMovList();
  }
  addClick(){
    this.mov={
      MovieId:0,
      MovieName:"",
      Category:"",
      MovieYear:"",
      mov_lang:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle = "Add Movie";
    this.ActivateAddEditMovComp = true;

  }

  editClick(item:any){
    this.mov = item;
    this.ModalTitle = "Edit Movie";
    this.ActivateAddEditMovComp = true;

  }
  deleteClick(item:any){
    if(confirm('Are you sure to delte this Movie?')){
      this.service.deleteMovie(item.MovieId).subscribe(data=>{
        this.refreshMovList();  
      })
    }
  }

  closeClick(){
  this.ActivateAddEditMovComp=false;
  this.refreshMovList();
  }
  refreshMovList(){
    this.service.getMovieList().subscribe(data=>{
      this.MovieList=data;

    });
  }
}
