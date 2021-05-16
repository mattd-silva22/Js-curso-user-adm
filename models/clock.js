 class Timer {

    constructor() {
        this._local = 'pt-BR'
        this._currentTime;
        this._currentDate
        this._displayTime;
        this._displatDate
        this.inicial()
     }

     inicial() {
         this.setDisplayTime()
         this.setDisplayDate()

         
        setInterval(()=>{
            this.setDisplayTime();
            this.setDisplayDate()
         }, 1000);

        
     }

     setDisplayTime() {
         this.displayTime = this.currentTime.toLocaleTimeString(this._local)
     }

     setDisplayDate() {
         this.displayDate = this.currentTime.toLocaleDateString(this._local)
     }

     set currentTime(value) {
         this._currentTime = value
     }

     get currentTime () {
         return new Date;
     }



     set displayTime(value) {
         this._displayTime = value
     }

     get displayTime() {
         return this._displayTime
     }

     set displayDate(value) {
         this._displayDate = value
     }

     get displayDate() {
         return this._displayDate
     }

     get displayFullDate() {


        let tempDate = this.displayDate + "  " + this.displayTime
        return tempDate
     }
 }

