import { Component, OnInit } from '@angular/core';
import { createMockString } from '../util/string.mock';
import HashMap from 'hashmap';
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
  name = '';
  ngOnInit(): void {
    console.log('1. Proxy example:');
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
    const hash1 = new HashMap(arr);

    console.log('2. HashMaps examples:');
    console.log('ex. 1:');
    console.log('Array: ', arr);
    console.log('HashMap of arr: ', hash1);
    console.log('ex. 2:');
    const hash2 = new HashMap();
    hash2.set('e', 'Steve');
    hash2.set('e', 'Dan');
    hash2.set('f', 'Dan');
    hash2.set('g', 'Ron');
    hash2.set('h', 'Nick');
    hash2.set('i', 'Nick');
    hash2.set('a', 'Pete');
    hash2.set('b', 'Kyle');
    hash2.set('b', 'Kyle');
    hash2.set('c', 'Rowan');
    hash2.set('d', 'Amber');
    console.log('HashMap of Steve, Dan, Ron and Nick: ', hash2);

    // 3. Pure function
    console.log('3. Pure function');
    let customer = null;

    function getCustomer(id: string) {
      customer = fetchCustomer(id);
    }
    getCustomer('123');
    console.log('getCustomer impure =>', customer);

    function getCustomer1(id: string) {
      return fetchCustomer(id)
    }

    customer = getCustomer1('124');
    console.log('getCustomer pure =>', customer);

    function fetchCustomer(id:string) {
      if(id === '123') {
        return 'Steve';
      } else if (id === '124') {
        return 'Dave';
      } else {
        return id;
      }
    }

    // 4. Console log nullish coalescing operator
    console.log('4. Console log nullish coalescing operator');
    let fuu = null;
    fuu ??= 5;
    console.log('fuu null and fuu ??= 5', fuu ??= 5);
    console.log('fuu null and fuu ||= 5', fuu ||= 5);
    fuu = false;
    console.log('fuu = false and fuu || 5', fuu || 5);
    console.log('fuu = false and fuu ?? 5', fuu ?? 5);

    // 5. What is the output of the following code snippet?
    console.log('5. What is the output of the following code snippet?');
    console.log(`
    function greet(this: any) {
        console.log(this.name);
    }
    const sayHello1 = greet.bind({name: "Cocoa"});
    console.log('sayHello1()', sayHello1());

    const sayHello2 = sayHello1.bind({name: "Berlin"});
    console.log('sayHello2()', sayHello2());
  
    `);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function greet(this: any) {
        console.log(this.name);
    }
    const sayHello1 = greet.bind({name: "Cocoa"});
    console.log('sayHello1()', sayHello1());

    const sayHello2 = sayHello1.bind({name: "Berlin"});
    console.log('sayHello2()', sayHello2());

    // 6. Please create a cookie using js
    console.log('6. Please create a cookie using js');
    const cookieContent = {
      key: encodeURIComponent('test'),
      value: encodeURIComponent('cookieTest10')
    }
    document.cookie = `${cookieContent.key}=${cookieContent.value}; max-age: 10;`;
    function getCookieValue(key: string) {
      let cookieValue;

      if (document.cookie.split('; ').find(row => row.startsWith(key))) {
        cookieValue = document.cookie.split('; ').find(row => row.startsWith(key));
        if (cookieValue) {
          cookieValue = decodeURIComponent(cookieValue.split('=')[1]);
        }
      } else {
        cookieValue = 'Cookie value not found.';
      }
      return cookieValue;
    }
    console.log(document.cookie);
    console.log('test value: ', getCookieValue('test'));

    console.log('Improvement => use encodeURIComponent');

    // 7. Array of strings
    console.log(`
    7. Given the following [] as inputs, return the string with the largest length

        ['a', 'ab', 'abc'] => 'abc'
        ['a', ['a', 'ac', 'dfgh', ''], 'abc'] => 'abc'

    `);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function longestStr(arr: any) {
      let str = '';
      let len = 0;
      const flatArr = arr.flat(Infinity);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      flatArr.forEach((el: any) => {
        len = el.length;
        if (str.length < len) {
          str = el;
        }
      });
      return str;
    }
    const arr1 = ['a', 'ab', 'abc'];
    const arr2 = ['a', ['a', 'ac', 'dfgh', ''], 'abc'];
    console.log('Arr 1', longestStr(arr1));
    console.log('Arr 2', longestStr(arr2));

    // 7. Clock
    console.log('Clock');
    // const checkLength = (value: string): string => {
    //   return value.length === 1 ? value = '0' + value : value;
    // };
    // setInterval(() => {
    //     const date = new Date();
    //     const hours = checkLength(date.getHours().toString());
    //     const minutes = checkLength(date.getMinutes().toString());
    //     const seconds = checkLength(date.getSeconds().toString());
    //     this.time = hours + ':' + minutes + ':' + seconds;
    // }, 1000);


  }

}
