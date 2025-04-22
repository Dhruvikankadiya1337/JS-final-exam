const tableBody = document.querySelector("#covidTable tbody");

fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then(response => response.json())
  .then(data => {
    const states = data.data.regional;

    states.forEach((state, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td class="text-center">${index + 1}</td>
        <td>${state.loc}</td>
        <td class="text-center">${state.confirmedCasesIndian}</td>
        <td class="text-center">${state.confirmedCasesForeign}</td>
        <td class="text-center">${state.discharged}</td>
        <td class="text-center">${state.deaths}</td>
        <td class="text-center">${state.totalConfirmed}</td>
      `;
      
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    tableBody.innerHTML = "<tr><td colspan='7' class='text-danger text-center'>Failed to load data.</td></tr>";
  });

