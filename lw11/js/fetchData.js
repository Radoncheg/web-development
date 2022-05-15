window.addEventListener('load', function () {
    fetchData();
});

function fetchData() {
    const getDataButton = document.getElementById('getDataButton');
    const dataContainer = document.getElementById('dataContainer');

    getDataButton.addEventListener('click', () => {
        dataContainer.innerHTML = '';
        addElementsForUI();
    })
}       

async function sendGetRequest() {
    const url = 'printSurvey.php';
    let response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        console.log('Error' + response.status + ' ' + response.statusText);
    }
}

async function addElementsForUI() {
    let responseJson = await sendGetRequest();
    if ('errorMessage' in responseJson) {
        noSuchElements();
    } else {
        responseJson.forEach(element => addElement(element));
    }
}

function addElement(elementData) {
    const dataContainer = document.getElementById('dataContainer');
    const dataContent = document.createElement('div');
    let element = document.createElement('div');
    let name = document.createElement('div');
    let email = document.createElement('div');
    let activities = document.createElement('div');
    let agreement = document.createElement('div');

    name.innerHTML = elementData.name;
    email.innerHTML = elementData.email;
    activities.innerHTML = elementData.activities;
    agreement.innerHTML = elementData.agreement ? 'Согласен на рассылку' : 'Не согласен на рассылку';
    dataContent.classList.add('data-form__data-element');
    element.classList.add('data-content')
    name.classList.add('data-form__text');
    email.classList.add('data-form__text');
    activities.classList.add('data-form__text');
    agreement.classList.add('data-form__text');
    element.append(name);
    element.append(email);
    element.append(activities);
    element.append(agreement);
    dataContent.append(element);
    dataContainer.append(dataContent)
}

function noSuchElements() {
    const dataContainer = document.getElementById('dataContainer');
    let element = document.createElement('div');
    element.innerHTML = 'Элементов не найдено';
    dataContainer.append(element);
}