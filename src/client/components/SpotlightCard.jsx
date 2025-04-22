import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

export default function SpotlightCard( {dog} ) {
  return (
    <Card key={dog?.id || 0} sx={{ width: 310 }}>
      <CardMedia
        component="img"
        alt="adoptable dog"
        height="180"
        image={dog?.photo_url || "/dog-silhouette-330x140.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dog?.name || 'Name Unknown'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {dog?.breed || 'Breed Unknown'} | {dog?.age || 'Age Unknown'} | ${dog?.adoption_fee || 'Adoption Fee Unknown'}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton size="small">
            <FavoriteBorderIcon />
        </IconButton>
        <Button size="small">More Information</Button>
      </CardActions>
    </Card>
  );
}

SpotlightCard.propTypes = {
  dog: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    breed: PropTypes.string,
    age: PropTypes.string,
    adoption_fee: PropTypes.string,
    description: PropTypes.string,
    photo_url: PropTypes.string,
    // add other listing properties here if needed
  }), // Make dog prop optional
};