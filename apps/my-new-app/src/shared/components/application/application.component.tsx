'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { getStore } from '../../store';
import { Notification } from '../notification/notification.component';

export function Application({ children }: Readonly<PropsWithChildren>) {
  const store = getStore();

  return (
    <Provider store={store}>
      <CssBaseline />
      <Notification />
      {children}
    </Provider>
  );
}
