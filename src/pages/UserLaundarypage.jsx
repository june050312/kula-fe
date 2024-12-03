import React, { useState } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import WashingMachine from '../components/WashingMachine/WashingMachine';
import './Pages.css';

function UserLaundarypage() {
  const location = useLocation();
  const [currentUser] = useState("user456"); // 임시 사용자 ID
  const [laundryData, setLaundryData] = useState(location.state?.laundryData);

  // location.state가 없으면 메인 페이지로 리다이렉트
  if (!laundryData) {
    return <Navigate to="/" />;
  }

  const handleMachineClick = (machineId) => {
    setLaundryData(prevData => {
      const updatedMachines = prevData.machines.map(machine => {
        if (machine.id === machineId) {
          if (machine.status) {
            // 사용 가능 -> 사용 중으로 변경
            return {
              ...machine,
              status: false,
              userId: currentUser
            };
          } else if (machine.userId === currentUser) {
            // 본인이 사용 중인 경우 -> 사용 가능으로 변경
            return {
              ...machine,
              status: true,
              userId: null
            };
          }
        }
        return machine;
      });

      return {
        ...prevData,
        machines: updatedMachines
      };
    });
  };

  return (
    <div className="laundry-page">
      {/* 세탁소 정보 섹션 */}
      <section className="laundry-info">
        <div className="laundry-image">
          <img src="/img/laundry-default.jpg" alt="세탁소 이미지" />
        </div>
        <div className="laundry-details">
          <h1>{laundryData.name}</h1>
        </div>
      </section>

      {/* 세탁기 목록 섹션 */}
      <section className="machines-section">
        <h2>세탁기 현황</h2>
        <div className="machines-container">
          {laundryData.machines.map((machine) => (
            <WashingMachine
              key={machine.id}
              machine={machine}
              currentUser={currentUser}
              onMachineClick={handleMachineClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default UserLaundarypage;
