import { Injectable } from "@angular/core";
import { BookerData } from "./booker.data";
import { environment } from "../../../environments/environment";
import { NobelService } from "./nobel.service";
import { BookerService } from "./booker.service";
import { BGService } from "./bg.service";
import { IAService } from "./ia.service";

declare var SQL: any;

@Injectable()
export class AuthorsService {

  constructor(private nobel: NobelService,private booker: BookerService,private bg: BGService, private iaf:IAService ) {
    
    
  }
    private dbAuthors: any;
    private dbReadingList:any;
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
      public  SelectAllAuthors() : any[]{
        var ret=[];
        let sql="SELECT * FROM tableAuthors ";
        
        var stmt = this.dbAuthors.prepare(sql); 
        while (stmt.step()) {
          //
          var row = stmt.getAsObject();
          console.log(JSON.stringify(row));
          ret.push(row);
          
        }        
        stmt.free();
        return ret;
      }
      public  UpdateReadList(idAuthor: number,read:boolean ):void{
        if(read){
        this.dbReadingList.run("INSERT INTO tableReadingList(idAuthor) VALUES (?)", [idAuthor]);        
        }
        else{
          this.dbReadingList.run("delete from tableReadingList where idAuthor = " + [idAuthor]);        
          
        }
        this.dbReadingList.save();
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
       async createDatabase(db) {
        const self=this;
        db.run("CREATE TABLE tableAuthors (id INTEGER PRIMARY KEY AUTOINCREMENT,Author, NobelId, BookerId, BGId , IAFId);");
        var dataSearched=  this.booker.search(null);
      //   dataSearched = dataSearched.map(function(val) {
      //     return {
      //         Author: val.Author,
      //         NobelId: 1              
      //     };
      // });
        //window.alert('before' + JSON.stringify(dataSearched));
        dataSearched.forEach(a=>{
          const existingId= self.FindAuthor(a.Author,db);
          if( existingId == null)
            db.run("INSERT INTO tableAuthors(Author, BookerId) VALUES (?,?)", [a.Author,-1]);
          else
            db.run("update tableAuthors set BookerId =-1 where id = "+ existingId );
        });
        
        dataSearched=  this.nobel.search(null);
        dataSearched.forEach(a=>{
          const existingId= self.FindAuthor(a.Author,db);
          if( existingId == null)
            db.run("INSERT INTO tableAuthors(Author, NobelId) VALUES (?,?)", [a.Author,-1]);
          else
            db.run("update tableAuthors set NobelId =-1 where id = "+ existingId );
          
          })
          ;
          
        dataSearched=  this.bg.search(null);
        dataSearched.forEach(a=>{
          const existingId= self.FindAuthor(a.Author,db);
          if( existingId == null)
            db.run("INSERT INTO tableAuthors(Author, BGId) VALUES (?,?)", [a.Author,-1]);
          else
            db.run("update tableAuthors set BGId =-1 where id = "+ existingId );
          });
        
          dataSearched=  this.iaf.search(null);
          dataSearched.forEach(a=>{
            const existingId= self.FindAuthor(a.Author,db);
            if( existingId == null)
              db.run("INSERT INTO tableAuthors(Author, IAFId) VALUES (?,?)", [a.Author,-1]);
            else
              db.run("update tableAuthors set IAFId =-1 where id = "+ existingId );
            });
          
        

      }
      public  FindAuthor(name:string, db:any = null):number{
        let id:number = null;
        let sql="SELECT * FROM tableAuthors where Author='"+ name.replace("'","''") +"'";
        if(db == null){
          db=this.dbAuthors;
        }
        var stmt = db.prepare(sql); 
        while (stmt.step()) {
          //
          var row = stmt.getAsObject();
          id=row.id;          
        }        
        stmt.free();
        return id;

      }
    
}