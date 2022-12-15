import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('a test recipe','test description of something','https://th.bing.com/th/id/OIP.jQ04gATa0yfFNlwzNyJRBgHaLH?pid=ImgDet&rs=1')
    , new Recipe('a test recipe','test description of something','https://live.staticflickr.com/5822/31006629172_eb7f7e9eb7_b.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
