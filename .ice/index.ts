export * from './router';
import helpers from './helpers';
import logger from './logger';
import request from './request/request';
import useRequest from './request/useRequest';
import store from './store/index';
export * from './auth';

export { createApp } from './createApp';
export { history } from './history';
export * from './types';
export * from './lazy';
export * from './components';

export const APP_MODE = (global as any).__app_mode__ || process.env.APP_MODE;

export { helpers, logger, request, useRequest, store };
