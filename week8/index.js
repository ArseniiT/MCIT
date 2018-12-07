$(() => {
  $.get('https://reqres.in/api/users?page=2', (data) => {
    let a = data.data;

    for (let i = 0; i < a.length; i++) {
      const d = a[i];
      const c = `<p>${d.id}</p>
    <p>${d.first_name}</p>
    <p>${d.last_name}</p>
    <img src="${d.avatar}" alt="">`

    $( '.container' ).append( c );
    }
    
});
  /* $.get('https://reqres.in/api/users/1', (data) => {
    let d = data.data;
    let c = `<p>${d.id}</p>
    <p>${d.first_name}</p>
    <p>${d.last_name}</p>
    <img src="${d.avatar}" alt="">`
    $( '.container' ).append( c );
}); */
});