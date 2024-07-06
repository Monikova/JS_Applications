function attachEvents() {
    const nameElem = document.querySelector('[name="author"]');
    const messageElem = document.querySelector('[name="content"]');

    const submitBtnElem = document.getElementById('submit');
    submitBtnElem.addEventListener('click', onSubmit);
    const refreshBtnElem = document.getElementById('refresh');
    refreshBtnElem.addEventListener('click', onRefresh);

    const textareaElem = document.getElementById('messages');

    const httpAddress = 'http://localhost:3030/jsonstore/messenger';

    async function onSubmit(event) {
        const name = nameElem.value;
        const message = messageElem.value;
      
        if (!name || !message) {
            return;
        }
      
        const objToPost = {author: name, content: message};

        const options = {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToPost)
        };

        const response = await fetch(httpAddress, options);

        if (!response.ok) {
            return;
        }

        nameElem.value = '';
        messageElem.value = '';

        onRefresh();
    }
    
    async function onRefresh() {
        const response = await fetch(httpAddress);

        if (!response.ok) {
            return;
        }

        const result = await response.json();
        
        let allMessages = [];
        Object.values(result).forEach(m => allMessages.push(`${m.author}: ${m.content}`));
        textareaElem.textContent = allMessages.join("\n");
    }

}

attachEvents();
