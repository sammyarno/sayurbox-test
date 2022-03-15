import { useState } from "react";
import { Container } from "react-bootstrap";
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import usePageData from "../../hooks/usePageData";
import "./styles.scss";

const App = () => {
  const [page, setPage] = useState(1);

  const { data, loading, fetchMore } = usePageData({
    page,
    perPage: 10,
  });

  const handlePaginationClick = (e, page) => {
    e.preventDefault();

    setPage(page);
    fetchMore(page);
  }

  return (
    <Container className="home py-4">
      <h1 className="text-center mb-4">List of Staffs</h1>
      <Table data={data.items || []} loading={loading} />
      <Pagination page={page} onClick={handlePaginationClick} />
    </Container>
  );
};

export default App;
