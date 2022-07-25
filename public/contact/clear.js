const clearMessage = (param, time) => {
    return setTimeout(() => (param.innerText = ""), time);
};

export default clearMessage;
