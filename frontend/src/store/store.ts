import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { userReducer, authReducer, doctorsReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.USERS]: userReducer,
    [ReducerName.DOCTORS]: doctorsReducer,
    [ReducerName.AUTH]: authReducer
  },
});

export { store };
