import { CssBaseline, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import List from './components/List'

import { getPlacesData } from '../services/api-index'

export default function Home() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  /** Initializes coordinates to user's location on page load
   * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
   */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )

    // note: since coordinates is passed down to the Maps component, which has a function that updates the bounds onChange of the Map center,
    // a consequence of the above code block is that the bounds variable in this component is updated too
  }, [])

  /** Listens for updates in the map centre change */
  useEffect(() => {
    setIsLoading(true)
    getPlacesData(bounds).then((data) => {
      setPlaces(data)
      setIsLoading(false)
    })
  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8} className="h-screen">
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  )
}
