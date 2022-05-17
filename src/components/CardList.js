import PropTypes from 'prop-types';

const CardList = (props) => {
  const {
    archetype, name, img, desc,
  } = props;

  return (
    <div className="card-container">
      <h2>
        Archetype:
        {archetype}
      </h2>
      <div className="card-info">
        <img src={img} alt="card" />
        <span className="card-name">{name}</span>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
};

CardList.propTypes = {
  archetype: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CardList;
