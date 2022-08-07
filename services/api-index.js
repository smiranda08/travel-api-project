import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const getPlacesData = async (bounds) => {
  console.log('getting places data')
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
      'X-RapidAPI-Key': '6f8f765509msh7807603306cb3b3p13ada1jsn58716dcbdbe4',
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
