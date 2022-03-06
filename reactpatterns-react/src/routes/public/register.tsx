import { Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { Auth0Register } from '../../components/authentication/auth0-register';
import { Logo } from '../../components/logo';
import { useAuth } from '../../hooks/use-auth';

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
                <a href={"/"}>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40
                    }}
                  />
                </a>
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
                      <Link href={'/login'}
                          color="textPrimary"
                          variant="body2"
                      >
                          Already have an account?
                      </Link>
              </div>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
                <Auth0Register />
            </Box>
            <Divider sx={{ my: 3 }} />
              <div>
                      <Link href={'/login'}
                          color="textPrimary"
                          variant="body2"
                      >
                          Already have an account?
                      </Link>
              </div>
          </Card>
        </Container>
      </Box>
  );
};

export default Register;
