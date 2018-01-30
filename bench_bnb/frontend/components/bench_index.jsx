import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    let benches = this.props.benches;
    return (
      <ul>
        {benches.map((bench)=>(
          <li>
            <p>Description: {bench.description}</p>
            <p>Lat: {bench.lat}</p>
            <p>Lng: {bench.lng}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default BenchIndex;
