import { useState } from 'react';
import Chart from './assets/img/Chart.png';
import LinearBar from './LinearBar';
import { ButtonBet } from './components/Button';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import './Game.css';

export default function Game() {
  const [num, setNum] = useState(0.0002); // input start number
  return (
    <div className='game'>
      <div className='container'>
        <div className='app__body'>
          <img
            data-tour='currency-type'
            src={Chart}
            alt='chart'
            className='app__chart-img step1'
          />

          <h3 data-tour='end-time' className='step3 app__body-title'>
            At 12:35, will the Bitcoin price be higher or lower than Base price?
          </h3>
          <div className='app__game'>
            <section className='top-items'>
              <div className='title-bet'>Game #135</div>

              <div data-tour='right-choise' className='step6 center-items'>
                <ButtonBet className='high-button' high='true'>
                  H I G H
                </ButtonBet>

                <input
                  data-tour='choose-amount'
                  className='app__game-input'
                  type='number'
                  min={0}
                  suffix='test'
                  max={10000000}
                  step={0.0001}
                  value={num}
                  name='amount'
                  onChange={(e) => setNum(e.target.value)}
                />
                <ButtonBet>LOW</ButtonBet>
              </div>

              <div data-tour='time-zone' className='app__game-date step2'>
                <QueryBuilderIcon fontSize='small' />
                <time className='app__game-time step2'>10:10 - 10:30</time>
                <InfoOutlinedIcon
                  fontSize='small'
                  style={{ color: ' green' }}
                />
              </div>
            </section>

            <LinearBar />

            <section className='bottom-items'>
              <div data-tour='base-price' className='best__price step4'>
                <h5 className='best__price-title'>Base price at 10:09</h5>
                <span>8824.67 </span>
              </div>

              <div
                data-tour='payout-ratio'
                className='step7 items-center-bottom'>
                <div className='expected_payout'>
                  <h5 className='expected__payout-title'>Expected payout</h5>
                  <div className='expected_payout-high'>2.55X</div>
                </div>
                <button data-tour='place-bet' className='place-bet'>
                  Place bet
                </button>
                <div className='expected_payout'>
                  <h5 className='expected__payout-title'>Expected payout</h5>
                  <div className='expected_payout-low'>1.9X</div>
                </div>
              </div>

              <div data-tour='time-left' className='time-left step8'>
                <h5 className='time-left-title'>Time left:</h5>
                <div>00:36</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
