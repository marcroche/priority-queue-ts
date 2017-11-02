import { PriorityQueue } from '../src/PriorityQueue';
import { expect } from 'chai';
import 'mocha';

describe('PriorityQueue', () => {
  it('should create a PriorityQueue', () => {
    const result = new PriorityQueue('test', 'test', [1, 2, 3]);
    expect(typeof result).to.equal('object');
  });
});
