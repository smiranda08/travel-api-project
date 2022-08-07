import { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => {
    setAutocomplete(autoC)
  }

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({ lat, lng })
  }

  return (
    <AppBar position="static">
      <div className="">
        <Toolbar className="flex justify-between">
          <Typography variant="h5">Travel Advisor</Typography>
          <Box display="flex" className="items-center">
            <Typography variant="h6" className="mr-6">
              Explore new places
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className="flex justify-start space-x-2 rounded bg-white p-1 bg-opacity-20 ">
                <div className="flex items-center">
                  <SearchIcon />
                </div>
                <InputBase
                  className="font-base text-white"
                  placeholder="Search..."
                />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  )
}

export default Header
