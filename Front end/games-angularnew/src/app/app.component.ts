import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Games } from './game';

@Pipe({
  name: 'truncate'
 })

 export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
      return value.split("#").pop();
     }
  }

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })  

export class AppComponent {
  games: any;
  gameDetailsArr: any;
  constructor(private _freeApiServcie: freeApiService) {
  }

  atmosphere: any;
  genre: any;
  gameplay : any;
  players:any;
  platform:any;
  selectedgame:any;

  ngOnInit() {

    this.getatmosphere();
    this.getgameplay();
    this.getgenre();
    this.getplayers();
    this.getplatform();
  }

  getatmosphere() {
    this._freeApiServcie.getatmosphere()
      .subscribe
      (
        data => {
          console.log(data);
          this.atmosphere = data;
        }
      )
  }

  getgameplay() {
    this._freeApiServcie.getgameplay()
      .subscribe
      (
        data => {
          console.log(data);
          this.gameplay = data;
        }
      )
  }

  getgenre() {
    this._freeApiServcie.getgenre()
      .subscribe
      (
        data => {
          console.log(data);
          this.genre = data;
        }
      )
  }

  getplayers() {
    this._freeApiServcie.getplayers()
      .subscribe
      (
        data => {
          console.log(data);
          this.players = data;
        }
      )
  }

  getplatform() {
    this._freeApiServcie.getplatform()
      .subscribe
      (
        data => {
          console.log(data);
          this.platform = data;
        }
      )
  }

  // gameDetails(game: any) {
  //   this.selectedgame = game;
  //   this._freeApiServcie.getgameDetails("<" + this.selectedgame.x.value + ">")
  //     .subscribe
  //     (
  //     data => {
  //       this.gameDetails = data.results.bindings[0];
  //       console.log(this.gameDetails);
  //       this.gameDetailsArr = data.results.bindings;
  //     }
  //     )

  // }


  // viewGames() {

  //   if (this.atmosphere == "Any" && this.gameplay == "Any" &&  this.genre == "Any" && this.players == "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getAllgames()
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         //////console.log(this.games);
  //       }
  //       )
  //   }
  //   else if (this.atmosphere == "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByAtmosphere(this.atmosphere)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }
  //   else if (this.atmosphere != "Any" && this.gameplay == "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByGameplay(this.gameplay)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre == "Any" && this.players != "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByGenre(this.genre)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players == "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByPlayers(this.players)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByPlatform(this.platform)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay == "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGameplay(this.atmosphere , this.gameplay)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre == "Any" && this.players == "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGenre(this.atmosphere , this.genre)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay == "Any" &&  this.genre == "Any" && this.players != "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByAtmospherePlayers(this.atmosphere , this.players)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay == "Any" &&  this.genre == "Any" && this.players == "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByAtmospherePlatform(this.atmosphere , this.platform)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players == "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGameplayGenre(this.atmosphere , this.gameplay , this.genre)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre == "Any" && this.players != "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGameplayPlayers(this.atmosphere , this.gameplay , this.players)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre == "Any" && this.players == "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGameplayPlatform(this.atmosphere , this.gameplay , this.platform)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere == "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByGameplayGenrePlayers(this.gameplay , this.genre , this.players)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere == "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players == "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByGameplayGenrePlatform(this.gameplay , this.genre , this.platform)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere == "Any" && this.gameplay == "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByGenrePlayersPlatform(this.genre , this.players , this.platform)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform == "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGameplayGenrePlayers(this.atmosphere , this.gameplay , this.genre , this.players)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players == "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGameplayGenrePlatform(this.atmosphere , this.gameplay , this.genre , this.platform)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  //   else if (this.atmosphere != "Any" && this.gameplay != "Any" &&  this.genre != "Any" && this.players != "Any" && this.platform != "Any") {
  //     this._freeApiServcie.getgamesByAtmosphereGameplayGenrePlayersPlatform(this.atmosphere , this.gameplay , this.genre , this.players, this.platform)
  //       .subscribe
  //       (
  //       data => {
  //         this.games = data.results.bindings;
  //         ////console.log(this.games);
  //       }
  //       )
  //   }

  // }
}