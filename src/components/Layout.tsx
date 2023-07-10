import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

function Layout() {
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
          <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
            João lucas
          </Typography>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Projetos</Button>
          <Button color="inherit">Contato</Button>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
