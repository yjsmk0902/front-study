import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => console.log("처음 한번 렌더링"), []);
  useEffect(() => console.log("counter 로직 호출"), [counter]);
  useEffect(() => {
    if (keyword !== null && keyword.length >= 5)
      console.log("Search 로직 호출 : " + keyword);
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="검색..."
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Button"} onClick={onClick} />
    </div>
  );
}

export default App;
