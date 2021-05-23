class User {
    constructor(name, gender , birth ,country , email ,password , photo, admin, registerDate)  {
        this._userName = name
        this._userGender = gender
        this._userBirth = birth
        this._userCountry = country
        this._userEmail = email
        this._userPassword = password
        this._userPhoto = photo
        this._userAdmin = admin
        this._userIdNum 
        this._userRegisterDate = registerDate

        
    }

    get userName() {
        return this._userName
    }
    
    get userGender() {
        return this._userGender
    }

    get userBirth() {
        return this._userBirth
    }

    get userCountry() {
        return this._userCountry
    }

    get userEmail() {
        return this._userEmail
    }

    get userPassword() {
        return this._userPassword
    }

    set userPassword(value) {
        // coisa aqui
    }

    get userPhoto() {
        return this._userPhoto
    }

    set userPhoto(value) {
        this._userPhoto = value
    }
    

    get userAdmin() {
        return this._userAdmin
    }

    get userRegisterDate() {
        return this._userRegisterDate
    }

    get userIdNum() {
        return this._userIdNum
    }

    set userIdNum(value) {
        this._userIdNum = value
    }


}