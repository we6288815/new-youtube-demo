import React from 'react';
import { IAppRouterProps } from './router/types';
import { ILogger } from './logger/types';
import { IRequest } from './request/types';
import { IStore } from './store/types';
import { IAuth } from './auth/types';

export * from './router/types';
export * from './store/types';

export interface IApp {
  rootId?: string;
  mountNode?: HTMLElement;
  addProvider?: ({
    children,
  }: {
    children: React.ReactNode;
  }) => React.ReactElement;
  getInitialData?: () => Promise<any>;
  ErrorBoundaryFallback?: React.ComponentType;
  onErrorBoundaryHander?: (error: Error, componentStack: string) => any;

  [key: string]: any;
}

export interface IAppConfig {
  app?: IApp;
  router?: IAppRouterProps;
  logger?: ILogger;
  request?: IRequest;
  store?: IStore;
  auth?: IAuth;
}
