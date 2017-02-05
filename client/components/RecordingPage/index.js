import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import style from './style.css'
import {captureUserMedia, S3Upload} from './AppUtils';
import RaisedButton from 'material-ui/RaisedButton';
import RecordRTC from 'recordrtc';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

class RecordingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordVideo: null,
      src: null,
      uploadSuccess: null,
      uploading: false
    };

    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
  }

  componentDidMount() {
    if (!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log('requestUserMedia')
    captureUserMedia((stream) => {
      this.setState({src: window.URL.createObjectURL(stream)});
      console.log('setting state', this.state)
    });
  }

  startRecord() {
    this.setState({
      recording: true
    })

    captureUserMedia((stream) => {
      this.state.recordVideo = RecordRTC(stream, {type: 'video'});
      this.state.recordVideo.startRecording();
    });

    setTimeout(() => {
      this.stopRecord();
    }, 10000);

  }

  stopRecord() {
    this.setState({
      recording: false
    })

    this.state.recordVideo.stopRecording(() => {
      let params = {
        type: 'video/webm',
        data: this.state.recordVideo.blob,
        id: Math.floor(Math.random() * 90000) + 10000,
        currentUserId: this.props.params.ourId || '123',
        matchUserId: this.props.params.matchId || '456',
      }

      this.setState({uploading: true});

      S3Upload(params).then((success) => {
        console.log('enter then statement')
        if (success) {
          console.log(success)
          this.setState({uploadSuccess: true, uploading: false});
          setTimeout(() => {
            browserHistory.push(`/stack`);
          }, 1000);
        }
      }, (error) => {
        alert(error, 'error occurred. check your aws settings and try again.')
      }).catch((err) => {
        console.log(err);
      })
    });
  }

  render() {
    const recording = this.state.recording
    return (
      <div className={style.main}>
        <div className={style.videoContainer}>
          <video autoPlay muted src={this.state.src}/>
        </div>
        <div>
          {this.state.uploading
            ? <div>Uploading...</div>
            : null
          }
          {this.state.uploadSuccess
            ? 'Upload success!'
            : ''
          }
        </div>
        <div className={style.padding}>
          <div className={style.inline}>
            {!recording ?
              <RaisedButton primary={true} onClick={this.startRecord} label="Start Record"/> : null
            }

          </div>
          <div className={style.inline}>
            {recording ?
            <RaisedButton primary={true} onClick={this.stopRecord} label="Stop Record"/> : null
            }
          </div>
          <div className={style.addtext}>
            <h2>
              Be nice, say something witty!
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default RecordingPage;
