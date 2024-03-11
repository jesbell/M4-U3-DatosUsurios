const userData = (() => {
  const container = document.querySelector("#user-data");
  return {
    show: async () => {
      let response = await fetch("https://randomuser.me/api/?results=10");
      let data = await response.json();
      const userInfo = data.results
        .map(
          (i) =>/* En la siguiente sección se agrega nuestra estructura
          html que se ira mostrando en nuestro index.html*/
            `<div class="card mb-3 container px-0" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src='${i.picture.large}' class="img-fluid rounded" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${i.name.first} ${i.name.last}</h5>
                    <p class="card-text">${i.email}</p>
                    <p class="card-text">${i.cell}</p>
                  </div>
                </div>                
              </div>
            </div>`
        )
        .join("");
      container.innerHTML = userInfo;
    },
  };
})();
userData.show();
