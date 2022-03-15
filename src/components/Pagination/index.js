import React from "react";
import { Pagination } from "react-bootstrap";
import { func, number } from "prop-types";
import "./styles.scss";

const PaginationData = ({ onClick, page }) => (
  <div className="d-flex align-items-center justify-content-end">
    <Pagination>
      <Pagination.Item onClick={(e) => onClick(e, 1)} active={page === 1}>
        1
      </Pagination.Item>
      <Pagination.Item onClick={(e) => onClick(e, 2)} active={page === 2}>
        2
      </Pagination.Item>
      <Pagination.Item onClick={(e) => onClick(e, 3)} active={page === 3}>
        3
      </Pagination.Item>
    </Pagination>
  </div>
);

PaginationData.propTypes = {
  onClick: func.isRequired,
  page: number.isRequired,
};

export default PaginationData;
