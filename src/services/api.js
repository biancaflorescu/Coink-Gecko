const baseURL = "https://api.coingecko.com/api/v3/coins";

const getCoinsMarkets = async (pageQty, pageNo) => {
  const res = await fetch(
    `${baseURL}/markets?vs_currency=eur&order=market_cap_desc&per_page=${pageQty}&page=${pageNo}&sparkline=false`
  );
  const data = res.json();
  return data;
};

const getCoinsDetails = async (id) => {
  const res = await fetch(`${baseURL}/${id}`);
  const data = await res.json;
  return data;
};

export { getCoinsMarkets, getCoinsDetails };
