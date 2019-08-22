import { Injectable } from '@angular/core';
import { Observable, generate } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Games } from '../game';
@Injectable()
export class freeApiService {
  getgameDetails(arg0: string) {
    throw new Error("Method not implemented.");
  }
    constructor(private httpclient: HttpClient) {

    }

    getatmosphere(): Observable<any> {
        return this.httpclient.get("http://localhost:4200/assets/atmosphere.json");
    }

    getgameplay(): Observable<any> {
      return this.httpclient.get("http://localhost:4200/assets/gameplay.json");
    }

    getgenre(): Observable<any> {
      return this.httpclient.get("http://localhost:4200/assets/genre.json");
    }

    getplayers(): Observable<any> {
      return this.httpclient.get("http://localhost:4200/assets/players.json");
    }

    getplatform(): Observable<any> {
      return this.httpclient.get("http://localhost:4200/assets/platform.json");
    }

    // getgamesByAtmosphere(atmosphere:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphere",{"atmosphere":atmosphere},ParseHeaders);
    // }

    
    // getgamesByGameplay(gameplay:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByGameplay",{"gameplay":gameplay},ParseHeaders);
    // }

    // getgamesByGenre(genre:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByGenre",{"genre":genre},ParseHeaders);
    // }

    // getgamesByPlayers(players:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByPlayers",{"players":players},ParseHeaders);
    // }

    // getgamesByPlatform(platform:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByPlatform",{"platform":platform},ParseHeaders);
    // }


    // getAllgames(): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.get("http://localhost:8080/getAllgames",ParseHeaders);
    // }


    // getgameBullpen(game:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgameBullpen",{"game":game},ParseHeaders);
    // }

    // getgamesByAtmosphereGameplay(atmosphere:string,gameplay:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGameplay",{"atmosphere":atmosphere,"gameplay":gameplay},ParseHeaders);
    // }

    // getgamesByAtmosphereGenre(atmosphere:string,genre:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGenre",{"atmosphere":atmosphere,"genre":genre},ParseHeaders);
    // }

    // getgamesByAtmospherePlayers(atmosphere:string,players:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmospherePlayers",{"atmosphere":atmosphere,"players":players},ParseHeaders);
    // }

    // getgamesByAtmospherePlatform(atmosphere:string,platform:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmospherePlatform",{"atmosphere":atmosphere,"platform":platform},ParseHeaders);
    // }

    // getgamesByAtmosphereGameplayGenre(atmosphere:string,gameplay:string,genre:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGameplayGenre",{"atmosphere":atmosphere,"gameplay":gameplay,"genre":genre},ParseHeaders);
    // }

    // getgamesByAtmosphereGameplayPlayers(atmosphere:string,gameplay:string,players:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGameplayPlayers",{"atmosphere":atmosphere,"gameplay":gameplay,"players":players},ParseHeaders);
    // }

    // getgamesByAtmosphereGameplayPlatform(atmosphere:string,gameplay:string,platform:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGameplayPlatform",{"atmosphere":atmosphere,"gameplay":gameplay,"platform":platform},ParseHeaders);
    // }

    // getgamesByGameplayGenrePlayers(gameplay:string,genre:string,players:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByGameplayGenrePlayers",{"gameplay":gameplay,"genre":genre,"players":players},ParseHeaders);
    // }

    // getgamesByGameplayGenrePlatform(gameplay:string,genre:string,platform:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByGameplayGenrePlatform",{"gameplay":gameplay,"genre":genre,"platform":platform},ParseHeaders);
    // }

    // getgamesByGenrePlayersPlatform(genre:string,players:string,platform:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByGenrePlayersPlatform",{"genre":genre,"players":players,"platform":platform},ParseHeaders);
    // }

    // getgamesByAtmosphereGameplayGenrePlayers(atmosphere:string,gameplay:string,genre:string,players:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGameplayGenrePlayers",{"atmosphere":atmosphere,"genre":genre,"players":players},ParseHeaders);
    // }

    // getgamesByAtmosphereGameplayGenrePlatform(atmosphere:string,gameplay:string,genre:string,platform:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGameplayGenrePlatform",{"atmosphere":atmosphere,"gameplay":gameplay,"genre":genre,"platform":platform},ParseHeaders);
    // }

    // getgamesByAtmosphereGameplayGenrePlayersPlatform(atmosphere:string,gameplay:string,players:string,platform:string,genre:string): Observable<any> {
    //     const ParseHeaders = {
    //         headers: new HttpHeaders({
    //          'Content-Type'  : 'application/json'
    //         })
    //        };
    //     return this.httpclient.post("http://localhost:8080/getgamesByAtmosphereGameplayGenrePlayersPlatform",{"atmosphere":atmosphere,"gameplay":gameplay,"genre":genre,"players":players,"platform":platform},ParseHeaders);
    // }
}