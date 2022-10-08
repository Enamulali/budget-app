import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SegmentIcon from "@mui/icons-material/Segment";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box sx={{ width: "100%", position: "absolute", bottom: 0 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Category"
          icon={
            <Link to="/categories" style={{ color: "blue" }}>
              <DonutLargeIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Add"
          icon={
            <Link to="/add">
              <ControlPointIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="List"
          icon={
            <Link to="/list">
              <SegmentIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default Nav;
