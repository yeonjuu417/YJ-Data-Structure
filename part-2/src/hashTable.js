const LimitedArray = require('./helpers/limitedArray');
const hashFunction = require('./helpers/hashFunction');
const { size } = require('underscore');
// 위 문법은 helpers 폴더에 있는 limitedArray와 hashFunction을 불러오는 문법입니다.
// 위와 같이 require를 사용해서 다른 파일로부터 함수 등을 불러오는 작업은 이후에 따로 설명합니다.

class HashTable {
  constructor() {
    this._size = 0;
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  insert(key, value) {
    const index = hashFunction(key, this._limit);
    let bucket = {}
    if(this._storage.get(index) === undefined){
      bucket[key] = value;
      this._storage.set(index,bucket);
    }
    bucket = this._storage.get(index);
    bucket[key] = value;
    this._storage.set(index,bucket);

    this._size++;

    const size = (this._size / this._limit) * 100
    if(size > 75){
      this._resize(this._limit * 2);
    }
  }

  retrieve(key) {// 키 넣으면 값 반환 
    const index = hashFunction(key, this._limit);
    if(this._storage.get(index) === undefined || this._storage.get(index)[key] === undefined){
      return undefined;
    }
    return this._storage.get(index)[key];
  }

  remove(key) {
    const index = hashFunction(key, this._limit);
    if(this._storage.get(index) === undefined || this._storage.get(index)[key] === undefined){
      return undefined;
    }
    const del = this._storage.get(index)[key];
    delete this._storage.get(index)[key];
    this._size --;

    const size = (this._size / this._limit) * 100
    if(size < 25){
      this._resize(this._limit / 2);
    }
    return del;
  }

  _resize(newLimit) {
    let curStorage = this._storage;
    this._limit = newLimit;
    this._size = 0
    this._storage = LimitedArray(this._limit);

    curStorage.each(bucket =>{
      for(let key in bucket){
        this.insert(key,bucket[key]);
      }
    })
  }
}

module.exports = HashTable;
