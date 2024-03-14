import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private primeConfig:PrimeNGConfig){}
  
  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }


  public sidebarItems = [
    {label: 'Pagina Principal', icon: 'label', url: './home'},
    {label: 'Mosca', icon: 'style', url: './mosca'},
    {label: 'Truco', icon: 'style', url: './truco'},
    {label: 'Chinchón', icon: 'style', url: './chinchon'},
  ]
}
