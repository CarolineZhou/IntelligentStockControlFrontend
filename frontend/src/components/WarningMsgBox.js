import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,
        ListSubheader,
        ListItem,
        ListItemText} from "@material-ui/core";
import { Colors } from "./data";

const WarningMsgBox = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListSubheader className={classes.msg}>Warning Messages</ListSubheader>
            {testingData.map((item, index) => (
                <ListItem key={`item-${index}`} >
                    <ListItemText primary={`${item.name}`} />
                </ListItem>
            ))}
        </List>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "30%",
        height: "70%",
        maxWidth: 360,
        backgroundColor: Colors.classicBlue,
        color: Colors.white,
        position: "relative",
        overflow: "auto",
        margin: "10px",
        padding: 0,
    },
    msg: {
        color: Colors.orange,
        fontSize: 20,
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

const testingData = [
    {
        name: "milk",
    },
    {
        name: "eggs",
    },
    {
        name: "popcorn"
    }
]

export default WarningMsgBox;