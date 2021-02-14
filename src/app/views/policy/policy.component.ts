import { Component, OnInit } from '@angular/core';

import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent implements OnInit {
  // imgPolicy = './assets/img/policy.jpg';

  constructor(private canonical: CanonicalService) {}

  ngOnInit(): void {
    this.canonical.updateCanonicalUrl('/policy');
  }
}
