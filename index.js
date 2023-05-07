const apiUrl = "https://swapi.dev/api";

const resultElem = document.querySelector("#result");
const errorElem = document.querySelector("#error");
const inputElem = document.querySelector("#id");
const buttonElem = document.querySelector("button");
const loaderElem = document.querySelector("#loading");

buttonElem.addEventListener("click", () => {
  const inputValue = inputElem.value;
  const selectedEntity = document.querySelector("select").value;
  const url = `${apiUrl}/${selectedEntity}/${inputValue}/`;

  resultElem.textContent = "";
  errorElem.textContent = "";
  loaderElem.style.display = "block";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then((data) => {
      resultElem.textContent = JSON.stringify(data);
    })
    .catch((error) => {
      errorElem.textContent = `Ошибка: ${error.message}`;
    })
    .finally(() => {
      loaderElem.style.display = "none";
    });
});
console.log();
