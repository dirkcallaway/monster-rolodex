import { Component } from 'react';

class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.monsters.map((monster) => (
          <h1 key={monster.id}>
            {monster.name}
          </h1>
        ))}
      </div>
    )
  }
}

export default CardList;