import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Category } from 'src/app/model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: CoreModule
})
export class CategoriesService {

  private readonly apiUri = environment.marketApiBaseUri;

  constructor(
    private readonly http: HttpClient
  ) {
  }

  loadCategories(): Promise<Category[]> {
    return this.http.get(`${this.apiUri}products/categories`)
      .toPromise()
      .then(result => result as Category[]);
  }

}
