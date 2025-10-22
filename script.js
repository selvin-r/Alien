
function playSound(id) {
  const sound = document.getElementById(id);
  sound.currentTime = 0; // restart sound every click
  sound.play();

    setTimeout(() => {
    sound.pause();
    sound.currentTime = 0;
  }, 5000); // change to 3000 for 3 seconds, etc.
}

// function Goto(){
//   window.location.href= "about.html";
// }

async function fetchPlanets() {
  try {
    const response = await fetch('planets.json');
    const data = await response.json();

    const dataList = document.getElementById('planet-list');
    dataList.innerHTML = ''; 
    
    data.planets.forEach(planet => {
      const option = document.createElement('option');
      option.value = planet;
      dataList.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching planets:', error);
  }
}
fetchPlanets();



 fetch('planets.json')
      .then(response => response.json())
      .then(data => {
        const gallery = document.getElementById('alien-gallery');

        data.aliens.forEach(alien => {
          const img = document.createElement('img');
          img.src = alien.url;
          img.alt = alien.name;
          gallery.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching JSON:", error));




 
// === FORM VALIDATION ===
document.getElementById("AlienValidationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting immediately

  // Clear all previous error messages
  document.querySelectorAll(".error-msg").forEach(el => el.remove());

  const planetName = document.getElementById("planetName").value.trim();
  const antennaCount = document.getElementById("antennaCount").value.trim();
  const alienId = document.getElementById("alienId").value.trim();
  const humanPhrase = document.getElementById("humanPhrase").value.trim();
  const landingDate = new Date(document.getElementById("landingDate").value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let isValid = true;

  // Helper function to show error message below input
  function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement("p");
    errorElement.textContent = message;
    errorElement.className = "error-msg";
    errorElement.style.color = "#ff6b6b";
    errorElement.style.fontSize = "0.9em";
    errorElement.style.margin = "5px 0 0";
    inputElement.insertAdjacentElement("afterend", errorElement);
  }

  // 1️⃣ Planet Name: at least one vowel + one digit
  const planetRegex = /^(?=.*[aeiouAEIOU])(?=.*\d)[A-Za-z0-9]+$/;
  if (!planetRegex.test(planetName)) {
    showError("planetName", "👾 Must contain at least one vowel and one digit.");
    isValid = false;
  }

  // 2️⃣ Antenna Count: must be even
  if (antennaCount === "" || antennaCount % 2 !== 0) {
    showError("antennaCount", "👾 Must be an even number.");
    isValid = false;
  }

  // 3️⃣ Alien ID: ZOR-XY_9999@UFO format
  const idRegex = /^[A-Z]{3}-[A-Z]{2}_[0-9]{4}@UFO$/;
  if (!idRegex.test(alienId)) {
    showError("alienId", "👾 Format: ZOR-XY_9999@UFO.");
    isValid = false;
  }

  // 4️⃣ Human Phrase: must include emoji or punctuation
  const phraseRegex = /[\p{Emoji}\p{Punctuation}]/u;
  if (!phraseRegex.test(humanPhrase)) {
    showError("humanPhrase", "👾 Must include at least one emoji or punctuation.");
    isValid = false;
  }

  // 5️⃣ Landing Date: cannot be in the past
  if (landingDate < today) {
    showError("landingDate", "👾 Landing date cannot be in the past.");
    isValid = false;
  }

  // ✅ If all valid, go to gallery page
  if (isValid) {
    alert("✅ Registration Successful! Welcome to Earth 👽🌍");
    this.submit();
  }
});