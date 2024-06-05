import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/favorites/favorites.slice';
import Heart from './Heart';
import './ListItem.css';

function ListItem({ item }) {
    const favorites = useSelector(({ favorites }) => favorites);
    const dispatch = useDispatch();

    const { name, sprites } = item;
    const sprite = sprites.other['official-artwork'].front_default;
    const isFavorite = favorites.includes(item.id);
    
    const handleClick = () => {
        if (isFavorite) {
            dispatch(actions.remove(item));
        } else {
            dispatch(actions.add(item));
        }
    }

    return (
        <li className="list-item" data-testid={`list-item-${item.id}`}>
            <div className="list-item-image-wrapper">
                <img alt={name} className="list-item-image" src={sprite} />
            </div>
            <p>{name}</p>
            <div className='list-item-heart-wrapper'>
                <Heart onClick={handleClick} selected={isFavorite} testId={`heart-${item.id}`} />
            </div>
        </li>
    );
}

export default ListItem;