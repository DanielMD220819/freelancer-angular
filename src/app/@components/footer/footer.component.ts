import { Component, OnInit } from '@angular/core';
import { faBookReader, faPlus, faAppleWhole, faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faBookReader = faBookReader;
  faPlus = faPlus;
  faAppleWhole = faAppleWhole;
  faPersonWalkingDashedLineArrowRight = faPersonWalkingDashedLineArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
