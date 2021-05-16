

let userController = new UserController("form-user-create", "table-users")

/*

user = {}
formFields = document.querySelectorAll('#form-user-create [name]')

console.log(formFields)


var clock = new Timer


function addUser(userData) {
    
    var tr = document.createElement('tr')
    tr.innerHTML= `
    <tr>
    <td><img src="${userData.photo}" alt="U" class="img-circle img-sm"></td>
    <td>${userData.name}</td>
    <td>${userData.email}</td>
    <td>${userData.admin}</td>
    <td>${clock.displayDate}</td>
    <td>
    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
    </td>
    </tr>
    `
    var table = document.getElementById('table-users')
    table.appendChild(tr)

    formFields.forEach( (field)=>{
        field.value = ""
    })

    var objUser = new User(user.name, user.gender, user.birth,user.country,user.email,user.password,user.photo,user.admin)

    console.log(objUser)


}




document.getElementById('form-user-create').addEventListener( 'submit' , (event)=> { 
    
    event.preventDefault();

    formFields.forEach( (field)=>{

        if (field.name === "gender") {

            if (field.checked) {
                user[field.name] = field.value
            }

        } else {

            user[field.name] = field.value

        }

        if(field.name === "admin") {
            if(field.checked) {
                user[field.name] = "sim"
            } else {
                user[field.name] = "não"
            }
        }
        
    })
    addUser(user)
    console.log(user)
})
 


var x = `
    <tr>
    <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
    <td>Fulano</td>
    <td>fulano@hcode.com.br</td>
    <td>Sim</td>
    <td>02/04/2018</td>
    <td>
    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
    </td>
    </tr>
`
    


*/