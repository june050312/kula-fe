import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Checkbox = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const data = [
    {
      id: 0,
      title: '멤버십 이용약관 동의',
      contents: '멤버십 필수 약관에 동의합니다.',
      status: '(필수)',
    },
    {
      id: 1,
      title: '개인정보 수집 및 이용 동의',
      contents: '우와',
      status: '(필수)',
    },
    {
      id: 2,
      title: 'SMS 및 광고성 정보 수신 동의',
      contents: '신기하다',
      status: '(선택)',
    }
  ]

  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 개별 선택하기
  const selectChecked = (checked, id) => {
    if (checked) {
      setCheckItems(item => [...item, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택하기
  const allChecked = (checked) => {
    if (checked) {
      const itemList = [];
      data.forEach((el) => itemList.push(el.id));
      setCheckItems(itemList);
    } else {
      setCheckItems([]);
    }
  }
  
  const Wrap = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
`;

const ContentsWrap = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

return (
    <Wrap>
      {/* 전체선택 부분 */}
      <div>
        <label>
          <input
            type="checkbox"
            name="all-checked"
            onChange={(e) => allChecked(e.target.checked)}
            checked={checkItems.length === data.length}
          />
          모두 동의합니다.
        </label>
        {open1 && open2 && open3 ? (
          <MdOutlineKeyboardArrowUp
            size={30}
            color="gray"
            onClick={() => {
              setOpen1(false);
              setOpen2(false);
              setOpen3(false);
            }}
          />
        ) : (
          <MdOutlineKeyboardArrowDown
            size={30}
            color="gray"
            onClick={() => {
              setOpen1(true);
              setOpen2(true);
              setOpen3(true);
            }}
          />
        )}
      </div>
      <hr />
      {/* 개별 선택 부분 */}
      {data.map((item, index) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              name="select-checked"
              onChange={(e) => selectChecked(e.target.checked, item.id)}
              checked={checkItems.includes(item.id)}
            />
            <span
              style={{
                marginRight: "5px",
                color: item.status === "(필수)" ? "red" : "gray",
              }}
            >
              {item.status}
            </span>
            {item.title}
          </label>
          {(index === 0 && open1) ||
          (index === 1 && open2) ||
          (index === 2 && open3) ? (
            <MdOutlineKeyboardArrowUp
              size={30}
              color="gray"
              onClick={() => {
                if (index === 0) setOpen1(!open1);
                if (index === 1) setOpen2(!open2);
                if (index === 2) setOpen3(!open3);
              }}
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              size={30}
              color="gray"
              onClick={() => {
                if (index === 0) setOpen1(!open1);
                if (index === 1) setOpen2(!open2);
                if (index === 2) setOpen3(!open3);
              }}
            />
          )}
          {(index === 0 && open1) ||
          (index === 1 && open2) ||
          (index === 2 && open3) ? (
            <ContentsWrap>
              <p>{item.contents}</p>
            </ContentsWrap>
          ) : null}
        </div>
      ))}
    </Wrap>
  )
}

export default Checkbox