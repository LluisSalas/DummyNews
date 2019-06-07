// Angular
import { Component, OnInit } from '@angular/core';

// API
import { NewsApiService, New } from '../../../../core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.view.html'
})
export class NewsListView implements OnInit {

  news: New[] = [];

  constructor(private newsApiService: NewsApiService) {
  }

  ngOnInit() {
    this.getNews();
  }

  private getNews() {
    this.newsApiService.getNews().subscribe((news: New[])=>{
      this.news = news;
    });
  }
}
