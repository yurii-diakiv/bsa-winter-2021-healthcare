import * as React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';
import { RegisterPayloadKey, validationUserSchema } from 'healthcare-shared'

interface IRegisterPayload {
  [RegisterPayloadKey.NAME]: string;
  [RegisterPayloadKey.SURNAME]: string;
  [RegisterPayloadKey.EMAIL]: string;
  [RegisterPayloadKey.PASSWORD]: string;
  [RegisterPayloadKey.RETYPE_PASSWORD]: string;
  [RegisterPayloadKey.PHONE]: string;
  [RegisterPayloadKey.IS_STAFF]: boolean;
}

const DEFAULT_VALUES: IRegisterPayload = {
  [RegisterPayloadKey.NAME]: '',
  [RegisterPayloadKey.SURNAME]: '',
  [RegisterPayloadKey.EMAIL]: '',
  [RegisterPayloadKey.PASSWORD]: '',
  [RegisterPayloadKey.RETYPE_PASSWORD]: '',
  [RegisterPayloadKey.PHONE]: '',
  [RegisterPayloadKey.IS_STAFF]: false
};

const SignUpPage: React.FC = () => {

  const { register, handleSubmit, errors } = useForm<IRegisterPayload>({
    resolver: yupResolver(validationUserSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data: IRegisterPayload) => console.log(data);

  return (

<div className={styles.container}>
  <div className={styles.container__logo}>
    <div className={styles.container__blur}>
      <svg width="301" height="346" viewBox="-10 0 326 346" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="63.6851" height="174.839" rx="4" transform="matrix(0.699397 -0.714733 -0.713625 -0.700528 124.77 273.173)"/>
        <rect width="63.6851" height="174.839" rx="4" transform="matrix(0.699397 -0.714733 -0.713625 -0.700528 124.77 273.173)" stroke="#F2F2F5" strokeWidth="10"/>
        <rect width="63.6847" height="174.84" rx="4" transform="matrix(-0.702274 -0.711907 -0.710794 0.7034 301 96.6672)"/>
        <rect width="63.6847" height="174.84" rx="4" transform="matrix(-0.702274 -0.711907 -0.710794 0.7034 301 96.6672)" stroke="#F2F2F5" strokeWidth="10"/>
        <circle cx="125" cy="65" r="62.5" stroke="#F2F2F5" strokeWidth="5"/>
        <path d="M30.228 334.251H36.1566V320.348H51.3217V334.251H57.2663V301.524H51.3217V315.378H36.1566V301.524H30.228V334.251ZM74.3251 334.73C80.046 334.73 83.9771 331.934 84.9998 327.667L79.5985 327.06C78.8155 329.137 76.8979 330.224 74.405 330.224C70.6657 330.224 68.1887 327.763 68.1408 323.56H85.2395V321.786C85.2395 313.173 80.062 309.386 74.0215 309.386C66.9902 309.386 62.4039 314.547 62.4039 322.122C62.4039 329.824 66.9263 334.73 74.3251 334.73ZM68.1568 319.661C68.3326 316.529 70.6497 313.892 74.1014 313.892C77.4252 313.892 79.6625 316.321 79.6944 319.661H68.1568ZM97.1966 334.746C101.048 334.746 103.349 332.941 104.404 330.879H104.595V334.251H110.157V317.823C110.157 311.335 104.867 309.386 100.185 309.386C95.0233 309.386 91.0603 311.687 89.7819 316.161L95.1831 316.929C95.7584 315.251 97.3884 313.812 100.217 313.812C102.902 313.812 104.372 315.187 104.372 317.6V317.696C104.372 319.358 102.63 319.437 98.2993 319.901C93.5372 320.412 88.9829 321.834 88.9829 327.364C88.9829 332.19 92.5145 334.746 97.1966 334.746ZM98.6988 330.496C96.2858 330.496 94.5599 329.393 94.5599 327.268C94.5599 325.046 96.4935 324.12 99.0823 323.752C100.6 323.544 103.637 323.161 104.388 322.554V325.446C104.388 328.179 102.182 330.496 98.6988 330.496ZM121.758 301.524H115.973V334.251H121.758V301.524ZM139.963 309.706H135.121V303.825H129.337V309.706H125.853V314.18H129.337V327.827C129.305 332.445 132.661 334.714 137.007 334.587C138.653 334.539 139.788 334.219 140.411 334.011L139.436 329.489C139.116 329.569 138.461 329.713 137.742 329.713C136.288 329.713 135.121 329.201 135.121 326.868V314.18H139.963V309.706ZM151.114 319.869C151.114 316.321 153.319 314.276 156.419 314.276C159.455 314.276 161.245 316.209 161.245 319.517V334.251H167.03V318.622C167.03 312.694 163.674 309.386 158.576 309.386C154.805 309.386 152.408 311.096 151.273 313.876H150.986V301.524H145.329V334.251H151.114V319.869ZM201.195 312.566C200.188 305.295 194.595 301.076 187.34 301.076C178.791 301.076 172.351 307.309 172.351 317.887C172.351 328.45 178.711 334.698 187.34 334.698C195.123 334.698 200.284 329.665 201.195 323.416L195.219 323.384C194.468 327.22 191.335 329.377 187.42 329.377C182.115 329.377 178.312 325.398 178.312 317.887C178.312 310.505 182.083 306.398 187.436 306.398C191.415 306.398 194.532 308.651 195.219 312.566H201.195ZM213.432 334.746C217.283 334.746 219.584 332.941 220.639 330.879H220.831V334.251H226.392V317.823C226.392 311.335 221.102 309.386 216.42 309.386C211.259 309.386 207.296 311.687 206.017 316.161L211.419 316.929C211.994 315.251 213.624 313.812 216.452 313.812C219.137 313.812 220.607 315.187 220.607 317.6V317.696C220.607 319.358 218.865 319.437 214.535 319.901C209.773 320.412 205.218 321.834 205.218 327.364C205.218 332.19 208.75 334.746 213.432 334.746ZM214.934 330.496C212.521 330.496 210.795 329.393 210.795 327.268C210.795 325.046 212.729 324.12 215.318 323.752C216.836 323.544 219.872 323.161 220.623 322.554V325.446C220.623 328.179 218.418 330.496 214.934 330.496ZM232.209 334.251H237.993V319.821C237.993 316.705 240.343 314.5 243.523 314.5C244.497 314.5 245.712 314.675 246.207 314.835V309.514C245.68 309.418 244.769 309.354 244.13 309.354C241.317 309.354 238.968 310.952 238.073 313.796H237.818V309.706H232.209V334.251ZM259.906 334.73C265.627 334.73 269.558 331.934 270.581 327.667L265.18 327.06C264.397 329.137 262.479 330.224 259.986 330.224C256.247 330.224 253.77 327.763 253.722 323.56H270.821V321.786C270.821 313.173 265.643 309.386 259.603 309.386C252.571 309.386 247.985 314.547 247.985 322.122C247.985 329.824 252.507 334.73 259.906 334.73ZM253.738 319.661C253.914 316.529 256.231 313.892 259.682 313.892C263.006 313.892 265.244 316.321 265.275 319.661H253.738Z" fill="#F2F2F5"/>
      </svg>

    </div>
  </div>
  <div className={styles.container__content}>
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.name}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name={RegisterPayloadKey.NAME}
              ref={register}
            />
            {errors.name && <span className={styles.errorSpan}>{errors.name.message}</span>}
          </div>

          <div className={styles.surname}>
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              placeholder="Surname"
              name={RegisterPayloadKey.SURNAME}
              ref={register}
            />
            {errors.surname && <span className={styles.errorSpan}>{errors.surname.message}</span>}
          </div>

          <div className={styles.email}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              name={RegisterPayloadKey.EMAIL}
            />
            {errors.email && <span className={styles.errorSpan}>{errors.email.message}</span>}
          </div>

          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name={RegisterPayloadKey.PASSWORD}
              ref={register}
            />
            {errors.password && <span className={styles.errorSpan}>{errors.password.message}</span>}
          </div>

          <div className={styles.password}>
            <label htmlFor="password">Retype Password</label>
            <input
              type="password"
              placeholder="Retype password"
              name={RegisterPayloadKey.RETYPE_PASSWORD}
              ref={register}
            />
            {errors.retypePassword && <span className={styles.errorSpan}>{errors.retypePassword.message}</span>}
          </div>

          <div className={styles.phone}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              name={RegisterPayloadKey.PHONE}
              ref={register}
            />
            {errors.phone && <span className={styles.errorSpan}>{errors.phone.message}</span>}
          </div>

          {/* <div className={styles.uploadFiles}>
            <label htmlFor="name">Avatar</label>
            <input
              type="file"
              placeholder="Avatar"
              name={RegisterPayloadKey.AVATAR}
              ref={register}
            />
          </div> */}

          <div className={styles.checkBox}>
            <input
              type="checkbox"
              name={RegisterPayloadKey.IS_STAFF}
              ref={register}
            />
            <label htmlFor="isStaff">Doctor/Nurse</label>
          </div>

          {/* <div className={styles.uploadFiles}>
            <input type="button" value="Upload documents" />
            <label>
              Upload file:
              <input type="file" multiple />
            </label>
            <span>file1.pdf</span>
            <span>file2.jpg</span>
          </div> */}

          <input type="submit" value="Sign Up" />

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
