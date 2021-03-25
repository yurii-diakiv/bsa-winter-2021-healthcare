import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ButtonColor,
  ButtonStyleType,
  ButtonType,
  ClinicKey,
  ClinicType,
  InputColor,
  InputType,
} from 'common/enums';
import { Button, Modal, Select, TextInput } from 'components/common';
import styles from './styles.module.scss';
import { IClinicPayload } from 'common/interfaces';
import { createOptions } from 'helpers';
import { addClinic as validationClinicSchema } from 'validation-schemas';
import { DEFAULT_CLINIC_VALUE } from 'components/clinics/components/common/constants';

interface IProps {
  onFormHide: () => void;
  onCreateClinic: (clinicData: IClinicPayload) => void;
  isOpen: boolean;
}

const clinicTypeOptions = createOptions<string>(Object.values(ClinicType));

const AddClinicPopup: React.FC<IProps> = ({
  onFormHide,
  onCreateClinic,
  isOpen,
}) => {
  const { handleSubmit, errors, control } = useForm<IClinicPayload>({
    resolver: yupResolver(validationClinicSchema),
    defaultValues: DEFAULT_CLINIC_VALUE,
    mode: 'onChange',
  });
  const handleSubmitForm = (clinicData: IClinicPayload) => {
    onCreateClinic({
      ...clinicData,
      imagePath: DEFAULT_CLINIC_VALUE.imagePath,
    });
  };

  return (
    <Modal isShow={isOpen}>
      <div className={styles.container}>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={styles.createForm}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Add clinic</h2>
            <button
              className={styles.closeButton}
              onClick={onFormHide}
              type="button"
            >
              &#10060;
            </button>
          </div>

          <div className={styles.inputBlock}>
            {/* <input type="button" value="Upload documents" /> */}
            <label className={styles.inputImage}>
              {/* Upload file: */}
              <div className={styles.blurBottom}>
                <div className={styles.cameraIcon}></div>
              </div>
              <input type="file" className={styles.inputImageBtn} />
            </label>
            {/* <span>file1.pdf</span>
            <span>file2.jpg</span> */}
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={ClinicKey.NAME}
              label="Name"
              hasHiddenLabel={false}
              placeholder="Name"
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <TextInput
              name={ClinicKey.ADDRESS}
              label="Address"
              hasHiddenLabel={false}
              placeholder="Address"
              type={InputType.TEXT}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.inputBlock}>
            <Select
              name={ClinicKey.CLINIC_TYPE}
              label="Status"
              hasHiddenLabel={false}
              placeholder="Status"
              options={clinicTypeOptions}
              color={InputColor.GRAY_LIGHT}
              control={control}
              errors={errors}
            />
          </div>

          <div className={styles.submitBtn}>
            <Button
              label="Add"
              hasHiddenLabel={false}
              type={ButtonType.SUBMIT}
              color={ButtonColor.PRIMARY_DARK}
              styleType={ButtonStyleType.WITHOUT_BORDER}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddClinicPopup;
