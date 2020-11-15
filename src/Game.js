import { useState } from 'react';
import Chart from './assets/img/Chart.png';
import LinearBar from './LinearBar';
import { ButtonBet } from './components/Button';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './Game.css';

export default function Game() {
  const [num, setNum] = useState(0.0002);
  return (
    <div className='game'>
      <div className='container'>
        <img
          src={Chart}
          alt='chart'
          className='app__chart-img'
          data-tut='currency-type'
        />

        <div className='app__body'>
          <h3 className='app__body-title'>
            At 12:35, will the Bitcoin price be higher or lower than Base price?
          </h3>
          <div className='app__game'>
            <section className='top-items'>
              <div className='title-bet'>Game #135</div>

              <div className='center-items'>
                <ButtonBet className='high-button' high='true'>
                  H I G H
                </ButtonBet>

                <input
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

              <div className='app__game-date'>
                <QueryBuilderIcon fontSize='small' />
                <time className='app__game-time'>10:10 - 10:30</time>
                <InfoOutlinedIcon
                  fontSize='small'
                  style={{ color: ' green' }}
                />
              </div>
            </section>

            <LinearBar />

            <section className='bottom-items'>
              <div className='best__price'>
                <h5 className='best__price-title'>Base price at 10:09</h5>
                <span>8824.67 </span>
              </div>

              <div className='items-center-bottom'>
                <div className='expected_payout'>
                  <h5 className='expected__payout-title'>Expected payout</h5>
                  <div className='expected_payout-high'>2.55X</div>
                </div>
                <button className='place-bet'>Place bet</button>
                <div className='expected_payout'>
                  <h5 className='expected__payout-title'>Expected payout</h5>
                  <div className='expected_payout-low'>1.9X</div>
                </div>
              </div>

              <div className='time-left'>
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
