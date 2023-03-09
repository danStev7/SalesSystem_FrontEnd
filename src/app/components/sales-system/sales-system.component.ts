import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { Listsales } from '../../models/readsales.interface';
import { Router } from '@angular/router'
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-sales-system',
  templateUrl: './sales-system.component.html',
  styleUrls: ['./sales-system.component.css']
})
export class SalesSystemComponent implements OnInit{

  sales:Listsales[] = [];

  constructor(private _salesService:SalesService, private router:Router, private toastr:ToastrService) {}

    ngOnInit(): void{
      this.getAllSales();
    }

    getAllSales() {
      this._salesService.getAllSales().subscribe(data => {
        console.log(data);
        this.sales = data;
      })
    }

    saveSale() {
      this._salesService.saveSale(this.sales).subscribe(data => {
        this.toastr.success('La venta fue registrada con exito!', 'Venta Registrada');
      })
    }

    deleteSale(id:number) {
      this._salesService.deleteSale(id).subscribe();
      this.toastr.error('La venta fue eliminada con exito', 'Venta eliminada');
      this.getAllSales();
    }
}
