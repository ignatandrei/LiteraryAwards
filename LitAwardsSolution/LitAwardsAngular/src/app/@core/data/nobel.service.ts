import { Injectable } from "@angular/core";
import { initChangeDetectorIfExisting } from "@angular/core/src/render3/instructions";
declare var SQL: any;

@Injectable()
export class NobelService {
  dbPers: any;
  numberNobelAuthors(): number {
    let val = 0;
    var stmt = this.dbPers.prepare("SELECT count(*) as Nr FROM table1");
    while (stmt.step()) {
      //
      val = stmt.getAsObject()["Nr"];
    }

    stmt.free();
    return val;
  }
  callByName(s: string): any[] {
    var data = [];

    var stmt = this.dbPers.prepare(
      "SELECT * FROM booksNobel where name='" + s + "'"
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
    var stmt = this.dbPers.prepare("SELECT * FROM table1");
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
      "nobel_v11",
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
