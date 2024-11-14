import React, { useState } from "react";
import WashingMachine from "./WashingMachine";
import "./WashingMachineList.css";

const WashingMachineList = () => {
  const [machines, setMachines] = useState([
    { id: 1, status: "available" },
    { id: 2, status: "available" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
    { id: 6, status: "available" },
    { id: 7, status: "available" },
  ]);

  const toggleStatus = (id) => {
    setMachines((prevMachines) =>
      prevMachines.map((machine) =>
        machine.id === id && machine.status === "available"
          ? machine.status = "occupied" 
          : machine
      )
    );
  };

  return (
    <div className="washing-machine-list">
      {machines.map((machine) => (
        <WashingMachine
          key={machine.id}
          id={machine.id}
          status={machine.status}
          toggleStatus={() => toggleStatus(machine.id)}
        />
      ))}
    </div>
  );
};

export default WashingMachineList;
