/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CommentCard from "../components/blog/CommentCard";
import { Box } from "@mui/material";

const Detail = () => {
  const { getComment, getBlogData } = useBlogCalls();
  const { details } = useSelector((state) => state.blog);
  const [showComment, setShowComment] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const { id } = useParams();
  useEffect(() => {
    getComment("blogs", id);
    getBlogData("blogs")
  }, []);

  return (
    <Box>
      <CommentCard
        setOpen={setOpen}
        open={open}
        setShowComment={setShowComment}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleOpenDelete={handleOpenDelete}
        handleCloseDelete={handleCloseDelete}
        details={details}
        showComment={showComment}
      />
    </Box>
  );
};

export default Detail;
