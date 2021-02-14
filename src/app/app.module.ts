import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules
import { ViewsModule } from './views/views.module';

// services
import { CanonicalService } from './services/canonical.service';
import { TitleAndMetaService } from './services/title-and-meta.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ViewsModule],
  providers: [CanonicalService, TitleAndMetaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
