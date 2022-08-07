import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const getPlacesData = async (bounds) => {
  console.log('hello', bounds)

  const { ne, sw } = bounds
  const options = {
    method: 'GET',
    params: {
      bl_latitude: sw?.lat,
      tr_latitude: ne?.lat,
      bl_longitude: sw?.lng,
      tr_longitude: ne?.lng,
    },
    headers: {
      'X-RapidAPI-Key': '8486253a80msh305f06e27d75285p187279jsnf9a4027e44c8',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  }
  try {
    // request
    const response = await axios.get(URL, options)
    return response.data.data
  } catch (error) {
    console.log(error)
  }
}

export { getPlacesData }
