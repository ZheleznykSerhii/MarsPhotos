import style from './dataNotFound.module.css'

const DataNotFound = ({ solValue, roverValue, сuriosityManifest }) => {
  return (
    <div className={style.container}>
      <p className={style.head}>Nothing was found for your request</p>
      <p className={style.reason}>
        {roverValue} didn't send any photos for sol number {solValue}.{' '}
        {solValue > сuriosityManifest.max_sol &&
          `Please Note that the biggest value for Sol  ${сuriosityManifest.max_sol}`}
        {solValue < 0 && `Sol can not be less than 1`}
      </p>
    </div>
  )
}

export default DataNotFound
