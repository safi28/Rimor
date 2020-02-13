import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['../../errors-message.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  tryLogin(value) {
    this.authenticationService.doLogin(value).then(res => {
      this.toastr.success('Successfully logged in!');
      this.router.navigate(['/'])
      
    }, err => {
      
      this.toastr.error(err.error,'Error')
      this.loading = false
    })

  }
}
