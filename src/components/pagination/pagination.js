import { Pagination as BSPagination } from "react-bootstrap";
import "./pagination.css";

const Pagination = ({ pageNo, setPageNo }) => {
  return (
    <BSPagination className="d-flex justify-content-center">
      <BSPagination.Prev
        onClick={() => setPageNo((prev) => prev - 1)}
        disabled={pageNo === 1}
      />
      <BSPagination.Item>{pageNo}</BSPagination.Item>
      <BSPagination.Next onClick={() => setPageNo((prev) => prev + 1)} />
    </BSPagination>
  );
};

export default Pagination;
