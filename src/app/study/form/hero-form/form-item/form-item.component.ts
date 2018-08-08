import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  @Input() form;
  @Input() value;
  @Input() name;

  constructor() { }

  ngOnInit() {
    console.log('form:', this.form)
  }

}
