import { Box, Stack, styled, Typography } from "@mui/material";


const Banner = () => {
  return (
    <>
      {/* <BannerImage> */}
        <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
          <img src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg" style={{height: '400px', width: '100%'}}/>
        </Stack>
      {/* </BannerImage> */}
    </>
  );
};

export default Banner;

const BannerImage = styled(Box)({

});
