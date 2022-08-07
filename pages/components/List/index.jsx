import { Place } from '@mui/icons-material'
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'

import { useState } from 'react'
import PlaceDetails from '../PlaceDetails'

const List = ({ places }) => {
  const [type, setType] = useState('')
  const [rating, setRating] = useState('')

  return (
    <div className="flex flex-col list-container p-6 space-y-4 h-[100vh]">
      <p className="text-3xl">Restaurents, Hotels and Attractions nearby</p>
      <div id="container-for-form-controls" className="">
        <FormControl className="w-1/4" size="small">
          <InputLabel id="select-label" className="bg-white">
            Type
          </InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w-1/4" size="small">
          <InputLabel className="bg-white">Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={3} className="overflow-auto">
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
