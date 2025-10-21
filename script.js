
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