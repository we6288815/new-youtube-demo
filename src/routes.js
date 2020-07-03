import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/pages/Home'));
const Demo = lazy(() => import(/* webpackChunkName: "movie-manage" */ '@/pages/Demo'));

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/home', component: Home },
      { path: '/demo', component: Demo },
      {
        path: '/',
        redirect: '/home',
      },
    ],
  },
];
export default routerConfig;
