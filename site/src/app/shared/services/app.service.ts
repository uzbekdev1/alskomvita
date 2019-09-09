import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsEntity } from '../entities/news.entity';
import { environment } from '../../../environments/environment';
import { LeadershipEntity } from '../entities/leadership.entity';
import { ProductEntity } from '../entities/product.entity';
import { VacancyEntity } from '../entities/vacancy.entity';
import { LanguageEntity } from '../entities/language.entity';
import { PartnerEntity } from '../entities/partner.entity';

@Injectable()
export class AppService {

  private readonly baseUrl: string = environment.apiUrl + '/api/v1';
  private readonly langId: number;

  constructor(private http: HttpClient) {
    this.langId = +localStorage.getItem('langId') || 1;
  }

  getLeaderships(): Observable<LeadershipEntity[]> {
    return this.http.get<LeadershipEntity[]>(this.baseUrl + '/leaderships/' + this.langId);
  }

  getLeadership(id: number): Observable<LeadershipEntity> {
    return this.http.get<LeadershipEntity>(this.baseUrl + '/leaderships/' + id);
  }

  getLanguages(): Promise<LanguageEntity[]> {

    return this.http.get<LanguageEntity[]>(this.baseUrl + '/languages').toPromise();
  }

  getLanguage(lang: string): Promise<LanguageEntity> {

    return this.http.get<LanguageEntity>(this.baseUrl + '/languages/' + lang).toPromise();
  }

  getNews(): Observable<NewsEntity[]> {
    return this.http.get<NewsEntity[]>(this.baseUrl + '/news/' + this.langId);
  }

  getNew(id: number): Observable<NewsEntity> {
    return this.http.get<NewsEntity>(this.baseUrl + '/news/' + id);
  }

  getProducts(): Observable<ProductEntity[]> {
    return this.http.get<ProductEntity[]>(this.baseUrl + '/products/' + this.langId);
  }

  getProduct(id: number): Observable<ProductEntity> {
    return this.http.get<ProductEntity>(this.baseUrl + '/products/' + id);
  }

  getVacancies(): Observable<VacancyEntity[]> {
    return this.http.get<VacancyEntity[]>(this.baseUrl + '/vacancies/' + this.langId);
  }

  getVacancy(id: number): Observable<VacancyEntity[]> {
    return this.http.get<VacancyEntity[]>(this.baseUrl + '/vacancies/' + id);
  }

  getPartners(): Observable<PartnerEntity[]> {
    return this.http.get<PartnerEntity[]>(this.baseUrl + '/partners/' + this.langId);
  }

  getPartner(id: number): Observable<PartnerEntity> {
    return this.http.get<PartnerEntity>(this.baseUrl + '/partners/' + id);
  }

}
