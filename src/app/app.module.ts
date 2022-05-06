import { AboutModule } from './@components/about/about.module';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { PortfolioModule } from './@components/portfolio/portfolio.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    PortfolioModule,
    CopyrightModule,
    ContactModule,
    AboutModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
