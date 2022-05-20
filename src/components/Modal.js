import PropTypes from 'prop-types';

const Modal = (props) => {
  const {
    name, desc, img, type, closeModal, openModal, atk, def,
  } = props;
  const showModal = openModal ? 'modal show' : 'modal hide';
  return (
    <div className={showModal}>
      <div className="modal-container">
        <div className="modal-title">
          <h1>{name}</h1>
          <button type="button" className="close-icon" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal-body">
          <img src={img} alt="card" />
          <span>{type}</span>
          <span>
            Atk:&nbsp;
            {atk}
            &nbsp;&nbsp;
            Def:&nbsp;
            {def}
          </span>
          <p>{desc}</p>
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
