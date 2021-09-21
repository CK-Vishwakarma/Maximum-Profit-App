import React from "react";

const ShowResults = ({ sharesData, buyingShareFunction }) => {
  return (
    <table className="table table-striped  table-hover ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Share</th>
          <th scope="col">Buy</th>
          <th scope="col">Sell</th>
          <th scope="col">Profit</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {sharesData.map((share, index) => {
          const { id, shareName, buyPrice, sellPrice } = share;
          const profitAmt = (sellPrice - buyPrice).toFixed(2);
          return (
            <tr key={id}>
              <th scope="row">{index + 1}</th>
              <td>{shareName}</td>
              <td>{buyPrice}</td>
              <td>{sellPrice}</td>
              <td> {profitAmt}</td>
              <td>
                {" "}
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => buyingShareFunction(share, profitAmt, id)}
                >
                  Buy
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ShowResults;
