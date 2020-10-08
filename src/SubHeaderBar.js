import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import { RotateRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 350,
        marginTop: 10,
        marginLeft: 10,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        background: grey[900],
        color: 'white',
        float: "right",
        marginLeft: 1270,
    },
    button2: {
        background: grey[900],
        color: 'white',
        float: "right",
        marginLeft: 10,
    },
    subheader: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 1880,
        marginTop: 10,
        marginLeft: 10,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <div className={classes.subheader}>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Project Name"
                    inputProps={{ 'aria-label': 'Project Name' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Button variant="contained" className={classes.button} >
                Add New
      </Button>
            <Button variant="contained" className={classes.button2} >
                More Filters
      </Button>
        </div>
    );
}