import cardsReducer, { getCardsData } from '../redux/cards/cards';
import CardsData from './__mock__/CardsData';
import { render, screen } from './cards-test-util';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

describe('Testing mission functionality', () => {
  test('should return the right value', () => {
    expect(cardsReducer({ value: [CardsData] }, getCardsData)).toEqual({
      value: [
        [
          {
            id: 89631139,
            name: 'Blue-Eyes White Dragon',
            img: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/89631139.jpg',
            arch: 'Blue-Eyes',
          },
          {
            id: 46986421,
            name: 'Dark Magician',
            img: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/46986421.jpg',
            arch: 'Dark Magician',
          },
          {
            id: 29981921,
            name: 'Legendary Six Samurai - Shi En',
            img: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/29981921.jpg',
            arch: 'Six Samurai',
          },
          {
            id: 90140980,
            name: 'Ojama King',
            img: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/90140980.jpg',
            arch: 'Ojama',
          },
          {
            id: 74677427,
            name: 'Red-Eyes Black Dragon',
            img: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/74677427.jpg',
            arch: 'Red-Eyes',
          },
          {
            id: 3117804,
            name: 'Superheavy Samurai Big Benkei',
            img: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/3117804.jpg',
            arch: 'Superheavy',
          },
        ],
      ],
    });
  });
});

describe('tests rendering in DOM', () => {
  it('renders Home Correctly in the DOM', () => {
    render(<Home />);
    expect(screen.getByText(/Archetype/)).toBeInTheDocument();
  });
});
