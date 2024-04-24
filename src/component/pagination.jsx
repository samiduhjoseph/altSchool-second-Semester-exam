import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

let active = 2;

function PaginationBasic({ totalPages, currentPage }) {
  let items = [];
  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item key={page} active={page === currentPage}>
        {page}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
}

export default PaginationBasic;
