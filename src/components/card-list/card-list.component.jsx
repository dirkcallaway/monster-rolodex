import { Component } from 'react';
import MonsterCard from '../monster-card/monster-card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    return (
      <div
        className='card-list'>
        {this.props.monsters.map((monster) => (
          <MonsterCard monster={monster}></MonsterCard>
        ))}
      </div>
    )
  }
}

export default CardList;