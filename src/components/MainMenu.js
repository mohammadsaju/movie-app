import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2C3A47",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    if(value === 0) {
      history.push('/')
      window.scroll(0,0)
    }
    else if(value === 1) {
      history.push('/movies')
      window.scroll(0,0)
    }
    else if(value === 2) {
      history.push('/series')
    }
    else if(value === 3) {
      history.push('/search')
    }
  },[value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color: 'white'}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color: 'white'}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style={{color: 'white'}} label="Tv series" icon={<TvIcon />} />
      <BottomNavigationAction style={{color: 'white'}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}