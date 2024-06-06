import { configureStore } from '@reduxjs/toolkit';
import { favoriteReducer } from './favorites/favorites.slice';

const store = configureStore({
    reducer: {
        favorites: favoriteReducer
    }
});

store.subscribe(() => {
    const state = store.getState();
    const data = JSON.stringify(state);
    localStorage.setItem('react-redux', data);
});

export default store;