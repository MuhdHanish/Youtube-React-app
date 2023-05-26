import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Stack,Box,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {fetchFromAPI} from '../utils/fetchFromAPI'
import {Videos} from "./Videos"

const VideoDetail = () => {
  const [videoDetails,setVedioDetails] = useState(null)
  const {id} = useParams()
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{setVedioDetails(data?.items[0])})
  },[id])
  if(!videoDetails?.snippet){return <div>Loding...</div>}
  const {snippet:{title,channelId,channelTitle,viewCount}} = videoDetails

  return (
    <Box>
      <Stack direction={{md:'row',xs:'column'}}>
       <Box flex={1}>
        <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
          <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
          <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{
            color:'#fff'}} py={1} px={2}
          >
          <Link to={`/channel/${channelId}`}>
          <Typography variant={{sm:'subtitle1' , md:'h6'}} color='#fff'>
            {channelTitle}
            <CheckCircle sx={{fontSize:'12px',color:'gray',ml:"5px"}}/>
          </Typography>
          </Link>
          <Stack direction="row" gap="20px" alignItems='center'>
            <Typography variant='body1' sx={{opacity:0.7}}>
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
          </Stack>
          </Stack>
        </Box>
       </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail