import React from 'react';
import { useTable } from 'react-table';
import { Column } from 'common/interfaces';
import ActionsButton from './actions-button';
import styles from './styles.module.scss';

interface IProps {
  columns: Column[],
  data: any,
  edit: (id: string) => void,
  deleteUser: (id:string) => void,
}

function Table({ columns, data, edit, deleteUser }: IProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div className={styles.tableDIV}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key } = headerGroup.getHeaderGroupProps();
            return (
              <tr {...headerGroup.getHeaderGroupProps()} key={key}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()} key={column.id}>
                      <div>{column.render('Header')}</div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key } = row.getRowProps();
            return (
              <tr {...row.getRowProps()} key={key}>
                {row.cells.map((cell) => {
                  let item;
                  const { key } = cell.getCellProps();
                  cell.column.Header === 'Actions'
                    ? (item = (
                        <td {...cell.getCellProps()} key={key}>
                          <ActionsButton edit={edit} deleteUser={deleteUser} id={cell.row.values.id} />
                        </td>
                      ))
                    : (item = (
                        <td {...cell.getCellProps()} key={key}>
                          <div>{cell.render('Cell')}</div>
                        </td>
                      ));
                  return item;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
