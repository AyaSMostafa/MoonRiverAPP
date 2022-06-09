import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() cat: any;
  CategoryId: string | undefined;
  CategoryName: string | undefined;

  ngOnInit(): void {
    this.CategoryId = this.cat.CategoryId;
    this.CategoryName = this.cat.CategoryName;
  }



  addCategory() {
    var val = {
      CategoryId: this.CategoryId,
      CategoryName: this.CategoryName
    };
    this.service.addCategory(val).subscribe(res => {
      alert(res.toString());
    });
  }

  UpdateCategory() {
    var val = {
      CategoryId: this.CategoryId,
      CategoryName: this.CategoryName
    };
    this.service.updateCategory(val).subscribe(res => {
     
      alert(res.toString());
    })
  }

}
