import { inventory } from '../constants/inventory';

const amountOriginalStock = () => {
    let totalStock = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalStock += inventory[i].originalStock;
    }

    return totalStock;
};

export default amountOriginalStock;