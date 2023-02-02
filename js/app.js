// Da 1 a 100
let html = '';
for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
        output += 'Fizz';
    }
    if (i % 5 === 0) {
        output += 'Buzz';
    }

    console.log(output || i);

    html += `<div>${output || i}</div>`;
}

const container = document.createElement('div');
container.innerHTML = html;
document.body.appendChild(container);