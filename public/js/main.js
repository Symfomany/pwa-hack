const root = null;
const useHash = true; // Defaults to: false
const hash = "#!"; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

function changeRoute(id) {
  router.navigate(`/hero/${id}`);
}

function loadDatas() {
  fetch(
    `https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json`
  )
    .then(response => response.json())
    .then(res => {
      document.getElementById("content").innerHTML = `
		<ul id="cards" class="cards">
      ${res
        .map(
          (item, i) => `<li class="cards__item">
            <div class="card">
            <div class="card__image card__image--loading" style="background-image: url(${
              item.images.sm
            });"></div>
                <div class="card__content">
                    <div class="card__title">${item.name} <i>alias</i> ${
            item.biography.aliases[0]
          }</div>
                    <p class="card__text">
                    <ul>
                        <li>Genre: ${item.appearance.gender}</li>
                        <li>Race: ${item.appearance.race}</li>
                        <li>Couleur des yeux: ${item.appearance.eyeColor}</li>
                        <li>Couleur des cheveux: ${
                          item.appearance.hairColor
                        }</li>
                        <li>Poids: ${item.appearance.weight[1]}</li>
                    </ul>

                    <div class="progress-bar graphic-design blue stripes">
                        <span style="width: ${item.powerstats.combat}%">${
            item.powerstats.combat
          }%</span>
                    </div>

                    <div class="progress-bar shine green stripes">
                        <span style="width: ${item.powerstats.durability}%">${
            item.powerstats.durability
          }%</span>
                    </div>

                    <div class="progress-bar glow yellow stripes">
                        <span style="width: ${item.powerstats.intelligence}%">${
            item.powerstats.intelligence
          }%</span>
                    </div>


                    <div class="progress-bar glow orange stripes">
                        <span style="width: ${item.powerstats.power}%">${
            item.powerstats.power
          }%</span>
                    </div>

                    <div class="progress-bar glow rose stripes">
                        <span style="width: ${item.powerstats.speed}%">${
            item.powerstats.speed
          }%</span>
                    </div>

                    <div class="progress-bar glow red stripes">
                        <span style="width: ${item.powerstats.strength}%">${
            item.powerstats.strength
          }%</span>
                    </div>
                    </p>
                    <button onClick="changeRoute(${
                      item.id
                    })" class="btn btn--block card__btn">Choisir ce personnage</button>
                </div>
            </div>
        </li>`
        )
        .join("")}
        </ul>`;
    });
}

function loadData(id) {
  fetch(
    `https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
  )
    .then(response => response.json())
    .then(res => {
      const item = res;
      document.getElementById("content").innerHTML = `
            <div class="card">
                <div class="card__content">
                    <div class="card__title">${item.name} <i>alias</i> ${
        item.biography.aliases[0]
      }</div>
                    <p class="card__text">
                    <ul>
                        <li>Genre: ${item.appearance.gender}</li>
                        <li>Race: ${item.appearance.race}</li>
                        <li>Couleur des yeux: ${item.appearance.eyeColor}</li>
                        <li>Couleur des cheveux: ${
                          item.appearance.hairColor
                        }</li>
                        <li>Poids: ${item.appearance.weight[1]}</li>
                    </ul>

                    <div class="progress-bar graphic-design blue stripes">
                        <span style="width: ${item.powerstats.combat}%">${
        item.powerstats.combat
      }%</span>
                    </div>

                    <div class="progress-bar shine green stripes">
                        <span style="width: ${item.powerstats.durability}%">${
        item.powerstats.durability
      }%</span>
                    </div>

                    <div class="progress-bar glow yellow stripes">
                        <span style="width: ${item.powerstats.intelligence}%">${
        item.powerstats.intelligence
      }%</span>
                    </div>


                    <div class="progress-bar glow orange stripes">
                        <span style="width: ${item.powerstats.power}%">${
        item.powerstats.power
      }%</span>
                    </div>

                    <div class="progress-bar glow rose stripes">
                        <span style="width: ${item.powerstats.speed}%">${
        item.powerstats.speed
      }%</span>
                    </div>

                    <div class="progress-bar glow red stripes">
                        <span style="width: ${item.powerstats.strength}%">${
        item.powerstats.strength
      }%</span>
                    </div>
                    </p>
                    <a href="#modal-zoom-out" class="btn-open-modal"<button class="btn btn--block card__btn">Choisir ce personnage</button></a>
                </div>
            </div>`;
    });
}
