import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavBar = (props) => {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              BAAP
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />
    </>
  );
};

export default NavBar;
