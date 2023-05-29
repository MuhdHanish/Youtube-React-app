import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
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
  const bannerUrl = channelDetail?.brandingSettings?.image?.bannerExternalUrl;
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: bannerUrl
              ? `url(${bannerUrl})`
              : "linear-gradient(90deg,rgba(0,238,247,1)0%,rgba(206,3,184,1)100%,rgba(0,212,255,1)100%)",
              backgroundPosition:'center',
              zIndex: 10,
              width:'100%',
              backgroundRepeat:'no-repeat',
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={vedios} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
