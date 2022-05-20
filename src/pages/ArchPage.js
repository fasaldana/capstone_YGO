import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { getCardsByArch } from '../redux/cards/archetype';
import CardList from '../components/CardList';
import filterList from '../Filter/FilterData';

const ArchPage = () => {
  const params = useParams();
  const { arch } = params;
  const { value, status } = useSelector((state) => state.archetype);
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState('');
  useEffect(() => {
    dispatch(getCardsByArch(arch));
  }, [dispatch]);
  const getFilteredTypes = () => {
    if (!selectedType) {
      return value.data;
    }
    return value.data.filter((item) => item.type === selectedType);
  };
  const filteredList = useMemo(getFilteredTypes, [selectedType, value.data]);
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  return (
    <div className="list-container">
      <div className="filter-container">
        <h4>Filter by type:</h4>
        <div>
          <select name="type-list" id="category-llist" onChange={handleTypeChange}>
            {filterList.filterType.map((item) => (
              <option key={item.id} value={item.value}>
                {item.typeName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h3>Click on a card to see description</h3>
      <div className="card-list">
        {status === 'success' ? (
          filteredList.map((card) => (
            <li className="card-item" key={card.id}>
              <CardList
                name={card.name}
                img={card.card_images[0].image_url_small}
                desc={card.desc}
                type={card.type}
                atk={card.atk}
                def={card.def}
              />
            </li>
          ))
        ) : (
          <span>loading</span>
        )}
      </div>
    </div>
  );
};

export default ArchPage;
