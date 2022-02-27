import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NutritionListComponent } from './nutrition-list.component';
import { DataTableDesktopComponent } from 'src/app/components/data-table/data-table-desktop/data-table-desktop.component';
import { DataTableMobileComponent } from 'src/app/components/data-table/data-table-mobile/data-table-mobile.component';
import { TotalNutritionComponent } from '../../components/total-nutrition/total-nutrition.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: NutritionListComponent }];

@NgModule({
  declarations: [
    NutritionListComponent,
    DataTableDesktopComponent,
    DataTableMobileComponent,
    TotalNutritionComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
})
export class NutritionListModule {}
