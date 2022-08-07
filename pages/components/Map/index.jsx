import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import { Rating } from '@mui/material'

const Map = ({ setCoordinates, coordinates, setBounds, places }) => {
  const isDesktop = useMediaQuery('(min-width:600px)')
  const apiKey = 'AIzaSyAbn_WBgbM69aXq3XFtFgipqoacEIOIW1U'

  const defaultProps = {
    center: { lat: 0, lng: 0 },
    zoom: 14,
  }

  return (
    // Apparently supposed to set container height explicitly
    <div className="h-[85vh] w-full mt-4 shadow-lg">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAbn_WBgbM69aXq3XFtFgipqoacEIOIW1U' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={coordinates}
        options={''}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      >
        {places?.map((place, i) => (
          <div
            key={i}
            className="absolute z-[1] hover:z-[2] hover:border-2"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper
                elevation={3}
                className="w-[100px] p-2 flex flex-col justify-center cursor-pointer"
              >
                <Typography gutterBottom variant="subtitle2">
                  {place.name}
                </Typography>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                  }
                  alt={place.name}
                />
                <Rating value={Number(place?.rating)} readOnly size="small" />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
