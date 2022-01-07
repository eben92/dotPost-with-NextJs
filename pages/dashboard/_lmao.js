import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const _lmao = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("/api/notes").then(({ data }) => {
      console.log(data);

      setTitle(data.data[0].title);
    });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {/* <a href='/'>back</a> */}
      <Link href='/'>home</Link>
    </div>
  );
};

export default _lmao;
