/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { flexColumnPage, iconStyle } from "../style/globalStyle";
import logo from "../assets/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';


const About = () => {
  const icons = [
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/ilkay-basboga/",
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/ilkaybasboga",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/i_basboga",
    },
   
  ];
  return (
    <div>
      <Paper
        elevation={20}
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: 40,
          height: "30rem",
          width: "80%",
          backgroundColor: "#FCC8D1",
          borderRadius: "2rem",
        }}
      >
        <Box component="form" sx={flexColumnPage}>
          <ImageListItem
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: 80,
              height: 50,
              mt: 2,
            }}
        
          >
            <img src={logo} />
          </ImageListItem>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "purple", mt: 10 }}
          >
            ilkaybasboga
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ margin: "auto" }}>
            Danke!!! Clarusway
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <List sx={{ display: "flex" }}>
              {icons?.map((item, index) => (
                <ListItem key={index}>
                  <ListItemButton to={item.url} target="_blank" sx={iconStyle}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default About;
