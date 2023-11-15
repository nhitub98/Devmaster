// cấu trúc if
console.log("Demo cấu trúc if");
// if đơn
a=100;
b=200;
if(a>b){
    console.log(a,">",b);
}
// if đầy đủ
if(a>b){
    console.log(a, "lớn hơn");
}else{
    console.log(a, "nhỏ hơn");
}
// if ...
// giải phương trình bậc nhất a.x+b=0
a=0;
b=2;

if(a==0){
    if(b==0){
        console.log("Pt vô số nghiệm");
    }else{// b!=0
        console.log("Pt vô nghiệm");
    }
}else{ // a!=0
    x=-b/a;
    console.log("Nghiem pt:",x);
}
// html=>