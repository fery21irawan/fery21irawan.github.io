import React, { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import WorkItem from "./WorkItem";

function WorkList() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    setWork(portfolio);
  }, []);
  return (
    <div className="grid grid-cols-2 gap-3 mb-5">
      {work.map((item, i) => (
        <WorkItem key={i} portfolio={item} />
      ))}
    </div>
  );
}

export default WorkList;
