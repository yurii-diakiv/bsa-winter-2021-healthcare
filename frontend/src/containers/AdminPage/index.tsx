import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import * as config from './config/config.json';
import styles from './styles.module.scss';
import SearchAndFilterForm from './SearchAndFilterForm';
import Users from './Users';

const AdminPage: React.FC = () => {
  console.log(config.entityType)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Entries</h2>
      <SearchAndFilterForm />
      <div className={styles.table}>
        <div className={styles.row}>
          {config.entityType.map((type: string) => (
            <li className={clsx(styles.elem, styles.headerElem)} key={Date()}>
              {type}
            </li>
          ))}
        </div>
        <Users />
      </div>
    </div>
  );
};

export default AdminPage;
