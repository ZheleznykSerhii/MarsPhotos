import { useState } from 'react'
import PaginationComponent from '../footer'
import style from './photosGalleryMobile.module.css'

const PhotoGalleryMobile = ({ posts, pagination, page, setPage, cards }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(12)

  return (
    <>
      <div className={style.flexContainer}>
        {posts.slice(0, showAllPhotos).map((item) => (
          <div key={item.id} className={style.card}>
            <img
              src={item.img_src}
              alt="Mars photos"
              className={style.cardImg}
            />{' '}
            <div className={style.cardTexts}>
              <div>
                <div className={style.cardParams}>Rover: {item.rover.name}</div>
                <div className={style.cardParams}>
                  Camera: {item.camera.full_name}
                </div>
              </div>
              <div>
                <div className={style.cardParams}>Sol: {item.sol}</div>
                <div className={style.cardParams}>
                  Earth date: {item.earth_date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.flexButton}>
        {showAllPhotos === 12 && pagination.length > 12 && (
          <button onClick={() => setShowAllPhotos(25)} className={style.button}>
            Load more
          </button>
        )}
      </div>
      {pagination.length > 24 && showAllPhotos !== 12 && (
        <PaginationComponent
          pagination={pagination}
          page={page}
          setPage={setPage}
          cards={cards}
        />
      )}
    </>
  )
}

export default PhotoGalleryMobile
