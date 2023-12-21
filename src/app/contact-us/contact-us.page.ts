import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage{
  isSubmitted = false;
  isLoading = false;

  formData = {
    formName: '',
    formEmail: '',
    formMessage: ''
  };

  submitForm(form:any) {
    console.log("the form is ::" ,form)
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isSubmitted = true;
    }, 2000);
  }

}
