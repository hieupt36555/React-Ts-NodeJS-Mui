import { Badge, Box, Icon, IconButton, Menu, MenuItem, Stack, styled, Typography } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCart } from "src/contexts/cart";
import React, { useMemo } from "react";
import { AccountCircle } from "@mui/icons-material";

const menus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/shop",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const { cart } = useCart();
  // useMemo : return numberCart

  const quantiyCart = useMemo(() => {
    return cart
      ? cart.products.reduce((total, item) => total + item.quantity, 0)
      : 0;
  }, [cart]);

  return (
    <Wrapper
      sx={{ padding: "0 50px" }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <img src="/logo.svg" alt="logo" />
      <Stack direction={"row"} gap={"75px"}>
        {/* menu */}
        {menus.map((menu, index) => (
          <Link to={menu.link} key={index}>
            <Typography fontWeight={"500"}>{menu.label}</Typography>
          </Link>
        ))}
      </Stack>
      <Stack gap={"45px"} direction={"row"}>


        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>

        <IconButton color="inherit">
          <FavoriteBorderIcon />
        </IconButton>

        <IconButton>
          <Link to={'/cart'}>
            <Badge badgeContent={quantiyCart} color="secondary">
              <img src="/cart.svg" alt="cart" />
            </Badge>
          </Link>
        </IconButton>


        <IconButton color="inherit" onClick={handleMenuClick}>
          <img src="/user.svg" alt="user" />
        </IconButton>

        
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/admin" onClick={handleClose}>Admin Dashboard</MenuItem>
          <MenuItem component={Link} to="/oder" onClick={handleClose}>Đơn Hàng</MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleClose}>Đăng Nhập</MenuItem>
          <MenuItem component={Link} to="/register" onClick={handleClose}>Đăng Ký</MenuItem>
          <MenuItem component={Link} to="/" >Đăng Xuất</MenuItem>
        </Menu>
      </Stack>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Stack)({
  height: 100,
  padding: "0 50px",
});
