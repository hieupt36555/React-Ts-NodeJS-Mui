import axios from "axios";
import { useEffect } from "react";
import { useOder } from "src/contexts/oder";
import { useUser } from "src/contexts/user";



export function useProductOder() {
  const { user } = useUser();
  const { oder, setOder } = useOder();


  const getOdertUser = async () => {
    if (!user) return;
    const { data } = await axios.get(`/orders/user/${user._id}`);
    setOder(data);
    // alert('ok')
  };
  useEffect(() => {
    getOdertUser();
  }, []);

  const removeToOder = async (productId: string) => {
    if (!user) return;
    if (window.confirm("Remove Item Cart")) {
      try {
        await axios.delete(`/orders/user/${user._id}/product/${productId}`);
        getOdertUser();
        alert("thanh cong")
      } catch (error) {
        alert("loi")
      }
    }
  };
  
  return {
    getOdertUser,
    removeToOder,
  };
}
