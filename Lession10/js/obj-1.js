//Làm việc với đối tượng trong javascript
// Cách 1:
//Khởi tạo đối tượng
var emp = new Object();
//Định nghĩa các thuộc tính
emp.fullName='';
emp.email='';
emp.address='';
emp.gender=true;
//Định nghĩa các phương thức
emp.add= function(fullName, email, address, gender){ //tham số đầu vào
    emp.fullName=fullName;
    emp.email=email;
    emp.address=address;
    emp.gender=gender;
}
emp.printInfor=function(){
    console.log("fullName",emp.fullName);
    console.log("Email",emp.email);
    console.log("address",emp.address);
    console.log("gender",emp.gender);
  
}
// Sử dụng đối tượng
//Gán giá trị cho thuộc tính
//Gọi thực hiện phương thức
emp. add ("Chung Trịnh", "chungtrinhj@gmail.com", "25 Vũ Ngọc Phan", true);
emp.printInfor(); //gọi pthuc hiển thị dl 
//mảng đối tượng => điều chỉnh với hướng đối tượng 
var arr=[
    emp. add ("Chung Trịnh", "chungtrinhj@gmail.com", "25 Vũ Ngọc Phan", true),
    emp. add ("Chung Trịnh", "chungtrinhj@gmail.com", "25 Vũ Ngọc Phan", true)
];
for(let i=0;i<arr.length;i++){
    const element=arr[i];
    // element.printInfor();
}
