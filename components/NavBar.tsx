import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const baseUrl = process.env.BASE_URL

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'red'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    anchorTag: {
      textDecoration: 'none',
      color: 'white',
      fontSize: "1.3rem"
    }
  }),
);

export default function SearchAppBar() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {
            (String(router.pathname) != '/') && (
            <Typography className={classes.title} noWrap>
              <Link href={'/'}>
                <a className={classes.anchorTag}>
                  Home
                </a>
              </Link>
            </Typography>)
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
