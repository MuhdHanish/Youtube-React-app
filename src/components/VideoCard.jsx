import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
   <Card>
    <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
    <CardMedia
     alt={snippet?.title}
     sx={{width:358,height:180}}
     image={snippet?.thumbnails?.high?.url}/>
    </Link>
   </Card>
  )
};

export default VideoCard;
