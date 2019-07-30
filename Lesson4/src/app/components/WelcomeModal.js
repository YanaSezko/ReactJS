import React, {Component} from 'react';

export default class WelcomeModal extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <div>
		
        <button 
          className="btn" 
          onClick={this.openModal.bind(this)}
          >Прочитать</button>

         {modalOpen ? <Post closeModal={this.closeModal.bind(this)} />
          : ''}
      </div>
    );
  }
}
