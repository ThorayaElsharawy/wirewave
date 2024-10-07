import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import SubHeader from '../components/sub-header';
import Header from '../components/header';
import { AuthContext } from '../hooks/useAuth';

type RouterContext = {
    authentication: AuthContext
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <div className='overflow-hidden'>
            <SubHeader />
            <Header />
            <Outlet />
        </div>
    ),
});


