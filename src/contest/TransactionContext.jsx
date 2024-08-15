import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../utils/constants";
import detectEthereumProvider from "@metamask/detect-provider";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);

  useEffect(() => {
    detectMetaMask();
  }, []);

  const detectMetaMask = async () => {
    try {
      const ethereumProvider = await detectEthereumProvider();
      setMetamaskInstalled(Boolean(ethereumProvider));
      if (!ethereumProvider) {
        throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
      }
    } catch (error) {
      console.error("Failed to detect MetaMask:", error);
    }
  };

  const initializeProvider = async () => {
    try {
      const ethereumProvider = await detectEthereumProvider();
      if (ethereumProvider) {
        const ethersProvider = new ethers.providers.Web3Provider(ethereumProvider);
        setProvider(ethersProvider);

        const accounts = await ethereumProvider.request({ method: "eth_requestAccounts" });
        setCurrentAccount(accounts[0]);
        const ethersSigner = ethersProvider.getSigner();
        setSigner(ethersSigner);
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, ethersSigner);
        setContract(contractInstance);
      } else {
        throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
      }
    } catch (error) {
      console.error("Failed to initialize provider:", error);
    }
  };

  const connectWallet = async () => {
    try {
      if (metamaskInstalled) {
        await initializeProvider();
      } else {
        throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const purchaseArt = async () => {
    try {
      const price = await contract.price(); // Ensure price is retrieved as a BigNumber
      await contract.purchaseArt({ value: price });
      console.log("Art purchased successfully.");
    } catch (error) {
      console.error("Failed to purchase art:", error);
    }
  };

  const confirmPurchase = async () => {
    try {
      await contract.confirmPurchase();
      console.log("Purchase confirmed successfully.");
    } catch (error) {
      console.error("Failed to confirm purchase:", error);
    }
  };

  const disconnectWallet = () => {
    setCurrentAccount(null);
    setProvider(null);
    setSigner(null);
    setContract(null);
  };

  return (
    <TransactionContext.Provider
      value={{
        provider,
        signer,
        contract,
        currentAccount,
        connectWallet,
        purchaseArt,
        confirmPurchase,
        disconnectWallet,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
