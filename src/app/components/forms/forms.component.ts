import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, 
Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  myForm!: FormGroup 

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}