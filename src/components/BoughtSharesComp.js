import React from "react";

const BoughtSharesComp = ({ boughtShare }) => {
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
        {boughtShare.map((share, index) => {
          const { id, shareName, buyPrice, sellPrice, profitAmt } = share;
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
                  className="btn btn-danger"
                  // onClick={() => buyingShareFunction(share, id)}
                >
                  Sell
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BoughtSharesComp;
