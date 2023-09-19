const mod32 = (polynomial, divisor) => {

    let remainder = polynomial;

    while (true) {

        const leadingZerosA = Math.clz32(remainder);
        const leadingZerosB = Math.clz32(divisor);

        const shift = leadingZerosB - leadingZerosA | 0;
        if (shift < 0) {

            break;

        }

        const subtrahend = divisor << shift;
        remainder = remainder ^ subtrahend;

    }

    return remainder;

};

const divisors = Object.freeze({
    mod32,
});

export default divisors;