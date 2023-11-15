var regx = /Devmaster Academy/;
var str = "Chào mừng bạn đến với [Devmaster Academy]...";
if(regx.test(str)){
    console.log(str, "Có chứa Devmaster Academy");
}else{
    console.log(str, "Không có chứa Devmaster Academy");
}
regx1 = /n+/;
str = "Hello";
if(regx1.test(str)){
    console.log("Không chứa ký tự n");
}else{
    console.log("Có chứa ký tự n");
}