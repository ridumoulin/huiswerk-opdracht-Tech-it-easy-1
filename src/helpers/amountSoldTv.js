import { inventory } from '../constants/inventory';

const amountSoldTv = () => {
    let totalSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalSold += inventory[i]. sold;
    }

    return totalSold;
};

export default amountSoldTv;

