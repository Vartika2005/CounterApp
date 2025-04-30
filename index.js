const countValue = document.querySelector('#counter');

const increment = () => {
    //parseInt se string value ko integer value m convert kr kste h 
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};

const decrement = () => {
    //parseInt se string value ko integer value m convert kr kste h 
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value - 1;
    //set the value onto UI
    countValue.innerText = value;
}