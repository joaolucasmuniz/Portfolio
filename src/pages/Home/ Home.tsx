import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import './Home.css';

function Home() {
  return (
    <div className="container-home">
      <div className="container">
        <div className="container-infos">
          <Typography variant="h1">Olá!</Typography>
          <Typography variant="h3">
            Prazer, eu sou
            <br />
            João Lucas
          </Typography>
          <Typography variant="h5">Desenvolvedor Full-Stack</Typography>
          <List>
            <ListItem>
              <ListItemIcon><FmdGoodOutlinedIcon /></ListItemIcon>
              <ListItemText>Tenho 21 anos e moro no interior de São Paulo.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon><SchoolOutlinedIcon /></ListItemIcon>
              <ListItemText>Estou cursando análise e desenvolvimento de sistemas na USF</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon><SchoolOutlinedIcon /></ListItemIcon>
              <ListItemText>Estou estudando desenvolvimento web full-stack na trybe.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon><BeenhereOutlinedIcon /></ListItemIcon>
              <ListItemText>
                Tenho experiência com desenvolvimento web, utilizando as tecnologias
                ReactJS, HTML, CSS, JavaScript, TypeScript, Git e GitHub.
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div className="container-img">
          <img src="https://media.licdn.com/dms/image/D4E03AQHRqCqK8SvfXg/profile-displayphoto-shrink_800_800/0/1680015604997?e=1695859200&v=beta&t=Z1BGFAMjQC_m_aATTWOHaZA15PLgBJu3rMlzl8g82jY" alt="foto de perfil" />
        </div>
      </div>
    </div>

  );
}
export default Home;
