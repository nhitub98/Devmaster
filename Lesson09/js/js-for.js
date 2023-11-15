// vòng lặp for
//  tính tổng các só nguyên từ 1 đến 5;
tong =0;
// tong = tong + 1;
tong += 1;
tong += 2;
tong += 3;
tong += 4;
tong += 5;
console.log("Tong:",tong);
// ==> tong +=i ; i->[1,5]
tong=0;
for(let i=1; i<=5 ; i++){
    tong +=i;
}
console.log("Tong:",tong);
// while
tong =0;
i=1;
while(i<=5){
    tong +=i;
    i++;
}
console.log("Tong:",tong);
flag = true;
while(flag = !flag){
    console.log(flag);
}
console.log("flag:", flag);
// => kq;
flag = false;
while(flag = !flag){
    console.log(flag);
}
console.log("flag:", flag);
/*
flag = false;
while(!flag){
    console.log(flag);
}
console.log("flag:", flag);
* ==> vòng lặp vô hạn */

// do .. while
tong = 0;
i=1;
do{
    tong +=i++;
}while(i<=5);
console.log("Tong:",tong);

//  foreach
var arr = ["Hùng", "Dung", "Sang", "Trong"];

for(let index in  arr){
    console.log(index, arr[index]);
}
arr.forEach(item=>{
    console.log(item);
});
arr.forEach((item,index)=>{
    console.log(item, index);
});
