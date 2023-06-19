import React from "react";
import DevJobs from "../../images/devjobs.png";
import SunIcon from "../../images/sun-icon.png";
import MoonIcon from "../../images/moon-icon.png";
import { Box, Switch } from "@mui/material";
import "./Navbar.css"
import { NavbarSwitch } from "../NavbarSwitch/NavbarSwitch";

export const Navbar = ({setTheme, theme}) => {
  return (
    <>
      <Box
        sx={{ height: "100%", width: "80%", mx: "auto", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
      >
        <img
          src={DevJobs}
          alt="DevJobs"
        />
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img
            src={SunIcon}
            alt="Light Mode"
            className="themeIcon"
          />
          <Switch defaultChecked={!theme} onChange={() => setTheme(!theme)}/>
          {/* <NavbarSwitch defaultChecked/> */}
          <img
            src={MoonIcon}
            alt="Dark Mode"
            className="themeIcon"
          />
        </Box>
      </Box>
    </>
  );
};
