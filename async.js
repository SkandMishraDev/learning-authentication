async function asyncfunc(){
    let responce =await fetch('https://api.github.com/users');
    let data =responce.json();
    console.log(data);
}