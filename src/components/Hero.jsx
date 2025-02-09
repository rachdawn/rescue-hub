import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Hero() {
    return (
        <Box
        // fullWidth
        sx={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/arches.png)',
            backgroundSize: 'fit',
            // backgroundRepeat: 'repeat',
            backgroundColor: 'rgb(239, 239, 238)',
            // color: 'primary.contrastText',
            textAlign: 'center',
            p: 2,
            m: 0,
            mt: 4,
        }}
        >
        <Typography variant="body1" width={'50dvw'} px={2} gutterBottom>
        Happy Tails Rescue Hub was created for the purpose of streamlining the process of connecting adoptable
              dogs with their fur-ever families. As avid dog lovers and supporters of the rescue community, our aim is to
              increase exposure for local rescues by providing a convenient central hub for those who are looking to adopt a furry
              friend. 🐾        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50dvw' }}>

            </Box>
        </Box>
    );
    }

export default Hero;
