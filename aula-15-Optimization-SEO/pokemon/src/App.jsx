import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import { useDispatch } from 'react-redux';
import { actions } from './store/favorites/favorites.slice';


function App() {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    const loadDetails = (items) => {
        const promises = items.map((item) => {
            return fetch(item.url).then((response) => response.json())
        });
        Promise.all(promises)
            .then((data) => {
                setItems(data);
            });
    }

    useEffect(() => {
        // Inicialização
        const localData = localStorage.getItem('react-redux');
        if (localData) {
            const parsed = JSON.parse(localData);
            const { favorites } = parsed;
            dispatch(actions.init(favorites));
        }

        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { results } = data;
                loadDetails(results);
            })
            .catch(() => {
                console.error('Error');
            });
    }, [dispatch]);

    return (
        <div>
            <div>
                <img alt="Pokemon API" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
            </div>
            <List items={items} />
        </div>
    );
}

export default App;