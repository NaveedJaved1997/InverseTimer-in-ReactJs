import React from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 25 };
    }

    bg = "";
    fc = "";
    tick() {
        if(this.state.seconds>0){
            this.setState(state => ({
            seconds: state.seconds - 1
              }));
              }
              if(this.state.seconds==21){
                this.bg = 'black';
             }
             if(this.state.seconds==11){
                 this.bg = 'yellow';
                 this.fc = 'black;'
                     }
             if(this.state.seconds==6){
             this.bg = 'white';
             this.fc = 'black;'
                 }       
        
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
            <style>
                {'.App-header{background-color:'+this.bg+';}'}
                {'.App-header{color:'+this.fc+';}'}
            </style>
          <h1>Timer: {this.state.seconds}</h1>
          
        </div>
      );
    }
  }
  export default Timer;
  
