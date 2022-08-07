import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@mui/material'
import {
  LocationOn,
  NoiseAwareSharp,
  Phone,
  PlaceSharp,
  Title,
} from '@mui/icons-material'
import { Rating } from '@mui/material'

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <Card elevation={6}>
      <CardMedia
        title={place?.name}
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place?.name}
        </Typography>
        <Box className="flex justify-between">
          <Rating value={Number(place?.rating)} readOnly size="small" />
          <Typography gutterBottom variant="subtitle1">
            out of {place?.num_reviews} reviews
          </Typography>
        </Box>
        <Box className="flex justify-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.price_level}
          </Typography>
        </Box>
        <Box className="flex justify-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award, i) => (
          <Box key={i} className="flex justify-between items-center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="substitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className="mr-1 mt-2" />
        ))}

        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className="mt-2"
          >
            <LocationOn /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className="mt-2"
          >
            <Phone /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place?.web_url, '_blank')}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place?.website, '_blank')}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
