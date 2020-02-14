import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cause: ['', [Validators.required]],
      neededAmount: [null, [Validators.required, Validators.min(10)]],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createCauseHandler() {
    console.log(this.form.value);
  }
}