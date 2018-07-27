import React, { Component } from 'react';
import Tile from './Tile.js';

class Sleeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 2,
      showRightArrow: true,
      showLeftArrow: true
    };
  }

  componentDidMount() {}

  populateTiles() {
    // if (this.props.room.sleeping_arrangements.length)
  }

  populateArrows() {
    let arrangementArr = this.props.room.sleeping_arrangements || [];
    this.state.start > 0
      ? this.setState({ showLeftArrow: true })
      : this.setState({ showLeftArrow: false });
    this.state.end < arrangementArr.length
      ? this.setState({ showRightArrow: true })
      : this.setState({ showRightArrow: false });
  }

  render() {
    let allTiles = this.props.room.sleeping_arrangements || [];
    let displayTiles = allTiles.slice(this.state.start, this.state.end + 1);

    return (
      <div className="sleeping">
        <div className="sleeping__title">Sleeping arrangements</div>
        <Tile
          detail={displayTiles}
          rightArrow={this.state.showRightArrow}
          leftArrow={this.state.showLeftArrow}
        />

        <div className="line"> </div>
      </div>
    );
  }
}
export default Sleeping;
