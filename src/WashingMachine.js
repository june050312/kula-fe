import React from "react";
import "./WashingMachine.css";

const WashingMachine = ({ id, status, toggleStatus }) => {
  return (
    <div className="washing-machine">
      <img
        src="https://i.pinimg.com/736x/a0/08/c5/a008c5b9c5881d0ec76b32b4b5200463.jpg"
        alt={`세탁기 ${id}`}
      />
      <button
        onClick={toggleStatus} 
        className={status === "available" ? "available-button" : "occupied-button"} // 상태에 따라 버튼 이미지 변경
        disabled={status === "occupied"} // 상태에 따라 버튼 비활성화
      >
        {status === "available" ? "사용 가능" : "사용 중"} 
      </button>
    </div>
  );
};

export default WashingMachine;