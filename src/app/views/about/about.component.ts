import { Component, OnInit } from '@angular/core';

import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // imgAbout = './assets/img/about.jpg';

  constructor(private canonical: CanonicalService) {}

  ngOnInit(): void {
    this.canonical.updateCanonicalUrl('/about');
  }
}
