import { openNavMenu } from "@/store/slices/modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Client() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openNavMenu());
  }, [dispatch]);

  return <section>Css Home Pgae</section>;
}
export default Client;
