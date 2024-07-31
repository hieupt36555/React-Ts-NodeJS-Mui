import { Box, Stack, styled, Typography } from "@mui/material";


const Banner = () => {
  return (
    <>
      <BannerImage>
        <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
          <img />
        </Stack>
      </BannerImage>
    </>
  );
};

export default Banner;

const BannerImage = styled(Box)({
  backgroundImage: "url(./banner.png)",
  height: "316px",
});
