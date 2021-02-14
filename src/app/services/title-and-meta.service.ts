import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleAndMetaService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  dynamicTitleAndMeta() {
    // NOTE: router.events track Router's lifecycle
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        // 1. recursive find last activatedRoute
        (function getChild(aR: ActivatedRoute): ActivatedRoute {
          return aR.firstChild ? getChild(aR.firstChild) : aR;
        })(this.activatedRoute)
          // 2. then subscribe to change Title + Metas
          .data.subscribe((data) => {
            // Title
            this.title.setTitle(data.title);

            // Meta -> description
            data.description
              ? this.meta.updateTag({
                  name: 'description',
                  content: data.description,
                })
              : this.meta.removeTag("name='description'");

            // Meta -> robots
            data.robots
              ? this.meta.updateTag({
                  name: 'robots',
                  content: data.robots,
                })
              : this.meta.updateTag({
                  name: 'robots',
                  content: 'index, follow',
                });

            // Meta -> og:url
            data.ogUrl
              ? this.meta.updateTag({
                  property: 'og:url',
                  content: data.ogUrl,
                })
              : this.meta.updateTag({
                  property: 'og:url',
                  content: this.router.url,
                });

            // Meta -> og:title
            data.ogTitle
              ? this.meta.updateTag({
                  property: 'og:title',
                  content: data.ogTitle,
                })
              : this.meta.removeTag("property='og:title'");

            // Meta -> og:description
            data.ogDescription
              ? this.meta.updateTag({
                  property: 'og:description',
                  content: data.ogDescription,
                })
              : this.meta.removeTag("property='og:description'");

            // Meta -> og:image
            data.ogImage
              ? this.meta.updateTag({
                  property: 'og:image',
                  content: data.ogImage,
                })
              : this.meta.removeTag("property='og:image'");
          });
      });
  }
}
