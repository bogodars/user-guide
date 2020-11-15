import React from 'react';
import ReactTable from './ReactTable';
import { Scrollbars } from 'react-custom-scrollbars';
import './Chart.css';
function Chart() {
  return (
    <div className='chart'>
      <div className='column'>
        <div className='table-title'>
          <h5>
            All Bets <span>(HIGH)</span>
          </h5>
        </div>
        <Scrollbars style={{ height: 300 }}>
          <ReactTable />
        </Scrollbars>
      </div>
      <div className='column'>
        <div className='table-title'>
          <h5>Winnerof Round ID 4308</h5>
        </div>
        <Scrollbars style={{ height: 300 }}>
          <ReactTable />
        </Scrollbars>
      </div>
      <div className='column'>
        <div className='table-title'>
          <h5>
            All Bets <span>(Low)</span>
          </h5>
        </div>
        <Scrollbars style={{ height: 300 }}>
          <ReactTable />
        </Scrollbars>
      </div>
    </div>
  );
}

export default Chart;
