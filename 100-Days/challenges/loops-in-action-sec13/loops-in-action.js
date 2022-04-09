// First Challenge: Sum numbers

const calculateSumButton = document.querySelector('#calculator button');

function calculateSum(target) {
    let sum = 0;
    for (let i = 0; i <= target; i++) {
        sum += i;
    }
    return sum;
}

function updateCalculatedSum() {
    const userInputValue = document.getElementById('user-number').value;
    const calculatedSum = calculateSum(userInputValue);
    const calculatedSumElement = document.getElementById('calculated-sum');
    calculatedSumElement.textContent = calculatedSum;
    calculatedSumElement.style.display = 'block';
}

calculateSumButton.addEventListener('click', updateCalculatedSum);

// Second Challenge: Highlight links

const highlightLinksButton = document.querySelector('#highlight-links button');

function highlightLinks() {
    // const anchorElements = document.getElementById('highlight-links').getElementsByTagName('a');
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchor of anchorElements) {
        anchor.classList.add('highlight');
    }
}

highlightLinksButton.addEventListener('click', highlightLinks)

// Third Challenge: Add user details list

const displayUserDataButton = document.querySelector('#user-data button');

const userData = {
    firstName: 'Ayman',
    lastName: 'Ghaith',
    age: 33,
}

function displayUserData() {
    const userInfoList = document.querySelector('#user-data ul');
    userInfoList.innerHTML = '';

    for (const info in userData) {
        const userInfoListItem = document.createElement('li');
        userInfoListItem.textContent = info.toUpperCase() + ': ' + userData[info];
        userInfoList.append(userInfoListItem);
    }
}

displayUserDataButton.addEventListener('click', displayUserData);