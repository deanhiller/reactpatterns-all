import { useState } from 'react';
import type { FC } from 'react';
import { Box, Button, FormHelperText } from '@mui/material';
import {useAuth0} from "@auth0/auth0-react";

export const Auth0Register: FC = (props: React.PropsWithChildren<{}>) => {
  const { loginWithRedirect } = useAuth0();

  //const router = useRoutes();
  const [error, setError] = useState<string | null>(null);

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
            onClick={() => loginWithRedirect()}
            variant="contained"
        >
          Register
        </Button>
      </Box>
    </div>
  );
};
