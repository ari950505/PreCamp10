// 이메일 이름 비번 입력 박스
function checkValidation() {
    const email = document.getElementById('email').value  
    const password1 = document.getElementById('password1').value
    const password2 = document.getElementById('password2').value

    if(email !== ''&& password1 !== ''&& password2 !== '' && password1 === password2){
        //버튼 활성화
        document.getElementById('submit').setAttribute('style','background-color: yellow')
        document.getElementById('submit').disabled=false;   //버튼활성화
        
    } else {
        //버튼 비활성화한다. 
        document.getElementById('submit').setAttribute('style','background-color: none')
        document.getElementById('submit').disabled=true;   //버튼활성화
        
    }

}

// 전화번호 

function changePhone1() {
    const phone1 = document.getElementById('phone1').value
    
    if (phone1.length === 3) {
        document.getElementById('phone2').focus()
    }
}

function changePhone2() {
    const phone2 = document.getElementById('phone2').value
    if(phone2.length === 4 ) {
        document.getElementById('phone3').focus()
    }
}

function changePhone3() {
    const phone3 = document.getElementById('phone3').value
    if(phone3.length === 4 ) {
        document.getElementById('send').setAttribute('style','background-color: yellow')
        document.getElementById('send').disabled=false;   //버튼활성화
        
    }


}

// 인증번호 
let isStarted = false;
function getToken() {
    if (isStarted === false) {
        isStarted = true;
        let token = String(Math.floor(Math.random()*1000000)).padStart(6,'0')
        document.getElementById('auth').innerText = token;
        

        // 10초 타이머
        let time = 180
        setInterval(function() {
            if(time >= 0){
                const min = String(Math.floor(time/60)).padStart(2,'0')
                const sec = String(time% 60).padStart(2,"0")
                document.getElementById('timer').innerText = min + ':' + sec
                time = time - 1;
                document.getElementById('clear').setAttribute('style','background-color:yellow')
               ` // alert('인증이 완료되었습니다!')
            } else{
                document.getElementById('clear').disabled = true;

                isStarted = false;
            }
        },1000)
    } else {
        alert('Timer is already on.')
    }

    if(time >= 0){
        document 
    } else {
        
    }



}




