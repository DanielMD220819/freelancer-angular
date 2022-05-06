import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [TitleComponent],
})
export class TitleModule { }
