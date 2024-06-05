import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ListItem from './ListItem';
import { actions } from '../store/favorites/favorites.slice';
import userEvent from '@testing-library/user-event';

const mockedItem = {
    id: 1,
    name: 'bulbasaur',
    sprites: {
        other: {
            'official-artwork': {
                front_default: ''
            }
        }
    }
};

const mockStore = configureStore([]);

describe('ListItem Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            favorites: []
        });

        store.dispatch = jest.fn();
    });

    it('should render correctly', () => {
        render(
            <Provider store={store}>
                <ListItem item={mockedItem} />
            </Provider>
        );
        expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
    });

    it('should dispatch add action when heart is clicked and item is not favorite', async () => {
        render(
            <Provider store={store}>
                <ListItem item={mockedItem} />
            </Provider>
        );

        await userEvent.click(screen.getByTestId('heart-1'));
        expect(store.dispatch).toHaveBeenCalledWith(actions.add(mockedItem));
    });

    it('should dispatch remove action when heart is clicked and item is favorite', async () => {
        store = mockStore({
            favorites: [1]
        });

        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <ListItem item={mockedItem} />
            </Provider>
        );

        await userEvent.click(screen.getByTestId('heart-1'));
        expect(store.dispatch).toHaveBeenCalledWith(actions.remove(mockedItem));
    });
});
