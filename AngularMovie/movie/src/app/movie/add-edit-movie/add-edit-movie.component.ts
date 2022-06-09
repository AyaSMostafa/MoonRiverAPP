import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnInit {
  progress: number | any;
  message: string | any;

  
  constructor(private service: SharedService, private http: HttpClient) { }
  @Input() mov: any;
  MovieId: string | undefined;
  MovieName: string | undefined;
  Category: string | undefined;
  MovieYear: string | undefined;
  mov_lang: string | undefined;
  PhotoFileName: string | undefined;
  PhotoFilePath:string| any;

  CategoryList:any=[];
  MovieList:any=[];

  ngOnInit(): void {
    this.loadCategoryList();
    this.refreshMovList();

  }
  

  loadCategoryList(){
    this.service.GetAllCategoriesNames().subscribe((data:any)=>{
      this.CategoryList=data;

      this.MovieId=this.mov.MovieId;
      this.MovieName=this.mov.MovieName;
      this.Category=this.mov.Category;
      this.MovieYear=this.mov.MovieYear;
      this.mov_lang=this.mov.mov_lang;
      this.PhotoFileName=this.mov.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoURL+this.PhotoFileName;

    });
  }



  addMovie() {
    var val = {
      MovieId: this.MovieId,
      MovieName: this.MovieName,
      Category:this.Category,
      MovieYear:this.MovieYear,
      mov_lang:this.mov_lang,
      PhotoFileName:this.PhotoFileName};

    this.service.addMovie(val).subscribe(res => {
      alert(res.toString());
      this.loadCategoryList();
      this.refreshMovList();  
    });
    alert("added successfully!");
    this.loadCategoryList();

  }

  UpdateMovie() {
    var val = {
      MovieId: this.MovieId,
      MovieName: this.MovieName,
      Category:this.Category,
      MovieYear:this.MovieYear,
      mov_lang:this.mov_lang,
      PhotoFileName:this.PhotoFileName};

    this.service.updateMovie(val).subscribe(res => {
     
      alert(res.toString());
      this.refreshMovList();  
    })
  }

  uploadPhoto(event:any){
    var file = event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoURL+this.PhotoFileName;
    })

  }
  refreshMovList(){
    this.service.getMovieList().subscribe(data=>{
      this.MovieList=data;

    });
  }



  //another upload img
  uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('http://localhost:5141/api/Movie/SaveFile', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event:any) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

}