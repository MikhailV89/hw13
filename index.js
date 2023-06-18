hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

circle = destination.concat(native, hero);
circle.reverse();

circle.splice(0, 1, 'Richard');
circle.splice(3, 0, 'Gave','Battle');
circle.pop()
circle.push('Vain');

rainbowCircle = '';
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

for (i = 0; i < circle.length; i++) {
    rainbowCircle += `<div class='box'><div class='circle' style='background-color: ${colors[i]}'></div>
    <div class='text'>${circle[i]}</div></div>`;
}

document.write(`<div class="wrapp">
${rainbowCircle}
</div>`);