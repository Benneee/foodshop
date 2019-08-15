import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list('/categories', {
      // This is to tell Firebase to order the categories by the child property: name
      // See AngularFire Docs for more details on the various categories to work with..
      query: {
        orderByChild: 'name'
      }
    });
  }
}
