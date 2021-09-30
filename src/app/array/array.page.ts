import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {

   title: string= "Check Box Task";

   public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: true },
    { val: 'Mushroom', isChecked: true },
    { val: 'Hotdog', isChecked: true },
    { val: 'Corndog', isChecked: true },
  ];
  constructor() { }

  ngOnInit() {
  }

}
