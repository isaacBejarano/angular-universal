import { Component, OnInit } from '@angular/core';

import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // imgHome1 = './assets/img/home1@2x.jpg';
  // imgHome2 = './assets/img/home2.jpg';
  // imgHome3 = './assets/img/home3.png';

  constructor(private canonical: CanonicalService) {}

  ngOnInit(): void {
    this.canonical.updateCanonicalUrl('/');
  }
}
