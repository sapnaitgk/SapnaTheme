 function myFunction1(){
    var Wname = document.getElementById("Web_Name").value;
    var Wurl = document.getElementById("Web_URL").value;
    var currenturllink = window.location.href;
    if(Wname == ""){
      document.getElementById("Web_Name").style.border="2px solid red";
      alert("Please enter your Site Name");
    }
    else if(Wurl == ""){
      document.getElementById("Web_URL").style.border="2px solid red";
      alert("Please enter your Blog/Website URL");
    } else {
      var res = document.getElementById("result");
      res.innerHTML = `<div id="P_Sample">
  <h1>Privacy Policy for <span id="W_1">`+Wname+`</span></h1>

<p>One of our top priorities, which you can find at is the privacy of our visitors. This document describes the types of information we collect and record and how we use it.</p>

<p>Please feel free to contact us if you have any further questions or need further details about our privacy policy.</p>

<p>This privacy policy applies only to our online activities and to information exchanged and/or collected by visitors to our website. This policy does not apply to data collected outside of this website or through other means. A <a href="`+currenturllink+`" style="color: inherit; text-decoration: none;"> privacy policy generator </a> was used to create our privacy policy.</p>

<h2>Agreement</h2>

<p>By using our website <span id="W_URL">`+Wurl+`</span>, you agree to and abide by the terms of our Privacy Policy.</p>

<h2>Information we collect</h2>

<p>The personal data you will be asked to provide, as well as the reasons for doing so, will be explained to you at the time you are asked to do so.</p>
<p>If you contact us directly, we may collect other information about you, such as your name, email address, telephone number, the content of any message and/or attachments you send us, and any other information you choose to provide.</p>
<p>When you create an account, we may ask for your contact information, such as your name, company name, address, email address, and phone number.</p>

<h2>How we use your information</h2>

<p>We use the data we collect in a variety of ways, including:</p>

<ul>
<li>To provide, operate and maintain our website</li>
<li>Improve, personalize and enhance our website</li>
<li>Know and evaluate how you use our website.</li>
<li>Create new products, services, features and capabilities.</li>
<li>Communicate with you, either directly or through one of our partners, for a variety of reasons, including customer support, providing website updates and other materials, and marketing and promotional purposes.</li>
<li>Send you emails</li>
<li>Find and prevent fraud</li>
</ul>

<h2>Record files</h2>

<p>It is common practice to use log files. When people visit websites, these files record their identity. All hosting companies perform this task as part of their analysis. Log files collect information such as IP addresses, browser versions, Internet Service Providers (ISPs), date and time, referring/exiting pages, and possibly the number of clicks. They are not linked to any personal data. Information is collected to analyze patterns, operate the platform, track user movement on the site, and gather demographic information.</p>

<h2>Cookies and web beacons</h2>

<p><span id="W_6">`+Wname+`</span>, , like any other website, uses "cookies". These cookies are used to store information such as visitors' interests and which pages on the website they have visited or visited. We may improve the user experience by customizing the content of our website based on visitors' browser type and/or other information.</p>

<p>Please read <a href="`+currenturllink+`#cookie">"What are cookies"</a> for more general information about cookies. from consent to cookies
</p>

<h2>Google DoubleClick DART Cookie</h2>

<p>On our platform, Google is one of the third-party suppliers. It also uses DART cookies to target ads to users of our site based on their visits to `+Wurl+` and other websites on the Internet. Visitors can opt-out of the use of DART cookies by going to the Google Advertising and Content Network Privacy Policy at the following URL –<a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>"</p>


<h2>Privacy policy of advertising partners</h2>

<p>You will find the Privacy Policies for each of <span id="W_7">`+Wname+`</span>' advertisement partners in this list.</p>

<p>Third-party ad servers or ad networks use technologies such as cookies, JavaScript, or Web Beacons in their ads and links that are delivered directly to users' browsers. When this happens, an IP address is sent to them immediately. These tools are used by advertisers to evaluate the effectiveness of their advertising campaigns and/or to customize the advertising content you see on the websites you visit.</p>

<p>It is important to note that it has no access to or influence over these third-party cookies.</p>

<h2>Third-Party Privacy Policies</h2>

<p>Such ads or blogs are not covered by <span id="W_6">`+Wname+`</span> Privacy Policy. As a result, we recommend that you read the Privacy Policies of these third-party ad servers for more details. It may provide details about their operations as well as for instructions about how to opt out of them.</p>

<p>You can disable cookies by adjusting your browser settings. You can find more detailed information on how to manage cookies on the websites of the various web browsers.</p>

<h2>CCPA Privacy Rights (Please Don't Sell My Personal Information)</h2>

<p>California consumers have, among other things, the right under the CCPA to:</p>
<p>Require a business that collects a consumer's personal information to disclose the categories and specific information it has collected.</p>
<p>Ask the Company to delete any personal information about the customer that it has obtained.</p>
<p>Ask the business that is selling the customer's personal information to refrain from doing so.</p>
<p>If you submit a request, you will receive a response within one month. If you wish to exercise any of these rights, please contact us.</p>

<h2>GDPR Personal Data Protection Rights</h2>

<p>We want to make sure you fully understand your privacy rights. Every consumer has the following rights:</p>
<p>Right of access to information - you have the right to a copy of your personal data. We will charge you a small fee for this service.</p>
<p>Right to rectification - You have the right to request the correction of any information that you believe is incorrect. You also have the option to ask us to fill in any missing information that you believe exists.</p>
<p>The right to be forgotten - In some situations, you have the right to request that we delete your personal data.</p>
<p>Right to restriction of processing – In certain circumstances, you have the right to request that we restrict the processing of your personal data.</p>
<p>Right to data portability – You have the right to suggest that we send the data we have collected to another organization or, in some situations, to you directly.</p>
<p>If you make any request in this regard, you will receive a reply within one month. To exercise any of these permissions, please contact us.</p>

<h2>Information for children</h2>

<p>Our next top priority is to improve the protection of children online. Parents and guardians should watch, participate, monitor and guide their children's online activities.</p>

<p><span id="W_11">`+Wname+`</span> cannot collect personally identifiable information from children under the age of thirteen without their consent. If you believe your child has provided this type of information on our website, please contact us immediately so we can remove it from our records.</p>
  </div>`;
      alert("Will you do me a favor? Please click on at least one ad before leaving the site.");      
    }
  }
  </script>
<script>

  function myFunction2(id){
    document.getElementById(id).select();
    document.execCommand('copy');
    document.getElementById('btn_cpy').innerHTML = "Copied!"    
    setTimeout(function(){
    document.getElementById('btn_cpy').innerHTML = "Copy HTML Code"; 
    }, 5000);  
  };
  

