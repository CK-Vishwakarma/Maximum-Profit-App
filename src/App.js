import React, { useState } from "react";
import sharesList from "./Data/sharesList";
import Form from "./components/Form";
import ShowResults from "./components/ShowResults";
import BoughtSharesComp from "./components/BoughtSharesComp";

function App() {
  const [sharesData, setSharesData] = useState([]);
  const [investedAtm, setInvestedAtm] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [boughtShare, setBoughtShare] = useState([]);

  // filtering positive shares
  const calculateFunction = (enteredAmount) => {
    let calculatedShares = sharesList.filter(
      (share) => share.buyPrice <= enteredAmount
    );

    let profitableShares = calculatedShares.filter(
      (share) => share.sellPrice > share.buyPrice
    );
    setSharesData(profitableShares);
    setCurrentAmount(enteredAmount);
  };

  // buying shares function
  const buyingShareFunction = (share, profitAmt) => {
    const alreadyExist = boughtShare.find((s) => s.id === share.id);
    console.log(alreadyExist);
    if (currentAmount >= share.buyPrice && !alreadyExist) {
      setBoughtShare([...boughtShare, { ...share, profitAmt }]);
      setCurrentAmount(currentAmount - share.buyPrice);
      setInvestedAtm(investedAtm + share.buyPrice);
    } else if (alreadyExist) {
      alert("Share Aleardy Exist.");
      return;
    } else {
      alert("Not Enought Amount To Buy.");
    }
  };
  // calculate profit
  const calculateProfitAmt = boughtShare.reduce((totalProfit, currentShare) => {
    totalProfit += Number.parseFloat(currentShare.profitAmt);
    return totalProfit;
  }, 0);

  return (
    <div className="container">
      <header>
        <h1>Maximum Profit App</h1>
      </header>

      <main>
        <Form calculateFunction={calculateFunction} />
        <hr />
        <h6>Search Results</h6>

        <ShowResults
          sharesData={sharesData}
          buyingShareFunction={buyingShareFunction}
        />
        <hr />
      </main>
      <hr />
      {boughtShare.length > 0 ? (
        <>
          <h6>Bought Shares</h6>
          <BoughtSharesComp boughtShare={boughtShare} />
        </>
      ) : null}

      <footer>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Total Investment</th>
              <th scope="col">Total Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rs.{investedAtm}</td>
              <td>Rs.{calculateProfitAmt}</td>
            </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
}

export default App;
