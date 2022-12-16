import React from 'react';
import './Table.css';

const Table = (props) => {
  const { data } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Previous Words</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 20).map((datum, index) => (
          <tr key={index}>
            <td>{datum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
