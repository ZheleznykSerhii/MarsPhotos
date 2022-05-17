import style from './startPage.module.css'

const StartPage = () => {
  return (
    <div className={style.container}>
      <h1>Explore NASA`s expeditions to Mars</h1>
      <p className={style.text}>
        The website provides an ability for the user to select a
        Rover(Curiosity, Opportunity, Spirit), Camera(Front, Rear, …) and
        Sol(Mars day). After the Rover, Camera and Sol were selected, the
        website shows the images were done by the Rover.
      </p>
    </div>
  )
}

export default StartPage
