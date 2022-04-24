import React, { useRef } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Details, Main } from './components';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const  navigate  = useNavigate();
  const classes = useStyles();
  const main = useRef(null)
  const handleLogOut = () => {
    navigate("/")
  }
return (
  <div>
  
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main} >
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
      </Grid>
      <Grid className={classes.logoutButton}>
        <Button onClick={handleLogOut}>Logout</Button>
      </Grid>
    
      </Grid>
    </div>
  );
};
export default App;