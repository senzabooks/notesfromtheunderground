fetch('assets/texts/article1.txt')
    .then(response => response.text())
    .then(data => document.getElementById('interview-eddy').innerText = data);