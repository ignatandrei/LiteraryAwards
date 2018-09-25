import { Injectable } from "@angular/core";
import { BookerData } from "./booker.data";

declare var SQL: any;

@Injectable()
export class BGService {
    dbBG: any;
    numberBGAuthors():number{
        let val = 0;
    var stmt = this.dbBG.prepare("SELECT count(*) as Nr FROM tableAuthors");
    while (stmt.step()) {
      //
      val = stmt.getAsObject()["Nr"];
    }

    stmt.free();
    return val;
    }
    getData(): any[] {
        var data = [];    
        var stmt = this.dbBG.prepare("SELECT * FROM tableAuthors order by Author");
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
        
        this.dbBG = new SQL.PersistentDatabase(
          "BG_v5",
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
    
      
      private async createDatabase(db) {
        
        const bdata = await import("./bg.data");
    
        try {
          let s = new bdata.BGData();
    
          s.RunSqlBG(db);
        } catch (e) {
          window.alert("error:" + JSON.stringify(e));
        }
      }
}