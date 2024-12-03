import React, { useState } from "react";
import "./Laundary.css";
import axios from "axios"

const WashingMachine = ({ machine }) => {
  const [status, setStatus] = useState(machine.status);

  const toggleStatus = () => {
    const newStatus = status === "available" ? "occupied" : "available";
    // 먼저 상태를 변경
    setStatus(newStatus);
    
    axios.put("http://localhost:8080/api/laundary", {
      id: machine.laundary_id,
      status: newStatus
    }, { withCredentials: true })
    .then(res => {
      console.log('Status updated successfully');
    })
    .catch(error => {
      // 에러 발생 시 상태를 원래대로 되돌림
      setStatus(status);
      console.log('Error response:', error.response?.data);
      console.log('Error status:', error.response?.status);
      alert(error.response?.data || '상태 변경에 실패했습니다.');
    });
  };

  return (
    <div className="washing-machine">
      <h3 style={{ "color": "white" }}>{`세탁기 ${machine.laundary_id}`}</h3>
      <img
        src="/img/laundaryMachine.png"
        alt="세탁기 이미지"
      />
      <button
        onClick={toggleStatus} 
        className={status === "available" ? "available-button" : "occupied-button"}
      >
        {status === "available" ? "사용 가능" : "사용 중"} 
      </button>
    </div>
  );
};

export default WashingMachine;