import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="no-match-container">
      <h1>404 Not Found</h1>
      <p>원하는 페이지를 찾을 수 없습니다</p>
      <Link to="/" className="go-home-link">
        메인으로
      </Link>
    </div>
  );
};

export default NoMatch;