import { Table as BSTable } from "react-bootstrap";

const Table = ({ data }) => {
  const keys = Object.keys(data[0]);
  console.log(keys);
  return (
    <BSTable striped bordered hover>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={data[0].id}>{data[0][key].label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((coinObj) => (
          <tr>
            {
              //   console.log(coinObj);
              keys.map((key) => (
                // <td>{coinObj[key].data}</td>
                <td>
                  {coinObj[key].type === "image" ? (
                    <img src={coinObj[key].data} alt="coin" width={60} />
                  ) : (
                    coinObj[key].data
                  )}
                </td>
              ))
            }
          </tr>
        ))}
      </tbody>
    </BSTable>
  );
};

export default Table;
