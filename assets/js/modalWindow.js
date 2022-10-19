export function openModalRow(key, tableData) {
  return function (event) {
    event.preventDefault();
    // Setting the variables for the modal window
    const modalBody = document.querySelector(".modal-body");
    const modalWindow = document.querySelector(".modal");
    const form = document.createElement("form");
    const label = document.createElement("label");
    const div = document.createElement("div");
    const input = document.createElement("input");
    const saveBtn = document.querySelector(".btn-primary");
    const closeBtnX = document.querySelector(".btn-secondary");
    const closeBtn = document.querySelector(".close");
    // const closeOut = document.querySelector(".modal-dialog");
    // Generating the content of the labels and inputs in the form
    label.textContent = key;
    input.value = tableData.textContent;
    document.querySelector(".modal").style.display = "block";
    div.append(label);
    div.append(input);
    form.append(div);
    modalBody.append(form);
    //Close function for close event
    function closeModal() {
      form.remove();
      modalWindow.style.display = "none";
    }
    //Save function for save eventt
    function saveModal() {
      tableData.innerText = input.value;
      modalBody.innerHTML = "";
      modalWindow.style.display = "none";
      form.remove();
      saveBtn.removeEventListener("click", saveModal);
    }

    //Close button events
    closeBtn.addEventListener("click", closeModal);
    closeBtnX.addEventListener("click", closeModal);
    // closeOut.addEventListener("click", closeModal);
    // Save button event
    saveBtn.addEventListener("click", saveModal);
  };
}
