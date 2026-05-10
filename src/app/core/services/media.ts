import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Supabase, MediaRecord } from './supabase';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Media {
  
  constructor(private supabase: Supabase) {}

  // Fallback to environment data until backend is fully wired
  getHeroData() {
    return {
      heroVideo: environment.media.heroVideo,
      heroImage: environment.media.heroImage
    };
  }

  getCategories(): Observable<string[]> {
    return of(environment.media.categories);
  }

  getGalleryMedia(): Observable<MediaRecord[]> {
    // In the future, this will call this.supabase.fetchAllMedia()
    const allMedia = [...environment.media.gallery, ...environment.media.reels] as MediaRecord[];
    return of(allMedia);
  }

  getFreshersPartyMedia(): Observable<any[]> {
    return of(environment.media.freshersParty);
  }

  getLeadershipData() {
    return environment.leadership;
  }
}
