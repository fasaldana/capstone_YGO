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
  const [selectedAttrib, setSelectedAttrib] = useState('');
  useEffect(() => {
    dispatch(getCardsByArch(arch));
  }, [dispatch]);
  const getFilteredTypes = () => {
    if (!selectedType) {
      return value.data;
    }
    return value.data.filter((item) => item.type === selectedType);
  };
  const getFilteredAttrib = () => {
    if (!selectedAttrib) {
      return value.data;
    }
    return value.data.filter((item) => item.attribute === selectedType);
  };
  const filteredList = useMemo(getFilteredTypes, [selectedType, value.data], getFilteredAttrib, [
    selectedAttrib,
    value.data,
  ]);
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const handleAttribChange = (e) => {
    setSelectedAttrib(e.target.value);
  };
  return (
    <div className="card-container">
      <div className="filter-container">
        <h3>Filter by type:</h3>
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
      <div className="filter-container">
        <h3>Filter by Atribute:</h3>
        <div>
          <select name="type-list" id="category-llist" onChange={handleAttribChange}>
            {filterList.filterAtr.map((item) => (
              <option key={item.id} value={item.value}>
                {item.typeName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h3>Click on a card to see description</h3>
      {status === 'success' ? (
        filteredList.map((card) => (
          <div key={card.id}>
            <li>
              <CardList
                name={card.name}
                img={card.card_images[0].image_url_small}
                desc={card.desc}
                type={card.type}
                atk={card.atk}
                def={card.def}
              />
            </li>
          </div>
        ))
      ) : (
        <span>loading</span>
      )}
    </div>
  );
};

export default ArchPage;
