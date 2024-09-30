const getResponse = async () => {
    try {
        const response = await fetch('https://yesno.wtf/api');
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
    }
};

const fetchData = async () => {
    const data = await getResponse(); 
    console.log(data); 
};

fetchData();
