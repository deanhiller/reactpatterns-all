import { Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { Auth0Login } from '../../components/authentication/auth0-login';
import { JWTLogin } from '../../components/authentication/jwt-login';
import { Logo } from '../../components/logo';
import { useAuth } from '../../hooks/use-auth';
import {NavLink} from "react-router-dom";

type Platform = 'Amplify' | 'Auth0' | 'Firebase' | 'JWT';

const Login = () => {
  //const router = useRouter();
  const { platform }: { platform: Platform } = useAuth();
  //const { disableGuard } = router.query;

  return (
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: '60px',
              md: '120px'
            }
          }}
        >
          <Card
            elevation={16}
            sx={{ p: 4 }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <NavLink
                  to={"/"}
              >
                <a href={"/"}>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40
                    }}
                  />
                </a>
              </NavLink>
              <Typography variant="h4">
                Log in
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Predictive Project Management
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
              {platform === 'Auth0' && <Auth0Login />}
              {platform === 'JWT' && <JWTLogin />}
            </Box>
            <Divider sx={{ my: 3 }} />
            <div>
              <NavLink
                to={
                  '/register'
                }
              >
                <Link
                  color="textSecondary"
                  variant="body2"
                >
                  Create new account
                </Link>
              </NavLink>
            </div>
              <Box sx={{ mt: 1 }}>
                <NavLink
                  to={
                      '/authentication/password-recovery'
                  }
                >
                  <Link
                    color="textSecondary"
                    variant="body2"
                  >
                    Forgot password
                  </Link>
                </NavLink>
              </Box>
          </Card>
        </Container>
      </Box>
  );
};

export default Login;
