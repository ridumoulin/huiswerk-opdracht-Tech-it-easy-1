import { inventory } from '../constants/inventory';

const converterInchCm = sizeInInch => {
    return sizeInInch * 2.54;
}

const formatScreenOptions = screenOptions => {
    const { availableSizes } = screenOptions || {};

    if (!availableSizes || availableSizes.length === 0) {
        return ' ';
    }

    const formattedSizes = availableSizes
        .filter(size => size !== undefined)
        .map(size => `${size} inches (${converterInchCm(size)} cm)`)
        .join(' | ');

    return formattedSizes;
};

export default formatScreenOptions;