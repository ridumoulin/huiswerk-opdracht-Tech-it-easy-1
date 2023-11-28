import { inventory } from '../constants/inventory';

const converterInchCm = sizeInInch => {
    return sizeInInch * 2.54;
}

const formatScreenOptions = screenOptions => {
    const { availableSizes } = screenOptions;

    const size0InCm = converterInchCm(availableSizes[0]);
    const size1InCm = converterInchCm(availableSizes[1]);
    const size2InCm = converterInchCm(availableSizes[2]);
    const size3InCm = converterInchCm(availableSizes[3]);

    const formattedSizes = `${availableSizes[0]} inches (${size0InCm} cm) | ${availableSizes[1]} inches (${size1InCm} cm) | ${availableSizes[2]} inches (${size2InCm} cm) | ${availableSizes[3]} inches (${size3InCm} cm)`;

    return formattedSizes;
};

export default formatScreenOptions;