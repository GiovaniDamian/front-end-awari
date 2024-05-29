import './App.css';
import List from './components/List';
import Router from './components/Router';

function App() {
    const users = [
        {
            id: 0,
            name: 'Siri'
        },
        {
            id: 1,
            name: 'Alexa'
        },
        {
            id: 2,
            name: 'Google Assistente'
        }
    ];


    return <Router />;
}

export default App;