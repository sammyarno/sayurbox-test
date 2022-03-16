import { bool, func, object } from "prop-types";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Row, Col } from "react-bootstrap";

const DetailModal = ({ show, onHide, data }) => (
  <Modal centered show={show} onHide={onHide}>
    {
      data && (
        <>
          <ModalHeader closeButton>
            <Modal.Title>{(data.name || {}).full}</Modal.Title>
          </ModalHeader>

          <ModalBody>
            <Row className="mb-4">
              <Col className="text-center">
                <img src={data.image.medium} alt="profile" />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>Full Name</Col>
              <Col>: {(data.name || {}).full}</Col>
            </Row>
            <Row>
              <Col lg={4}>Nickname</Col>
              <Col>: {(data.name || {}).userPreferred}</Col>
            </Row>
            <Row>
              <Col lg={4}>Date of Birth</Col>
              <Col>: {data.dateOfBirth}</Col>
            </Row>
            <Row>
              <Col lg={4}>Gender</Col>
              <Col>: {data.gender}</Col>
            </Row>
            <Row>
              <Col lg={4}>Hometown</Col>
              <Col>: {data.homeTown}</Col>
            </Row>
            <Row>
              <Col lg={4}>Occupations</Col>
              <Col>: {data.primaryOccupations.join(',')}</Col>
            </Row>
            <Row>
              <Col lg={4}>Site Url</Col>
              <Col>: <a href={data.siteUrl} target="_blank" rel="noreferrer">{data.siteUrl}</a></Col>
            </Row>
          </ModalBody>
        </>
      )
    }

    <ModalFooter>
      <Button variant="outline-danger" onClick={onHide}>Close</Button>
    </ModalFooter>
  </Modal>
);

DetailModal.propTypes = {
  show: bool.isRequired,
  onHide: func.isRequired,
  data: object.isRequired,
};

export default DetailModal;
