import {PropsWithChildren, ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import {AppState} from "@auth0/auth0-react/dist/auth0-provider";

interface Auth0ProviderWithHistoryProps {
    children?: ReactNode;
}

export default function Auth0ProviderWithHistory(props: PropsWithChildren<Auth0ProviderWithHistoryProps>) {
    // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const children = props.children

    const navigate = useNavigate();

    const onRedirectCallback = (appState: AppState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain="dev-thlfc87y.us.auth0.com"
            clientId="DCsQKqhOGK3f1JArxGSFrnpcQm2UCyEt"
            redirectUri={window.location.origin +"/dashboard"}
            audience="https://app.ctoteachings.com/predictions"
            scope="read:current_user update:current_user_metadata"
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};
