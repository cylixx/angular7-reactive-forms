// falta componer, porque cuando elijo uno estoyn planchando los valores y 
// mas bien cuando envio el formulario debo vasarme en ese arreglo de valores 
// true y false para mapear y filtar el resultado final. 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { of } from 'rxjs';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  personForm: FormGroup;
  myhobbies = [];

  

  getControls() {
    return (this.personForm.get('hobbies') as FormArray).controls;
  }

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.personForm = this.fb.group({
      // hobbies: this.fb.array( [], Validators.required )
      hobbies: new FormArray([], Validators.required )
      //hobbies: this.createHobbies2(this.myhobbies) 
    });

    of(this.getHobbies()).subscribe(result => {
      this.myhobbies = result;
      this.addCheckboxes();
    });

    // synchronous orders
    // this.myhobbies = this.getHobbies();
    // this.addCheckboxes();
  }

  private addCheckboxes() {
    // this.myhobbies.forEach(() => this.personForm.get('hobbies')['controls'].push(new FormControl(false)));
    this.myhobbies.forEach(() => this.getControls().push(new FormControl(false)));
  }

  getHobbies() {
    return [
      {
        name: "Sports",
        value: "sports"
        //selected: true
      },
      {
        name: "Music",
        value: "music"
        //selected: false
      },
      {
        name: "Movie",
        value: "movie"
        //selected: true
      },
      {
        name: "Reading",
        value: "reading"
      },
      {
        name: "Writing",
        value: "writing"
      }
    ];
  }

  onSubmit() {
    const selectedOrderIds = this.personForm.value.hobbies
      .map((checked, i) => checked ? this.myhobbies[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  } 
  
  selectAll(){
    this.personForm.controls.hobbies["controls"].map(control=>{
      control.setValue(true);
    });
  }
  
}
