import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
  return (
    <AppBar position="static">
      <div className="">
        <Toolbar className="flex justify-between">
          <Typography variant="h5">Travel Advisor</Typography>
          <Box display="flex" className="items-center">
            <Typography variant="h6" className="mr-6">
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
            <div className="flex justify-start space-x-2 rounded bg-white p-1 bg-opacity-20 ">
              <div className="flex items-center">
                <SearchIcon />
              </div>
              <InputBase
                className="font-base text-white"
                placeholder="Search..."
              />
            </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  )
}

export default Header
