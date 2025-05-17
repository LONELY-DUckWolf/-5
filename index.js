const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z'];
let currentKeyIndex = 0;
const keyElement = document.getElementById('key');
const newGameButton = document.getElementById('newGame');
function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = keys[currentKeyIndex];
}
document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toLowerCase();
    const expectedKey = keys[currentKeyIndex];
    if (pressedKey === expectedKey) {
        PNotify.success({
            text: `fight: ${pressedKey.toUpperCase()}`,
            delay: 1000
        });
        setNewKey();
    } else {
        PNotify.error({
            text: `incorrect "${pressedKey.toUpperCase()}", а треба "${expectedKey.toUpperCase()}"`,
            delay: 2000
        });
    }
});
document.addEventListener('keypress', function (event) {
    event.preventDefault();
});
newGameButton.addEventListener('click', function () {
    setNewKey();
    PNotify.info({
        text: 'new',
        delay: 1500
    });
});
setNewKey();




