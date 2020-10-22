import React from 'react';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import {  Container,
          Box,} from "@material-ui/core";

import WarningMsgBox from "./components/WarningMsgBox";
import InventoryInsight from "./components/InventoryInsight";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" style={containerStyle}>
        <Box  display="flex" 
              flexDirection="row" 
              flexWrap="nowrap"
              justifyContent="center"
              alignItems="center"
              style={containerStyle}>
          <WarningMsgBox />
          <InventoryInsight />
        </Box>
      </Container>
    </Provider>
  );
}

const containerStyle = {
  //backgroundColor: "blue",
  height: "100vh",
}


export default App;
