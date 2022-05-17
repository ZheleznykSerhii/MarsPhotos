import axios from 'axios'

export const allPhotosOnPage = async (roverValue, solValue, page, camera) => {
  const result = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverValue}/photos?sol=${solValue}&page=${page}${camera}&api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6`
  )
  return result.data.photos
}

export const allPhotosPerDay = async (roverValue, solValue, camera) => {
  const result = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverValue}/photos?sol=${solValue}${camera}&api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6`
  )
  return result.data.photos
}

export const ManifestOfRover = async (roverValue) => {
  const result = await await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverValue}/?api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6`
  )
  return result.data.photo_manifest
}

export const fetchListOfCameras = async (roverValue, solValue) => {
  const result = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverValue}/photos?sol=${solValue}$&api_key=eLSCRoaG8ua5s8xYkW4BGdTEU256VJkOFmSrIhO6`
  )
  return result.data.photos
}
