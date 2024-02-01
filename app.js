function getSunriseInfo() {
    var location = document.getElementById('location-input').value

    fetch(`https://api.ipgeolocation.io/astronomy?apiKey=9de3d84f7d5d469280097bbf0c5c0d2b&location=${encodeURIComponent(location)}`)
    .then (response => response.json())
    .then (data => ( displaySunriseData(data) ))
    .catch(error => {
        console.error('Error fetching data:', error);
    })

    document.getElementById('sunriseInfo').style.display = 'block';
}

function displaySunriseData(data) {
    const sunriseInfoDiv = document.getElementById('sunriseInfo')
    sunriseInfoDiv.innerHTML = `
        <h3 class="h3">Sunrise Information</h3>
        <p class="p">Sunrise Time: ${data.sunrise}</p>
    `
}

function getSunsetInfo() {
    var location = document.getElementById('location-input').value

    fetch(`https://api.ipgeolocation.io/astronomy?apiKey=9de3d84f7d5d469280097bbf0c5c0d2b&location=${encodeURIComponent(location)}`)
    .then (response => response.json())
    .then (data => ( displaySunsetData(data) ))
    .catch(error => {
        console.error('Error fetching data:', error);
    })
    document.getElementById('sunsetInfo').style.display = 'block';
}

function displaySunsetData(data) {
    const sunsetInfoDiv = document.getElementById('sunsetInfo')
    sunsetInfoDiv.innerHTML = `
        <h3 class="h3">Sunrise Information</h3>
        <p class="p">Sunrise Time: ${data.sunset}</p>
    `
}