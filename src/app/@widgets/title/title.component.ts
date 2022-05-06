import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFaceKiss } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() dark = false;
  @Input() main = false;

  //Varoables para cambiar el color en los componentes
  color!: string;
  divider!: string;

  //Iconos de fontawesome
  faCoffee = faCoffee;
  fa1 = fa1;
  faFilm = faFilm;
  faFaceKiss = faFaceKiss;
  faStar = faStar;
  
  constructor() { }

  ngOnInit(): void {
    if(this.dark) {
      this.color = 'text-secondary';
      this.divider = '';
    } else {
      this.color = 'text-white';
      this.divider = 'divider-light';
    }
  }
}
