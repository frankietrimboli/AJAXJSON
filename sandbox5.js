const getTodos = () => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && reuest.status === 200){
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', 'todos.json');
  request.send();
}

getTodos(() => {
  console.log('callbacl fired')
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});
