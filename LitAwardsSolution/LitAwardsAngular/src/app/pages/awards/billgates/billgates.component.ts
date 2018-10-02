import { Component, OnInit } from "@angular/core";
import { BGService } from "../../../@core/data/bg.service";
import { AuthorsService } from "../../../@core/data/authors.service";

@Component({
  selector: "billgates",
  templateUrl: "./billgates.component.html",
  styleUrls: ["./billgates.component.scss"]
})
export class BillgatesComponent implements OnInit {
  source: any[];
  constructor(private bg: BGService, private authors: AuthorsService) {}

  ngOnInit() {
    var self = this;
    var data = this.bg.getData();
    var ids = this.authors.AllRead();

    this.source = data.map(function(a) {
      var uniqueIdAuthor = self.authors.FindAuthor(a.Author);
      a["read"] = ids.filter(it => it == uniqueIdAuthor).length === 1;
      a["authorId"] = uniqueIdAuthor;
      return a;
    });
  }

  changeRead(val) {
    val.read = !val.read;
    this.authors.UpdateReadList(val["authorId"], val.read);
  }
}
