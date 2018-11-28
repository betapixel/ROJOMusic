import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization':
      'Bearer BQBdh396YZL5tVF84_lbQy-lzhk9tCqq7VROXKOTZtqFYwsQrca8RwYZmxm0YbdRR_ionrgaMGe_XU2Ldng'
    });


    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',
    {headers}).pipe(map(data => data['albums'].items));

  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization':
      'Bearer BQBdh396YZL5tVF84_lbQy-lzhk9tCqq7VROXKOTZtqFYwsQrca8RwYZmxm0YbdRR_ionrgaMGe_XU2Ldng'
    });


    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {headers}).pipe(map(data => data['artists'].items));

  }
}
