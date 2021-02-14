import { Component, OnInit } from '@angular/core';

import { TitleAndMetaService } from './services/title-and-meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private titleAndMetaService: TitleAndMetaService) {}

  ngOnInit(): void {
    this.titleAndMetaService.dynamicTitleAndMeta();
  }
}
