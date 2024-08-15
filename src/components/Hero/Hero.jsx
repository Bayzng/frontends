import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TransactionContext } from '../../contest/TransactionContext';
import MetamaskModal from '../MetamaskModal/MetamaskModal';
import "./Hero.css";
import hero from "../../assets/artHero.png";

const Hero = () => {
  const { currentAccount } = useContext(TransactionContext);
  const [showModal, setShowModal] = useState(false);

  const renderMarketplaceLink = () => {
    if (currentAccount) {
      return (
        <Link to='/orderCreation'>
          <button className='second-button'>MarketPlace</button>
        </Link>
      );
    } else {
      return (
        <button
          className='second-button'
          onClick={() => setShowModal(true)} 
        >
          MarketPlace
        </button>
      );
    }
  };

  return (
    <div className='hero'>
      <div className='first-hero'>
        <h1><span>Decentralized</span> <br /> Art Marketplace</h1>
        <div className='sub-first-hero'>
            <button className='first-button'>Learn More</button>
          {renderMarketplaceLink()}
        </div>
      </div>
      <div className='second-hero'>
        <img src={hero} alt="Hero Art" />
      </div>
      <MetamaskModal showModal={showModal} setShowModal={setShowModal} /> {/* Modal component */}
    </div>
  );
}

export default Hero;
