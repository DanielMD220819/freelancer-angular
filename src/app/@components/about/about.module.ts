import { TitleModule } from './../../@widgets/title/title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    FontAwesomeModule
  ],
  exports: [AboutComponent],
})
export class AboutModule {}
