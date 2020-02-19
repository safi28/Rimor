import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../../article.service";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-travel",
  templateUrl: "./travel.component.html",
  styleUrls: ["./travel.component.css"]
})
export class TravelComponent implements OnInit {
  articles: any;
  constructor(private articleApi: ArticleService) {}

  get article() {
    return this.articleApi.articles$;
  }

  ngOnInit() {
    this.articleApi.loadArticle().subscribe(data => {
      this.articles = data;
    });
  }

  selectCauseHandler(cause: Article) {
    // this.selectCause.emit(cause);
    this.articleApi.selectCause(cause);
  }
}
