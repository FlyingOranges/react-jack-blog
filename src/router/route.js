import Index from '../pages/index/Index';
import Home from '../pages/home/Home';
import Nothing from '../pages/abnormal/404/404';
import Login from '../pages/login/Login';
import Detail from '../pages/detail/detail';

interface routerConfigModel {
    path: string,
    component?: any,
    auth?: boolean
}

export const routerConfig: routerConfigModel[] = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/home',
        component: Home,
        // auth: true,
    },
    {
        path: '/detail',
        component: Detail,
    },
    {
        path: '/404',
        component: Nothing,
    },
    {
        path: '/login',
        component: Login,
    }
];