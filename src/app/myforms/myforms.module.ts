import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayFormComponent } from './components/array-form/array-form.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { ValidFormComponent } from './components/valid-form/valid-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';

@NgModule({
  declarations: [ 
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent,
    SimpleFormComponent,
    InquiryFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent,
    SimpleFormComponent,
    InquiryFormComponent
  ]
})
export class MyFormsModule { }
