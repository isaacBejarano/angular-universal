import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// lib
// import { LazyLoadImageModule } from 'ng-lazyload-image';

// components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, PolicyComponent],
  imports: [
    CommonModule,
    // , LazyLoadImageModule
  ],
  exports: [HomeComponent, AboutComponent],
})
export class ViewsModule {}
