import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table-mobile',
  templateUrl: './data-table-mobile.component.html',
  styleUrls: ['./data-table-mobile.component.scss'],
})
export class DataTableMobileComponent {
  @Input() mappedData: any[] = [];
  headerIdx: number | string = NaN;
}
