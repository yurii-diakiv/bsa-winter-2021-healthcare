import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IDoctor } from '~/common/interfaces';

interface DoctorInstance extends IDoctor, Model {}

const createDoctorModel =  (orm: Sequelize): ModelCtor<DoctorInstance> => {
  const Doctor = orm.define<DoctorInstance>(ModelName.DOCTOR, {
    department: {
      allowNull: false,
      type: DataTypes.STRING
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      unique: true
    },
    about: {
      type: DataTypes.TEXT
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: TableName.DOCTORS
  });

  return Doctor;
};

export default createDoctorModel;
