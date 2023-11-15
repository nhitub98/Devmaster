// tạo đối tượng với {}
emp = {
    // Khai báo các thuộc tính của đói tượng
    fullName : '',
    email :'',
    address:'',
    gender:true,
    // Định nghĩa các phương thức
    addInfo:function(fullName,email,address,gender){
        this.fullName=fullName;
        this.email =email;
        this.address=address;
        this.gender=gender;
    },
    printInfor: function(){
        console.log("FullName:",this.fullName);
        console.log("Email:",this.email);
        console.log("Address:",this.address);
        console.log("Gender:",this.gender);
    }
};

// Sự dụng đối tượng
emp.addInfo("Chung Chung","Chung@gmail.com","25 Vũ Ngọc Phan",true);
emp.printInfor();
emp.addInfo("Chung Chung 1","Chung1@gmail.com","25 Vũ Ngọc Phan1",false);
emp.printInfor();

// mảng đối tượng
var arr = [];
emp.addInfo("Chung 1","chung1@gmail.com","25 VNP 1", true);
arr.push(emp);

emp.addInfo("Chung 2","chung2@gmail.com","25 VNP 2", true);
arr.push(emp);

emp.addInfo("Chung 3","chung3@gmail.com","25 VNP 3", false);
arr.push(emp);
console.log("============mang==========");
console.log(arr);
console.log(arr.length);

arr=[];
emp1 = Object.create(emp);
emp1.addInfo("Chung 1","chung1@gmail.com","25 VNP 1", true);
arr.push(emp1);
emp2 = Object.create(emp);
emp2.addInfo("Chung 2","chung2@gmail.com","25 VNP 2", true);
arr.push(emp2);
console.log("============mang==========");
console.log(arr);
console.log(arr.length);