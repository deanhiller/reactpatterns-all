import React, {PropsWithChildren, useState } from 'react';
import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from '../../components/dashboard/dashboard-navbar';
import { DashboardSidebar } from '../../components/dashboard/dashboard-sidebar';
import { Box } from '@mui/material';
import {Outlet} from "react-router-dom";

interface DashboardLayoutProps {
    children?: ReactNode;
}

const DashboardLayoutRoot = styled('div')(
    ({ theme }) => ({
        display: 'flex',
        flex: '1 1 auto',
        maxWidth: '100%',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 280
        }
    })
);

export default function DashboardLayout(props: PropsWithChildren<DashboardLayoutProps>) {
//export const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
    const { children } = props;
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    <Outlet />
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
            <DashboardSidebar
                onClose={(): void => setIsSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </>
    );
};

