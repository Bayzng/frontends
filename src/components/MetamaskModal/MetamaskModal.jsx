import React from 'react';
import './MetamaskModal.css';
// import metamaskLogo from '../../assets/metamaskLogo.png';

const MetamaskModal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className='modal-overlay' onClick={() => setShowModal(false)}>
      <div className='modal-contents' onClick={(e) => e.stopPropagation()}>
        <img src="https://thegivingblock.com/wp-content/uploads/2023/02/MetaMask-Partnership-The-Giving-Block.png" alt="MetaMask Logo" className='modal-logo' />
        <h2>MetaMask</h2>
        <p>To proceed, please connect your MetaMask wallet.</p>
        <button onClick={() => setShowModal(false)} className='modal-close-button'>Close</button>
      </div>
    </div>
  );
};

export default MetamaskModal;
