import style from './startPage.module.css'

const StartPage = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>
        We live in a very interesting time when everything is changing
        dramatically soon, and we are one of the first generations for which an
        environment where you were born is very different from an environment
        when you are old.
      </p>
      <p className={style.text}>
        With respect to the current time this website helps people to explore
        NASA`s expeditions to Mars.
      </p>
      <p className={style.text}>
        The website provide an ability for the user to select a Rover(Curiosity,
        Opportunity, Spirit), Camera(Front, Rear, …) and Sol(Mars day). After
        the Rover, Camere and Sol were selected, the website show the images
        were done by the Rover.
      </p>
    </div>
  )
}

export default StartPage
