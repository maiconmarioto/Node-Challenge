import React from 'react';

const Table = props => {
  let tableRows = [];
  if (typeof props.tableData !== 'undefined' && props.tableData) {
    let counter = 0;
    tableRows = props.tableData.map(i => {
      counter++;
      return (
        <tr key={counter}>
          <td scope="row">{counter}</td>
          <td>{i.name}</td>
          <td>{i.lastName}</td>
          <td className="text-center">{`${i.participation}%`}</td>
        </tr>
      );
    });
  }

  return (
    <table className="table table-sm table-responsive table-hover table-bordered">
      <thead>
        <tr>
          <th width="5%"> </th>
          <th width="35%">Nome</th>
          <th width="45%">Sobrenome</th>
          <th className="text-center" width="15%">
            Participação
          </th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Table;
