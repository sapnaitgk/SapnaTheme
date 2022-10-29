function myFunction2(id){    
    document.getElementById(id).select();
    document.execCommand('copy');
    document.getElementById('btn_cpy').innerHTML = "Copied!"    
    setTimeout(function(){
       document.getElementById('btn_cpy').innerHTML = "Copy HTML Code" 
    }, 5000);  
  };
function myFunction1(){
    var webname = document.getElementById("Web_Name").value;
    var webtype = document.getElementById("Web_Type").value;
    var webspec = document.getElementById("Web_Spec").value;
    var currenturllink = window.location.href;
    var result = document.getElementById("result");
    if(webname == ""){
        document.getElementById('Web_Name').style.border = "1px solid red";
        alert("Please Enter Your Website Name")
      }else if(webtype == ""){
        document.getElementById('Web_Type').style.border = "1px solid red";
        alert("Please Enter Your Website Type")
      }else if(webspec == ""){
        document.getElementById('Web_Spec').style.border = "1px solid red";
        alert("Please Enter Your Website Specification")
      }else{
    var about1 = `<div id="P_Sample">
                    <h2 id="About_Us!">About Us!</h2>
                    <h3 style="text-align: center;" id="Welcome_To_WebsiteName">Welcome To <span id="W_Name1">`+ webname +`</span></h3>
                    <p style="text-align: justify;"><span id="W_Name2">` + webname + `</span> is a Professional <span
                            id="W_Type1">` + webtype + `</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of 
                            <span id="W_Type2">` + webtype + `</span>, with a focus on dependability and <span
                            id="W_Spec">` + webspec + `</span>. We're working to turn our passion for <span
                            id="W_Type3">` + webtype + `</span> into a booming <a
                            href="`+currenturllink+`" rel="do-follow"
                            style="color: inherit; text-decoration: none;">online website</a>. We hope you enjoy our <span
                            id="W_Type4">` + webtype + `</span> as much as we enjoy offering them to you.</p>
                    <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                    <p style="font-weight: bold; text-align: center;">Thanks For Visiting Our Site<br><br>
                        <span style="color: blue; font-size: 16px; font-weight: bold; text-align: center;">Have a nice day!</span>
                    </p>
                   </div>`;
    result.value = about1;
    alert("Will you do me a favor? Please click on at least one ad before leaving the site.");
    document.getElementById('Msg').innerHTML = "Congrates, Your About Us page is generated successfully. Copy the HTML code below!!"
    }
};
