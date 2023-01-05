
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


    form!: FormGroup;
    loading = false;
    submitted = false;
    // private usersService: UsersService | undefined


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    private usersService: UsersService

    ) { }


    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

       

    }



    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        // console.log(this.f['username'].value);
        // console.log(this.f['password'].value);

//         if(this.usersService){


if(this.usersService.UserAuthentication(this.f['username'].value,this.f['password'].value)){
                this.router.navigate(['/test']);
            }



    // this.usersService.UserAuthentication(this.f['username'].value,this.f['password'].value)




        // this.loading = true;
        // this.accountService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe({
        //         next: () => {
        //             // get return url from query parameters or default to home page
        //             const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //             this.router.navigateByUrl(returnUrl);
        //         },
        //         error: error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         }
        //     });
    }


}
