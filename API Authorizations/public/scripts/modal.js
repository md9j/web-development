const modal = document.getElementById('description-modal');
const btn = document.getElementById('open-modal-btn');
const span = document.getElementById('close-btn');

window.onload = function() {
    modal.style.display = 'block';
}

btn.onclick = function() {
    showModal = true;
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
}