import React from "react";
import { useWallet } from "../context/Wallet.context";

const Connect = () => {
  const { account, balance, loading, errorMessage } = useWallet();

  const displayBalance = loading
    ? "Loading..."
    : `${balance} ${balance ? "ETH" : null}`;

  return (
    <div>
      <h6> Account: {loading ? "Loading..." : account} </h6>
      <h6>Balance: {displayBalance}</h6>
      {errorMessage ? (
        <p className="has-text-danger">Error: {errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Connect;
