import React from "react";
import { useWallet } from "../context/Wallet.context";

const Connect = () => {
  const { account, balance, errorMessage } = useWallet();

  return (
    <div>
      <h6> Account: {account} </h6>
      <h6>
        Balance: {balance} {balance ? "ETH" : null}
      </h6>
      {errorMessage ? (
        <p className="has-text-danger">Error: {errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Connect;
