function showMessage() {
  document.getElementById("text").innerText = "Hello from CI/CD!";
}

function sum(a, b) {
  return a + b;
}

module.exports = { sum };