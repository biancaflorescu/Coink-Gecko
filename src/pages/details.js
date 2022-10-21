import { getCoinsDetails } from "../services/api";

const Details = () => {
  const getData = async (id) => {
    const data = await getCoinsDetails(id);
  };

  return <div>Hello</div>;
};

export default Details;
