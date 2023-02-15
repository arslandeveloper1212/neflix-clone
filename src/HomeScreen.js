import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Navbaar from './Navbaar'
import Row from './Row'
import Requests from './Requests'

const HomeScreen = () => {
  return (
    <div>
     <div className='home_screen'>
    {/* Navbar */}
      <Navbaar/>
      {/* Banner */}
      <Banner/>
  {/* Row */}

  <Row title="NetflixOriginals"
  fetchUrl= {Requests.requests.fetchNetflixOriginals}
    isLargeRow
  />
  <Row title= "TopRated"
  fetchUrl= {Requests.requests.fetchTopRated}
  />
  <Row title = "ActionMovies"
  fetchUrl= {Requests.requests.fetchActionMovies}
  />

  <Row title = "ComedyMovies"
  fetchUrl= {Requests.requests.fetchComedyMovies}
  />

  <Row title = "HorrorMovies"
  fetchUrl= {Requests.requests.fetchHorrorMovies}
  />

  <Row title = "RomanceMovies"
  fetchUrl= {Requests.requests.fetchRomanceMovies}
  />
  
  <Row title = "Documentaries"
  fetchUrl= {Requests.requests.fetchDocumentaries}
  />

     </div>
    </div>
  )
}

export default HomeScreen
