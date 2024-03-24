import MainContainer from './MainContainer';
import SecContainter from './SecContainter';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovie';
const Browse = () => {

  useNowPlayingMovies()
  return (
   <div>
        <Header/>
        <MainContainer/>
        <SecContainter/>

    </div>
  )
}

export default Browse;