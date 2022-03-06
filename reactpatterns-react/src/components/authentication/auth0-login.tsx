import { useState } from 'react';
import type { FC } from 'react';
import { Box, Button, FormHelperText } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

export const Auth0Login: FC = (props) => {
  const { loginWithRedirect } = useAuth0();
  const [error, setError] = useState<string | null>(null);

  return (
    <div {...props}>
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
          onClick={() => loginWithRedirect()}
          variant="contained"
        >
          Log In
        </Button>
      </Box>
    </div>
  );
};
