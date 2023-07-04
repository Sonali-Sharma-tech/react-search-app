import './App.css';
import { SearchComponent } from './components/SearchComponent';

function App() {
  const nameList = [
    "Brennen England",
    "Dion Welker",
    "Debra Santana",
    "Irene Shelley",
    "Markus Lassiter",
    "Anders Moon",
    "Tyson Roche",
    "Kelsy Nance",
    "Dangelo Reeder",
    "Aniyah Bach"
  ];
  return (
    <SearchComponent names={nameList} />
  );
}

export default App;
