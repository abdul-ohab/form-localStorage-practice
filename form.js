
const getValue = (id) =>{
    const inputText = document.getElementById(id);
    const inputValue = inputText.value;
    inputText.value = '';
    return inputValue;
}

//add & remove name

const addName = () =>{
    const personName = getValue("input-text1");
    localStorage.setItem('Name',personName);
}
const removeName = () =>{
    localStorage.removeItem('Name');
}

//add & remove email
const addEmail = () =>{
    const personEmail = getValue("input-text2");
    localStorage.setItem('Email',personEmail)
}
const removeEmail = () =>{
    localStorage.removeItem('Email');
}

//add & remove message
const addMessage = () =>{
    const personMessage = getValue("input-text3");
    localStorage.setItem('Message',personMessage);
}
const removeMessage = () =>{
    localStorage.removeItem('Message');
}

//send all & remove all
const sendAllData = () =>{
    const personName = getValue("input-text1")
    const personEmail = getValue("input-text2")
    const personMessage = getValue("input-text3")
    setValueToLS('name',personName);
    setValueToLS('email',personEmail);
    setValueToLS('message',personMessage);
}
const removeAllData = () =>{
    localStorage.clear();
}

const getValueFromLS = () =>{
    const savedPerson = localStorage.getItem('person');
    let person = {};
    if(savedPerson){
        person = JSON.parse(savedPerson);
    }
    return person;
}

const setValueToLS = (property,value) =>{
    let person = getValueFromLS();
    person[property] = value;
    const personStringify = JSON.stringify(person);
    localStorage.setItem('person',personStringify);
}
