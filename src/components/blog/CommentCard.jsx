import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Paper, TextField } from "@mui/material";
import {
  CardBlog,
  btnDetail,
  cardButton,
  iconStyle,
} from "../../style/globalStyle";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useState } from "react";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import UpdateModal from "./UpdateModal";

const CommentCard = ({
  setOpen,
  details,
  handleOpen,
  handleClose,

  open,
  showComment,
  setShowComment,
}) => {
  const {
    author,
    content,
    image,
    likes,

    id,
    comments,
    publish_date,
    comment_count,
    post_views,
  } = details;

  const [info, setInfo] = useState(details);
  const [toggle, setToggle] = useState(false);
  const {  postComment, deleteData } = useBlogCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const { currentUser } = useSelector((state) => state.auth);
  const handleToggle = () => {
    setToggle(!toggle);
    setShowComment(!showComment);
  };

  const handleDelete = () => {
    deleteData("blogs", id);
    console.log(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment("comments", id, {
      ...info,
      post: id,
    });

    setInfo({});
  };

  return (
    <Paper
      elevation={10}
      sx={{
        minWidth: "300px",
        p: 2,
        width: "60%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#e9c8a0",
        margin: "2rem auto",
      }}
    >
      <Card sx={CardBlog}>
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          <img
            height="150"
            width="300"
            src={
              image ? image : "https://i2.milimaj.com/i/milliyet/75/0x0/60ad03ca86b2471cb4d92a8a.jpg"
            }
            alt="img"
          />
        </Typography>
        <CardContent>
          <Typography
            sx={{ textAlign: "justify", minHeight: "120px" }}
            variant="body2"
            color="text.secondary"
          >
            {content}
          </Typography>
          <Typography sx={{ my: 1, fontSize: "0.9rem" }}>
            {publish_date}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "darkgoldenrod",
              mt: "1rem",
            }}
          >
            <FaceIcon />
            {author}
          </Typography>
          <Box sx={iconStyle}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <ThumbUpIcon />
              {likes}
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <MessageIcon onClick={handleToggle} />
              {comment_count}
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <RemoveRedEyeIcon />
              {post_views}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={cardButton}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0",
              mb: "1rem",
            }}
          >
            {details.author === currentUser && (
              <Box
                sx={{
                  // my: 3,
                  display: "flex",
                  gap: 3,
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => {
                    handleOpen();
                    setInfo(info);
                  }}
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Update Blog
                </Button>
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  size="small"
                  color="error"
                >
                  Delete Blog
                </Button>
              </Box>
            )}
            {toggle && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  width: 800,
                  gap: 4,
                }}
                onSubmit={handleSubmit}
                component="form"
              >
                <hr />
                {showComment && <CommentForm comments={comments} id={id} />}
                <TextField
                  label="comments"
                  id={info.post}
                  name="content"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                />

                <Button type="submit" sx={btnDetail} variant="contained">
                  ADD COMMENT
                </Button>
              </Box>
            )}
          </Box>
        </CardActions>

        <UpdateModal
          handleSubmit={handleSubmit}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          setInfo={setInfo}
          info={details}
          handleChange={handleChange}
          setOpen={setOpen}
        />
        {/* <DeleteModal
            open={openDelete}
            handleCloseDelete={handleCloseDelete}
            id={details.id}
            /> */}
      </Card>
    </Paper>
  );
};

export default CommentCard;
