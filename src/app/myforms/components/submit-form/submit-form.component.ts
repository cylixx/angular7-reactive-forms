import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  // chapters: any = [
  //   {
  //     name: "Chapter 1",
  //     value: "chapter1",
  //     selected: true
  //   },
  //   {
  //     name: "Chapter 2",
  //     value: "chapter2",
  //     selected: false
  //   },
  //   {
  //     name: "Chapter 3",
  //     value: "chapter3",
  //     selected: true
  //   },
  //   {
  //     name: "Chapter 4",
  //     value: "chapter4"
  //   },
  //   {
  //     name: "Chapter 5",
  //     value: "chapter5"
  //   }
  // ];

  // groupForm = this.fb.group({
  //   // hobbies: this.fb.array( [ ], Validators.required )
  //   groupChapters: this.buildChapters()
  // });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  // private buildChapters() {
  //   const chapters = this.chapters.map(chapter => {
  //     return this.fb.control(chapter.selected)
  //   });
  //   return this.fb.array(chapters);
  // }

  // markAll() {
  //   this.groupForm.controls['groupChapters'].setValue(
  //       this.groupForm.controls['groupChapters'].value.map(value => true)
  //   );
  // }

}
