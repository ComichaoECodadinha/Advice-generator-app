import React, { useState } from 'react';
import './styles.css';

// Images
import { ReactComponent as Dice } from '../../assets/images/icon-dice.svg';
import { ReactComponent as MobileDivider } from '../../assets/images/pattern-divider-mobile.svg';
import { ReactComponent as DesktopDivider } from '../../assets/images/pattern-divider-desktop.svg';

// Api
import { getRandomAdvice } from '../../Services/api';

function Main() {
  const [adviceId, setAdviceId] = useState(null);
  const [advice, setAdvice] = useState('');

  async function getAdvice() {
    const { id, advice } = await getRandomAdvice();
    setAdviceId(id);
    setAdvice(advice);
  }

  return (
    <div className='Card'>
      <div className='Advice'>
        {!adviceId ? (
          <span className='Advice__Body'>
            Clique no botão para gerar um conselho
          </span>
        ) : (
          <>
            <span className='Advice__Title'>Advice #{adviceId}</span>
            <p className='Advice__Body'>{advice}</p>
          </>
        )}
      </div>
      <MobileDivider className='Mobile Divider' />
      <DesktopDivider className='Desktop Divider' />
      <button className='Dice' onClick={getAdvice}>
        <Dice className='Dice__Icon' />
      </button>
    </div>
  );
}

export default Main;
