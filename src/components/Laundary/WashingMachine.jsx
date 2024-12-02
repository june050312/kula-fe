import React, { useState} from "react";
import "./Laundary.css";
import axios from "axios"

const WashingMachine = ({ machine }) => {
  const [status, setStatus] = useState(machine.status);

  const toggleStatus = () => {
    axios.put("http://localhost:8080/api/laundary", {
      id: machine.laundary_id,
      status: status === "available" ? "occupied" : "available"
    }, { withCredentials: true })
    .then(res => {
      setStatus((prevStatus) => (prevStatus === "available" ? "occupied" : "available"));
    })
    .catch(res => alert(res))

    
  };

  return (
    <div className="washing-machine">
      <h3 style={{ "color": "white" }}>{`세탁기 ${machine.laundary_id}`}</h3>
      <img
        src="/img/laundaryMachine.png"
      />
      <button
        onClick={toggleStatus} 
        className={status === "available" ? "available-button" : "occupied-button"} // 상태에 따라 버튼 이미지 변경
      >
        {status === "available" ? "사용 가능" : "사용 중"} 
      </button>
    </div>
  );
};

export default WashingMachine;