import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleModule } from 'src/app/@widgets/title/title.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TitleModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
