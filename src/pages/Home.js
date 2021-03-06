import { useSelector } from 'react-redux';
import ArchList from '../components/ArchList';

const Home = () => {
  const { value, status } = useSelector((state) => state.cards);
  return (
    <>
      <div className="head-title">
        <h1>Choose an Archetype</h1>
        <h4>Choose one archetype to display all cards</h4>
      </div>
      <ul className="arch-container">
        {status === 'success' ? (
          value.map((card) => (
            <li className="card-item" key={card.id}>
              <ArchList archetype={card.arch} img={card.img} />
            </li>
          ))
        ) : (
          <span>Loading</span>
        )}
      </ul>
    </>
  );
};

export default Home;
