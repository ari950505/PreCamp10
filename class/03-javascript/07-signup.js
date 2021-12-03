function checkValidation() {
    
    const email = document.getElementById('email').value
    const password1 = document.getElementById('password1').value
    const password2 = document.getElementById('password2').value
    
    //수도코드? 이메일 칸이 비어있지 않아야 하고 ,
    // 비밀번호 칸도 비어있지 않아야 하고,
    // 확인창도 비어있지 않아야 함. 
    // 비번 확인 === 비밀번호 
    if(email !== ''&& password1 !== ''&& password2 !== ''){
        //버튼 활성화
        document.getElementById('mybutton').setAttribute('style','background-color: lightpink')
        document.getElementById('mybutton').disabled=false;   //버튼활성화
        
    } else {
        //버튼 비활성화한다. 
        document.getElementById('mybutton').setAttribute('style','background-color: none')
        document.getElementById('mybutton').disabled=true;   //버튼활성화
        
    }
}