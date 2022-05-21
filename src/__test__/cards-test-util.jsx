/* eslint react/prop-types: 0 */
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cardsReducers from '../redux/cards/cards';
import CardData from './__mock__/CardsData';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { cards: cardsReducers }, preloadedState }),
    ...renderOptions
  } = { CardData },
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
