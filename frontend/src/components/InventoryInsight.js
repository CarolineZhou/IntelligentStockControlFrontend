import React, { useState, useEffect } from 'react';
import {Container,
        Box, 
        IconButton} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ItemDropDownMenu from "./ItemsDropdownMenu";
import Graph from "./Graph";
import RecMsg from "./RecMsg";
import { Colors } from "./data";
import { useSelector, useDispatch }  from "react-redux";
import { setSelectedItem } from "../actions/item";
import Tooltip from "@material-ui/core/Tooltip";

const inventoryInsightStyle = {
    backgroundColor: Colors.grey,
    width:"70%",
    height: "70%",
}

const InventoryInsight = () => {
    const lineColors = [Colors.line1,Colors.line2,Colors.line3,Colors.line4];
    const [dropdownNum, setDropdownNum] = useState(1);
    const selectedItems = useSelector(state => state.itemReducer.selectedItems);
    const [displayedItems, setDisplayedItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setDisplayedItems(selectedItems.slice(0,dropdownNum));
    }, [dropdownNum,selectedItems])

    const handleAddItem = () => {
        setDropdownNum(dropdownNum+1);
    }

    const handleDeleteItem = () => {
        let newList = selectedItems;
        newList[dropdownNum-1] = "";
        dispatch(setSelectedItem(newList));
        setDropdownNum(dropdownNum-1);
    }

    return (
        <Container style={inventoryInsightStyle}>
            <Box  display="flex" 
              flexDirection="row" 
              flexWrap="nowrap"
              justifyContent="left"
              alignItems="center">
                {displayedItems.map((item, index) => (
                    <ItemDropDownMenu key={index} id={index} lineColor={lineColors[index]}/>
                ))}
                {
                    dropdownNum > 1 ? (
                        <Tooltip title="Delete Item" placement="top" >
                            <IconButton aria-label="add an dropdown menu" onClick={handleDeleteItem}
                                style={{padding: 10}}>
                                <HighlightOffIcon style={{paddingBottom: 3}}/>
                            </IconButton>
                        </Tooltip>
                    ) : ""
                }
                {
                    dropdownNum === 4 ? "" : (
                        <Tooltip title="Add Item" placement="top" >
                            <IconButton aria-label="add an dropdown menu" onClick={handleAddItem}
                                style={{padding: 10}}>
                                <AddBoxIcon style={{paddingBottom: 3}}/>
                            </IconButton>
                        </Tooltip>
                    )
                }
                
            </Box>
            <Graph />
            <RecMsg />
        </Container>
    )
}

export default InventoryInsight;