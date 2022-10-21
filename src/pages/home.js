import { useEffect, useState } from "react";
import { getCoinsMarkets } from "../services/api";
import Table from "../components/table/table";
import Pagination from "../components/pagination/pagination";

const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const pageQty = 10;

  useEffect(() => {
    const getData = async () => {
      const data = await getCoinsMarkets(pageQty, pageNo);

      const coinsList = data.map((coinObj) => {
        return {
          image: {
            data: coinObj.image,
            label: "Image",
            type: "image",
          },
          name: {
            data: coinObj.name,
            label: "Name",
            type: "text",
          },
          symbol: {
            data: coinObj.symbol,
            label: "Symbol",
            type: "text",
          },
          current_price: {
            data: coinObj.current_price,
            label: "Current Price",
            type: "text",
          },
          high_24h: {
            data: coinObj.high_24h,
            label: "High 24 hour Price",
            type: "text",
          },
          low_24h: {
            data: coinObj.low_24h,
            label: "Low 24 hour Price",
            type: "text",
          },
        };
      });
      console.log(coinsList);
      setTableData(coinsList);
    };
    getData();
  }, [pageNo]);

  return (
    <div className="m-3">
      {tableData.length > 0 && <Table data={tableData} />}
      <Pagination setPageNo={setPageNo} pageNo={pageNo} />
    </div>
  );
};

export default Home;
