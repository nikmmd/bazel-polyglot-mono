import { adder, concatenate } from './index';

describe('adder module', () => {
    test('test_adder', ()=> {
        expect(adder(1,2)).toBe(4)
    });
});

describe('concatenate module', () => {
    test('test_concatenate', ()=> {
        expect(concatenate('mary',' had a little lamb'))
        .toBe('mary had a little lamb')
    });
});

