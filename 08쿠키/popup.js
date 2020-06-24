    
    
    
    
       //쿠키 확인 함수
       function getCookie(name){
        //쿠키를 얻는다.
       var cookies = document.cookie.split("; ");
       // console.log(cookies);
       for(var i in cookies){
           if(cookies[i].search(name) != -1){//쿠키를 찾은경우
            
            return true;//찾은 의미로 true반환

           }
       }
    }
    
    
    //쿠키 생성함수() 메개변수를 받아서 해당이름으로 1일간 유지되는 쿠키를 생성
     function createCookie(ddong) {

        var date = new Date();
        date.setDate(date.getDate() + 1);
        
        var cookie ="";
        cookie += ddong +"="+"" + ";";//키=값 설정
        cookie += "expires=" + date.toUTCString();
        document.cookie = cookie;
        
     }