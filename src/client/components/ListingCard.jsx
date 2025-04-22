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

export default function ListingCard( {listing} ) {
  return (
    <Card key={listing?.id} sx={{ width: 310 }}>
      <CardMedia
        component="img"
        alt="adoptable dog"
        height="180"
        image={listing?.photo_url || "/dog-silhouette-330x140.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {listing?.name || 'Name Unknown'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {listing?.breed || 'Unknown Breed'} | {listing?.age || 'Unknown Age'} | ${listing?.adoption_fee || 'Unknown Fee'}
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

ListingCard.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    breed: PropTypes.string,
    age: PropTypes.string,
    adoption_fee: PropTypes.string,
    description: PropTypes.string,
    photo_url: PropTypes.string,
    // add other listing properties here if needed
  }),
};