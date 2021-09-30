import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lab5',
  templateUrl: './lab5.page.html',
  styleUrls: ['./lab5.page.scss'],
})
export class Lab5Page implements OnInit {
  public searchTerm: string ="";
  public items: any;



  constructor(private dataService: DataService, private route:Router) {}


  
  ngOnInit() {this.setFilteredItems();
  }
setFilteredItems(){
  this.items = this.dataService.filterItems(this.searchTerm);
  }

  onDirectPage(item){
    this.route.navigate(["/",item.link])

  }
  }


