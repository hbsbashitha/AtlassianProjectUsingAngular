
import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {


    login!: FormGroup;
    loading = false;
    submitted = false;
    error:any
    // private usersService: UsersService | undefined


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    private usersService: UsersService

    ) { }


    ngOnInit() {
        this.login = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });





    }



    // convenience getter for easy access to form fields
    get f() { return this.login.controls; }

     onSubmit() {

        console.log(this.f['username'].value)
        console.log(this.f['password'].value)
      this.submitted = true;


      this.loading = true;
        this.usersService.UserAuthentication(this.f['username'].value, this.f['password'].value)
            .pipe()
            .subscribe(
                (data) => {
                    // get return url from query parameters or default to home page
                    // console.log(data.token);
                    sessionStorage.setItem('token',data.token);
                    sessionStorage.setItem('isLogin',"true");
                    console.log(sessionStorage.getItem('token'));
                    // location.reload()
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);

                },
                error => {
                    this.loading = false;
                    error=error.message

                }
            );
    }


}
