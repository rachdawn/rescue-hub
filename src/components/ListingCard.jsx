import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export default function ListingCard() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        alt="adoptable dog"
        height="170"
        image="/dog-silhouette-330x140.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dog Name
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Dog Description
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
