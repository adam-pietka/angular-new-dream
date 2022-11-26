import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('a test recipe','test description of something','https://thebrilliantkitchen.com/wp-content/uploads/2022/08/General-Tsos-chicken.jpg.webp')
    ,  new Recipe('a test recipe','test description of something','https://thebrilliantkitchen.com/wp-content/uploads/2022/08/General-Tsos-chicken.jpg.webp')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
