function getInfo() {
    const busStopIDElem = document.getElementById("stopId");
    const divStopNameElem = document.getElementById('stopName');
    const ulBusesElem = document.getElementById('buses');
    
    const URLaddress = 'http://localhost:3030/jsonstore/bus/businfo/';

    onSubmit();
    async function onSubmit(event) {
        const busStopID = busStopIDElem.value;
        const fullPath = URLaddress + busStopID;

        try {
            const response = await fetch(fullPath);
            const data = await response.json();
            
            clear();
            createList(data);
        } catch (error) {
            clear();
            divStopNameElem.textContent = 'Error';
        }
    }

    function createList(data) {
        const busStop = data.name;
        divStopNameElem.textContent = busStop;

        Object.entries(data.buses).forEach(bus => {
            const [busNumber, busTime] = bus;
            const liElem = document.createElement('li');
            liElem.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
            ulBusesElem.appendChild(liElem);
        });
    }

    function clear(){
        busStopIDElem.value = '';
        ulBusesElem.textContent = '';
    }
}
