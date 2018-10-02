import { Component, OnInit } from "@angular/core";
import { NobelService } from "../../../@core/data/nobel.service";
import { AuthorsService } from "../../../@core/data/authors.service";

@Component({
  selector: "nobel-all",
  templateUrl: "./nobelAll.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ]
})
export class NobelTableComponent implements OnInit {
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
      //this.authors.test();
      this.source = data.map(function(a) {
        var uniqueIdAuthor = self.authors.FindAuthor(a.Laureate);
        const read= ids.filter(it => it == uniqueIdAuthor).length === 1;
        if(read)
        {
          self.numberAuthorsRead++;
        }
        a["read"] = read;
        a["authorId"] = uniqueIdAuthor;
        return a;
      });
    });
  }
  numberAuthorsRead =0;
  source: any[];
  allBooks = new Map<string, any[]>();
  visibleBooks = new Map<string, boolean>();
  constructor(private service: NobelService, private authors: AuthorsService) {}
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
  changeRead(val) {
    console.log("change read nobel");
    val.read = !val.read;
    if(val.read)
      this.numberAuthorsRead++;
    else
      this.numberAuthorsRead--;
    this.authors.UpdateReadList(val["authorId"], val.read);
  }
}
