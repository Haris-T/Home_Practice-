let fillData = () => {
    let ele = document.getElementById('container');
    
    let node = document.createTextNode ('Hello, I am Haris');
    ele.appendChild(node);
}

let deleteData = () => {
    let dele = document.getElementById('container');

    dele.innerHTML = 'Deleted Content....';
}

let rememberData = () => {
    let remData= document.getElementById('container')
    let data= remData.textContent
    console.log(data)
}