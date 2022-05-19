import PropTypes from 'prop-types';

const Modal = (props) => {
  const {
    name, desc, img, type, closeModal, openModal, atk, def,
  } = props;
  const showModal = openModal ? 'modal show' : 'modal hide';
  return (
    <div className={showModal}>
      <div className="modal-container">
        <button type="button" onClick={closeModal}>
          X
        </button>
        <div className="modal-title">
          <h1>{name}</h1>
        </div>
        <div className="modal-body">
          <img src={img} alt="card" />
          <span>{type}</span>
          <p>
            Atk:
            {atk}
            Def:
            {def}
          </p>
          <p>{desc}</p>
        </div>
        <div className="modal-footer">
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  atk: 0,
  def: 0,
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  atk: PropTypes.number,
  def: PropTypes.number,
};

export default Modal;
