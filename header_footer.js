
document.addEventListener("DOMContentLoaded", function () {
  // Include header
  const headerContainer = document.getElementById("header-container");
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          headerContainer.innerHTML = data;
      });

  // Include footer
  const footerContainer = document.getElementById("footer-container");
  fetch("footer.html")
      .then(response => response.text())
      .then(data => {
          footerContainer.innerHTML = data;
      });
});