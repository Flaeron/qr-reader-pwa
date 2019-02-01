import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import './QrCodeReader.css';

class LecacyQrCodeReader extends Component {
  state = {
    result: 'No result',
    imageLoaded: false,
  };

  qrReader = React.createRef();

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

  openImageDialog = () => {
    this.qrReader.current.openImageDialog();
  };

  render() {
    const { result } = this.state;
  
    return (
      <div className="qr-reader-wrapper">
        <QrReader
          ref={this.qrReader}
          className="qr-reader"
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          onImageLoad={this.onImageLoad}
          legacyMode
        />
        <button onClick={this.openImageDialog}>Find QR Code</button>
        <p>{result}</p>
      </div>
    );
  }
}

export default LecacyQrCodeReader;
