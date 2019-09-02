import axios from 'axios';
import dispatcher from '../dispatcher';

export function addPost(title, userId, body) {
   dispatcher.dispatch({
   type: 'ADD_POST',
   data: {title, userId, body}
  });
}

export function getPosts() {
  axios.get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      dispatcher.dispatch({
		  type:'GET_POSTS',
		  data: response.data
	  });
});
}