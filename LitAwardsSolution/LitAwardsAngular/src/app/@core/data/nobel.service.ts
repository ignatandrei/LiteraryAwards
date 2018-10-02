import { Injectable } from "@angular/core";
import { initChangeDetectorIfExisting } from "@angular/core/src/render3/instructions";
import { environment } from "../../../environments/environment";
declare var SQL: any;

@Injectable()
export class NobelService {
  dbPers: any;
  public version: string = environment.VERSION;
  numberNobelAuthors(): number {
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
    let sql="SELECT Laureate as Author, name as Name , 'Nobel' as Collection FROM tableAuthors";
    if(s != null && s.length>0 ){
       //sql injection for in memory database?
        sql +=" where Laureate like '%" + s + "%'";
    }
    var stmt = this.dbPers.prepare(sql); 
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
    var stmt = this.dbPers.prepare("SELECT * FROM tableAuthors order by Laureate");
    while (stmt.step()) {
      //
      var row = stmt.getAsObject();
      data.push(row);
    }

    stmt.free();

    return data;
    
  }
  
   async CreateOrGetDb() {
    var self = this;
    
    this.dbPers = new SQL.PersistentDatabase(
      "nobel_v"+this.version,
      async function(sender) {
        // Initial creation of database if not found

        self.createDatabase(sender).then(()=>{
            sender.save();
            
        });
      },
      function(e) {
        // Initialization of existing database failed
        alert("database failed" + e);
        
      }
    );
  }

  
  async createDatabase(db) {
    
    const bdata = await import("./nobel.data");

    try {
      let s = new bdata.NobelData();

      s.RunSqlNobel(db);
    } catch (e) {
      window.alert("error:" + JSON.stringify(e));
    }
  }
}
