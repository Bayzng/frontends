import React, { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { TransactionContext } from '../../contest/TransactionContext';
import { shortenAddress } from "../../utils/shortenAddress";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    currentAccount,
    connectWallet,
  } = useContext(TransactionContext);

  const handleConnectWallet = () => {
    connectWallet()
      .then(() => {
        console.log("Wallet connected successfully.");
      })
      .catch((error) => {
        console.error("Failed to connect wallet:", error);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
        <nav>
            <h2>ArtChain</h2>
            <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
                <li>App</li>
                <li>Developers</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
            {currentAccount ? (
            <p className='trade-button'>{shortenAddress(currentAccount)}</p>
            ) : (
              <button className='trade-button' onClick={handleConnectWallet}>Connect Wallet</button>
            )}
            <IoMdMenu className='menu-icon' onClick={toggleMenu} />
        </nav>
    </div>
  );
}

export default Navbar;
