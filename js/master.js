var lib = [
  {
    id: 0,
    name: 'Library of Heaven’s Path',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2017/03/Library-of-Heaven%E2%80%99s-Path.jpg',
    description: 'Traversing into another world, Zhang Xuan finds himself becoming an honorable teacher. Along with his transcension, a mysterious library appears in his mind. As long as it is something he has seen, regardless of whether it is a human or an object, a book on its weaknesses will be automatically compiled in the library. Thus, he becomes formidable. “Emperor Zhuoyang, why do you detest wearing your underwear so much? As an emperor, can’t you pay a little more attention to your image?” “Fairy Linglong, you can always look for me if you find yourself unable to sleep at night. I am skilled in lullabies!” “And you, Demon Lord Qiankun! Can you cut down on the garlic? Are you trying to kill me with that stench?” This is an incredible story about teachers and students, grooming and guiding the greatest experts in the world!'
  },
  {
    id: 1,
    name: 'The Book Eating Magician',
    ranking: 5,
    picSource: 'https://cdn-cms.f-static.com/uploads/430320/800_59f7da2df39d9.jpg',
    description: '[‘Lightning Magic Primer’ has been consumed. Your understanding is very high.] [The 2nd Circle magic ‘Lightning Bolt’ has been acquired.] The unprecedented magician who will eat all the magic books of the world has appeared.'
  },
  {
    id: 2,
    name: 'Monster Paradise',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2017/11/Monster-Paradise.jpg',
    description: '800 years ago, 3000 dimensional gates opened across the entire world. In that moment, it was as if 3000 different colored eyes opened across the world as hordes of monsters swarmed out of these gates like tears. Some could destroy city walls with one strike; They had bodies the size of a giant and fed on humans. Some latched onto humans, absorbing their bodies’ nutrients and enslaving humans. Some infiltrated the humans’ cities, disguising themselves as normal human beings while feeding upon human blood to sustain themselves. In a night, the Human race fell to the bottom of the food chain. The world had turned into a paradise for monsters…'
  },
  {
    id: 3,
    name: 'Crossing to the Future, it’s Not Easy to Be a Man',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2017/12/Crossing-to-the-Future-it%E2%80%99s-Not-Easy-to-Be-a-Man.jpg',
    description: 'After dying from a strange terminal illness, Ling Lan was reborn into a world 10000 years into the future. Although she dearly wished she could just live a peaceful and uneventful life in her new healthy body, fate had other plans … Forced to disguise herself as a boy just so she could inherit her deceased father’s premium military benefits, Ling Lan’s journey to adulthood was full of challenges. After much difficulty, she finally turned sixteen when she could drop the charade. But before she could grasp her newfound freedom to get married and start her own family, her resurrected father decided to go ahead and throw her into the Federation’s top military boys’ school. With these twists of fate, Ling Lan had little choice but to walk further and further down a path of no return, one of cold and aloof dominance …'
  },
  {
    id: 4,
    name: 'Dungeon Defense',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2016/07/Dungeon-Defense.jpg',
    description: 'Do you know how this world ends? Become the hero and defeat the 72 Demon Lords. The game that was boasted as the absolute hardest strategy game, 『Dungeon Attack』. I used to be the ‘hero’ that had accomplished everything in this game, but after answering a suspicious survey, I found myself in the game as the weakest Demon Lord, 「Dantalian」. With only my eloquent tongue and my memories of conquest as a hero—. In order to survive as Dantalian. I shall tear this world apart.'
  },
  {
    id: 5,
    name: 'Arifureta Shokugyou de Sekai Saikyou',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2016/05/ari-1.png',
    description: 'Seventeen year old Hajime Nagumo is your average, everyday otaku. However, his simple life of pulling all-nighters and sleeping in school is suddenly turned upside down when he, along with the rest of his class, is summoned to a fantasy world! They’re treated like heroes and tasked with the duty of saving the human race from utter extinction. But what should have been any otaku’s wet dream quickly turns into Hajime’s nightmare. While the rest of his class are blessed with godlike powers, Hajime’s job, Synergist, only has a single transmutation skill. Ridiculed and bullied by his classmates for being weak, he soon finds himself in despair. Will he be able to survive in this dangerous world of monsters and demons with only a glorified blacksmith’s level of strength?'
  },
  {
    id: 6,
    name: 'Praise the Orc!',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2017/06/xxlarge2.jpeg',
    description: 'Praise the Orc! is about Jung Ian, a cafe owner with a dark past, jumping into the world of virtual reality in order to protect his sister from any predators. However, things may not be as simple as he first believed them to be. Witness as he explores the lands of Elder Lord as an orc, a species labeled as the “game creator’s mistake”, defeating any and all before him!'
  },
  {
    id: 7,
    name: 'Seoul Station’s Necromancer',
    ranking: 5,
    picSource: 'https://cdn.novelupdates.com/images/2016/07/necro-1.jpg',
    description: '[You have entered the dungeon at Gwachun Station’s 1st Exit.] When former high school student Kang Woojin finds himself returned back to Earth after being forcibly summoned to a foreign planet for 20 years, he soon finds that Earth is not the same, normal place as he once remembered it to be. With his former strength and age reset back to zero, watch Kang Woojin as he gets back on the path to becoming the Earth’s strongest Necromancer!'
  },
  {
    id: 8,
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
    nholder[i].innerHTML = '<a href="'+lib[i].picSource+'"><img src="'+lib[i].picSource+'" alt="'+lib[i].name+' Cover'+'" class="cover" width="230px" height="329px"></a>';
    ndes[i].innerHTML = "<b>Description: </b><br>" + lib[i].description;
  }
}

function topBuild() {
  nnames = document.querySelectorAll(".line .title");
  nranking = document.querySelectorAll(".line .ranking");
  nholder = document.querySelectorAll(".line .holder");
  ndes = document.querySelectorAll(".line .description");

  for (var i = 0; i < 8; i++) {
    nnames[i].innerHTML = lib[i].name;
    nranking[i].innerHTML = "Rating: "+lib[i].ranking+"/5";
    nholder[i].innerHTML = '<a href="'+lib[i].picSource+'"><img src="'+lib[i].picSource+'" alt="'+lib[i].name+' Cover'+'" class="cover" width="115px" height="165px"></a>';
  }
}
