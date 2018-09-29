import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService, NbSearchService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { NobelService } from '../../@core/data/nobel.service';
import { BookerService } from '../../@core/data/booker.service';
import { BGService } from '../../@core/data/bg.service';
import { environment } from '../../../environments/environment';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy , OnInit{
  
  private alive = true;
  
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },
    ],
  };
  public searchTerm: string;
  searchAuthors:any[];
  nobelAuthors: number;
  bookerAuthors: number;
  BGAuthors: number;
  constructor(private themeService: NbThemeService, 
    private search:NbSearchService, 
    private nobel: NobelService, 
    private booker: BookerService,
    private bg: BGService
    ) {
    var self=this;
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
    this.search.onSearchSubmit().subscribe(it=>{
        
      self.searchTerm=it.term;
      self.searchAuthors = [];
      //window.alert(self.searchTerm.length);
      if(self.searchTerm.length > 0 ){
        var dataSearched=  booker.search(self.searchTerm);
        dataSearched.push(...nobel.search(self.searchTerm));
        dataSearched.push(...bg.search(self.searchTerm));
        self.searchAuthors = dataSearched.sort((a,b)=>{
          return  a.Author.localeCompare(b.Author);          
        });
      }
       });
       
      
  }
  ngOnInit(): void {
   var self=this;
    this.nobel.CreateOrGetDb();//.then(()=>self.nobelAuthors =nobel.numberNobelAuthors());
    this.booker.CreateOrGetDb();//.then(()=>self.bookerAuthors=booker.numberBookerAuthors());
    this.bg.CreateOrGetDb();
    window.setTimeout  (function(){
     self.nobelAuthors =self.nobel.numberNobelAuthors();
     self.bookerAuthors=self.booker.numberBookerAuthors();
     self.BGAuthors=self.bg.numberBGAuthors();
    },3000);
  }

  showSearch(){
    this.search.activateSearch(this.searchTerm);
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
