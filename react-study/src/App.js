import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [monetary, setMonetary] = useState("");
  const [price, setPrice] = useState(1);

  const selected = (event) => {
    setPrice(event.target.value);
  };
  const entered = (event) => setMonetary(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading((current) => !current);
      });
  }, []);
  return (
    <div>
      <h1>코인 단위 환산기</h1>
      {loading ? (
        <strong>로딩중.....</strong>
      ) : (
        <div>
          <select onChange={selected}>
            <option value="1">코인을 선택하세요 </option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name}({coin.symbol})
              </option>
            ))}
          </select>
          <hr />
          <input
            onChange={entered}
            type="number"
            placeholder="단위를 입력하세요"
            value={monetary}
          ></input>
          {monetary === "" ? null : <h1>{price * monetary}$</h1>}
        </div>
      )}
    </div>
  );
}

export default App;
