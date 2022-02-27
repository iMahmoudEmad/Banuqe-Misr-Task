import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-data-table-desktop',
  templateUrl: './data-table-desktop.component.html',
  styleUrls: ['./data-table-desktop.component.scss'],
})
export class DataTableDesktopComponent {
  @Input() columns: any[] = [];
  @Input() mappedData: any[] = [];
}
