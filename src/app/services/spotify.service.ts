import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  qetQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({ Authorization: 'Bearer BQDOioTIx_JXedmhpGbOnyaH2TNOIh-1Z8qXb5EjjHI_ncTC7OCuYOzL70vOg3KkcZgS_1u78rtYymf5_LU' });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.qetQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.qetQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  };
}
