import { Copyright } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Link, Stack, Typography } from '@mui/material';
import { BACKEND, FRONTEND, FULLSTACK, data } from '../data/data';
import { useState } from 'react';
function Projetos() {

  const cards = data;
  const [renderCards, setRenderCards] = useState(cards);

  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const currentValue = e.currentTarget.textContent;
    switch (currentValue) {
      case 'Front-end':
        const newValue = cards.filter((card) => card.type === FRONTEND);
        setRenderCards(newValue);
        break;
      case 'Back-end':
        const newValue2 = cards.filter((card) => card.type === BACKEND);
        setRenderCards(newValue2);
        break;
      default: setRenderCards(cards);
    }
  };


  return (
    <div>
        <Box
          sx={ {
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          } }
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Projetos
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Aqui, compartilho projetos que expressam minha
              busca por criatividade e inovação.
              <br />
              Espero que goste!
            </Typography>
            <Stack
              sx={ { pt: 4 } }
              direction="row"
              spacing={ 2 }
              justifyContent="center"
            >
              <Button
                onClick={ (e) => handleClick(e) }
                variant="contained"
              >
                Front-end

              </Button>
              <Button
                onClick={ (e) => handleClick(e) }
                variant="outlined"
              >
                Back-end

              </Button>
              <Button
                onClick={ (e) => handleClick(e) }
                variant="contained"
              >
                Todos

              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={ { py: 8 } } maxWidth="lg">
          <Grid container spacing={ 4 }>
            {renderCards.map((card) => (
              <Grid item key={ card.id } xs={ 12 } sm={ 6 } md={ 4 }>
                <Card
                  sx={ { height: '100%', display: 'flex', flexDirection: 'column' } }
                >
                  <CardMedia
                    component="div"
                    sx={ {
                      pt: '50%',
                    } }
                    image={ card.image }
                  />
                  <CardContent sx={ { flexGrow: 1 } }>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <Typography variant="body1" component="h2" color={'text.secondary'}>
                      Tecnologias:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.tecnologies}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <a href={ card.url}>
                    <Button size="small" >Ver no github</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      {/* Footer */}
      <Box sx={ { bgcolor: 'background.paper', p: 6 } } component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>

      </Box>
    </div>
  );
}

export default Projetos;
