import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  picture:string;

  constructor() {
    this.picture='https://femme-entrepreneur.fr/wp-content/uploads/2017/09/rester-motive.jpg'
   }

  ngOnInit(): void {
  }

}
