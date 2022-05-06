import { Component, OnInit } from '@angular/core';
import { faContactCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faContactCard = faContactCard;

  constructor() { }

  ngOnInit(): void {
  }

}
