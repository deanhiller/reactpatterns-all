import React from 'react';
import {Outlet, Link} from "react-router-dom";
import {Auth0ContextInterface, useAuth0, User} from "@auth0/auth0-react";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    export default function Dashboard() {
        const { logout } = useAuth0();

        const { user, isAuthenticated, isLoading }: Auth0ContextInterface<User> = useAuth0();

        if (isLoading) {
            return <div>Loading ...</div>;
        }

        return (
        <div>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
                <button onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button>
                {
                    user !== undefined && isAuthenticated && (
                        <div>
                            <img src={user.picture} alt={user.name} />
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    )
                }
            </nav>
            <Outlet />
        </div>
    );
    }
