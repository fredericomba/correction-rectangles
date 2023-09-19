import assert from 'assert/strict';

import Polynomials from '@modules/Polynomials/index.mjs';

describe('Polynomials', () => {

    it('exists', () => {

        assert.equal(typeof Polynomials, 'object');
        assert.notEqual(Polynomials, null);

    });

    it('can calculate the modulus of 32-bits polynomials', () => {
        
        const { mod32 } = Polynomials;

        assert.equal(mod32(0, 1), 0);
        assert.equal(mod32(1, 1), 0);
        assert.equal(mod32(4, 3), 1);
        assert.equal(mod32(16, 5), 1);

        // x^6 + x + 1
        const BITS6_PRIME_POLYNOMIAL = 0b1000011;

        assert.equal(mod32(0xBAD, BITS6_PRIME_POLYNOMIAL), 28);
        assert.equal(mod32(0xD00D, BITS6_PRIME_POLYNOMIAL), 52);
        assert.equal(mod32(0xAD105, BITS6_PRIME_POLYNOMIAL), 8);
        assert.equal(mod32(0xFACADE, BITS6_PRIME_POLYNOMIAL), 63);
        assert.equal(mod32(0xD15EA5E, BITS6_PRIME_POLYNOMIAL), 40);
        assert.equal(mod32(0xDEADBEEF, BITS6_PRIME_POLYNOMIAL), 55);

    });

});
