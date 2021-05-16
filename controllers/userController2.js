class UserController {
    constructor(formId, tableId) {
        this._formEl = document.getElementById(formId)
        this._tableEl = document.getElementById(tableId)

        this._userTeste;

        this._userFotoTest


        this.onSubmit()

        

        
    }

    onSubmit(){

        this._formEl.addEventListener("submit", event => {

            event.preventDefault();

            let userData = this.getValues();

            this.getPhoto((content)=>{

                this._userFotoTest = content
                userData.photo = content
                console.log('INFO VINDA DO getphoto (FileReader)' + content)
                this.addLine(userData)
                this.clearFormValue()


            })
      
        });

    }

    getPhoto(callback){

        let fileReader = new FileReader();

        let elements = [...this._formEl.elements].filter(item => {

            if (item.name === 'photo') {
                return item;
            }

        });

        let file = elements[0].files[0];

        fileReader.onload = () => {

            callback(fileReader.result)
            

        };

       
            fileReader.readAsDataURL(file);
       
        
    }
    
    getValues() {

        let user = {};

        
        [...this._formEl.elements].forEach( field=>{

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

            if(field.name === "photo") {
                // user.photo = imgBase64
                user.photo = this._userFotoTest
            }
            
        })

        var clock = new Timer;
        this._userTeste = new User(user.name, user.gender, user.birth,user.country,user.email,user.password,user.photo,user.admin, clock.displayDate);
        return this._userTeste;
    }   


    addLine(dataUser) {

        this._tableEl.innerHTML = `
            <tr>
                <td><img src=${dataUser.photo} class="img-circle img-sm"></td>
                <td>${dataUser._userName}</td>
                <td>${dataUser._userEmail}</td>
                <td>${dataUser._userAdmin}</td>
                <td>${dataUser._userCreateDate}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `;

    }




    clearFormValue() {
        [...this._formEl.elements].forEach( field=>{
            field.value ='';
        })
    }

    get userTeste() {
        return this._userTeste
    }
}