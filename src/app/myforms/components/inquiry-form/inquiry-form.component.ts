// esta opcion resulta mejor de implementar checkboxes
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { InquiryStoreService } from 'src/app/service/inquiry-store.service';
import { InquiryService } from 'src/app/service/inquiry.service';
import { SummonModel } from './summon-model';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent implements OnInit {

  receivedSummon: SummonModel;
  selectedSummon: string;
  form: FormGroup;
  isShowResponse = false;
  isHasSummon = false;
  idNumber = 1542;
  selectAllCheckbox = false;

  get formReceivedSummons() {
    return this.form.get('receivedSummons') as FormArray;
  }

  formReceivedSummonsItems(i: number) {
    return (this.formReceivedSummons.controls[i].get('items')) as FormArray;
  }

  constructor(
    private inquiryService: InquiryService,
    private inquiryStore: InquiryStoreService, 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      header: [''],
      receivedSummons: this.formBuilder.array([])
    });
    this.getReceivedSummons();
    this.invokeInquiryService();
  }

  getReceivedSummons() {
    this.inquiryStore.summons$.subscribe(result => {
      this.receivedSummon = result;
      this.addCheckboxes();
      this.isShowResponse = true;
    });
  }

  addCheckboxes() {
    this.formReceivedSummons.setValue([]);
    this.form.get('header').setValue(this.receivedSummon.header)
    this.receivedSummon.data.items.map(x => {
      this.formReceivedSummons.push(
        this.formBuilder.group({
          name: x.itemNo,
          isChecked: false
        }))
    });
  }

  // selectAll() {
  //   this.formReceivedSummons.controls.map(value => value.get('isChecked').setValue(true));
  // }
  selectAll(): void {
    this.selectAllCheckbox = !this.selectAllCheckbox;
  
    if (this.selectAllCheckbox) {
        this.formReceivedSummons.controls.map(value => value.get('isChecked').setValue(true));
      } else {
        this.formReceivedSummons.controls.map(value => value.get('isChecked').setValue(false));
    }
  }

  submitSelectedCheckboxes() {
    this.selectedSummon = this.form.value.receivedSummons
    console.log(this.selectedSummon)
  }


  invokeInquiryService(): void {
    const data = {
      //idNumber: this.form.value.idNumber,
      idNumber: this.idNumber
    }
    this.inquiryService.getData(data).subscribe((res: any)=> {
      this.inquiryStore.setSummon(res);
      this.isHasSummon = true;
    })
  }


}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => {
        return control.value.isChecked;
      })
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
