import { array, bool } from "prop-types";
import { Button, Placeholder, Table } from "react-bootstrap";
import "./styles.scss";

const TableData = ({ data, loading }) => (
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
      {loading &&
        ["", "", "", "", ""].map((_, index) => (
          <tr key={index}>
            <td>
              <Placeholder xs={12} />
            </td>
            <td>
              <Placeholder xs={12} />
            </td>
            <td>
              <Placeholder xs={12} />
            </td>
            <td>
              <Placeholder xs={12} />
            </td>
            <td>
              <Placeholder xs={12} />
            </td>
            <td>
              <Placeholder xs={12} />
            </td>
            <td>
              <Button variant="outline-warning" disabled>
                See Detail
              </Button>
            </td>
          </tr>
        ))}
      {data.map((staff) => (
        <tr key={staff.id}>
          <td>{staff.id}</td>
          <td>{staff.name.full}</td>
          <td>{staff.name.userPreferred}</td>
          <td>{staff.gender}</td>
          <td>{staff.dateOfBirth}</td>
          <td>{staff.primaryOccupations.join(", ")}</td>
          <td>
            <Button variant="outline-warning">See Detail</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

TableData.propTypes = {
  data: array.isRequired,
  loading: bool.isRequired,
};

export default TableData;
