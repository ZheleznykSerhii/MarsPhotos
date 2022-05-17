import { useEffect, useState } from 'react'
import {
  allPhotosOnPage,
  allPhotosPerDay,
  ManifestOfRover,
  fetchListOfCameras,
} from './api'
import DataNotFoundPhone from './dataNotFound/dataNotFoundPhone'
import HeaderPhone from './header/HeaderPhone'
import Loader from './loader'
import PhotoGalleryMobile from './photosGallery/photosGalleryMobile'
import StartPageMobile from './startPage/startPageMobile'

const MobileVersion = () => {
  const [roverValue, setRoverValue] = useState('curiosity')
  const [camera, setCamera] = useState('All')
  const [page, setPage] = useState(1)
  const [cards, setCards] = useState([])
  const [сuriosityManifest, setCuriosityManifestosts] = useState([])
  const [solValue, setSolValue] = useState('')
  const [pagination, setPagination] = useState([])
  const [currentData, setCurrentData] = useState('All')
  const [loader, isLoader] = useState(false)
  const [screenWidth, setScreenWidth] = useState()
  const [uniqueCamears, setUniqueCamears] = useState([])

  const cameras = uniqueCamears.map((data) => {
    return data.camera.name
  })
  const unique = [...new Set(cameras)]

  const handleChange = (e) => {
    const data = e.target.value
    setRoverValue(data)
  }

  const handleCamera = (e) => {
    const data = e.target.value
    data !== 'All' ? setCamera(`&camera=${data}`) : setCamera('')
    setCurrentData(data)
  }

  const handleSol = (e) => {
    const data = e.target.value
    setSolValue(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await allPhotosOnPage(roverValue, solValue, page, camera)
      setCards(data)
      isLoader(false)
    }

    isLoader(true)
    fetchData()
  }, [roverValue, solValue, camera, page])

  useEffect(() => {
    const fetchData = async () => {
      await allPhotosPerDay(roverValue, solValue, camera).then((data) =>
        setPagination(data)
      )
      isLoader(false)
    }
    isLoader(true)
    fetchData()
  }, [roverValue, solValue, camera])

  useEffect(() => {
    const fetchData = async () => {
      const data = await ManifestOfRover(roverValue)
      isLoader(false)
      setCuriosityManifestosts(data)
    }
    isLoader(true)
    fetchData()
    setPage(1)
  }, [roverValue])

  useEffect(() => {
    setPage(1)
  }, [solValue])

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [screenWidth])

  useEffect(() => {
    const fetchData = async () => {
      await fetchListOfCameras(roverValue, solValue).then((data) =>
        setUniqueCamears(data)
      )
      isLoader(false)
    }
    isLoader(true)
    fetchData()
  }, [roverValue, solValue, page])

  useEffect(() => {
    isLoader(true)
    setCamera('All')
    setCurrentData('All')
    isLoader(false)
  }, [roverValue, solValue])

  useEffect(() => {
    setSolValue('')
  }, [roverValue])

  useEffect(() => {
    setPage(1)
  }, [currentData])

  return (
    <>
      <HeaderPhone
        handleChange={handleChange}
        сuriosityManifest={сuriosityManifest}
        handleCamera={handleCamera}
        handleSol={handleSol}
        solValue={solValue}
        roverValue={roverValue}
        currentData={currentData}
        unique={unique}
      />

      {loader ? (
        <Loader />
      ) : cards.length > 0 ? (
        <PhotoGalleryMobile
          posts={cards}
          pagination={pagination}
          page={page}
          setPage={setPage}
        />
      ) : solValue ? (
        <DataNotFoundPhone
          roverValue={roverValue}
          solValue={solValue}
          сuriosityManifest={сuriosityManifest}
        />
      ) : (
        <StartPageMobile />
      )}
    </>
  )
}

export default MobileVersion
