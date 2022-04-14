import React from 'react';
import './styles.css';

// Images
import { ReactComponent as Dice } from '../../assets/images/icon-dice.svg';
import { ReactComponent as MobileDivider } from '../../assets/images/pattern-divider-mobile.svg';
import { ReactComponent as DesktopDivider } from '../../assets/images/pattern-divider-desktop.svg';

function Main() {
  return (
    <div className='Card'>
      <div className='Advice'>
        <span className='Advice__Title'>Advice #117</span>
        <p className='Advice__Body'>
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
      </div>
      <MobileDivider className='Mobile Divider' />
      <DesktopDivider className='Desktop Divider' />
      <button className='Dice'>
        <Dice className='Dice__Icon' />
      </button>
    </div>
  );
}

export default Main;
