import React from 'react';
import ReactDOM from 'react-dom';


import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import './app/styles/styles.css'

class App extends React.Component {
  render() {
    const blogItems = [
      { title: "Название поста", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quis, recusandae quisquam fuga temporibus itaque corporis nemo veniam quos consequatur blanditiis quas similique architecto, rem assumenda enim tempora ducimus facere.", data: "30/07/19"},
      { title: "Название поста", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quis, recusandae quisquam fuga temporibus itaque corporis nemo veniam quos consequatur blanditiis quas similique architecto, rem assumenda enim tempora ducimus facere.", data: "30/07/19"},
      { title: "Название поста", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quis, recusandae quisquam fuga temporibus itaque corporis nemo veniam quos consequatur blanditiis quas similique architecto, rem assumenda enim tempora ducimus facere.", data: "30/07/19"},
      { title: "Название поста", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quis, recusandae quisquam fuga temporibus itaque corporis nemo veniam quos consequatur blanditiis quas similique architecto, rem assumenda enim tempora ducimus facere.", data: "30/07/19"}
    ];


    return <div>
      <WelcomeModal/>
      <Blog items={blogItems} titleBlog="Блог"/>
	  	  
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));