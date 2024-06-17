class school {

    constructor(name,email,contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }  
    student() {
        document.getElementById('student').innerHTML = ( `Student Details: </br></br>Name: ${this.name} <br> Email:  ${this.email}  <br>Contact:  ${this.contact}`);
    } 
    faculty() {
    document.getElementById('faculty').innerHTML = ( `Faculty Details: </br></br>Name: ${this.name} <br> Email:  ${this.email}  <br>Contact:  ${this.contact}`);
    } 
    peon() {
        document.getElementById('peon').innerHTML = ( `Peon Details: </br></br>Name: ${this.name} <br> Email:  ${this.email}  <br>Contact:  ${this.contact}`);
    } 
}
let a1 = new school('Urvisha','Urvishamevada90@gmail.com',4598709524759);
a1.student();

let a2 = new school('rwn fac','kd131@gmail.com',34570912759);
a2.faculty();

let a3 = new school('peon','pegrfn@gmail.com',349875097);
a3.peon();