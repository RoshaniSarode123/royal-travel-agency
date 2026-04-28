JavaScript
// Search filter
document.getElementById("search")?.addEventListener("keyup", function () {
let filter = this.value.toLowerCase();
let places = document.querySelectorAll(".place");

places.forEach(p => {  
    p.style.display = p.textContent.toLowerCase().includes(filter) ? "block" : "none";  
});

});

// Form validation
function validateForm() {
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {  
    alert("All fields are required!");  
    return false;  
}  

alert("Form submitted successfully!");  
return true;

}