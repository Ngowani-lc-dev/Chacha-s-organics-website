document.addEventListener("DOMContentLoaded", function() {
  const sendBtn = document.getElementById("sendBtn");
  if (!sendBtn) return;

  sendBtn.addEventListener("click", function() {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const product = document.getElementById("product").value;
    const message = document.getElementById("subject").value.trim();

    if (!fname || !lname || !product || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }

    const phone = "260777924272";
    const text = `Hello Chacha's Body-Logic Scrubs!
Name: ${fname} ${lname}
Product: ${product}
Message: ${message}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  });
});

   // Clear form fields
    fname.value = "";
    lname.value = "";
    product.selectedIndex = 0;
    messageText.value = "";

    // Optional: small popup
    showPopup("Message sent! ✅");
  

  // Popup function
  function showPopup(text) {
    const popup = document.createElement("div");
    popup.innerText = text;
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.backgroundColor = "#25D366";
    popup.style.color = "#fff";
    popup.style.padding = "12px 20px";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    popup.style.fontSize = "16px";
    popup.style.zIndex = "9999";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.5s ease";

    document.body.appendChild(popup);

    // Fade in
    setTimeout(() => {
      popup.style.opacity = "1";
    }, 50);

    // Fade out & remove
    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.remove();
      }, 500);
    }, 2000);
  }
