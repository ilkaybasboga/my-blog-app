import { blue,  red } from "@mui/material/colors/";

export const flex = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 1,
    
  };
  
  export const cursor ={
    cursor: "pointer"
  }
  
  export const flex1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:1,
    cursor: "pointer",
  };
  
  // export const btnStyle = {
  //   cursor: "pointer",
  //   "&:hover": { color: "red" },
  // };
  
  export const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius :"20px",
    boxShadow: 24,
    p: 4,
    marginTop:5
  };
  
  export const flexCenter = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  };
  export const flexColumn = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };
  export const flexColumnPage = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    
  };
  export const arrowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": { color: "red" },
  };
  
  export const btnHoverStyle = {
    cursor: "pointer",
    "&:hover": { color: "red" },
  };

  export const iconStyle = {

    "& .MuiSvgIcon-root": { color: "black" },
    "&:hover": { color: "red" },
    "&:hover .MuiSvgIcon-root": { color: "red" },
    padding:"0",
    display:"flex",
    margin:"1rem 0"
  };

  export const iconStyleDet = {
    display: "flex",
    gap: ".2rem",
  };

  export const styleSubmit = {
    bgcolor: "#009688",
    color: "white",
    fontSize: ".7rem",
    "&:hover": { opacity: ".7", bgcolor: "#009688" },
  };

 
export const btnStyle = {
  cursor: "pointer",
  bgcolor: "gray",
  "&:hover": { color: "black", bgcolor: "#767575" },
};
export const cardStyle = {
  cursor: "pointer",
  maxWidth: 345,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

// export const flex = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "column",
//   gap: 2,
//   color: "red",
// };

export const flexCard = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  mt: "1rem",
};

export const iconsBtn = {
  display: "flex",
  justifyContent: "space-around",
  width: "80%",
};
export const iconLi = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: "blue",
};
export const iconGi = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: "black",
};
export const iconIns = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: red[300],
};
export const iconTwi = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: blue[600],
};
export const iconYou = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: "red",
};

export const cardButton = {
  display: "flex",
  justifyContent:"center",
  padding:"0"
}

// export const iconStyle = {
//   display: "flex",
//   // justifyContent: "space-around",
//   gap: 2,
//   fontSize: "1.5rem",
// };

export const btnDetail = {
  color: "black",
  bgcolor: red[200],

  "&:hover": { color: "white", bgcolor: "red" },
};

export const CardBlog = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#c6e0dc",
  
};
