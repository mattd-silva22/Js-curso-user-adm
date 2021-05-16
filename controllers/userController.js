class UserController {
    constructor(formId, tableId) {
        this._formEl = document.getElementById(formId)
        this._tableEl = document.getElementById(tableId)
        this._userTeste

        this.onSubmit()

        
    }

    onSubmit(){

        this._formEl.addEventListener("submit", event => {

            event.preventDefault();
            let submitBtn = this._formEl.querySelector("[type='submit")
            let userData = this.getValues();
            if(!userData) {
                return false
            }
            submitBtn.disable = true
            this.getPhoto().then(
            /* 1º func de then caso POSITIVO*/
            (content) => {

                    userData.userPhoto = content

                    this.addLine(userData);
                    this.clearFormValue()
                    this.updateUserCounter() 
                    this._formEl.reset()
                    submitBtn.disable = false
                },

                /* 2º func de then caso ERRO*/
                (e) => {

                    console.error(e)
                }

            )
            })
    }


    updateUserCounter() {

        let adminNum = 0;
        let userNum = 0;
        
       
        [...this._tableEl.children].forEach(tr=>{

            userNum++;

            let user = JSON.parse(tr.dataset.user)
            console.log(user)

            if(user._userAdmin == "Admin") adminNum++;

            console.log(adminNum)



        })

        document.querySelector('#user-number-field').innerHTML = userNum;
        document.querySelector('#admin-number-field').innerHTML = adminNum;

        



    }

    getPhoto(){
        return new Promise((resolve, reject)=> {

            let fileReader = new FileReader();

            let elements = [...this._formEl.elements].filter(item => {

                if (item.name === 'photo') {
                    return item;
                }

            });

            let file = elements[0].files[0];

            fileReader.onload = () => {

                resolve(fileReader.result)
                

            };

            fileReader.onerror = (e) => {

                reject(e)
            }
            

            if(file) {
            fileReader.readAsDataURL(file);
            } else {
                resolve("dist/img/noavatar.jpg")
            }


        })
        
       
        
    }


    getValues() {

        let user = {};
        let isFormValid = true;
        
        [...this._formEl.elements].forEach( field=>{

            if (['name','email','password'].indexOf(field.name) > -1 && !field.value) {
                field.parentElement.classList.add('has-error')
                isFormValid = false

            }
            if (field.name === "gender") {
    
                if (field.checked) {
                    user[field.name] = field.value
                }
    
            } else {
    
                user[field.name] = field.value
    
            }
    
            if(field.name === "admin") {
                if(field.checked) {
                    user[field.name] = "Admin"
                } else {
                    user[field.name] = "User"
                }
            }

            
            
        })

        if (!isFormValid) {
            return false
        }

        var clock = new Timer;
        
        return new User(user.name, user.gender, user.birth,user.country,user.email,user.password,user.photo,user.admin, clock.displayFullDate);
        
    }


    
    addLine(dataUser) {

        let tr = document.createElement('tr'); 
        
        tr.dataset.user = JSON.stringify(dataUser)
        
        
        tr.innerHTML =   `
            <tr>
                <td><img src=${dataUser.userPhoto} alt="User Image" class="img-circle img-sm"></td>
                <td>${dataUser.userName}</td>
                <td>${dataUser.userEmail}</td>
                <td>${dataUser.userAdmin}</td>
                <td>${dataUser.userRegisterDate}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `

        this._tableEl.append(tr) 

    }

    clearFormValue() {
        [...this._formEl.elements].forEach( field=>{
            field.value ='';
        })
    }
}