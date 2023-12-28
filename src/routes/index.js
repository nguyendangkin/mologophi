import Home from '../pages/Home';
import Login from '../pages/Login';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import Photos from '../pages/Photos';

import { HeaderOnly } from '../components/Layout';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/upload', component: Upload, layout: null },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/photos', component: Photos },
];

export const privateRoutes = [];
