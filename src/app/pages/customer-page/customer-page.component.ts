import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css'
})
export class CustomerPageComponent {
  public customer = {
    "id": undefined,
    "name": undefined,
    "city": undefined,
    "contact": undefined
  }

  constructor(private http: HttpClient) { }

  saveCustomer() {
    this.http.post("http://localhost:8080/customer", this.customer).subscribe(
      (res) => {
        Swal.fire({
          title: "Added Successfully!",
          text: "You clicked the button!",
          icon: "success",
          preConfirm: () => {
            window.location.reload()
          }
        });
      }
    )
  }
}
