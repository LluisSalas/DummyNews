// Angular Core
import { Injectable } from '@angular/core';

// Angular Http
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

// Api config
import { API_CONFIG } from '../api.config';

// Models
import { New } from '../models/new.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<New[]> {
    const getNewstUrl: string = '/v2/everything';
    const url: string = `${API_CONFIG.baseUrl}${getNewstUrl}?language=es&q=web&sortBy=publishedAt&apiKey=${API_CONFIG.apiKey}`;

    return this.httpClient.get<any>(url).pipe(
      map((res: any) => res.articles || []),
      map(articles => articles.map(article => <New>article))
    );
  }
}