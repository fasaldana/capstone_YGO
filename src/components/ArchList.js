import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ArchList = (props) => {
  const { archetype, img } = props;
  const navigate = useNavigate();
  const handleClick = (arch) => {
    navigate(`/cards:${arch}`);
  };
  return (
    <div className="card-container">
      <h2>
        Archetype:&nbsp;
        {archetype}
      </h2>
      <button type="button" onClick={() => handleClick(archetype)} className="card-info">
        <img src={img} alt="card" />
      </button>
    </div>
  );
};

ArchList.propTypes = {
  archetype: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ArchList;
