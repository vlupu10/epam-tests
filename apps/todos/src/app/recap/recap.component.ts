import { Component, OnInit } from '@angular/core';
import { createMockString } from '../util/string.mock';
import * as HashMap from '../../../../../node_modules/hashmap/';
interface DataObj {
  id?: string;
  name: string;
}
@Component({
  selector: 'nx-todos-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {
  ngOnInit(): void {
    // 1. Proxy example:
    const nameObj: DataObj = {
      name: 'John'
    };
    const idNameObj: DataObj = {
      id: '123',
      name: 'Smith'
    }
    const handler = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get: function(obj: any, prop: string) {
        if(prop in obj) {
          return obj[prop];
        } else {
          return createMockString();
        }
      }
    }; 
    const p1 = new Proxy(nameObj, handler);
    const p2 = new Proxy(idNameObj, handler);
    console.log('p1.id: ', p1.id);
    console.log('p2.id: ', p2.id);

    // 2. Hashmap example:

    const arr = ['Nick', 'John', 'Steve', 'Dave'];
    // const hash = new HashMap(arr);
  }

}
