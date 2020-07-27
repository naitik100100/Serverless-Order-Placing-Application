import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoaderComponent, NavbarComponent, FooterComponent],
  exports: [LoaderComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
