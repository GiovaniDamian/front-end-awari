import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import List from './List';

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

const mockedItems = [
    mockedItem,
    {
        id: 2,
        name: 'ivysaur',
        sprites: {
            other: {
                'official-artwork': {
                    front_default: ''
                }
            }
        }
    }
];

const mockStore = configureStore([]);

describe('List Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            favorites: []
        });
    });

    it('should render correctly', () => {
        render(
            <Provider store={store}>
                <List />
            </Provider>
        );
        expect(screen.getByTestId('list')).toBeInTheDocument();
    });

    it('should render items correctly', () => {
        render(
            <Provider store={store}>
                <List items={mockedItems} />
            </Provider>
        );
        expect(screen.getByTestId('list')).toBeInTheDocument();
        expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
        expect(screen.getByTestId('list-item-2')).toBeInTheDocument();
    });
});
