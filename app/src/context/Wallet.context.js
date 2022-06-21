import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const walletContext = createContext({});

export const useWallet = () => useContext(walletContext);

const useWalletProvider = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
      accountsChanged();
      chainChanged();
      if (!account) connectHandler();
    }
  }, []);

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  return { account, balance, connectHandler, errorMessage };
};

export const WalletContextProvider = ({ children }) => {
  const wallet = useWalletProvider();

  return (
    <walletContext.Provider value={wallet}>{children}</walletContext.Provider>
  );
};
