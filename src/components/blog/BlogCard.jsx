import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import Typography from "@mui/material/Typography";
import moment from "moment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, ListItemButton, Paper } from "@mui/material";
import { flex1, flex } from "../../style/globalStyle";
import useBlogCalls from "../../hooks/useBlogCalls";


export default function BlogCard({ item }) {
  // console.log(item)

  const convertRelativeTime = (date) => {
    return date.slice(0, 10) + " " + date.slice(11, 19);
  };
  const convertedRelativeTime = (date) => {
    return moment(date).fromNow();
  };
  const { postBlogsLike } = useBlogCalls();
  return (
    <Paper
      elevation={10}
      sx={{
        minWidth: "300px",
        p: 2,
        width: "250px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#e9c8a0",
        margin:"auto",
      }}
    >
      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: "130px" }}
        image={item?.image}
        title={item?.title}
        component="img"
      />
      
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "purple", textAlign: "center", fontWeight: "bold" }}
        >
          {item?.title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {item.content.substring(0, 60) + "..."}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {item.category_name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {/* {blog.publish_date} */}
          {convertRelativeTime(item.publish_date)}
        </Typography>{" "}
        <Typography gutterBottom variant="body2" component="div">
          {convertedRelativeTime(item.publish_date)}
        </Typography>{" "}
      </CardContent>
      <CardActions sx={flex}>
        <AccountCircleTwoToneIcon
          sx={{ color: "darkblue", fontSize: "2.5rem" }}
        />
        <Typography gutterBottom variant="h6" component="div">
          {item.author}
        </Typography>
      </CardActions>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={flex1}>
          <Box sx={flex1}>
            <FavoriteBorderIcon
              onClick={() => postBlogsLike("likes", item.id)}
            />
            <Typography variant="h6">{item.likes}</Typography>
          </Box>
          <Box sx={flex1}>
            <ChatBubbleOutlineIcon />
            <Typography variant="h6">{item.comment_count}</Typography>
          </Box>
          <Box sx={flex1}>
            <VisibilityOutlinedIcon />
            <Typography variant="h6">{item.post_views}</Typography>
          </Box>
        </Box>
        <Box>
          {/* <Button
            onClick={() => navigate(`detail/${item.id}`, { state: item })}
            // onClick={() => navigate(`my-blogs/detail/${blog.id}`, { state: blog })}
            size="small"
            sx={{ backgroundColor: "#161D6F", color: "white" }}
          >
            READ ME
          </Button> */}
 <ListItemButton to={`detail/${item.id}`} sx={{ backgroundColor: "#3440c0", color: "white",borderRadius:"1rem" }}>
          Read More
        </ListItemButton>
        </Box>
      </CardActions>
    </Paper>
  );
}
