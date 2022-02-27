import { Component, OnInit } from '@angular/core';
import { AnalyzeService } from 'src/app/analyze.service';

@Component({
  selector: 'app-nutrition-list',
  templateUrl: './nutrition-list.component.html',
  styleUrls: ['./nutrition-list.component.scss'],
})
export class NutritionListComponent implements OnInit {
  portfolioColumns = ['Qty', 'Unit', 'Food', 'Calories', 'Weight'];
  mappedData: any;
  totalNutritionMappedData: any;
  isShownTotalNutrition: boolean = false;
  analyzedData: any;

  constructor(private analyzeService: AnalyzeService) {}

  ngOnInit() {
    this.analyzeService.analyzedData.subscribe((res: any) => {
      if (res?.totalWeight) {
        this.analyzedData = res;
        this.mappingTableData();
        this.mappingTotalNutritionValues();
      }
    });
  }

  mappingTableData(data: any = this.analyzedData) {
    this.mappedData = data?.ingredients?.map((item: any) => {
      return {
        quantity: item?.parsed && item?.parsed[0]?.quantity,
        unit: item?.parsed && item?.parsed[0]?.measure,
        food: item?.parsed && item?.parsed[0]?.foodMatch,
        calories: item?.parsed && item?.parsed[0]?.nutrients?.ENERC_KCAL,
        weight: item?.parsed && item?.parsed[0]?.weight,
      };
    });
  }

  mappingTotalNutritionValues(data: any = this.analyzedData) {
    this.totalNutritionMappedData = {
      calories: data?.totalNutrients?.ENERC_KCAL?.quantity,
      fat: this.resultsMap('FAT'),
      cholesterol: this.resultsMap('CHOLE'),
      sodium: this.resultsMap('NA'),
      carbohydrate: this.resultsMap('CHOCDF'),
      fiber: this.resultsMap('FIBTG'),
      sugar: data?.totalNutrients?.SUGAR,
      protein: this.resultsMap('PROCNT'),
      vitamin: this.resultsMap('VITB6A'),
      calcium: this.resultsMap('CA'),
      iron: this.resultsMap('FE'),
      potassium: this.resultsMap('K'),
    };
  }

  resultsMap(key: string): object {
    return {
      value: this.analyzedData?.totalNutrients[key],
      percentage: this.analyzedData?.totalDaily[key],
    };
  }

  toggleShowTotalNutrition(): void {
    this.isShownTotalNutrition = !this.isShownTotalNutrition;
  }
}
