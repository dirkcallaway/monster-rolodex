import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: '',
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        },
      )
    );
  };

  onSearchChange = (event) => {
    this.setState(
      () => {
        return {
          searchString: event.target.value.toLowerCase(),
        }
      },
    )
  }

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));
    return (
      <div className="App">
        {
          <div>
            <SearchBox
              className='search-box'
              onChangeHandler={onSearchChange}
              placeholder='Search Monsters'>
            </SearchBox>
            <CardList
              monsters={filteredMonsters}>
            </CardList>
          </div>
        }
      </div>
    );
  }
}

export default App;
