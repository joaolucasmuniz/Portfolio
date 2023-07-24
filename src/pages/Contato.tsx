import { Box, Grid, IconButton,
  Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contato() {
  const TELEFONE = '(19) 99746-2506';
  const EMAIL = 'joaolcmuniz@gmail.com';
  const LINKEDIN = 'https://www.linkedin.com/in/joao-lucas-muniz';
  const GITHUB = 'https://github.com/joaolucasmuniz';

  type Copy = {
    copy: string;
  };
  function handleClick(text: Copy) {
    const { copy } = text;
    navigator.clipboard.writeText(copy);
  }

  return (
    <Box
      sx={
      {
        display: 'flex',
        justifyContent: 'center',
        height: '93vh',
      }
    }
    >
      <Grid
        container
        sx={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }
      }
      >
        <Grid
          item
          xs={ 12 }
          sm={ 6 }
          sx={ { display: 'flex',
            justifyContent: 'center',

          } }
        >
          <Typography variant="h2">
            Onde me encontrar?
          </Typography>
        </Grid>
        <Grid
          item
          xs={ 12 }
          sm={ 6 }
          sx={ {
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-start' },

          } }
        >
          <List>
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={ () => handleClick({ copy: TELEFONE }) }
                  aria-label="copy"
                >
                  <ContentCopyOutlinedIcon />
                </IconButton>
          }
            >
              <ListItemIcon><LocalPhoneOutlinedIcon /></ListItemIcon>
              <Link href={ `https://api.whatsapp.com/send?phone=${TELEFONE}&text=Ol%C3%A1%2C%20Jo%C3%A3o%20Lucas%2C%20tudo%20bem%3F%20Gostaria%20de%20conversar%20sobre%20o%20seu%20curr%C3%ADculo.` } target="_blank" rel="noopener noreferrer">
                <ListItemText primary="WhatsApp" secondary={ TELEFONE } />
              </Link>
            </ListItem>

            <ListItem
              secondaryAction={
                <IconButton
                  onClick={ () => handleClick({ copy: EMAIL }) }
                  aria-label="copy"
                >
                  <ContentCopyOutlinedIcon />
                </IconButton>
          }
            >
              <ListItemIcon><EmailOutlinedIcon /></ListItemIcon>
              <Link href={ `mailto:${EMAIL}` } target="_blank" rel="noopener noreferrer">
                <ListItemText primary="E-mail" secondary={ EMAIL } />
              </Link>
            </ListItem>

            <ListItem
              secondaryAction={
                <IconButton
                  onClick={ () => handleClick({ copy: LINKEDIN }) }
                  aria-label="copy"
                >
                  <ContentCopyOutlinedIcon />
                </IconButton>
          }
            >
              <ListItemIcon><LinkedInIcon /></ListItemIcon>
              <Link href={ LINKEDIN } target="_blank" rel="noopener noreferrer">
                <ListItemText primary="Linkedin" secondary={ LINKEDIN } />
              </Link>
            </ListItem>

            <ListItem
              secondaryAction={
                <IconButton
                  onClick={ () => handleClick({ copy: GITHUB }) }
                  aria-label="copy"
                >
                  <ContentCopyOutlinedIcon />
                </IconButton>
          }
            >
              <ListItemIcon><GitHubIcon /></ListItemIcon>
              <Link href={ GITHUB } target="_blank" rel="noopener noreferrer">
                <ListItemText primary="Github" secondary={ GITHUB } />
              </Link>
            </ListItem>

          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Contato;
