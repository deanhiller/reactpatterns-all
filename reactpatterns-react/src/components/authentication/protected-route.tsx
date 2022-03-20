import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/material';

    export const ProtectedRoute = ({ component, ...args }: any) => (
        <Route
            component={withAuthenticationRequired(component, {
                onRedirecting: () => <CircularProgress />,
            })}
            {...args}
        />
    );
