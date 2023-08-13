import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card-lists/CardList'
import Search from './search/Search'

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  console.log('render')
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then ((response) => {return response.json() })
      .then ((users) => {
        setMonsters(users)
      })
  }, [])
  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterMonsters(newFilterMonsters)
  },[monsters, searchField]);
  return (
    <div className="App">
      <h1 className='title'>Monster Rolodex</h1>
      <Search onSearchHandler={onSearchChange} placeholder='search monsters' className='monster-search-box' />
      <Card monsters={filterMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state ={
//      monsters: [],
//      searchField: ''
//     }
//   }
//   componentDidMount () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then ((response) => {return response.json() })
//     .then ((users) => {
//       this.setState(() => {
//         return { monsters: users}
//       })
//     })
//   }
//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return { searchField }
//     })
//   }
//   render () {
//     const filterMonster = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField)
//     })
//     return (
//       <div className="App">
//         <h1 className='title'>Monster Rolodex</h1>
//         <Search onSearchHandler={this.onSearchChange} placeholder='search monsters' className='monster-search-box' />
//         <Card monsters={filterMonster} />
//       </div>
//     );
//   }
// }

export default App;
