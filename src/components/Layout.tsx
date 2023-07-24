import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 2 } }
          />
          <Typography
            onClick={ () => navigate('/') }
            variant="h6"
            component="div"
            sx={ { flexGrow: 1 } }
          >
            {'<DevJoão/>'}
          </Typography>
          <Button
            onClick={ () => navigate('/contato') }
            color="inherit"
          >
            Contato
          </Button>
          <Button
            onClick={ () => navigate('/projetos') }
            color="inherit"
          >
            Projetos
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
