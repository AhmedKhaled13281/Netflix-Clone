import React , {useState , useEffect} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './list.scss'
import ListItem from '../ListItem/listItem'
import axios from '../Api/useApi'
import request from '../Api/request'
const List = () => {
  return (
    <div className="list">
        <div className="wrapper">
                <div className="list-container">
                       <ListItem title="Trending" request={request.fetchTrending}/>
                       <ListItem title="Top Rated" request={request.fetchTopRated}/>
                       <ListItem title="Popular" request={request.fetchPopular}/>
                       <ListItem title="Action" request={request.fetchActionMovies}/>
                       <ListItem title="Comedy" request={request.fetchComedyMovies}/>
                       <ListItem title="Documentaries" request={request.fetchDocumentaries}/>
                       <ListItem title="Horror" request={request.fetchHorrorMovies}/> 
                </div>
        </div>
    </div>
  )
}

export default List