import { configureStore } from '@reduxjs/toolkit';
import { ReducerName } from 'common/enums';
import { counterReducer, authReducer, doctorsReducer } from './slices';

const store = configureStore({
  reducer: {
    [ReducerName.COUNTER]: counterReducer,
    [ReducerName.DOCTORS]: doctorsReducer,
    [ReducerName.AUTH]: authReducer
  },
});

export { store };
