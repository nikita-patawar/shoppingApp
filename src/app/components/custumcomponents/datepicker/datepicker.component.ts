import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {

  columnDefs: ColDef[] = [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' }
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 }
	];

}
