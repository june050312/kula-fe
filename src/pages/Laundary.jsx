import React, { useEffect, useState } from "react";
import WashingMachine from "../components/Laundary/WashingMachine";
import "./Pages.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Laundary = () => {
  const [machines, setMachines] = useState([]);
  const params = useParams()
  // const toggleStatus = (id) => {
  //   setMachines((prevMachines) =>
  //     prevMachines.map((machine) =>
  //       machine.id === id && machine.status === "available"
  //         ? machine.status = "occupied" 
  //         : machine
  //     )
  //   );
  // };

  

  console.log(params)

  useEffect(() => {
    axios.get(`http://localhost:8080/api/laundary/shop/${params.shop}`)
    .then(res => setMachines(res.data))
    .catch(error => console.log(error))
  },[])

  

  return (
    <div className="washing-machine-list">
      <div className="laundary-name" style={{ "backgroundImage": "url(/img/laundary-name-back.png)" }}>
        "{params.shop}"
      </div>
      <div className="laundary-list-wrapper">
        <h2 style={{ "marginLeft": "1rem", "marginBottom": "1.5rem" }}>스크롤해주세요 &rarr;</h2>
        <article className="laundary-list">
          {machines.map((machine, i) => (
            <WashingMachine
              key={i}
              machine={machine}
            />
          ))}
        </article>
      </div>
    </div>
  );
};

export default Laundary;