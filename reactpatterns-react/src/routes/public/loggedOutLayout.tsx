import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Footer } from '../../components/footer';
import { MainNavbar } from '../../components/main-navbar';
import { MainSidebar } from '../../components/main-sidebar';
import {Outlet} from "react-router-dom";

interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayoutRoot = styled('div')(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        height: '100%',
        paddingTop: 64
    })
);

export default function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    return (
        <MainLayoutRoot>
            <MainNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
            <MainSidebar
                onClose={(): void => setIsSidebarOpen(false)}
                open={isSidebarOpen}
            />
            <Outlet />
            <Footer />
        </MainLayoutRoot>
    );
};

