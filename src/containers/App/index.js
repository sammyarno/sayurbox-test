import { useState } from "react";
import { Container } from "react-bootstrap";
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';
import usePageData from "../../hooks/usePageData";
import useStaffDetail from "../../hooks/useStaffDetail";
import "./styles.scss";

const App = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const { fetchMore: fetchStaffMore } = useStaffDetail({
    id: (selectedStaff || {}).id,
    skip: true,
  });

  const { data, loading, fetchMore } = usePageData({
    page,
    perPage: 10,
  });

  const toggleModal = () => setShowModal(prev => !prev);

  const handlePaginationClick = (e, page) => {
    e.preventDefault();

    setPage(page);
    fetchMore(page);
  };

  const handleSeeDetailClick = async (e, staffId) => {
    e.preventDefault();

    const { data } = await fetchStaffMore({
      id: staffId
    });

    setSelectedStaff(data);
    toggleModal();
  };

  return (
    <Container className="home py-4">
      <h1 className="text-center mb-4">List of Staffs</h1>
      <Table data={data.items || []} loading={loading} onClickDetail={handleSeeDetailClick} />
      <Pagination page={page} onClick={handlePaginationClick} />
      <Modal show={showModal} onHide={toggleModal} data={selectedStaff} />
    </Container>
  );
};

export default App;
