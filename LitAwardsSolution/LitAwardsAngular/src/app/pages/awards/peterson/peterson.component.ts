import { Component, OnInit } from "@angular/core";
import { BGService } from "../../../@core/data/bg.service";
import { AuthorsService } from "../../../@core/data/authors.service";
import { IAService } from "../../../@core/data/ia.service";
import { PetersonData } from "../../../@core/data/peterson.data";
import { PetersonService } from "../../../@core/data/peterson.service";

@Component({
  selector: "peterson.",
  templateUrl: "./peterson.component.html",
  styleUrls: ["./peterson.component.scss"]
})
export class petersonComponent implements OnInit {
  source: any[];
  constructor(private data: PetersonService, private authors: AuthorsService) {}
  numberAuthorsRead=0;
  ngOnInit() {
    var self = this;
    var data = this.data.getData();
    var ids = this.authors.AllRead();

    this.source = data.map(function(a) {
      
      var uniqueIdAuthor = self.authors.FindAuthor(a.Author);
      const read=ids.filter(it => it == uniqueIdAuthor).length === 1;
      if(read)
        self.numberAuthorsRead++;
        
      a["read"] = read;
      a["authorId"] = uniqueIdAuthor;
      return a;
    });
  }

  changeRead(val) {
    val.read = !val.read;
    if(val.read)
      this.numberAuthorsRead++;
    else
      this.numberAuthorsRead--;
    this.authors.UpdateReadList(val["authorId"], val.read);
  }
}
