import {
    Button,
    Container,
    IconButton,
    Stack,
    styled,
    Typography,
  } from "@mui/material";
  import Banner from "src/components/Banner";
  import DeleteIcon from "@mui/icons-material/Delete";

import { useOder } from "src/contexts/oder";
import { useProductOder } from "src/hooks/useProductOder";
// import { useEffect } from "react";
  
  const labels = ["Product", "Price", "Quantity", "Subtotal", ""];
  function Oder() {
    const { oder } = useOder();
    const {removeToOder } = useProductOder();
    return (
      <>
        <Banner  />
        <Container>
          <Wrapper>
            <LabelWrapper
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              {labels.map((label, index) => (
                <Typography fontWeight={500} key={index}>
                  {label}
                </Typography>
              ))}
            </LabelWrapper>
            <Stack gap={3} my={3}>
              {oder?.products.map((item, index) => (
                <Stack
                  key={index}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={4}>
                    {item.product.title}
                    <img src={item.product.image} alt="anhne"  style={{width: '100px'}}/>
                  </Stack>
  
                  <Typography fontWeight={500}>{item.product.price}đ</Typography>
                  <Typography fontWeight={500}>{item.quantity}</Typography>
                  <IconButton onClick={() => removeToOder(item.product._id)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          </Wrapper>
          <Stack alignItems={"center"}>
          </Stack>
          
        </Container>
      </>
    );
  }
  
  export default Oder;
  
  const Wrapper = styled(Stack)({
    padding: 72,
  });
  
  const LabelWrapper = styled(Stack)(({ theme }) => ({
    background: "#F9F1E7",
    height: 55,
  }));