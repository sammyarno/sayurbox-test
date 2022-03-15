import { useState } from "react";
import { Button, Container, Pagination, Table, Placeholder } from "react-bootstrap";
import usePageData from "../../hooks/usePageData";
import "./styles.scss";

const App = () => {
  const [page, setPage] = useState(1);

  const { data, loading, fetchMore } = usePageData({
    page,
    perPage: 10,
  });

  const handlePaginationClick = (page) => {
    setPage(page);
    fetchMore(page);
  }

  return (
    <Container className="home py-4">
      <h1 className="text-center mb-4">List of Staffs</h1>
      <Table variant="dark" striped bordered hover className="staff-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Nickname</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Occupation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            loading && ['', '', '' ,'' ,''].map((_, index) => (
              <tr key={index}>
                <td><Placeholder xs={12} /></td>
                <td><Placeholder xs={12} /></td>
                <td><Placeholder xs={12} /></td>
                <td><Placeholder xs={12} /></td>
                <td><Placeholder xs={12} /></td>
                <td><Placeholder xs={12} /></td>
                <td>
                  <Button variant="outline-warning" disabled>See Detail</Button>
                </td>
              </tr>
            ))
          }
          {
            data.items.map(staff => (
              <tr>
                <td>{staff.id}</td>
                <td>{staff.name.full}</td>
                <td>{staff.name.userPreferred}</td>
                <td>{staff.gender}</td>
                <td>{staff.dateOfBirth}</td>
                <td>{staff.primaryOccupations.join(', ')}</td>
                <td>
                  <Button variant="outline-warning">See Detail</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      
      <div className="d-flex align-items-center justify-content-end">
        <Pagination>
          <Pagination.Item onClick={() => handlePaginationClick(1)} active={page === 1}>1</Pagination.Item>
          <Pagination.Item onClick={() => handlePaginationClick(2)} active={page === 2}>2</Pagination.Item>
          <Pagination.Item onClick={() => handlePaginationClick(3)} active={page === 3}>3</Pagination.Item>
        </Pagination>
      </div>
    </Container>
  );
};

export default App;
