import * as React from 'react';
import { createApp } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';

const locale = getLocale();
const appConfig = {
  request: {
    baseURL: '/device-user',
  },
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => <LocaleProvider locale={locale}>{children}</LocaleProvider>,
  },
};
createApp(appConfig);
