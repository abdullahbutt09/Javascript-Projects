const key = document.querySelector(`#insert`);

window.addEventListener(`keydown`, (event) => {
    key.innerHTML = `
    <table id="keyTable">
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${event.key === " " ? "Space" : event.key}</td>
        <td>${event.keyCode}</td>
        <td>${event.code}</td>
      </tr>
    </table>
    `;

    // Add class to make table visible
    document.getElementById("keyTable").classList.add("show-table");
});
