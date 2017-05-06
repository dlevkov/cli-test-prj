import { Router } from '@angular/router';
import { SocialModel } from '../social-model';
import { SocialService } from '../social.service';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css']
})
export class AddNewProfileComponent implements OnInit, OnChanges {
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _service: SocialService,
    private _router: Router) { }

  ngOnChanges(): void {
    this.registerForm.reset({
      fullName: ''
    });
  }

  public ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required]
    });
  }

  public onSubmit() {
    const user = this.registerForm.value;
    this._service.addUser(new SocialModel(user));
    this._router.navigate(['profiles']);
  }
  public revert() {
    console.log('revert');
    this.ngOnChanges();

  }
}
