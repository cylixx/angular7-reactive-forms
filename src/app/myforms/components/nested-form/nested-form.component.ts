// falta componer, porque cuando elijo uno estoyn planchando los valores y 
// mas bien cuando envio el formulario debo vasarme en ese arreglo de valores 
// true y false para mapear y filtar el resultado final. 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myhobbies: any = [
    {
      name: "Sports",
      value: "sports",
      selected: true
    },
    {
      name: "Music",
      value: "music",
      selected: false
    },
    {
      name: "Movie",
      value: "movie",
      selected: true
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

  personForm = this.fb.group({
    // hobbies: this.fb.array( [ ], Validators.required )
    hobbies: this.createHobbies2(this.myhobbies) 
  });

  ngOnInit() {
    //this.createFormInputs();
  }

  onCheckChange(event: { target: { checked: any; value: any; }; }) {
    const formArray: FormArray = this.personForm.get('hobbies') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

  onSubmit() {
    console.warn(this.personForm.value);
  }

  createHobbies2(hobbiesInputs: any[]) {
    function isChecked(element: { selected: any; }, index: any, array: any) { 
      return (element.selected); 
    } 
    var arr = hobbiesInputs.filter(isChecked).map(hobby => {
      return this.fb.control(hobby.value); //FormControl
    });
    return this.fb.array(arr, Validators.required);  // FormArray, optional: Validators.required
  }
  
  selectAll(){
    this.personForm.controls.hobbies["controls"].map(control=>{
      control.setValue(true);
    });
  }

  //----------

  createFormInputs() {
    this.personForm = new FormGroup({
      hobbies: this.createHobbies(this.myhobbies)
    });
    // this.getSelectedHobbies();
  }

  createHobbies(hobbiesInputs: any[]) {
    const arr = hobbiesInputs.map((hobby: { selected: any; }) => {
      return new FormControl(hobby.selected || false);
    });
    return new FormArray(arr);
  }

  // getSelectedHobbies() {
  //   this.selectedHobbiesNames = _.map(
  //     this.personForm.controls.hobbies["controls"],
  //     (hobby, i) => { 
  //       return hobby.value && this.myhobbies[i].value;
  //     }
  //   );
  //   this.getSelectedHobbiesName();
  // }

  // getSelectedHobbiesName() {
  //   this.selectedHobbiesNames = _.filter(
  //     this.selectedHobbiesNames,
  //     function(hobby) {
  //       if (hobby !== false) {
  //         return hobby;
  //       }
  //     }
  //   );
  // }

}
