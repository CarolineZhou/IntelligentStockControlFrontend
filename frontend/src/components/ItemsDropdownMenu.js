import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {List,
        ListItem,
        ListItemIcon,
        ListItemText, 
        Menu, 
        MenuItem } from "@material-ui/core";
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { useSelector, useDispatch }  from "react-redux";
import { setSelectedItem } from "../actions/item";
import { Colors } from "./data";


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: Colors.grey,
      width: 140,
      height: "auto",
      margin: "0 8px 5px 0",
      boxShadow: `0 0 5px -1px rgba(0,0,0,0.1)`,
    },
}));

const ItemsDropdownMenu = props => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const itemList = useSelector(state => state.itemReducer.itemList);
    const selectedItems = useSelector(state => state.itemReducer.selectedItems);
    const dispatch = useDispatch();
    const lineColor = props.lineColor;

    useEffect(() => {
        //console.log("id: " + props.id)
        if(props.id === 0){
            let newList = selectedItems;
            newList[props.id] = itemList[1];
            dispatch(setSelectedItem(newList));
            setSelectedIndex(1);
        }else{
            setSelectedIndex(0);
        }
    }, [])

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuItemClick = (event, index, name) => {
        let newList = selectedItems;
        newList[props.id] = name === "select item" ? "" : name;
        dispatch(setSelectedItem(newList));
        setSelectedIndex(index);
        setAnchorEl(null);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <div className={classes.root} style={{color: lineColor}}>
            <List component="nav" aria-label="Device settings" 
            style={{padding: "0px 0px"}}>
                {/**NEED TO CENTER THIS COMPONENT*/}
                <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    onClick={handleClickListItem}
                    style={{padding: "0 0 0 5px",
                    opacity: (selectedIndex === 0 ? 0.5:1)}}
                >
                    <ListItemText primary={itemList[selectedIndex]}  style={selectedIndex === 0 ? {color: Colors.white}: {}}/>
                    <ListItemIcon>
                        <ArrowDropDownOutlinedIcon style={{color: Colors.white, paddingLeft: 20}}/>
                    </ListItemIcon>
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            {itemList.map((item, index) => (
                <MenuItem
                    key={item}
                    disabled={index === 0}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index, item)}
                    style={index === 0 ? {color: Colors.classicBlue}: {}}
                >
                    {item}
                </MenuItem>
            ))}
            </Menu>
        </div>
    );
}

export default ItemsDropdownMenu;