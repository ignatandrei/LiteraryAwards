import { Injectable } from "@angular/core";
import { BookerData } from "./booker.data";

declare var SQL: any;

@Injectable()
export class AuthorsService {
    dbAuthors: any;
    async CreateOrGetDb() {
        var self = this;
        
        this.dbAuthors = new SQL.PersistentDatabase(
          "BG_v7",
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
        
        db.run("CREATE TABLE tableAuthors (Author, NobelId, BookerId, BGId );");
        

      }
    
}