var lib = [
  {
    id: 0,
    name: 'Library of Heaven’s Path',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2017/03/Library-of-Heaven%E2%80%99s-Path.jpg',
    picAlt: 'Library of Heaven’s Path web novel cover',
    description: 'Traversing into another world, Zhang Xuan finds himself becoming an honorable teacher. Along with his transcension, a mysterious library appears in his mind. As long as it is something he has seen, regardless of whether it is a human or an object, a book on its weaknesses will be automatically compiled in the library. Thus, he becomes formidable. “Emperor Zhuoyang, why do you detest wearing your underwear so much? As an emperor, can’t you pay a little more attention to your image?” “Fairy Linglong, you can always look for me if you find yourself unable to sleep at night. I am skilled in lullabies!” “And you, Demon Lord Qiankun! Can you cut down on the garlic? Are you trying to kill me with that stench?” This is an incredible story about teachers and students, grooming and guiding the greatest experts in the world!'
  },
  {
    id: 1,
    name: 'The Book Eating Magician',
    ranking: 5,
    picSource: 'https://cdn-cms.f-static.com/uploads/430320/800_59f7da2df39d9.jpg',
    picAlt: 'The Book Eating Magician web novel cover',
    description: '[‘Lightning Magic Primer’ has been consumed. Your understanding is very high.] [The 2nd Circle magic ‘Lightning Bolt’ has been acquired.] The unprecedented magician who will eat all the magic books of the world has appeared.'
  },
  {
    id: 2,
    name: 'Monster Paradise',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2017/11/Monster-Paradise.jpg',
    picAlt: 'Monster paradise web novel cover',
    description: '800 years ago, 3000 dimensional gates opened across the entire world. In that moment, it was as if 3000 different colored eyes opened across the world as hordes of monsters swarmed out of these gates like tears. Some could destroy city walls with one strike; They had bodies the size of a giant and fed on humans. Some latched onto humans, absorbing their bodies’ nutrients and enslaving humans. Some infiltrated the humans’ cities, disguising themselves as normal human beings while feeding upon human blood to sustain themselves. In a night, the Human race fell to the bottom of the food chain. The world had turned into a paradise for monsters…'
  },
  {
    id: 3,
    name: '',
    ranking: 0,
    picSource: '',
    picAlt: '',
    description: ''
  }
]

console.log("https://cdn.novelupdates.com/images/2017/06/QHreGlFjiyOulP98.jpg");

function indexBuild() {
  nnames = document.querySelectorAll(".novel .title");
  nranking = document.querySelectorAll(".novel .ranking");
  nholder = document.querySelectorAll(".novel .holder");
  ndes = document.querySelectorAll(".novel .description");

  for (var i = 0; i < 3; i++) {
    nnames[i].innerHTML = lib[i].name;
    nranking[i].innerHTML = "Rating: "+lib[i].ranking+"/5";
    nholder[i].innerHTML = '<a href="'+lib[i].picSource+'"><img src="'+lib[i].picSource+'" alt="'+lib[i].picAlt+'" class="cover" width="230px" height="329px"></a>';
    ndes[i].innerHTML = lib[i].description;
  }
  //
}
