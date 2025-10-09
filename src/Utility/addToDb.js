const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem("installation");
    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();
    console.log(storedAppData);
    if(storedAppData.includes(id)) {
        alert("ID already exists in the read list");
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installation",data)
    }
}

const removeFromStoredDB = (id) => {
    const storedAppData = getStoredApp();
    const updatedData = storedAppData.filter(appId => appId !== id);
    localStorage.setItem("installation", JSON.stringify(updatedData));
};

export { addToStoredDB, getStoredApp , removeFromStoredDB};