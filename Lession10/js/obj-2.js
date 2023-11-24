// Tạo đối tượng với {}
emp={
    //Khai báo các thuộc tính của đối tượng
fullName:'',
email:'',
address:'',
gender:true,
//Định nghĩa các phương thức

addInfor:function(fullName, email, address, gender){ //tham số đầu vào
        this.fullName=fullName;
        this.email=email;
        this.address=address;
        this.gender=gender;
},
printInfor:function(){
    console.log("fullName",emp.fullName);
    console.log("Email",emp.email);
    console.log("address",emp.address);
    console.log("gender",emp.gender);
}
};
// Sử dụng đối tượng

emp. add ("Chung Trịnh", "chungtrinhj@gmail.com", "25 Vũ Ngọc Phan", true);
emp.printInfor(); //gọi pthuc hiển thị dl 

emp. add ("Chung Trịnh 1", "chungtrinh1@gmail.com", "25 Vũ Ngọc Phan1", false);
emp.printInfor(); //gọi pthuc hiển thị dl 
//mảng đối tượng
var arr=[];
emp.addInfor("Chung 1","chung1@gmail.com","25 Vũ Ngọc Phan 1", true);
arr.push(emp);
emp.addInfor("Chung 2","chung1@gmail2.com","25 Vũ Ngọc Phan 2", true);
arr.push(emp);
emp.addInfor("Chung 3","chung1@gmail2.com","25 Vũ Ngọc Phan 2", true);
arr.push(emp);
emp.addInfor("Chung 4","chung1@gmail2.com","25 Vũ Ngọc Phan 2", true);
arr.push(emp);
console.log("----------mang--------------");
console.log(arr);
console.log(arr.length);
arr=[];
emp1=Object.create(emp);
emp.addInfor("Chung 1","chung1@gmail.com","25 Vũ Ngọc Phan 1", true);
arr.push(emp1);
emp2=Object.create(emp);
emp.addInfor("Chung 2222","chung1@gmail.com","25 Vũ Ngọc Phan 1", true);
arr.push(emp2);