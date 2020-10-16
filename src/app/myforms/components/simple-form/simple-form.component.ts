import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('cylixx'); //Use the setValue() method to set a new value for an individual control. 
  }

}
