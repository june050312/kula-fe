import React from 'react';
import './WashingMachine.css';

function WashingMachine({ machine, currentUser, onMachineClick }) {
  return (
    <div className="machine-item">
      <h3 className="machine-number">세탁기 {machine.id}</h3>
      <div className="machine-image">
        <img src="https://i.pinimg.com/736x/a0/08/c5/a008c5b9c5881d0ec76b32b4b5200463.jpg" alt="세탁기" />
      </div>
      <button
        className={`machine-status ${machine.status ? 'available' : 'in-use'}`}
        onClick={() => onMachineClick(machine.id)}
        disabled={!machine.status && machine.userId !== currentUser}
      >
        {machine.status ? '사용 가능' : '사용 중'}
      </button>
    </div>
  );
}

export default WashingMachine;
