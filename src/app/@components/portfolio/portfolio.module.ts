import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleModule } from 'src/app/@widgets/title/title.module';
@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TitleModule
  ],
  exports: [PortfolioComponent],
})
export class PortfolioModule { }
