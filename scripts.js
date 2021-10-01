const button = document.getElementById('button')
button.addEventListener('click', () => {
    let xhr
    //si Windows tiene esto significa que no es una versión anterior a IE 10 
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()//Objeto que guarda la información
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")//Para IE que no han sido actualizados
    xhr.open('GET',
    'https://jsonplaceholder.typicode.com/users' )//los codigos van dentro de la URL a la que se hace la petición a diferencia que con POST en 
                    //donde se debe de crear un objeto en donde se guarde la info 
    /*Se pone antes del SEND un evento para que escuche cuando llega la petición*/
    xhr.addEventListener('load', (data) => {// if(this.readyState == 4 && this.status == 200)
        const dataJSON = JSON.parse(data.target.response)

        const list = document.getElementById('list')
        for(const userInfo of dataJSON){
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })
    xhr.send()
})