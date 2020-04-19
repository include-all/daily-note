
// import Home from '../hooks/demo1'
// import ReduxDemo from '../redux/demo'

const Home = () => import('../hooks/demo');
const ReduxDemo = () => import('../redux/demo');
const HookDemo1 = () => import('../hooks/demo1.js');
const HookDemo2 = () => import('../hooks/demo2.js');
const HookDemo3 = () => import('../hooks/demo3.js');
const HookDemo4 = () => import('../hooks/demo4.js');

const routerConfig =  {
    router: [
        {
            path: '/',
            exact: true,
            component: Home
        },
        {
            path: '/redux',
            exact: true,
            component: ReduxDemo
        },
        {
            path: '/hooks1',
            component: HookDemo1
        },
        {
            path: '/hooks2',
            component: HookDemo2
        },
        {
            path: '/hooks3',
            component: HookDemo3
        },
        {
            path: '/hooks4',
            component: HookDemo4
        }
    ]
};

export default routerConfig;