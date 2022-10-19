import { openModalRow } from "./modalWindow.js";

export class Table {
  constructor(data, containerId) {
    this.containerId = document.querySelector(`#${containerId}`);
    this.createTable(data);
  }
  //Creating the table
  createTable(data) {
    let tHead = document.createElement("thead");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let dataKeys = Object.keys(data[0]);
    //Creating the table head
    dataKeys.forEach((element) => {
      let th = document.createElement("th");
      th.innerText = element;
      tHead.append(th);
      table.append(tHead);
    });
    // Creating the table row
    data.forEach((element) => {
      console.log(element);
      let tableRow = document.createElement("tr");
      //Creating the table data
      Object.keys(element).forEach((key) => {
        let tableData = document.createElement("td");
        tableData.textContent = element[key];
        if (element[key] === null) {
          tableData.textContent = "null";
        }
        tableRow.append(tableData);

        // Click event on row and creating modal window
        tableRow.addEventListener("click", openModalRow(key, tableData));
      });
      tbody.append(tableRow);
      table.append(tbody);
    });
    this.containerId.append(table);
  }
}
