import { useState } from "react";


export function Counter() {
  //let like = 10;
  const [like, setlike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="container">
      <button className="button-like" onClick={() => setlike(like + 1)}>👍{like}</button>
      <button className="button-dislike" onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>

    </div>
  );
}
export default Counter;