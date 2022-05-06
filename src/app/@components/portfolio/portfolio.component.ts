import { Component, OnInit } from '@angular/core';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  faPortrait = faPortrait;
  faPlus = faPlus;
  
  constructor() { }

  ngOnInit(): void {
  }

}
