var ledelse = [
    {
        navn: "Laila Johanne Handelsby",
        stilling: "Rektor",
        bilde: "img/rektor-laila-handelsby.jpg"
    },
    {
        navn: "Torben Andersen",
        stilling: "Assisterende Rektor",
        bilde: "img/torben-gjerstad.jpg"
    },
    {
        navn: "Martin Sandø-Frank",
        stilling: "Studieleder",
        bilde: "img/martin-frank.jpg"
    },
    {
        navn: "Cathrine Mannsaker",
        stilling: "Undervisningsleder",
        bilde: "img/cathrine-mannsaaker.jpg"
    },
    {
        navn: "Anette Øwre Bollvåg",
        stilling: "Undervisningsleder",
        bilde: "img/anette-owre-bollvag.jpg"
    },
    {
        navn: "Anne Raastad-Hoel",
        stilling: "Undervisningsleder",
        bilde: "img/anne-torbjorg-raastad-hoel.jpg"
    },
    {
        navn: "Erik Bergerud",
        stilling: "Undervisningsleder",
        bilde: "img/erik-bergerud.jpg"
    },
    {
        navn: "Camilla Engberg",
        stilling: "Undervisningsleder",
        bilde: "img/camilla-engberg.jpg"
    },
    {
        navn: "Sissel Moen",
        stilling: "Administrajonsleder",
        bilde: "img/sissel-moen.jpg"
    },
];

function search(event) {
    if (event.key === 'Enter') {
      const søkefelt = document.getElementById('input').value.toLowerCase();
      const boksSvar = document.getElementById('boks');
      boksSvar.innerHTML = '';

      const matchingAnsatte = ledelse.filter(ansatt => {
        return ansatt.navn.toLowerCase().includes(søkefelt);
      });

      if (matchingAnsatte.length === 0) {
        boksSvar.innerHTML = 'Ingen ansatte funnet med det navnet.';
      } else {
        matchingAnsatte.forEach(ansatt => {
          const ansattDiv = document.createElement('div');
          ansattDiv.classList.add('ansatt');

          const namePara = document.createElement('p');
          const boldName = document.createElement('strong');
          boldName.textContent = ansatt.navn;
          namePara.appendChild(boldName);
          ansattDiv.appendChild(namePara);

          const rolePara = document.createElement('p');
          rolePara.textContent = ansatt.stilling;
          ansattDiv.appendChild(rolePara);

          const loremPara = document.createElement('p');
          loremPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lectus in mi consequat suscipit.';
          loremPara.style.fontStyle = 'italic';
          ansattDiv.appendChild(loremPara);

          const img = document.createElement('img');
          img.src = ansatt.bilde;
          img.alt = ansatt.navn;
          img.style.width = "200px";
          img.classList.add('ansatt-image');
          ansattDiv.appendChild(img);

          boksSvar.appendChild(ansattDiv);
        });
      }

      document.getElementById('input').value = '';
    }
};

//Lars har hjulpet meg med å vise meg koden siden jeg hadde litt vansker med den. Dette er ikke kopi og lim men igjen skrevet og skiftet til å være mere norsk i mer hvordan jeg skriver kode. Håper dette var greit