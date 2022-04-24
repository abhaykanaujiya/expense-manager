import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    borderRadius: "25px",
    width: "500px",
    height: "600px",
    backgroundImage:
      "   repeating-radial-gradient( circle at 0 0, #eee, #ccc 50px )",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
    "& .MuiCardHeader-root": {
      paddingBottom: " 50px",
    
    },
  
    authHeader: {
      paddingBottum: "20px",
      
    },
  },
}));
