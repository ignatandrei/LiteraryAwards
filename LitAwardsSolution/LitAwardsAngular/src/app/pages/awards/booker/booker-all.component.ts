import { Component, OnInit } from "@angular/core";
import { BookerService } from "../../../@core/data/booker.service";
import { AuthorsService } from "../../../@core/data/authors.service";

@Component({
  selector: "booker-all",
  templateUrl: "./booker-all.component.html",
  styleUrls: ["./booker-all.component.scss"]
})
export class BookerAllComponent implements OnInit {
  ngOnInit(): void {
    var self = this;
    this.service.CreateOrGetDb().then(() => {
      var data = self.service.getData();
      data.forEach(it => {
        self.visibleBooks.set(it.name, false);
        self.allBooks.set(it.name, null);
        //this.loadBooks(true,it.name);
      });
      var ids = this.authors.AllRead();

      this.source = data.map(function(a) {
        var uniqueIdAuthor = self.authors.FindAuthor(a.Author);
        a["read"] = ids.filter(it => it == uniqueIdAuthor).length === 1;
        a["authorId"] = uniqueIdAuthor;
        return a;
      });
    });
  }

  constructor(
    private service: BookerService,
    private authors: AuthorsService
  ) {}
  changeRead(val) {
    val.read = !val.read;
    this.authors.UpdateReadList(val["authorId"], val.read);
  }
  source: any[];
  allBooks = new Map<string, any[]>();
  visibleBooks = new Map<string, boolean>();

  public changeVisible(it: boolean, name: string) {
    this.loadBooks(true, name);
    this.visibleBooks[name] = !this.visibleBooks[name];
  }
  public loadBooks(it: boolean, name: string) {
    if (this.allBooks.has(name) && this.allBooks[name] != null) {
      return;
    }
    var books = this.service.callByName(name);
    this.allBooks[name] = books;
  }
}
