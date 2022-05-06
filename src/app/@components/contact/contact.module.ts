import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleModule } from 'src/app/@widgets/title/title.module';
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TitleModule
  ],
  exports: [ContactComponent],
})
export class ContactModule { }
