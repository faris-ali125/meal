import { CommonModule } from '@angular/common';
import { product } from './../models/product.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  allproducts : product[] = [

    {name: "Android", price: 100},
    {name: "Iphone", price: 300000}
    
  ]

}
