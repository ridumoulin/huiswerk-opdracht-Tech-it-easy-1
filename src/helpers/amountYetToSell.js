import amountSoldTv from './amountSoldTv.js';
import amountOriginalStock from "./amountOriginalStock.js";

const amountYetToSell = () => {
    const calculateTotalToSell = (amountStock, amountSold) => {
        return amountStock - amountSold;
    };

    return calculateTotalToSell(amountOriginalStock(), amountSoldTv());
};

export default amountYetToSell;