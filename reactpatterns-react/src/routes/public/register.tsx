import { Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { JWTRegister } from '../../components/authentication/jwt-register';
import { Auth0Register } from '../../components/authentication/auth0-register';
import { Logo } from '../../components/logo';
import { useAuth } from '../../hooks/use-auth';
import {NavLink} from "react-router-dom";

type Platform = 'Amplify' | 'Auth0' | 'Firebase' | 'JWT';

const Register = () => {
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
                  to={'/'}
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
                Register
              </Typography>
                <Typography
                    color="textSecondary"
                    sx={{ mt: 2 }}
                    variant="body2"
                >
                    Predictive Project Management
                </Typography>
            </Box>
              <div>
                  <NavLink
                      style={({ isActive }) => {
                          return {
                              display: "block",
                              margin: "1rem 0",
                              color: isActive ? "red" : "",
                          };
                      }}
                      to={'/login'}
                  >
                      <Link
                          color="textPrimary"
                          variant="body2"
                      >
                          Already have an account?
                      </Link>
                  </NavLink>
              </div>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
                {platform === 'Auth0' && <Auth0Register />}
                {platform === 'JWT' && <JWTRegister />}
            </Box>
            <Divider sx={{ my: 3 }} />
              <div>
                  <NavLink
                      style={({ isActive }) => {
                          return {
                              display: "block",
                              margin: "1rem 0",
                              color: isActive ? "red" : "",
                          };
                      }}
                      to={'/login'}
                  >
                      <Link
                          color="textPrimary"
                          variant="body2"
                      >
                          Already have an account?
                      </Link>
                  </NavLink>
              </div>
          </Card>
        </Container>
      </Box>
  );
};

export default Register;
