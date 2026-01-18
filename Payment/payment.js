// for dynamic parts
document.getElementById('packageSelect').onchange = () => {
    document.getElementById('totalPrice').textContent =
        document.getElementById('packageSelect').value + ' EGP';
};
function toggleCard() {
    const cardForm = document.getElementById('cardForm');
    const isCard = document.querySelector('input[value="card"]:checked');
    cardForm.style.display = isCard ? 'block' : 'none';
    // Make card fields required only if card is selected
    cardForm.querySelectorAll('input').forEach(inp => {
        inp.required = isCard;
    });
}
// Auto-show success on valid submit 
document.getElementById('paymentForm').onsubmit = function (e) {
    if (this.checkValidity()) {
        e.preventDefault();
        alert('Payment Successful! Welcome to Planet Fitness Family');
    }
};