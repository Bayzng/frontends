import React from 'react';
import { FaTwitter, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  const sections = [
    {
      className: 'footFirst',
      heading: 'Endless Art For All',
      content: [
        { text: 'Explore Art marketplace UI created ArtChain.' },
        { text: 'Join our community' }
      ],
      icons: [<BsTwitterX key="twitter" size={40} color='black' style={{padding: "5px"}} />, <FaLinkedin key="linkedin" size={40} color='blue' style={{padding: "5px"}} />, <FaWhatsappSquare key="whatsapp"  size={40} color='green' style={{padding: "5px"}}/>],
    },
    {
      className: 'footSec',
      heading: 'Explore',
      content: [
        { text: 'Marketplace',  },
        { text: 'Rankings',  },
        { text: 'Connect a Wallet',  }
      ],
      icons: [],
    },
    {
      className: 'footThr',
      heading: 'Join Our Weekly Digest',
      content: [
        { text: 'Get exclusive promotions & updates straight to your inbox.' }
      ],
      icons: [],
      button: <button key="button" className="Btn">Subscribe</button>
    },
  ];

  return (
    <div className='footerCone'>
      <div className='footerSec'>
        {sections.map((section, index) => (
          <div key={index} className={section.className}>
            <h3>{section.heading}</h3>
            {section.content.map((item, idx) => (
              item.link ? (
                <a key={idx} href={item.link}>
                  <p>{item.text}</p>
                </a>
              ) : (
                <p key={idx}>{item.text}</p>
              )
            ))}
            {section.icons.length > 0 && (
              <div className='footIcon'>
                {section.icons.map((icon) => icon)}
              </div>
            )}
            {section.button && section.button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
