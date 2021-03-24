import * as React from 'react';
import { IUserTypeDoctor } from 'common/interfaces';
import { Card } from 'components/common';
import clsx from 'clsx';
import styles from './styles.module.scss';
import defaultAvatar from 'assets/images/default-avatar.svg';

type Props = {
  user: IUserTypeDoctor;
};

const DoctorItem: React.FC<Props> = ({ user }) => {
  return (
    <Card
      title={`${user.name} ${user.surname}`}
      label={user.doctor?.clinic?.clinicType}
      btnLabel="Make an appointment"
      imagePath={user.imagePath ?? defaultAvatar}
    >
      <div className={styles.infoItem}>
        <span className={clsx(styles.icon, styles.location)}></span>
        <span className={styles.text}>{user.doctor?.clinic?.address}</span>
      </div>
      <div className={styles.infoItem}>
        <span className={clsx(styles.icon, styles.phone)}></span>
        <span className={styles.text}>{user.phone}</span>
      </div>
    </Card>
  );
};

export default DoctorItem;
