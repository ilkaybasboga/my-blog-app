/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert, Box, Grid, Typography } from "@mui/material";
import loadingGif from "../assets/loading.gif";
import BlogCard from "../components/blog/BlogCard";
import useBlogCalls from "../hooks/useBlogCalls";



const Dashboard = () => {
  // const { login } = useAuthCall();

  const { getBlogData } = useBlogCalls();
  const { blogs, loading, error } = useSelector((state) => state.blog);
  // console.log(blogs);
  useEffect(() => {
    getBlogData("blogs");
  }, []);
  return (
    <div>
      <>
        <Typography
          variant="h3"
          color="white"
          sx={{
            display: "flex",
            backgroundColor: "#074f51",
            justifyContent: "center",
          }}
        >
          BLOGS
        </Typography>
        {loading && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <img src={loadingGif} />
          </Box>
        )}
        {error && (
          <Typography variant="h2" color="error">
            {error}
          </Typography>
        )}
        {!loading && !blogs?.length && (
          <Alert severity="warning" sx={{ mt: 4, width: "50%" }}>
           Ooops!!! Unfortunately something went wrong...
          </Alert>
        )}
        {blogs?.length > 0 && (
          <Grid
            container
            sx={{
              gap: 2,
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
            m={4}
          >
            {blogs?.map((item) => (
              <Grid item key={item.id} sx={{}}>
                <BlogCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </>
    </div>
  );
};

export default Dashboard;
