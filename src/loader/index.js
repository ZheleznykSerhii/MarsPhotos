import style from './loader.module.css'

const Loader = () => {
  return (
    <div className={style.flex}>
      <div className={style.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
