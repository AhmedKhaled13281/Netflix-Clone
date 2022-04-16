import React , {useState , useEffect , useRef}from 'react'
import axios from '../Api/useApi'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import './listItem.scss'
import { MoveUpRounded } from '@mui/icons-material';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const ListItem = ({request , title}) => {
    const ref = useRef()
    const [movie , setMovie] = useState([]);
    const [slideNumber , setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [trailler , setTrailler] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(request);
            setMovie(response.data.results);
            return response
        }
        fetchData()
    },[request]);

    const renderMovies = () => {
      
        return movie.map((movie) => {
            return (
           <div className='item-info' key={movie.id}> 
              <img onClick={() => handleTrailler(movie)} className="row-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>

           <div  className="row-details">    
              <div className="icons">
                <PlayArrowIcon />
                <AddIcon />
                <ThumbUpOutlinedIcon />
                <ThumbDownAltOutlinedIcon />
              </div>
              <div className="itemInfoTop">
                  <h3 className="movie-title">{movie.original_title || movie.name}</h3>
                  <span className="movie-rate">Rating : {movie.vote_average}</span>
                 
              </div>
              <div className="description">
                {movie.overview}
              </div>
              <span className="movie-date">Date : {movie.release_date}</span>
             </div>
           </div>
                       
            )
        })
    }
    console.log(movie)

    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = ref.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber >= 0) {
        setSlideNumber(slideNumber - 1);
        ref.current.style.transform = `translateX(${300 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        ref.current.style.transform = `translateX(${-400 + distance}px)`;
      }
    };
    const handleTrailler = (movie) => {
        if(trailler){
          setTrailler("")
        }else {
          movieTrailer( movie?.original_title || movie?.title || movie?.name || "")
          .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailler(urlParams.get('v'));
          })
          .catch(error => console.log(error))
        }
    }
  return (
    <div className="row">
        <h1>{title}</h1>
        <ArrowBackIosIcon style={{display : !isMoved && "none"}}  className="slideArrow left" onClick={() => handleClick('left')}/>
        <div ref={ref} className="row-posters">
            {renderMovies()}
        </div> 
        <div className="video">
            {trailler && <Youtube  videoId={trailler} opts={{
                height: "390",
                width: "100%",
                playerVars: {autoplay : 1}
              }} /> }
       </div>
        <ArrowForwardIosIcon className="slideArrow right" onClick={() => handleClick('right')}/>

    </div>
  )
}

export default ListItem