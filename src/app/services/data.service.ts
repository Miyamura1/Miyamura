import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() {
    this.items = [
      {title: "Kelantan",image:"assets/Kelantan.svg",link : "kelantan"},
      {title: "Terengganu",image:"assets/Jerung Merah.jpg",link : "terengganu"},
      {title: "Perak",image:"assets/Perak.svg.png",link : "perak"},
      {title: "Selangor",image:"assets/download.png",link : "selangor"},
      {title: "Kuala Lumpur",image:"assets/Kl.svg",link : "kualalumpur"},
    ];
   }

   filterItems(searchTerm) {
     return this.items.filter(item => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}