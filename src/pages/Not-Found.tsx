import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box width="80%" textAlign="center">
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Not Found</Typography>
        <Typography margin="1rem" variant="h6">
          Sorry, the page you are looking for does not exist.

        </Typography>

        <Button variant="contained" onClick={ () => navigate('/') }>Home</Button>
      </Box>
    </Box>

  );
}
export default NotFound;
