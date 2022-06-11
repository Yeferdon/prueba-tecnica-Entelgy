const form = document.getElementById("form");
const inputForm = document.getElementById("inputForm");

const formApp = (data) => {
  form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchInput = inputForm.value.toLowerCase();
    const arrayFiltered = data.filter((item) => {
      const textAPI = item.name.common.toLowerCase();
      if (textAPI.indexOf(searchInput) !== -1) {
        return item;
      }
    });
    createElements(arrayFiltered);
  });
};
