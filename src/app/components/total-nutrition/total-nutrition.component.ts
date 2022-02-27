import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-nutrition',
  templateUrl: './total-nutrition.component.html',
  styleUrls: ['./total-nutrition.component.scss'],
})
export class TotalNutritionComponent {
  @Input() totalNutritionData: any;
}
