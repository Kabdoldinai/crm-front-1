import Toolbar from "@mui/material/Toolbar";

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
        <a href="">test</a>
    </Toolbar>
  );
};

export default Navbar;