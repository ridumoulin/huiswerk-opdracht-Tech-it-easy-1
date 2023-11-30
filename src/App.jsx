import './App.css';
import {bestSellingTv, listTvBrands, inventory} from './constants/inventory.js';
import amountSoldTv from './helpers/amountSoldTv.js';
import amountOriginalStock from './helpers/amountOriginalStock.js';
import amountYetToSell from './helpers/amountYetToSell.js';
import formatTvName from './helpers/formatTvName.js';
import formatPrice from './helpers/formatPrice.js';
import formatScreenOptions from './helpers/formatScreenOptions.js';
import tv from './assets/best-selling-tv.png';
import checkIcon from './assets/check.png';
import notIcon from './assets/minus.png';

const displayOptionNames = inventory.map((tv, index) => {
    const optionList = tv.options.map((option) => (
        <span key={option.name} className="tv-info">
            {option.applicable ? (
                <img className="icon" src={checkIcon} alt="Check icon" />
            ) : (
                <img className="icon" src={notIcon} alt="Not icon" />
            )}
            {option.name}
        </span>
    ));

    return (
        <p key={index}>
            {optionList}
        </p>
    );
});

const allTvs = inventory.map((tv, index) => {
    return (
        <section key={index} className="tv-details">
            <h3 className="tv-title">{formatTvName(tv)}</h3>
            <p className="tv-price">{formatPrice(tv.price)}</p>
            <p className="tv-sizes">{formatScreenOptions(tv)}</p>
            {displayOptionNames[index]}
        </section>
    );
});

const clickButton = (buttonText) => {
    let sortedInventory;

    switch (buttonText) {
        case 'Meest verkocht eerst':
            sortedInventory = [...inventory].sort((a, b) => (b.sold || 0) - (a.sold || 0));
            console.log(sortedInventory);
            break;
        case 'Goedkoopste eerst':
            sortedInventory = [...inventory].sort((a, b) => (a.price || 0)- (b.price || 0));
            console.log(sortedInventory);
            break;
        case 'Meest geschikt voor sport eerst':
            sortedInventory = [...inventory].sort((a, b) => (b.refreshRate || 0) - (a.refreshRate || 0));
            console.log(sortedInventory);
            break;
        default:
            break;
    }
    console.log(sortedInventory);
};


function App() {
  const totalSold = amountSoldTv();
  const totalStock = amountOriginalStock();
  const totalToSell = amountYetToSell();
  const formattedName = formatTvName(bestSellingTv);
  const formattedPrice = formatPrice(bestSellingTv.price);
  const formattedSizes = formatScreenOptions(bestSellingTv);

  console.log(totalSold);
  console.log(totalStock);
  console.log(totalToSell);
  console.log(formattedName);
  console.log(formattedPrice);
  console.log(formattedSizes);
  console.log(listTvBrands);
  console.log(allTvs);


  return (
    <>
      <main className="outer-section">
        <h1>Tech it easy dashboard</h1>
        <h2>Verkoopoverzicht</h2>
        <section className="selling-overview">
            <div className="total-sold">
                <p className="total-title">Aantal verkochte producten</p>
                <p className="total-amount">{totalSold}</p>
            </div>
            <div className="total-stock">
                <p className="total-title">Aantal ingekochte producten</p>
                <p className="total-amount">{totalStock}</p>
            </div>
            <div className="total-to-sell">
                <p className="total-title">Aantal te verkopen producten</p>
                <p className="total-amount">{totalToSell}</p>
            </div>
        </section>

          <h2>Best verkochte tv</h2>
        <section className="best-selling-tv">
          <span className="tv-image">
              <img src={tv} alt="Best verkochte televisie" />
          </span>
          <div className="tv-details">
              <h3 className="tv-title">{formattedName}</h3>
              <p className="tv-price">{formattedPrice}</p>
              <p className="tv-sizes">{formattedSizes}</p>
              <p className="tv-info">
                  <img className="icon" src={checkIcon} alt="Check icon" /> wifi
                  <img className="icon" src={notIcon} alt="Not icon" /> speech
                  <img className="icon" src={checkIcon} alt="Check icon" /> hdr
                  <img className="icon" src={checkIcon} alt="Check icon" /> bluetooth
                  <img className="icon" src={notIcon} alt="Not icon" /> ambilight
              </p>
          </div>
        </section>

        <section className="button-tvs">
            <h2>Alle tv's</h2>
            <button type="button" onClick={() => clickButton('Meest verkocht eerst')}>Meest verkocht eerst</button>
            <button type="button" onClick={() => clickButton('Goedkoopste eerst')}>Goedkoopste eerst</button>
            <button type="button" onClick={() => clickButton('Meest geschikte voor sport eerst')}>Meest geschikt voor sport eerst</button>
        </section>

        <section>
            {allTvs}
        </section>

      </main>
    </>
  );
}

export default App;
