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
    dbReadingList:any;
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
        this.dbReadingList = new SQL.PersistentDatabase(
          "read_authors_v"+environment.VERSION,
          async function(sender) {
            // Initial creation of database if not found
    
            self.createReadingList(sender).then(()=>{
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
      private  ReadList(idAuthor: number):void{
        this.dbReadingList.run("INSERT INTO tableReadingList(idAuthor) VALUES (?)", [idAuthor]);        
      }


      private  async createReadingList(db){
        db.run("CREATE TABLE tableReadingList (idAuthor);");

        
      }
      public AllRead():Array<number>{
        var ids=new Array<number>();
        let sql="SELECT idAuthor FROM tableReadingList ";
        
        let stmt = this.dbReadingList.prepare(sql); 
        while (stmt.step()) {
          //
          var row = stmt.getAsObject();
          ids.push(row.idAuthor)
          
        }        
        stmt.free();
        return ids;

      }
      private  HowMuchRead(){
        
        let ids=this.AllRead();
        let sql='select sum(coalesce(NobelId,0)), sum(coalesce(BookerId,0)) as BookerId, sum(coalesce(BGId,0)) as BGId from tableAuthors  ';
        //TODO: where id in ids
        let stmt = this.dbAuthors.prepare(sql); 
        while (stmt.step()) {
          //
          var row = stmt.getAsObject();
          stmt.free();
          return row;
          
        }        
        

        
      }
      private async createDatabase(db) {
        
        db.run("CREATE TABLE tableAuthors (id INTEGER PRIMARY KEY AUTOINCREMENT,Author, NobelId, BookerId, BGId );");
        var dataSearched=  this.booker.search(null);
      //   dataSearched = dataSearched.map(function(val) {
      //     return {
      //         Author: val.Author,
      //         NobelId: 1              
      //     };
      // });
        //window.alert('before' + JSON.stringify(dataSearched));
        dataSearched.forEach(a=>{
        db.run("INSERT INTO tableAuthors(Author, BookerId) VALUES (?,?)", [a.Author,-1]);
        });
        
        dataSearched=  this.nobel.search(null);
        dataSearched.forEach(a=>{
          db.run("INSERT INTO tableAuthors(Author, NobelId) VALUES (?,?)", [a.Author,-1]);
          });
          
        dataSearched=  this.bg.search(null);
        dataSearched.forEach(a=>{
          db.run("INSERT INTO tableAuthors(Author, BGId) VALUES (?,?)", [a.Author,-1]);
          });
        
        this.test(db);
        

      }
    
}