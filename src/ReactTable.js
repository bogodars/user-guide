import React from 'react';
import { useTable } from 'react-table';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

import './ReactTable.css';

export default function App() {
  const data = React.useMemo(
    () => [
      {
        col1: 'brownbear646',
        col2: ['0.05', <TrendingUpIcon style={{ color: 'green' }} />],
      },
      {
        col1: 'whiteswan331',
        col2: ['0.25', <TrendingDownIcon style={{ color: 'red' }} />],
      },
      {
        col1: 'beautifulbutterfly101',
        col2: ['2.15', <TrendingDownIcon style={{ color: 'red' }} />],
      },
      {
        col1: 'Curedkoala509',
        col2: ['0.15', <TrendingUpIcon style={{ color: 'green' }} />],
      },
      {
        col1: 'ticklishostrich764',
        col2: ['0.05', <TrendingDownIcon style={{ color: 'red' }} />],
      },
      {
        col1: 'beautifulbutterfly1041',
        col2: ['2.15', <TrendingUpIcon style={{ color: 'green' }} />],
      },
      {
        col1: 'ticklishostrich76444',
        col2: ['0.07', <TrendingDownIcon style={{ color: 'red' }} />],
      },
      {
        col1: 'beautifulbutterfly1041tt',
        col2: ['2.5', <TrendingUpIcon style={{ color: 'green' }} />],
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        accessor: 'col2',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} style={{}}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, key) => {
          prepareRow(row);
          return (
            <tr className='row-table' key={key} {...row.getRowProps()}>
              {row.cells.map((cell, key) => {
                return (
                  <td key={key} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
