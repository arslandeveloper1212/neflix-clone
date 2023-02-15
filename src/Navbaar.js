import React from 'react'
import './Navbaar.css'

const Navbaar = () => {
//   const [show, setShow] = useState(false);

//   const transitionNavbar = () => {
//     if(window.scrollY > 100){
//       setShow(true);
//     }else{
//       setShow(false);
//     }
//   }

//   useEffect = (() =>{
//  window.addEventListener("scroll" , transitionNavbar);
//  return () => window.removeEventListener("scroll" , transitionNavbar);
//   }, [])
  return (
    <div>
      <div className="nav nav_black">
        <div className='navbaar_contents'>
          <img className='netflix_logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />

          <img
            className='netflix_avatar'
            src='https://pbs.twimg.com/media/FbWfoMNWYAAlVqD.png' alt='' />
        </div>

      </div>
    </div>
  )
}

export default Navbaar
