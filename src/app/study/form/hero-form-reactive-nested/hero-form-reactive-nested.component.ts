import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-hero-form-reactive-nested',
  templateUrl: './hero-form-reactive-nested.component.html',
  styleUrls: ['./hero-form-reactive-nested.component.css']
})
export class HeroFormReactiveNestedComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl('chen'),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // 相同效果，使用起来更方便
  profileForm = this.fb.group({
    firstName: [''],
    lastName: ['', Validators.minLength(4)],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  updateProfile() {
    // 如果是单个control的话可以使用setValue
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    })
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''))
  }
}
