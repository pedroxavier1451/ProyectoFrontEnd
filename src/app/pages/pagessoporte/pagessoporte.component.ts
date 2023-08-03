import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagessoporte',
  templateUrl: './pagessoporte.component.html',
  styleUrls: ['./pagessoporte.component.scss']
})
export class PagessoporteComponent {
  constructor(private router:Router){

  }

  c(){
    this.router.navigate(['paginas/contactenos'])
  }

}
