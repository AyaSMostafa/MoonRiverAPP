import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }
  CategoryList:any=[];

  ModalTitle:string | undefined;
 
  ActiveAddEditCatComp:boolean=false;

  cat:any;

  CategoryIdFilter:string="";
  CategoryNameFilter:string="";
  CategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCatList();
  }
  addClick(){
    this.cat={
      CategoryId:0,
      CategoryName:""
    }
    this.ModalTitle = "Add Category";
    this.ActiveAddEditCatComp = true;

  }

  editClick(item:any){
    this.cat = item;
    this.ModalTitle = "Edit Department";
    this.ActiveAddEditCatComp = true;

  }
  deleteClick(item:any){
    if(confirm('Are you sure to delte this category?')){
      this.service.deleteCategory(item.CategoryId).subscribe(data=>{
        this.refreshCatList();
      })
    }
    this.refreshCatList();
  }

  closeClick(){
  this.ActiveAddEditCatComp=false;
  this.refreshCatList();
  }

  refreshCatList(){
    this.service.getCatList().subscribe(data=>{
      this.CategoryList=data;
      this.CategoryListWithoutFilter=data;

    });
  }

  FilterFn(){
    var CategoryIdFilter = this.CategoryIdFilter;
    var CategoryNameFilter = this.CategoryNameFilter;

    this.CategoryList = this.CategoryListWithoutFilter.filter(function (el:any){
        return el.CategoryId.toString().toLowerCase().includes(
          CategoryIdFilter.toString().trim().toLowerCase()
        )&&
        el.CategoryName.toString().toLowerCase().includes(
          CategoryNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.CategoryList = this.CategoryListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
