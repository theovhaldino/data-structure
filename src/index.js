import "./styles.css";
import contacts from "./contacts.json";

const buildTableRow = (data, index) => {
  let tbody = document.getElementById("table-rows-containers");
  data.map((item, index) => {
    let row = tbody.insertRow();
    let id = row.insertCell(0);
    let fullName = row.insertCell(1);
    id.innerHTML = index + 1;
    fullName.innerHTML = item.fullName;
  });
};

window.onload = (function() {
  const rowsData = buildTableRow(contacts);
})();
