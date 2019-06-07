// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// News Api
import { NewsApiService } from '../../core';

// Components
import { ComponentsModule } from '../../components';

// Routes
import { NewsRoutingModule } from './news-routing.module';

// Views
import * as Views from './views';


@NgModule({
  declarations: [
    Views.NewsListView
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ComponentsModule
  ],
  providers: [NewsApiService],
  bootstrap: []
})
export class NewsModule { }
