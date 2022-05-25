function request(method, uri, dict){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(method, uri, false);
    xmlhttp.send(dict);
    console.log(xmlhttp.response);
    // const response = fetch(
    //   uri,
    //   {
    //     mode: 'cors',
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: dict,
    //   } 
    // );
    // return response
}

function checkCodeInput(){
    const mfaCodeInput = document.getElementById("mfa-code");
    const status = document.getElementById("status");
    if(mfaCodeInput.value.search(/([0-9]{6})/) == -1){
        status.innerHTML = "Code format invalid!"
    }
    return;
}

window.onload = function(){
    r=request("POST", "https://coop-interview.outstem.io/validate/", {code:"123456"});
    console.log(r);
    checkCodeInput();
}