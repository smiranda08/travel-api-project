import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import Rating from '@mui/material'

const Map = ({ setCoordinates, coordinates, setBounds }) => {
  const isMobile = useMediaQuery('(min-width:600px)')
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
        {/* insert a react components here  */}
      </GoogleMapReact>
    </div>
  )
}

export default Map
