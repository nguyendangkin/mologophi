import Home from '../pages/Home';
import Login from '../pages/Login';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import Photos from '../pages/Photos';
import School from '../pages/School';

import { HeaderOnly } from '../components/Layout';
import Shopping from '../pages/Shopping';
import Magazine from '../pages/Magazine';
import Competition from '../pages/Competition';
import Events from '../pages/Events';
import Homes from '../pages/Homes';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/upload', component: Upload, layout: null },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/photos', component: Photos },
    { path: '/school', component: School },
    { path: '/shopping', component: Shopping },
    { path: '/magazine', component: Magazine },
    { path: '/competition', component: Competition },
    { path: '/events', component: Events },
    { path: '/homes', component: Homes },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '*', component: NotFound },
];

export const privateRoutes = [];
