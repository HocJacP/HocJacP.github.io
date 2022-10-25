document.getElementById('rightImage').addEventListener('click', function () {
    document.getElementById('mainTitle').innerHTML = "IT'S TOO LATE FOR YOU";
});

document.getElementById('leftImage').addEventListener('click', function () {
    document.getElementById('mainSub').innerHTML = 'RUN WHILE YOU CAN';
});

document.getElementById('submitButton').addEventListener('click', function () {
    document.title = "YOUR SOUL IS DAMNED";
});

document.getElementById('nameInput').addEventListener('click', function () {
    nameInput.value = null;
    nameInput.style.color = 'black';
});

document.getElementById('desc').addEventListener('click', function () {
    desc.innerHTML = null;
    desc.style.color = 'black';
});