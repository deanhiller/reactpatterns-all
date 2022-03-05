import { useState } from 'react';
import type { FC } from 'react';
import { Box, Button, FormHelperText } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';

export const Auth0Register: FC = (props: React.PropsWithChildren<{}>) => {
  const isMounted = useMounted();
  //const router = useRoutes();
  const { loginWithRedirect } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (): Promise<void> => {
    try {
      await loginWithRedirect({
        returnUrl: '/dashboard'
      });
    } catch (err:any) {
      console.error(err);

      if (isMounted()) {
        setError(err.message);
      }
    }
  };

  return (
    <div {...props} id={"tempDean"}>
      {error && (
        <Box sx={{ my: 3 }}>
          <FormHelperText error>
            {error}
          </FormHelperText>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          onClick={handleRegister}
          variant="contained"
        >
          Register
        </Button>
      </Box>
    </div>
  );
};
