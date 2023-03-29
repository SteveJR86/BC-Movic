import React from "react";
import { Grommet, Box } from 'grommet';
import "./style.css";

function Wrapper(props) {
  return <Grommet>
    <Box align="center" background="graph-2" pad="medium">
      <main className="wrapper">{props.children}</main>
    </Box>
  </Grommet>;
}

export default Wrapper;
