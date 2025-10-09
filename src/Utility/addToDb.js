import MySwal from 'sweetalert2';

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
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installation",data);
    MySwal.fire('Downloaded!', 'The app has been added again.', 'success');
}

const removeFromStoredDB = (id) => {
    const storedAppData = getStoredApp();
    const updatedData = storedAppData.filter(appId => appId !== id);
    localStorage.setItem("installation", JSON.stringify(updatedData));
};

export { addToStoredDB, getStoredApp , removeFromStoredDB};