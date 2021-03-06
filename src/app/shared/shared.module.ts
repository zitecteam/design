import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NaoDesignModule } from '@naologic/design';
import { TypescriptPrismPipe } from './pipes/typescript-prism.pipe';
import { HtmlPrismPipe } from './pipes/html-prism.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  providers: [
  ],
  declarations: [
    HtmlPrismPipe,
    TypescriptPrismPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NaoDesignModule,
    BsDatepickerModule
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HtmlPrismPipe,
    TypescriptPrismPipe,
    BsDatepickerModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
