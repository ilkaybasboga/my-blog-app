import { useDispatch } from "react-redux";
import {
  fetchFail,
  getSuccess,
  fetchStart,
  getSuccessDetails,
  getSuccessMyblogs,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import { useNavigate } from "react-router";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();
  const navigate = useNavigate();

  //***************Get All Blogs********************************
  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!*********************Get Comment******************************

  const getComment = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`);

      dispatch(getSuccessDetails({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!*********************My Blogs******************************

  const getMyBlogsData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/?author=${id}`);
      //  console.log(data);
      dispatch(getSuccessMyblogs({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!********************* Get Categories******************************

  const getCategorisData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!-********************* Post Blog******************************

  const postBlogsData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      //! data güncellemek için
      getBlogData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
      // dispatch(fetchFail());
    }
  };

  //!-********************* Post Blog Like******************************

  const postBlogsLike = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly added`);
      getBlogData("blogs");
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  //!-********************* Post Blog Comment******************************

  const postComment = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`api/${url}/${id}/`, info);

      getComment("blogs", id);
      dispatch(getComment({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!-********************* Put Blog******************************

  const putData = async (url, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(`api/${url}/${info.id}/`, info);
      getBlogData("blogs");
      dispatch(getSuccess({ data }));
      navigate(-1);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //?-********************* Delete Blog ******************************

  const deleteData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/${url}/${id}/`);
      getBlogData("blogs");
      navigate(-1);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return {
    getBlogData,
    postBlogsData,
    postBlogsLike,
    getCategorisData,
    getMyBlogsData,
    postComment,
    getComment,
    deleteData,
    putData,
  };
};

export default useBlogCall;
