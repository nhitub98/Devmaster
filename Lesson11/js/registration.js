
// function submit form
const fn_FormSubmit = ()=>{
    debugger;
    let flag = true;
    let msg = "";
    // code logic
    // flag = fn_UserId();
    // flag = fn_Password();
    // flag = fn_Name();
    // flag = fn_Country();
    // flag = fn_ZipCode();
    // flag = fn_Gender();
    // flag = fn_Language();
    // let userId = document.getElementById("userId");
    // let errId = document.getElementById("errUserId");
    msg = " không rỗng!";
    flag = fn_Required(userId,errUserId,msg);
    flag = fn_RangeLength(userId,errUserId,5,12,"Độ dài  từ 5 - 12")
    flag = fn_Required(password,errPassword,msg);
    
    console.log(flag);

    return flag;
}

// hàm kiểm tra User Id
const fn_UserId = ()=>{
    debugger;
    let u = document.getElementById("userId").value;
    u=u.trim();
    if(u==""){
        document.getElementById("errUserId").innerHTML ="User Id, không được để trống";
        return false;
    }else if(u.length <5 || u.length >12){
        document.getElementById("errUserId").innerHTML="User Id có độ dài từ 5-12";
        return false;
    }else{
        document.getElementById("errUserId").innerHTML="Ok";
        document.getElementById("errUserId").style.color='green';
    }
    return true;
}
const fn_Password = ()=>{
    debugger;
    let val = document.getElementById("password").value;
    val=val.trim();
    if(val==""){
        document.getElementById("errPassword").innerHTML ="Password, không được để trống";
        return false;
    }else if(val.length <7 || val.length >12){
        document.getElementById("errPassword").innerHTML="Password có độ dài từ 7-12";
        return false;
    }else{
        document.getElementById("errPassword").innerHTML="Ok";
        document.getElementById("errPassword").style.color='green';
    }
    return true;
}
const fn_Name = ()=>{
    debugger;
    let val = document.getElementById("name").value;
    val=val.trim();
    if(val==""){
        document.getElementById("errName").innerHTML ="Name, không được để trống";
        return false;
    }else{
        let pattern = /^[a-zA-Z ]{3,150}$/;
        if(!pattern.test(val)){
            document.getElementById("errName").innerHTML="Name chỉ chứa các ký tự alphabet";
            return false;
        }else{
            document.getElementById("errName").innerHTML="Ok";
            document.getElementById("errName").style.color='green';
        }
    }
    return true;
}
const fn_Country = ()=>{
    debugger;
    let val = document.getElementById("country").value;
    val=val.trim();
    if(val==""){
        document.getElementById("errCountry").innerHTML ="Country, không được để trống";
        return false;
    }else{
        document.getElementById("errCountry").innerHTML="Ok";
        document.getElementById("errCountry").style.color='green';
    }
    return true;
}
const fn_ZipCode = ()=>{
    debugger;
    let val = document.getElementById("zipCode").value;
    val=val.trim();
    if(val==""){
        document.getElementById("errZipCode").innerHTML ="ZipCode, không được để trống";
        return false;
    }else{
        document.getElementById("errCountry").innerHTML="Ok";
        document.getElementById("errCountry").style.color='green';
    }
    return true;
}
const fn_Gender = ()=>{
    debugger;
    let m = document.getElementById("male");
    let f = document.getElementById("feMale");
    if(m.checked == false && f.checked == false){
        document.getElementById("errGender").innerHTML ="Gender, phải được chọn";
        return false;
    }else{
        document.getElementById("errGender").innerHTML="Ok";
        document.getElementById("errGender").style.color='green';
    }
    return true;
}
const fn_Language = ()=>{
    debugger;
    let lang = document.querySelectorAll("input[name='language']");
    console.log(lang);
    check = false;
    for (let i = 0; i < lang.length; i++) {
        if(lang[i].checked==true){
            check=true;
            break;
        }
    }
    if(check == false){
        document.getElementById("errLanguage").innerHTML ="Language, phải được chọn";
        return false;
    }else{
        document.getElementById("errLanguage").innerHTML="Ok";
        document.getElementById("errLanguage").style.color='green';
    }
    return true;
}

const fn_Required = (element, idError, msg)=>{
    debugger;
    if(element.value == ""){
        let message = "<b> " + element.name + "<b>" + msg;
        // document.getElementById(idError).innerHTML = message;
        idError.innerHTML = message;
        return false;
    }else{
        idError.innerHTML = "Ok";
    }
    return true;
}
const fn_RangeLength = (element, idError,min, max,msg)=>{
    debugger;
    if(element.value.length < min || element.value.length > max){
        let message = "<b> " + element.name + "<b>" + msg;
        idError.innerHTML = message;
        return false;
    }else{
        idError.innerHTML = "Ok";
    }
    return true;
}