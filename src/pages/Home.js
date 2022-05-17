import { useSelector } from 'react-redux';
import CardList from '../components/CardList';

const Home = () => {
  const cards = useSelector((state) => state.cards.value.data);
  return (
    <>
      <h1>Choose an Archetype</h1>
      <h4>Choose one archetype to display all cards</h4>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <CardList
              archetype={card.archetype}
              name={card.name}
              img={card.card_images[0].image_url_small}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
