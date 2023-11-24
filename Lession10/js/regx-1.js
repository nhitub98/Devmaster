var regx=/Devmaster Academy/;
var str="Chào mừng bạn đến với [Devmaster Academy] ...";
if(regx.test(str)){
    console.log(str, "Có chứa Devmaster Academy");
}else{
    console.log(str, "Không chứa Devmaster Academy");
}
regx1=/n+/;
str="Hellon";
if(regx1.test(str)){
    console.log("Chứa kí tự n");
}else{
    console.log("Không chứa kí tự n");
}