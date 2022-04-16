import React , {useState , useEffect} from 'react'
import axios from '../Api/useApi'
import request from '../Api/request'
import styled from 'styled-components'
import classes from './banner.module.css';

const BannerContainer = styled.section`
  background-image: ${props => props.bgImge};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Banner = () => {
    const [movie , setMovie] = useState([]);

    useEffect(() => {
          const fetchData = async () => { 
              const response = await axios.get(request.fetchNetflixOriginals);
              setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
              return response;
            }
          fetchData(); 
    }, [])
    console.log(movie)
  return (
    <BannerContainer bgImge={`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}>
      <div className={classes['banner-content']}>
        <h1 className={classes['banner-title']}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes['banner-buttons']}>
          <button className={classes['banner-btn']}>Play</button>
          <button className={classes['banner-btn']}>My List</button>
        </div>
        <h1 className={classes['banner-description']}>
          {movie?.overview}
        </h1>
      </div>
    </BannerContainer>
  )
}

export default Banner