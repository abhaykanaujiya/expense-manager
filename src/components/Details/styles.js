import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    borderRadius: "15px",
    background: "skyblue",
    textAlign: "center",
 
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
  },
  expense: {
    textAlign: "center",
    borderRadius: "15px",
    background: "skyblue",
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
  },
}));
