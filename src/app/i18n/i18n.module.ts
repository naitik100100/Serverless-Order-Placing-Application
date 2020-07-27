import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { SelectLanguageComponent } from './select-language/select-language.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MaterialModule],
  declarations: [SelectLanguageComponent],
  exports: [SelectLanguageComponent],
})
export class I18nModule {}
