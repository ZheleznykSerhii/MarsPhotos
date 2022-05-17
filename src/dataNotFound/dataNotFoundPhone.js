import style from './dataNotFoundPhone.module.css'

const DataNotFoundPhone = ({ solValue, сuriosityManifest, roverValue }) => {
  return (
    <div className={style.container}>
      <p className={style.head}>Nothing was found for your request</p>
      <p className={style.reason}>
        {roverValue} didn't send any photos for sol number {solValue}.{' '}
        {solValue > сuriosityManifest.max_sol &&
          `Please note, that you paste sol nr. ${solValue}, but the largest value is ${сuriosityManifest.max_sol}`}
        {solValue < 0 && `Sol can not be less than 1`}
      </p>
    </div>
  )
}

export default DataNotFoundPhone
