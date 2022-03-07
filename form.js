function submitData(){

    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if(document.getElementById('html').checked & document.getElementById('css').checked){
        console.log(document.getElementById('html').value + document.getElementById('css'))
    } else if (document.getElementById('html').checked){
        console.log(document.getElementById('html').value)
    } else if (document.getElementById('css').checked){
        console.log(document.getElementById('css').value)
    }
    // if (name ==''){
    //     alert("Nama Harus Disi")
    // }else if ( email ==''){
    //     alert("email harus disi")
    // }else if (phone =='') {
    //     alert("isi cuy")
    // }else if ( subject ==''){
    //     alert("subhanallah, mohon isi")
    // }else if ( message ==''){
    //     alert("jangan malas, isi dulu")

    if (name ==''|| email ==''|| phone ==''|| subject ==''|| message ==''){
        alert("data anda belom lengkap")
    }

    let emailReceiver = ''
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject= ${subject}&body= Hi My name is ${name}, ${message} call ${phone}`
    a.click()

    let dataObject = {
        name : name,
        email : email,
        phone : phone,
        subject : subject,
        message : message,
    }
    console.log(dataObject.phone);

}