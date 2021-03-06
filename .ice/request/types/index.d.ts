import { AxiosRequestConfig } from 'axios';
import { IInterceptors } from './base';
interface ICustomRequest extends AxiosRequestConfig {
    instanceName?: string;
    withFullResponse?: boolean;
    interceptors?: IInterceptors;
}
export declare type IRequest = ICustomRequest | ICustomRequest[];
export {};
