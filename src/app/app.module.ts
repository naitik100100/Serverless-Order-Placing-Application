import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { MaterialModule } from './material.module';
import { PartsComponent } from './parts/parts.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    NgbModule,
    RouterModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, JobsComponent, PartsComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
