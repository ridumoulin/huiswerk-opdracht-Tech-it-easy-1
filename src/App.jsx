import './App.css';
import amountSoldTv from './helpers/amountSoldTv.js';
import amountOriginalStock from "./helpers/amountOriginalStock.js";
import amountYetToSell from "./helpers/amountYetToSell.js";

function App() {
  const totalSold = amountSoldTv();
  const totalStock = amountOriginalStock();
  const totalToSell = amountYetToSell();

  console.log(totalSold);
  console.log(totalStock);
  console.log(totalToSell);

  return (
    <>
      <h1>Begin hier met met maken van de applicatie!</h1>
      <p className="greenSoldTv">Totaal aantal verkochte televisies: {totalSold}</p>
      <p className="blueStock">Totaal aantal ingekochte televisies: {totalStock}</p>
      <p className="redToSell">Hoeveel televisies er nog verkocht moeten worden: {totalToSell}</p>
    </>
  )
}

export default App
