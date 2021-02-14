import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanonicalService {
  domain = 'https://localhost';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  ngOnInit(): void {
    this.updateCanonicalUrl(this.router.url);
  }

  updateCanonicalUrl(urn: string) {
    let link = this.dom.querySelector("[rel='canonical']") as HTMLLinkElement;

    if (link == null) {
      <HTMLHeadElement>(
        this.dom
          .getElementsByTagName('head')[0]
          .appendChild(<HTMLLinkElement>this.dom.createElement('link'))
      );
    }

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', this.domain + urn);
  }
}
