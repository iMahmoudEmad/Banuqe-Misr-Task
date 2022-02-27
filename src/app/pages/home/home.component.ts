import { Component } from '@angular/core';
import { AnalyzeService } from 'src/app/analyze.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  textareaValue: string = '1 cup rice\n10 oz chickpeas\n1 beef';

  constructor(private analyzeService: AnalyzeService, private router: Router) {}

  analyzeData(): void {
    /**
     * TODO
     * Make a integration function with (edamam) API.
     * Pass the response result to the Behavior Subject in Analyze service.
     * Validate if the response have a value.
     *** If have a value make a navigate to (nutrition-list) route.
     */

    this.analyzeService
      .analyzeData(this.textareaValue.split('\n'))
      .subscribe((res: any) => {
        this.analyzeService.analyzedData.next(res);

        if (res?.totalWeight) this.router.navigate(['nutrition-list']);
      });
  }
}
