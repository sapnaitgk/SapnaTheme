function myFunction1(){
    var name = document.getElementById('website').value;
    var email = document.getElementById('email').value;
    var whatsappnumber = document.getElementById('whatsappnumber').value;
    var result = document.getElementById('result');
    var currenturllink = window.location.href;
    if(name == ""){
      document.getElementById('website').style.border = "1px solid red";
      alert("Enter your Website name");
    }else if(email == ""){
      document.getElementById('email').style.border = "1px solid red";
      alert("Enter your business Email Id"); 
    }else{
        result.value = `
        <h1>Contact Us !</h1>
        <div style="text-align: center;">
            <h2 style="text-align: center;">Welcome to <span id="W_Name">`+name+`</span>!</h2>

            <p style="font-size: 17px;">Please email us if you have any queries about the site, advertising, or anything
                else.</p>
            <img alt="contact-us"
                src="https://lh3.googleusercontent.com/-BA7qy8h_v1g/YLVCWDNZdCI/AAAAAAAAALw/rsHNJWX0BK4P5CuB0ymG8QkJ9A9E8KchgCLcBGAsYHQ/s16000/email-us-1805514__480.webp"
                style="width: 320px;" />

            <p style="text-align: center;"><i class="fas fa-envelope-open-text"
                    style="color: #2c3e50; font-size: 20px;"></i> <b><i> <span id="W_Email"><a
                                href="mailto:`+email+`">`+email+`</a></span></i></b><br />

                <i class="fab fa-whatsapp-square" style="color: #3edc81; font-size: 20px;"></i> <b><span
                        id="W_whatsapp"><a href="https://api.whatsapp.com/send?text=Hello&amp;phone=91`+whatsapp+`"
                            target="_blank">`+whatsapp+`</a></span></b><br />
            </p>

            <h3 style="color: #3e005d;">We will revert you as soon as possible...!</h3>
            <p style="color: #3e005d; text-align: center;">Thank you for contacting us! <br /><b>Have a great
                    day</b></p>
            <span style="font-size: 1px; opacity: 0;">This page is generated with the help of <a
                    href="`+currenturllink+`"
                    style="color: inherit;">Contact Us Page Generator</a></span>
        </div> 
        `;
      alert("Will you do me a favor? Please click on at least one ad before leaving the site.")
     
      //alert("Congrates, Your Contact Us page has been generated!");
      document.getElementById('Msg').innerHTML = "Congrats! Your Contact Us page has been generated. Copy the HTML code below <svg style='color: red; width: 20px;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M256 256v64c0 17.67 14.31 32 32 32s32-14.33 32-32V256c0-17.67-14.31-32-32-32S256 238.3 256 256zM200 272H160V352c0 17.67 14.31 32 32 32s32-14.33 32-32V267.6C216.5 270.3 208.5 272 200 272zM72 272C69.26 272 66.66 271.5 64 271.2V480c0 17.67 14.31 32 32 32s32-14.33 32-32V272H72zM416 288V224c0-17.67-14.31-32-32-32s-32 14.33-32 32v64c0 17.67 14.31 32 32 32S416 305.7 416 288zM384 160c11.72 0 22.55 3.381 32 8.879V136C416 60.89 355.1 0 280 0L191.3 0C162.5 0 134.5 9.107 111.2 26.02L74.81 52.47C48 72.03 32 103.5 32 136.6V200C32 222.1 49.91 240 72 240h128c22.09 0 39.1-17.91 39.1-39.1c0-28.73-26.72-40-42.28-40l-69.72 0C119.2 160 112 152.8 112 144S119.2 128 127.1 128H200c37.87 0 68.59 29.35 71.45 66.51C276.8 193.1 282.2 192 288 192c13.28 0 25.6 4.047 35.83 10.97C332.6 178 356.1 160 384 160z' fill='red'></path></svg><svg style='color: red; width: 20px;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M256 256v64c0 17.67 14.31 32 32 32s32-14.33 32-32V256c0-17.67-14.31-32-32-32S256 238.3 256 256zM200 272H160V352c0 17.67 14.31 32 32 32s32-14.33 32-32V267.6C216.5 270.3 208.5 272 200 272zM72 272C69.26 272 66.66 271.5 64 271.2V480c0 17.67 14.31 32 32 32s32-14.33 32-32V272H72zM416 288V224c0-17.67-14.31-32-32-32s-32 14.33-32 32v64c0 17.67 14.31 32 32 32S416 305.7 416 288zM384 160c11.72 0 22.55 3.381 32 8.879V136C416 60.89 355.1 0 280 0L191.3 0C162.5 0 134.5 9.107 111.2 26.02L74.81 52.47C48 72.03 32 103.5 32 136.6V200C32 222.1 49.91 240 72 240h128c22.09 0 39.1-17.91 39.1-39.1c0-28.73-26.72-40-42.28-40l-69.72 0C119.2 160 112 152.8 112 144S119.2 128 127.1 128H200c37.87 0 68.59 29.35 71.45 66.51C276.8 193.1 282.2 192 288 192c13.28 0 25.6 4.047 35.83 10.97C332.6 178 356.1 160 384 160z' fill='red'></path></svg><svg style='color: red; width: 20px;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M256 256v64c0 17.67 14.31 32 32 32s32-14.33 32-32V256c0-17.67-14.31-32-32-32S256 238.3 256 256zM200 272H160V352c0 17.67 14.31 32 32 32s32-14.33 32-32V267.6C216.5 270.3 208.5 272 200 272zM72 272C69.26 272 66.66 271.5 64 271.2V480c0 17.67 14.31 32 32 32s32-14.33 32-32V272H72zM416 288V224c0-17.67-14.31-32-32-32s-32 14.33-32 32v64c0 17.67 14.31 32 32 32S416 305.7 416 288zM384 160c11.72 0 22.55 3.381 32 8.879V136C416 60.89 355.1 0 280 0L191.3 0C162.5 0 134.5 9.107 111.2 26.02L74.81 52.47C48 72.03 32 103.5 32 136.6V200C32 222.1 49.91 240 72 240h128c22.09 0 39.1-17.91 39.1-39.1c0-28.73-26.72-40-42.28-40l-69.72 0C119.2 160 112 152.8 112 144S119.2 128 127.1 128H200c37.87 0 68.59 29.35 71.45 66.51C276.8 193.1 282.2 192 288 192c13.28 0 25.6 4.047 35.83 10.97C332.6 178 356.1 160 384 160z' fill='red'></path></svg>";
      //var res = document.getElementById('P_Sample').innerHTML;
    }
  }
  function myFunction2(id){    
    document.getElementById(id).select();
    document.execCommand('copy');
    document.getElementById('btn_cpy').innerHTML = "copied!";
    setTimeout(function(){
      document.getElementById('btn_cpy').innerHTML = "Copy HTML Code"
    }, 5000)
  }
