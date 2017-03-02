export function postPost(name) {
  return (dispatch) => {
    return axios.post('/post', {firstName: 'Marlon', lastName: 'Bernardes'})
      .then(function(response){
        console.log('post')
      });
  }
}
