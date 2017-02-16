import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import * as _ from "lodash";

@Component({
  selector: 'app-angular2-datatable',
  templateUrl: './angular2-datatable.component.html',
  styleUrls: ['./angular2-datatable.component.css']
})
export class Angular2DatatableComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

  constructor(private http: Http) { }

  ngOnInit(): void {
        this.http.get("app/angular2-datatable/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }
 
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item:any){
      this.data = _.filter(this.data,(elem)=>elem!=item);
      console.log("Removed: ", this.data); 
  }

}
