import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayFormComponent } from './myforms/components/array-form/array-form.component';
import { BasicFormComponent } from './myforms/components/basic-form/basic-form.component';
import { InquiryFormComponent } from './myforms/components/inquiry-form/inquiry-form.component';
import { NestedFormComponent } from './myforms/components/nested-form/nested-form.component';
import { SimpleFormComponent } from './myforms/components/simple-form/simple-form.component';
import { SubmitFormComponent } from './myforms/components/submit-form/submit-form.component';
import { ValidFormComponent } from './myforms/components/valid-form/valid-form.component';

const routes: Routes = [
  { path: '', component: BasicFormComponent },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: 'array-form', component: ArrayFormComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'nested-form', component: NestedFormComponent },
  { path: 'submit-form', component: SubmitFormComponent },
  { path: 'valid-form', component: ValidFormComponent },
  { path: 'inquiry', component: InquiryFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
