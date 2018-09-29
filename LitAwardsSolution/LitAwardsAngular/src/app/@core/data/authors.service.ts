import { Injectable } from "@angular/core";
import { BookerData } from "./booker.data";
import { environment } from "../../../environments/environment";
import { NobelService } from "./nobel.service";
import { BookerService } from "./booker.service";
import { BGService } from "./bg.service";

declare var SQL: any;

@Injectable()
export class AuthorsService {

  constructor(private nobel: NobelService,private booker: BookerService,private bg: BGService ) {
    
    
  }
    dbAuthors: any;
    public version: string = environment.VERSION;
    async CreateOrGetDb() {
        var self = this;
        
        this.dbAuthors = new SQL.PersistentDatabase(
          "authors_v"+environment.VERSION,
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
      test(db){
        
        let sql="SELECT * FROM tableAuthors ";
        
        var stmt = db.prepare(sql); 
        while (stmt.step()) {
          //
          var row = stmt.getAsObject();
          console.log(JSON.stringify(row));
          
        }        
        stmt.free();
      }
      private async createDatabase(db) {
        
        db.run("CREATE TABLE tableAuthors (id INTEGER PRIMARY KEY AUTOINCREMENT,Author, NobelId, BookerId, BGId );");
        var dataSearched=  this.booker.search(null);
        dataSearched = dataSearched.map(function(val) {
          return {
              Author: val.Author,
              NobelId: 1              
          };
      });
        //window.alert('before' + JSON.stringify(dataSearched));
        db.run("INSERT INTO tableAuthors(Author, NobelId) VALUES (?,?)", [['a',1],['b',1]]);
        this.test(db);
        //dataSearched.push(...this.nobel.search(null));

        //dataSearched.push(...this.bg.search(null));
        


      }
    
}