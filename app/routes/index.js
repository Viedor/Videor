import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('movie');
        // return movies.results;
        // return $.getJSON( "dummyData/movies.json");
    }
});

// const movies = {
//   "page": 1,
//   "results": [
//     {
//       "poster_path": "/fYzpM9GmpBlIC893fNjoWCwE24H.jpg",
//       "adult": false,
//       "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
//       "release_date": "2015-12-18",
//       "genre_ids": [
//         28,
//         12,
//         878,
//         14
//       ],
//       "id": 140607,
//       "original_title": "Star Wars: The Force Awakens",
//       "original_language": "en",
//       "title": "Star Wars: The Force Awakens",
//       "backdrop_path": "/njv65RTipNSTozFLuF85jL0bcQe.jpg",
//       "popularity": 84.588602,
//       "vote_count": 1167,
//       "video": false,
//       "vote_average": 8.06
//     },
//     {
//       "poster_path": "/D6e8RJf2qUstnfkTslTXNTUAlT.jpg",
//       "adult": false,
//       "overview": "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
//       "release_date": "2015-07-17",
//       "genre_ids": [
//         878,
//         28,
//         12
//       ],
//       "id": 102899,
//       "original_title": "Ant-Man",
//       "original_language": "en",
//       "title": "Ant-Man",
//       "backdrop_path": "/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg",
//       "popularity": 41.512177,
//       "vote_count": 2084,
//       "video": false,
//       "vote_average": 6.88
//     },
//     {
//       "poster_path": "/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
//       "adult": false,
//       "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
//       "release_date": "2015-10-02",
//       "genre_ids": [
//         18,
//         12,
//         878
//       ],
//       "id": 286217,
//       "original_title": "The Martian",
//       "original_language": "en",
//       "title": "The Martian",
//       "backdrop_path": "/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg",
//       "popularity": 32.899262,
//       "vote_count": 1441,
//       "video": false,
//       "vote_average": 7.64
//     },
//     {
//       "poster_path": "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
//       "adult": false,
//       "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
//       "release_date": "2015-06-12",
//       "genre_ids": [
//         28,
//         12,
//         878,
//         53
//       ],
//       "id": 135397,
//       "original_title": "Jurassic World",
//       "original_language": "en",
//       "title": "Jurassic World",
//       "backdrop_path": "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
//       "popularity": 31.866408,
//       "vote_count": 3287,
//       "video": false,
//       "vote_average": 6.78
//     },
//     {
//       "poster_path": "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
//       "adult": false,
//       "overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
//       "release_date": "2015-07-10",
//       "genre_ids": [
//         10751,
//         16,
//         12,
//         35
//       ],
//       "id": 211672,
//       "original_title": "Minions",
//       "original_language": "en",
//       "title": "Minions",
//       "backdrop_path": "/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg",
//       "popularity": 24.631255,
//       "vote_count": 1915,
//       "video": false,
//       "vote_average": 6.75
//     },
//     {
//       "poster_path": "/nN4cEJMHJHbJBsp3vvvhtNWLGqg.jpg",
//       "adult": false,
//       "overview": "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
//       "release_date": "2015-11-19",
//       "genre_ids": [
//         18,
//         12,
//         28
//       ],
//       "id": 131634,
//       "original_title": "The Hunger Games: Mockingjay - Part 2",
//       "original_language": "en",
//       "title": "The Hunger Games: Mockingjay - Part 2",
//       "backdrop_path": "/qjn3fzCAHGfl0CzeUlFbjrsmu4c.jpg",
//       "popularity": 21.583716,
//       "vote_count": 728,
//       "video": false,
//       "vote_average": 6.98
//     },
//     {
//       "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
//       "adult": false,
//       "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
//       "release_date": "2015-05-15",
//       "genre_ids": [
//         53,
//         28,
//         12
//       ],
//       "id": 76341,
//       "original_title": "Mad Max: Fury Road",
//       "original_language": "en",
//       "title": "Mad Max: Fury Road",
//       "backdrop_path": "/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
//       "popularity": 21.578286,
//       "vote_count": 3029,
//       "video": false,
//       "vote_average": 7.53
//     },
//     {
//       "poster_path": "/mSvpKOWbyFtLro9BjfEGqUw5dXE.jpg",
//       "adult": false,
//       "overview": "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
//       "release_date": "2015-11-06",
//       "genre_ids": [
//         28,
//         12,
//         80
//       ],
//       "id": 206647,
//       "original_title": "Spectre",
//       "original_language": "en",
//       "title": "Spectre",
//       "backdrop_path": "/qSc4L05AnHbMpSk0bsHuX25vX4V.jpg",
//       "popularity": 20.898894,
//       "vote_count": 1238,
//       "video": false,
//       "vote_average": 6.34
//     },
//     {
//       "poster_path": "/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
//       "adult": false,
//       "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
//       "release_date": "2015-07-01",
//       "genre_ids": [
//         878,
//         28,
//         53,
//         12
//       ],
//       "id": 87101,
//       "original_title": "Terminator Genisys",
//       "original_language": "en",
//       "title": "Terminator Genisys",
//       "backdrop_path": "/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
//       "popularity": 20.376163,
//       "vote_count": 1510,
//       "video": false,
//       "vote_average": 6.16
//     },
//     {
//       "poster_path": "/z2sJd1OvAGZLxgjBdSnQoLCfn3M.jpg",
//       "adult": false,
//       "overview": "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
//       "release_date": "2015-07-31",
//       "genre_ids": [
//         28,
//         12,
//         53
//       ],
//       "id": 177677,
//       "original_title": "Mission: Impossible – Rogue Nation",
//       "original_language": "en",
//       "title": "Mission: Impossible – Rogue Nation",
//       "backdrop_path": "/vZMSji6u1Kfg5TcWWi4IAzfqXfC.jpg",
//       "popularity": 19.601779,
//       "vote_count": 1452,
//       "video": false,
//       "vote_average": 7.16
//     },
//     {
//       "poster_path": "/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
//       "adult": false,
//       "overview": "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
//       "release_date": "2015-12-25",
//       "genre_ids": [
//         37,
//         18,
//         12,
//         53
//       ],
//       "id": 281957,
//       "original_title": "The Revenant",
//       "original_language": "en",
//       "title": "The Revenant",
//       "backdrop_path": "/kiWvoV78Cc3fUwkOHKzyBgVdrDD.jpg",
//       "popularity": 18.432234,
//       "vote_count": 75,
//       "video": false,
//       "vote_average": 6.34
//     },
//     {
//       "poster_path": "/z3nGs7UED9XlqUkgWeT4jQ80m1N.jpg",
//       "adult": false,
//       "overview": "Billy \"The Great\" Hope, the reigning junior middleweight boxing champion, has an impressive career, a loving wife and daughter, and a lavish lifestyle. However, when tragedy strikes, Billy hits rock bottom, losing his family, his house and his manager. He soon finds an unlikely savior in Tick Willis, a former fighter who trains the city's toughest amateur boxers. With his future on the line, Hope fights to reclaim the trust of those he loves the most.",
//       "release_date": "2015-07-24",
//       "genre_ids": [
//         28,
//         18,
//         53
//       ],
//       "id": 307081,
//       "original_title": "Southpaw",
//       "original_language": "en",
//       "title": "Southpaw",
//       "backdrop_path": "/2KzmWIir3EoD5GoOhHfXJiTEVEg.jpg",
//       "popularity": 17.488349,
//       "vote_count": 678,
//       "video": false,
//       "vote_average": 7.24
//     },
//     {
//       "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
//       "adult": false,
//       "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
//       "release_date": "2014-11-05",
//       "genre_ids": [
//         18,
//         878
//       ],
//       "id": 157336,
//       "original_title": "Interstellar",
//       "original_language": "en",
//       "title": "Interstellar",
//       "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
//       "popularity": 16.91853,
//       "vote_count": 3892,
//       "video": false,
//       "vote_average": 8.28
//     },
//     {
//       "poster_path": "/p2SdfGmQRaw8xhFbexlHL7srMM8.jpg",
//       "adult": false,
//       "overview": "A young female FBI agent joins a secret CIA operation to take down a Mexican cartel boss, a job that ends up pushing her ethical and moral values to the limit.",
//       "release_date": "2015-09-18",
//       "genre_ids": [
//         53,
//         9648,
//         80,
//         18,
//         28
//       ],
//       "id": 273481,
//       "original_title": "Sicario",
//       "original_language": "en",
//       "title": "Sicario",
//       "backdrop_path": "/kG5Zn9z20L2O7Jo2Y2jykOMh60v.jpg",
//       "popularity": 16.558424,
//       "vote_count": 337,
//       "video": false,
//       "vote_average": 7.11
//     },
//     {
//       "poster_path": "/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg",
//       "adult": false,
//       "overview": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
//       "release_date": "2015-12-25",
//       "genre_ids": [
//         53,
//         37,
//         18,
//         9648
//       ],
//       "id": 273248,
//       "original_title": "The Hateful Eight",
//       "original_language": "en",
//       "title": "The Hateful Eight",
//       "backdrop_path": "/sSvgNBeBNzAuKl8U8sP50ETJPgx.jpg",
//       "popularity": 16.116219,
//       "vote_count": 86,
//       "video": false,
//       "vote_average": 6.35
//     },
//     {
//       "poster_path": "/vgAHvS0bT3fpcpnJqT6uDTUsHTo.jpg",
//       "adult": false,
//       "overview": "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
//       "release_date": "2014-12-17",
//       "genre_ids": [
//         12,
//         14
//       ],
//       "id": 122917,
//       "original_title": "The Hobbit: The Battle of the Five Armies",
//       "original_language": "en",
//       "title": "The Hobbit: The Battle of the Five Armies",
//       "backdrop_path": "/qhH3GyIfAnGv1pjdV3mw03qAilg.jpg",
//       "popularity": 15.997066,
//       "vote_count": 2197,
//       "video": false,
//       "vote_average": 7.17
//     },
//     {
//       "poster_path": "/t4PLWexbe4wbNydCOBv18cYexup.jpg",
//       "adult": false,
//       "overview": "When the old-old-old-fashioned vampire Vlad arrives at the hotel for an impromptu family get-together, Hotel Transylvania is in for a collision of supernatural old-school and modern day cool.",
//       "release_date": "2015-09-25",
//       "genre_ids": [
//         35,
//         16
//       ],
//       "id": 159824,
//       "original_title": "Hotel Transylvania 2",
//       "original_language": "en",
//       "title": "Hotel Transylvania 2",
//       "backdrop_path": "/h3t4zZPteUPqyDBrmz5Z2zzGM61.jpg",
//       "popularity": 15.792036,
//       "vote_count": 372,
//       "video": false,
//       "vote_average": 6.81
//     },
//     {
//       "poster_path": "/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
//       "adult": false,
//       "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
//       "release_date": "2015-06-19",
//       "genre_ids": [
//         35,
//         16,
//         10751
//       ],
//       "id": 150540,
//       "original_title": "Inside Out",
//       "original_language": "en",
//       "title": "Inside Out",
//       "backdrop_path": "/szytSpLAyBh3ULei3x663mAv5ZT.jpg",
//       "popularity": 14.489604,
//       "vote_count": 2073,
//       "video": false,
//       "vote_average": 8.06
//     },
//     {
//       "poster_path": "/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg",
//       "adult": false,
//       "overview": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
//       "release_date": "2014-11-14",
//       "genre_ids": [
//         36,
//         18,
//         53,
//         10752
//       ],
//       "id": 205596,
//       "original_title": "The Imitation Game",
//       "original_language": "en",
//       "title": "The Imitation Game",
//       "backdrop_path": "/fii9tPZTpy75qOCJBulWOb0ifGp.jpg",
//       "popularity": 14.079954,
//       "vote_count": 2192,
//       "video": false,
//       "vote_average": 8.02
//     },
//     {
//       "poster_path": "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
//       "adult": false,
//       "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow \"runners\" for a shot at escape.",
//       "release_date": "2014-09-19",
//       "genre_ids": [
//         28,
//         9648,
//         878,
//         53
//       ],
//       "id": 198663,
//       "original_title": "The Maze Runner",
//       "original_language": "en",
//       "title": "The Maze Runner",
//       "backdrop_path": "/yTbPPmLAn7DiiM0sPYfZduoAjB.jpg",
//       "popularity": 13.358129,
//       "vote_count": 2325,
//       "video": false,
//       "vote_average": 7.05
//     }
//   ],
//   "total_results": 19607,
//   "total_pages": 981
// };

