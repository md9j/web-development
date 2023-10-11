// Define the URL of your JSON file
const jsonUrl = "../data/countries.json";

// Fetch the JSON data
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        // Call a function to populate the dropdown with the data
        populateDropdown(data);
    })
    .catch(error => console.error('Error loading JSON data:', error));

function populateDropdown(data) {
  const select = document.getElementById('country');

  // Loop through the data and create an option for each country
  for (const code in data) {
      const option = document.createElement('option');
      option.value = code;
      option.text = data[code];
      select.appendChild(option);
  }
}