import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import Videos from "./Videos";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{
        color: "#fff",
      }}
    >
     Search Results for:<span style={{ color: "#F31503" }}> {searchTerm} </span>
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
};

export default SearchFeed;
