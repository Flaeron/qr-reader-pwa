import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import './QrCodeReader.css';

class QrCodeReader extends Component {
  state = {
    result: 'No result',
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    const { result } = this.state;
  
    return (
      <div className="qr-reader-wrapper">
        <QrReader
          className="qr-reader"
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{result}</p>
      </div>
    );
  }
}

export default QrCodeReader;
