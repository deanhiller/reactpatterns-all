import type { FC } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography
} from '@mui/material';
import {Logout as LogoutIcon} from '@mui/icons-material';
import { Cog as CogIcon } from '../../icons/cog';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { SwitchHorizontalOutlined as SwitchHorizontalOutlinedIcon } from '../../icons/switch-horizontal-outlined';
import {Auth0ContextInterface, useAuth0, User} from "@auth0/auth0-react";
import React from "react";

interface AccountPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

export const AccountPopover: FC<AccountPopoverProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading }: Auth0ContextInterface<User> = useAuth0();

  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user2 = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  // const handleLogout = async (): Promise<void> => {
  //   try {
  //     onClose?.();
  //     await logout();
  //     router.push('/').catch(console.error);
  //   } catch (err) {
  //     console.error(err);
  //     toast.error('Unable to logout.');
  //   }
  // };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 300 } }}
      transitionDuration={0}
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          p: 2,
          display: 'flex'
        }}
      >
        <Avatar
          src={user2.avatar}
          sx={{
            height: 40,
            width: 40
          }}
        >
          <UserCircleIcon fontSize="small" />
        </Avatar>
        <Box
          sx={{
            ml: 1
          }}
        >
          <Typography variant="body1">
            {user2.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Acme Inc
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 1 }}>
        {/*<NextLink*/}
        {/*  href="/dashboard/social/profile"*/}
        {/*  passHref*/}
        {/*>*/}
          <MenuItem component="a">
            <ListItemIcon>
              <UserCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={(
                <Typography variant="body1">
                  Profile
                </Typography>
              )}
            />
          </MenuItem>
        {/*<NextLink*/}
        {/*  href="/dashboard/account"*/}
        {/*  passHref*/}
        {/*>*/}
          <MenuItem component="a">
            <ListItemIcon>
              <CogIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={(
                <Typography variant="body1">
                  Settings
                </Typography>
              )}
            />
          </MenuItem>
        {/*<NextLink*/}
        {/*  href="/dashboard"*/}
        {/*  passHref*/}
        {/*>*/}
          <MenuItem component="a">
            <ListItemIcon>
              <SwitchHorizontalOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={(
                <Typography variant="body1">
                  Change organization
                </Typography>
              )}
            />
          </MenuItem>
        <Divider />
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={(
              <Typography variant="body1">
                Logout
              </Typography>
            )}
          />
        </MenuItem>
      </Box>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};
