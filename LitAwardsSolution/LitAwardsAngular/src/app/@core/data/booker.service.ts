import { Injectable } from "@angular/core";
import { BookerData } from "./booker.data";
import { withModule } from "@angular/core/testing";
declare var SQL: any;

@Injectable()
export class BookerService {
  dbPers: any;
  numberBookerAuthors(): number {
    let val = 0;
    var stmt = this.dbPers.prepare("SELECT count(*) as Nr FROM tableAuthors");
    while (stmt.step()) {
      //
      val = stmt.getAsObject()["Nr"];
    }

    stmt.free();
    return val;
  }
  search(s:string):any[]{
    var data = [];

    var stmt = this.dbPers.prepare(
      "SELECT Author, AuthorWiki as Name , 'Booker' as Collection FROM tableAuthors where name like '%" + s + "%'"
    ); //sql injection for in memory database?
    while (stmt.step()) {
      //
      var row = stmt.getAsObject();
      data.push(row);
    }
    // window.alert(data.length);
    return data;
  }
  callByName(s: string): any[] {
    var data = [];

    var stmt = this.dbPers.prepare(
      "SELECT * FROM booksName where name='" + s + "'"
    ); //sql injection for in memory database?
    while (stmt.step()) {
      //
      var row = stmt.getAsObject();
      data.push(row);
    }

    stmt.free();

    return data;
    //return this[s]();
  }

  getData(): any[] {
    var data = [];

    var stmt = this.dbPers.prepare("SELECT * FROM tableAuthors order by Author");
    while (stmt.step()) {
      //
      var row = stmt.getAsObject();
      data.push(row);
    }

    stmt.free();

    return data;
  }
  async CreateOrGetDb(){
    var self=this;
    this.dbPers = new SQL.PersistentDatabase(
      "booker_v13",
      async  function( sender) {
        // Initial creation of database if not found
        //window.alert('create');
        await self.createDatabase(sender);
        sender.save();
      },
      function(e) {
        // Initialization of existing database failed
        alert('database failed'+e);
      }
    );
  }
  constructor() {
    //window.alert(JSON.stringify(SQL));
    
  }
  private async createDatabase(db) {
      
      
      const bdata=await import("./booker.data");      
      
      try{
        
      let s=new bdata.BookerData();
      
      s.RunSqlBooker(db);
      
      }
      catch(e){
        window.alert('error:'+JSON.stringify(e));
      }
      
    } 
}
