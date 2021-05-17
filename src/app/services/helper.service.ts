import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public activeLink: 'home' | 'about' | 'skills' = 'home';

  constructor() { }
}
