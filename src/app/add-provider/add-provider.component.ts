import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  provider: any;
  constructor(private service: ProviderService, private router : Router) { }

  ngOnInit(): void {
  }


  createProvider(myform) {
    const provider = new FormData();
    provider.append('providerName',  myform.value.providerName);
    provider.append('providerEmail',  myform.value.providerEmail);
    provider.append('providerAdress', myform.value.providerAdress);
  

    // chambre.append('hotelId', sessionStorage.getItem("idHotel"));

    this.service.createProvider(myform).subscribe(
      response => {
      console.log(response);
      }
      );
      
      this.router.navigate(['listProvider']);


  }
 
   
}
