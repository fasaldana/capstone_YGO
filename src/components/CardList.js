import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from './Modal';

const CardList = (props) => {
  const {
    name, img, desc, type, atk, def,
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="card-container">
        <h2>{name}</h2>
        <button type="button" className="card-info" onClick={showModal}>
          <img src={img} alt="card" />
        </button>
      </div>
      <Modal
        name={name}
        desc={desc}
        img={img}
        type={type}
        closeModal={closeModal}
        openModal={openModal}
        atk={atk}
        def={def}
      />
    </>
  );
};

CardList.defaultProps = {
  atk: 0,
  def: 0,
};

CardList.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  atk: PropTypes.number,
  def: PropTypes.number,
};

export default CardList;
