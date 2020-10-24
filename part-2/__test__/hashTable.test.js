const HashTable = require('../src/hashTable');
const _ = require('underscore');

describe('hashTable', function() {
  let hashTable;
  let people = [
    ['Steven', 'Tyler'],
    ['George', 'Harrison'],
    ['Mr.', 'Doob'],
    ['Dr.', 'Sunshine'],
    ['John', 'Resig'],
    ['Brendan', 'Eich'],
    ['Alan', 'Turing'],
  ];

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable).toHaveProperty('insert');
    expect(hashTable).toHaveProperty('remove');
    expect(hashTable).toHaveProperty('retrieve');
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).toEqual('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.toEqual('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).toEqual('Barker');
  });

  it('should handle hash function collisions', function() {
    let v1 = '1'; // hash function의 결과가 똑같습니다. hashFunction('1', 8) === 1
    let v2 = '9'; // hash function의 결과가 똑같습니다. hashFunction('9', 8) === 1

    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).toEqual(undefined);
  });

  it('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).toEqual(lastName);
    });
    expect(hashTable._limit).toEqual(16);
  });

  it('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).toEqual(lastName);
    });
    expect(hashTable._limit).toEqual(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).toEqual(8);
  });
});
