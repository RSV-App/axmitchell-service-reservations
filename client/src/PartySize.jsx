import React from 'react';
import PropTypes from 'prop-types';

import '../../public/styles.css';

class PartySize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 2,
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.onChangeFuncs = this.onChangeFuncs.bind(this);
  }

  handleSizeChange(e) {
    this.props.handleSize(e);
    this.setState({
      size: e.target.value,
    });
  }

  onChangeFuncs(e) {
    this.handleSizeChange(e);
    this.props.getBtnBack();
  }

  render() {
    const size = [];
    for (let i = 1; i <= 20; i++) {
      size.push(i);
    }

    const partySize = size.map(party => <option className="party-size-selected" key={party} value={party}>{party}</option>);

    return (
      <div className="party-size-wrapper">
        <div className="party-size-title">Party Size</div>
        <select className="party-size-list" defaultValue="2" onChange={(e) => { this.onChangeFuncs(e); }}>
          {partySize}
        </select>
      </div>
    );
  }
}

PartySize.propTypes = {
  handleSize: PropTypes.func,
  getBtnBack: PropTypes.func,
};

export default PartySize;
