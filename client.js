/*
getList = function(){
    fetch('http://localhost:3000/third_service')
    .then(response => response.json())
    .then( 
        data => {
            console.log(data)
            var panel = document.createElement("div");
            console.log(data.list)
            data.forEach(element => {
                var card = document.createElement("h1");
                card.innerText = element.name;
                panel.appendChild(card)
            });
            var body = document.getElementById("main");
            body.appendChild(panel);  
        }
    );
}

getDataUser = function(){
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("surname").value);
    console.log(document.getElementById("age").value);
    
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var age = document.getElementById("age").value

    fetch('http://localhost:3000/data_client', {
        method: 'POST',
        body: JSON.stringify({
            "name" : name,
            "surname" : surname,
            "age" : age
        })
    })
    fetch('http://localhost:3000/client_info')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("txtName").innerHTML = data.name
        document.getElementById("txtSurname").innerHTML = data.surname
        document.getElementById("txtAge").innerHTML = data.age
    }); 
}
*/
getList2 = function(){
    fetch('http://localhost:3001/info_servers')
    .then(response => response.json())
    .then( 
        data => {
            console.log(data)
            document.getElementById("c_time1").innerHTML = data[0];
            document.getElementById("c_time2").innerHTML = data[0];
            document.getElementById("c_time3").innerHTML = data[0];
            document.getElementById("c_port1").innerHTML = data[1];
            document.getElementById("c_port2").innerHTML = data[1];
            document.getElementById("c_port3").innerHTML = data[1];
            document.getElementById("c_con1").innerHTML = data[2];
            document.getElementById("c_con2").innerHTML = data[3];
            document.getElementById("c_con3").innerHTML = data[4];
        }
    );
}

changeText = function(){
    if(document.getElementById("c_con1").value == "er"){
        document.getElementById("c_con1").innerHTML = "Error"
    }
}
