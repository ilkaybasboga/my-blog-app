import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
   //? Kullanacağımız state'lerin başlangıç değerlerini tanımlıyoruz.
    blogs: [],
    categories:[],
    details:[],       //!  Başlangıçta "" yerine []  vermek ilk renderda hatayı önler
    myblogs:[],
    loading:null,
    error:null,
    

  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    //?aslında  payload ı acıp ıcınden data url alıyoruz.
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    getSuccessDetails: (state, { payload: { data } }) => {
      state.loading = false;
      state.details = data;
      // console.log(state.details)
    },
    getSuccessMyblogs: (state, { payload: { data } }) => {
      state.loading = false;
      state.myblogs = data;
      // console.log(state.myblogs)
    },


    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, getProCatBrandSuccess,getSuccessDetails,getSuccessMyblogs } =
  blogSlice.actions;
export default blogSlice.reducer;