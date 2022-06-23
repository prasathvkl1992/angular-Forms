import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;
  Submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]
    ],
      lname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.Submitted = true;

    if (this.form.invalid) {
      return;
    }

    alert("Submitted Values was" + JSON.stringify(this.form.value));
  }

  onReset(){
    this.Submitted = false;
    this.form.reset();
  }

}
