import { Component, ChangeDetectorRef  } from '@angular/core';

import { Donation } from '../donaciones/modells/Donation';

import { Router } from '@angular/router';

import { DonationService } from '../donaciones/services/donation.service';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule ,Validators } from '@angular/forms';
import { HTTP_OPTIONS } from 'header.config';
import { ToastrService } from 'ngx-toastr';

import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent {

  //registrar
  donaciones : Array<Donation>;
  formularioDonation: FormGroup;

  paymentHandler:any = null;
  mostrarConfirmacion = false;
  selectedAmount: number = 0;
  donationAmounts: number[] = [10, 20, 50, 100]; // Montos predefinidos
  customAmount: number | null = null;

  
  constructor(private fb:FormBuilder, private rService: DonationService,private cdr: ChangeDetectorRef, private router: Router) {
    this.donaciones = new Array<Donation>()

    this.formularioDonation = fb.group({
      id: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      numTar: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      cvv: new FormControl('',[Validators.required])
    })
        this.formularioDonation.get('id')?.disable();
    }

    //registrar
    registrarDonacion(){
      if(this.formularioDonation.valid){
        let donacione = new Donation()
        donacione.id = this.formularioDonation.get('id')?.value,
        donacione.email = this.formularioDonation.get('email')?.value,
        donacione.numTar = this.formularioDonation.get('numTar')?.value,
        donacione.date = this.formularioDonation.get('date')?.value,
        donacione.cvv = this.formularioDonation.get('cvv')?.value

        this.rService.registrarDonacion(donacione).subscribe(res =>{
          this.getDonation()
          this.formularioDonation.reset
        })

      }
    }

    // get registro
    getDonation(){
      this.rService.getDonation().subscribe(res=>{
        this.donaciones = res
      })

    }
    
  ngOnInit() {
    this.invokeStripe();
  }

  mostrarConfirmacionComponent(){
    this.mostrarConfirmacion = true;
    this.cdr.detectChanges();
  }

  makePayment(amount:any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OBpr1KPKrOekz3VDvYU08fkxYkhpmmpvTBifJwnwZwRqWAwkhT0LZRt6RMydMu4I0JxvS6Z78dlF5oS1wF5i4cn00IoE3hXAb',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        this.mostrarConfirmacionComponent();
        // Aquí se debe guardar la información en una API de la donación exitosa
        
      }
    });
   
    paymentHandler.open({
      name: 'Colitas Felices',
      description: 'Mejora una vida',
      amount: amount * 100,
      currency: 'pen'
    });
  }
   
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OBpr1KPKrOekz3VDvYU08fkxYkhpmmpvTBifJwnwZwRqWAwkhT0LZRt6RMydMu4I0JxvS6Z78dlF5oS1wF5i4cn00IoE3hXAb',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            //alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }
    
  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }

  donateCustomAmount() {
    if (this.customAmount !== null && this.customAmount > 0) {
      this.selectedAmount = this.customAmount;
      this.makePayment(this.selectedAmount);
    }
  }

  



}
