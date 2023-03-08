import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-system',
  templateUrl: './sales-system.component.html',
  styleUrls: ['./sales-system.component.css']
})
export class SalesSystemComponent implements OnInit{

  listSales: any[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _salesService: SalesService){
      this.form = this.fb.group({
        AdvisorId: ['', Validators.required],
        Date: ['', Validators.required],
        Description: ['', Validators.required],
        Price: ['', Validators.required],
        SaleStatusId: ['', Validators.required]
      })
    }

    ngOnInit(): void{
      this.getSales();
    }

    getSales() {
      this._salesService.getListSales().subscribe( data => {
        console.log(data);
        this.listSales = data;
      }, error => {
        console.log(error);
      })
    }
}
