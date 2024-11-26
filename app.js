//! oyuna daxil olduqda oynuyan sexsin melumatlanmasi ucun
alert("Welcome Word Guessing Game!");
alert(
  "In this game you are given different ten hidden words and you'll try find any of this!"
);
alert("Good Luck!");

//! function icinde yazdiqda hem daha fdinamik olur hemde rahatliqla cagirib oyunu ise sala bilerik
function wordGuessing() {
  //! texmin edeceyimi sozler
  let words = [
    "cat",
    "dog",
    "giraffe",
    "cow",
    "fish",
    "donkey",
    "mouse",
    "chicken",
    "rabbit",
    "fox",
  ];

  //! evvelce program bizde verilmis arraydaki sozleri Math.random vasitesile secir secir
  let randomWord = words[Math.floor(Math.random() * words.length)];

  //! burada ise tapacagimiz sozu gizletmeliyik, burada random secilmis sozu array halina salib hemin herfleri _ doldururuq.
  let hiddenWord = randomWord.split("").fill("_");

  //! oyunda men 3 sans teyin etmisem isteye gore deyise biler
  let hearts = 3;

  alert(`In this game you'll have ${hearts} lives, Let's start!`);

  //! texmin etdiyimiz sozleri bu bos arrayin icine alacagiq
  let guessedLetters = [];

  //! indi esas proses burada olur, while dongusu ile bizim soz tapilana qeder davam edir sert veririk eger canimiz 0 dan boyukdurse ve sozumuzde _ varsa oyun davam edir
  while (hearts > 0 && hiddenWord.includes("_")) {
    //! her defe yei herf texmin etdikde bura ona uygun yenilecek
    alert(`Your word is:  ${hiddenWord.join("  ")}`);

    alert(`Your guessed:  ${guessedLetters}`);

    //! burada biz texmin etdiyimiz sozu giririk
    let yourGuess = prompt("Write your guess, please:");

    //! yazdiqdan sonra texminimize uygun sozler bizim evvelki bos arrayimize elave edilir (yuxarida hemin sozu joinle string halina salmisdiq)
    guessedLetters.push(yourGuess);

    //!indi burada sert verilir ki eger bizim random secilmis sozumuzde texmin etdiyimiz herf varsa
    if (randomWord.includes(yourGuess)) {
      //!for dongusune ehtiyacimiz olur, bizim random secilmis sozumu yoxluyur ve eger random sozdeki herflerle men texmin eden uyusursa onda gizli sozumuzun [i] indexine o herf yazilsiin
      for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == yourGuess) {
          hiddenWord[i] = yourGuess;
        }
      }
    }
    //! eger biz sehv texmin etsek o zaman can ititirik ve onu alertle gore bilerik
    else {
      hearts--;
      alert("Ohh, you lost a lives, be careful!!");
      alert(`Your lives: ${hearts}`);
    }
  }

  //! burada artiq oyunun yekunloasib yekunlasmadigini yoxluyuruk yeni eger gizli sozumuzde _ qalibsa ve canimiz qutaribsa yada soze olan texmin sansimiz bitibse uduzuruq ve soz gosterilir
  if (hiddenWord.includes("_")) {
    alert(`Pew-Pew you lost game(( Your word was: ${randomWord}`);
  }
  //! eks halda biz qalib oluruq ve tapdigimiz soz gosterilir
  else {
    alert(`Oh, you did it, your word is - ${randomWord}, congratulations!!`);
  }

  //! son olaraq isteye gore birde oynamaq isteye bilerik deye sual hissei var eger biz oynamaq istesek dongu  bizde yeniden basliyacaq funksiyamizi yeniden cagirdigimiza gore
  let gameQuestion = confirm("Do you wanna play again?");

  if (gameQuestion) {
    wordGuessing();
  }
  //! diger halda artiq sagollasir program bizle
  else {
    alert("Thank you for your playing, have fun!");
  }
}

//! bu ise mutleq olaraq cagirilmalidir yoxsa oyunu gore bilmeyeceyik
wordGuessing();
