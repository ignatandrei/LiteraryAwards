import {Component, OnDestroy} from '@angular/core';
import { NbThemeService, NbSearchService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { NobelService } from '../../@core/data/nobel.service';
import { BookerService } from '../../@core/data/booker.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

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
  nobelAuthors: number;
  bookerAuthors: number;
  constructor(private themeService: NbThemeService, private search:NbSearchService, private nobel: NobelService, private booker: BookerService) {
    var self=this;
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
    this.search.onSearchSubmit().subscribe(it=>{
        
      self.searchTerm=it.term;
       });
       
       this.nobel.CreateOrGetDb();//.then(()=>self.nobelAuthors =nobel.numberNobelAuthors());
       this.booker.CreateOrGetDb();//.then(()=>self.bookerAuthors=booker.numberBookerAuthors());
       window.setTimeout  (function(){
        self.nobelAuthors =nobel.numberNobelAuthors();
        self.bookerAuthors=booker.numberBookerAuthors();
       },3000);
  }
  public searchTerm: string;
  ngOnDestroy() {
    this.alive = false;
  }
}
