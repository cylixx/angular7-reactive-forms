import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';  // to creating instances of a FormControl, FormGroup, or FormArray
import { Validators } from '@angular/forms'; // Form validation is used to ensure that user input is complete and correct. 
import { FormArray } from '@angular/forms';  // FormArray is an alternative to FormGroup for managing any number of unnamed controls. 

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  colours = [
    {name: 'White', id: '01'},
    {name: 'Black', id: '02'},
    {name: 'Red', id: '03'},
    {name: 'Blue', id: '04'},
    {name: 'Green', id: '05'},
  ];

  // genres = [
  //   {name: 'Action', abbrev: 'action'},
  //   {name: 'HORROR', abbrev: 'horror'},
  //   {name: 'Commedy', abbrev: 'commedy'},
  //   {name: 'Love', abbrev: 'love'},
  //   {name: 'Drama', abbrev: 'drama'},
  // ];

  myhobbies: any = [
    {
      name: "Sports",
      value: "sports"
    },
    {
      name: "Music",
      value: "music",
      selected: true
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

  profileForm = this.fb.group({  //creamos el FormGroup
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({  // a nested group
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    preferences: this.fb.group({  // a nested group
      mycolor: [ this.colours[3] ]
      // movieGenres: [ this.genres[1] ]
      //hobbies: this.createHobbies(this.myhobbies)
      // hobbies: [ this.myhobbies ]
    }),
    terms: [false, Validators.required],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });



  constructor(private fb: FormBuilder) { }  // Inject the FormBuilder service

  ngOnInit() {
    this.profileForm.valueChanges.subscribe(console.log)   //Observable - every time there is a change, it sends it to the log
   
  }

  updateProfile() {
    this.profileForm.patchValue({ //Use the patchValue() method to replace any properties defined in the object that have changed in the form model.
      firstName: 'cylixx',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  createHobbies(hobbiesInputs) {
    const arr = hobbiesInputs.map(hobby => {
      return this.fb.control(hobby.selected || false);
    });
    return this.fb.array(arr);
  }

}
