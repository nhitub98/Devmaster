// Làm việc với đối tương trong javascript 
// cách 1
// Khởi tạo đôi tượng
var emp = new Object();
// Định nghĩa thuộc tính
emp.fullName = '';
emp.email ='';
emp.address='';
emp.gender=true;
// Định nghĩa các phương thức
emp.add = function(fullName,email,address,gender){
    emp.fullName=fullName;
    emp.email =email;
    emp.address=address;
    emp.gender=gender;
}
emp.printInfor = function(){
    console.log("FullName:",emp.fullName);
    console.log("Email:",emp.email);
    console.log("Address:",emp.address);
    console.log("Gender:",emp.gender);
}
// Sử đụng đối tượng
// -gán giá trị cho thuộc tính
// -Gọi thực hiện phương thức
emp.printInfor();
emp.add("Chung Trịnh","chungtrinhj@gmail.com","25 Vũ ngọc phan",true);
emp.printInfor();


// mảng đối tượng => điều chỉnh với hướng đối tượng
var arr = [
    emp.add("Chung Trịnh","chungtrinhj@gmail.com","25 Vũ ngọc phan",true),
    emp.add("Devmaster","devmaster@gmail.com","25 Vũ ngọc phan",true)
];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // element.printInfor();
}