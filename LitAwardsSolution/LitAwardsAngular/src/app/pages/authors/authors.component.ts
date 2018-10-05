import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorsService } from '../../@core/data/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnDestroy ,OnInit {
  ngOnDestroy(): void {
    this.alive=false;
  }

  private alive = true;
  constructor(private auth: AuthorsService) { }
  authors=[];
  authorsRead=[];
  numberAuthorsRead=0;
  ngOnInit() {
    
    var data= this.auth.SelectAllAuthors();
    this.authorsRead  =this.auth.AllRead();
    this.numberAuthorsRead=this.authorsRead.length;
    data=data.map(it=>{
        it['read']=(this.authorsRead.includes(it.id));
        return it;
    });
    this.authors  = data.sort((a,b)=>{
      
      if(a['read'] == true && b['read'] == false )
        return -1;
      
      if(a['read'] == false && b['read'] == true)
          return 1;

      return a.Author.localeCompare(b.Author)
    });

  }
  changeRead(val) {
    val.read = !val.read;
    if(val.read)
      this.numberAuthorsRead++;
    else
      this.numberAuthorsRead--;
  
    this.auth.UpdateReadList(val["id"], val.read);
  }

}
