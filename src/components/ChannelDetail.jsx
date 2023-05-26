import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import  Videos  from "./Videos";
import  ChannelCard  from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [vedios, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(90deg,rgba(0,238,247,1)0%,rgba(206,3,184,1)100%,rgba(0,212,255,1)100%)",
          zIndex:10,
          height:'300px'
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop={'-110px'}/>
    </Box>
  );
};

export default ChannelDetail;
