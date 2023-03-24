console.log("huhu");


// lvl_1_2
let person = {
    name: "superCoder",
    age: 28,
    sagNameAlter : () => {
        alert(person.name);
        alert(person.age);
    }
}

// console.log(person.name, person.age);
// person.sagNameAlter();


// lvl_1_4
let unsereHaustiere = [
    {
    tiertyp: "Katze",
    names: [
        "Gipsy",
        "Nala",
        "Dinky"
    ]
    },
    {
    tiertyp: "Hunde",
    names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
    ]
    }
];


// console.log(unsereHaustiere[0].names[1]);
// console.log(unsereHaustiere[1].names[2]);

for (const key in unsereHaustiere) {
    // console.log(unsereHaustiere[key].names);
}

unsereHaustiere[1].names = ["Balu", "Snoopy"];
// console.log(unsereHaustiere[1].names);

// lvl_1_5

let unserLager = {
    schreibtisch: {
    schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// console.log(unserLager.schrank["Obere Schublade"].Ordner2);
// console.log(unserLager.schrank["Untere Schublade"]);
// console.log(unserLager.schreibtisch.schublade);

// lvl_1_6


let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let value4 = {
        kunstler: "whateverArtist",
        title: "WhateverSong",
        release_jahr: 2023,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
}

myMusic[4] = value4;
// console.log(myMusic);
/*
// Greife mit console.log auf die Werte dieses Objekts zu:
// "The Beatles"
console.log(myMusic[0].kunstler);

// Von Pink Floyd: "Download"
console.log(myMusic[1].formate[3]);

// Von Pink Floyd: true
console.log(myMusic[1].gold);

// 1971 und 1983
// console.log(myMusic[2].release_jahr, myMusic[3].release_jahr);
console.log(myMusic[2].release_jahr);
console.log(myMusic[3].release_jahr);

// Von Metallica: "MC"
console.log(myMusic[3].formate[2]);

// Von Metallica das Wort: Ride
// erst indexOf rausgezogen, dann mit slice ersetzt
console.log(myMusic[3].title.slice(17,21));

// Von Led Zeppelin das Wort: IV:
console.log(myMusic[2].title.slice(13, 15));

// Von Pink Floyd das Wort: Floyd
console.log(myMusic[1].kunstler.slice(5, 10));
*/

// lvl_1_7
/*
myMusic.forEach(element => {
    let div = document.createElement('div');
    let p = document.createElement('p')
    let pKuenstler = document.createElement('p');
    let pTitle = document.createElement('p');
    let pFormat = document.createElement('p');
    let pReleaseYear = document.createElement('p');

    // pKuenstler.textContent = element.kunstler + element.title + element.formate
    pKuenstler.textContent = element.kunstler
    pTitle.textContent = element.title
    pFormat.textContent = element.formate

    document.body.appendChild(div);
    div.appendChild(p)
    p.appendChild(pKuenstler)
    p.appendChild(pTitle)
    p.appendChild(pFormat)

    console.log(element.kunstler);
    console.log(element.title);
    console.log(element.formate);
    if (element.release_jahr < 1975) {
        pReleaseYear.textContent = element.release_jahr
        div.appendChild(pReleaseYear)
    }
}
);
*/

// lvl_1_8

let studentData = [
    {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(element => {
    console.log(element.name);
    console.log(element.coop);
    console.log(element.emails);
});

let studentDataArr = studentData.map((element) => {
    return element.address.city
})

console.log(studentDataArr);

