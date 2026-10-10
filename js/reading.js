/**
 * NZ Phase 3 Reading Comprehension Engine
 * Normalized passage catalog with direct ID lookup.
 * Eliminates duplicate passage text and supports dynamic genre filtering.
 */

// 1. Central Passage Catalog
const READING_PASSAGES = {
 // ==========================================
  // PASSAGE 1: DIANA NYAD (Full Text)
  // ==========================================
  y7_nyad: {
    title: "Chasing the Impossible: Diana Nyad",
    author: "Caitlyn Meagher",
    genre: "Informational",
    year: 7,
    body: `<p class="mb-3">Diana Nyad liked to try the impossible. As a child, she set her sights on the Olympics and was a dedicated athlete. She would wake up at 4:30 a.m. to swim for two hours, go for a run during lunch, and then swim again after school. Her dream ended when she contracted endocarditis, an infection of the heart valves, at age 16. The illness permanently reduced her speed, so she turned to open-water marathon swimming, where endurance matters more than raw sprinting.</p>
<p class="mb-3">In 1975, at age 26, Nyad gained global attention when she attempted to swim around Manhattan Island in New York. Non-stop, cold-water swimming presents immense physical challenges. After eight hours, she was pulled out because she caught a virus from the unclean water and needed 10 days to recover. Undeterred, she tried again weeks later and broke the world record, circling Manhattan in under eight hours.</p>
<p class="mb-3">Over the next few years, Nyad chased ever more daring open-water records. In 1978, at age 29, she attempted a 110-mile swim from Havana, Cuba to Key West, Florida inside a protective steel shark cage. Strong winds and rough waves battered her into the cage, forcing her crew to abort the swim. In 1979, on her 30th birthday, she set a world record by swimming from Bimini, Bahamas to Florida (102 miles in 27.5 hours) without a shark cage (an underwater cage that protects swimmers from sharks). After that triumph, she retired from swimming.</p>
<p class="mb-3">Thirty years later, at age 60, Nyad decided she had unfinished business with Cuba. Water currents, wind, and waves are all obstacles that marathon swimmers deal with during long swims. To prepare for the 110-mile crossing, Nyad consulted meteorologists because even a slight change in winds could cause her to go off-course. She also had to confront the deadly box jellyfish, whose venomous stings can cause cardiac arrest.</p>
<p class="mb-3">Between 2010 and 2012, Nyad made three more unsuccessful attempts, plagued by asthma attacks, box jellyfish stings, and brutal storms. Finally, in August 2013, on her fifth overall attempt, the 64-year-old Nyad entered the water wearing a custom silicone mask to guard against jellyfish. On the second night of the swim, there was a storm. Nyad had to stop swimming and tread water for two hours, making her very cold. Yet she persevered, emerging onto the sands of Smathers Beach in Key West after 53 hours of swimming.</p>
<p class="mb-3">Staggering ashore, she delivered a message that resonated around the world: "Never, ever give up," and "You're never too old to chase your dream."</p>`
  },

  // ==========================================
  // PASSAGE 2: FORCED RHUBARB (Full Text)
  // ==========================================
  y7_rhubarb: {
    title: "The Secret World of Forced Rhubarb",
    author: "Readworks Staff",
    genre: "Informational",
    year: 7,
    body: `<p class="mb-3">Chef Marco Pierre White remembers the vegetable patches of his childhood in Leeds, England. White was nostalgic for a particularly British culinary tradition: forced rhubarb. For centuries, British gardeners grew ordinary garden rhubarb, but historically, only the underground root was valued for its medicinal applications; the stalks were considered inedible. (The leaves contain a high amount of oxalic acid, which can be poisonous).</p>
<p class="mb-3">In 1817, workmen at the Chelsea Physic Garden in London accidentally buried rhubarb roots under deep soil. When the soil was cleared weeks later, gardeners discovered tender, elongated pink shoots that tasted surprisingly sweet and tender. Inducing a plant to grow out of season according to the grower's timetable is called "forcing."</p>
<p class="mb-3">In 1827, the Quarterly Journal of Agriculture described the process of transplanting robust roots into dark, heated sheds. During the Industrial Revolution, West Yorkshire became the heart of the "Rhubarb Triangle." The local coal mines provided abundant cheap fuel to heat the forcing sheds, while the region's bustling wool industry produced nitrogen-rich wool waste, known as shoddy, which served as ideal fertiliser.</p>
<p class="mb-3">Inside these pitch-black forcing sheds, illuminated only by faint candlelight to prevent the stalks from turning green, growers create an artificial spring. Because there is no sunlight for photosynthesis, the plant cannot develop broad leaves. Instead, it expends all the sugars stored in its massive roots to drive tall, delicate crimson stalks rapidly toward the ceiling. Visitors to the forcing sheds of Yorkshire say they can hear the sound of popping as the rhubarb stalks emerge from the bud. Janet Oldroyd Hulme, a sixth-generation grower dubbed the "High Priestess of Rhubarb," manages sheds that visitors describe as feeling like quiet, sacred churches.</p>`
  },

  // ==========================================
  // PASSAGE 3: SPACE JUNK (Full Text)
  // ==========================================
  y7_space_junk: {
    title: "The Growing Threat of Space Junk",
    author: "Josh Adler",
    genre: "Persuasive",
    year: 7,
    body: `<p class="mb-3">Many people know that trash is a big problem on planet Earth. What many people don't know is that trash has become a problem in outer space too. Years of space exploration have left tons of "space junk" orbiting the planet.</p>
<p class="mb-3">According to BBC News, there are more than 22,000 pieces of junk in space around the earth. And these are just the items that we can see from the surface of the earth by using telescopes or radar. There are also millions of smaller pieces of junk that we can't see. Objects, like bits of old rockets and satellites, move at very fast speeds—thousands of miles an hour.</p>
<p class="mb-3">Because they are moving so fast, even a tiny piece of space junk could cause severe damage to a spacecraft. When two objects collide in space, the impact can be devastating because the faster an object moves, the greater the impact if the object collides with something else.</p>
<p class="mb-3">In 2009, an active United States satellite collided with an inactive Russian satellite. The collision caused the satellites to break into more than 2,000 pieces, increasing the items of space junk and creating a ripple effect of debris hazard.</p>
<p class="mb-3">To address this danger, countries around the world have agreed to limit the time their space tools stay in orbit to 25 years. This gives the tools plenty of time to complete their missions, but requires them to be pulled out of orbit into the atmosphere to burn up harmlessly before becoming hazards.</p>
<p class="mb-3">Scientists are currently researching ways to clean up existing space debris. In England, engineers are testing a system that fires a metal harpoon into floating junk to drag it down into the atmosphere where friction will incinerate it.</p>
<p class="mb-3">Meanwhile, in Germany, scientists are working on robotic capture craft. These robotic sweepers would pull space debris into their hold and bring it back toward Earth, burning up along with the junk in the process.</p>
<p class="mb-3">Destroying debris with weapons is dangerous. In 2007, China used a missile to blow up an old satellite. However, the explosion only created thousands of smaller pieces, adding junk in space rather than clearing it!</p>
<p class="mb-3">Researcher Marco Castronuovo notes that cleaning orbit is critical because many of these objects are tools that help people use their cell phones or computers. Damaged orbits directly threaten everyday modern life. As Castronuovo stated: "The time to act is now; as we go farther in time we will need to remove more and more fragments."</p>`
  },

  // ==========================================
  // PASSAGE 4: ANIMAL RIGHTS (Full Text)
  // ==========================================
  y7_animal_rights: {
    title: "Students Dive into Animal Rights",
    author: "Readworks Staff",
    genre: "Persuasive",
    year: 7,
    body: `<p class="mb-3">In 2012, People for the Ethical Treatment of Animals (PETA) filed a federal lawsuit against SeaWorld on behalf of five killer whales. PETA claimed that the theme park was violating the 13th Amendment to the U.S. Constitution, which bans slavery and involuntary servitude. The judge soon dismissed the lawsuit, but it launched a national debate on animal rights.</p>
<p class="mb-3">Critics warned that granting constitutional rights to animals could cause legal chaos and harm working partnerships. For instance, what would happen to police forces that rely on drug-sniffing dogs, or farmers who work with livestock?</p>
<div class="p-4 bg-slate-50 border border-slate-200 rounded-xl my-4">
<h4 class="font-bold text-slate-900 mb-2">Perspective 1: Animals Have Rights</h4>
<p class="mb-2">How would you feel if you were taken from your home, placed in a concrete box, and forced to do tricks for people? That is what captive orcas face every single day. The treatment is unfair to them, and they deserve to be protected.</p>
<p class="mb-2">Sarah Ludwig, a student who spoke out during the case, argued: "Animals are a lot more intelligent than we give them credit for. They have brains, and they have thoughts and feelings and fears just like humans do."</p>
<p class="mb-2">The U.S. Constitution is a living document designed to expand rights as society learns more about justice. Just as our society grew to recognize basic human rights for all people, we must expand our legal protections to safeguard intelligent creatures from cruelty and confinement.</p>
</div>
<div class="p-4 bg-slate-50 border border-slate-200 rounded-xl my-4">
<h4 class="font-bold text-slate-900 mb-2">Perspective 2: Pro-People</h4>
<p class="mb-2">The U.S. Constitution begins with the phrase "We the People." It was crafted specifically by humans to protect human rights, human responsibilities, and human freedoms. It was never written for animals.</p>
<p class="mb-2">Extending human constitutional rights to animal species would cause an avalanche of court cases that would overwhelm our legal system. If animals had rights, how could society operate? "‘I don’t like being forced to give milk to anyone,’ a cow might say. Oh, wait; animals can’t talk."</p>
<p class="mb-2">How can courts give animals legal rights when we don't know how they truly feel or what they want? Animals are incapable of taking part in contracts or understanding laws. We should treat animals humanely with animal-welfare laws, but granting them constitutional personhood is impractical and impossible.</p>
</div>`
  },

  // ==========================================
  // PASSAGE 5: LOST IN THE WOODS (Full Text)
  // ==========================================
  y7_lost_woods: {
    title: "Lost in the Woods",
    author: "Daniel Case",
    genre: "Narrative",
    year: 7,
    body: `<p class="mb-3">When our youth empowerment leader, Mr. B., told our group we were going on a Saturday hike in the state park, I groaned. Jamar and I were city kids from Harlem. We understood concrete, subways, and corner bodegas. Marching through woods as thick as a Times Square rush hour was definitely not on our weekend agenda.</p>
<p class="mb-3">About thirty minutes into the trail, Jamar and I grew bored of the group's slow pace. We stepped off the path behind a cluster of trees to take some selfies with our phones. We took dozens of photos, posing in funny stances and making each other laugh. When we finally tucked our phones away and looked up, the trail was completely silent. The group was gone.</p>
<p class="mb-3">"What are we going to do?" I asked, my chest tightening with sudden panic. "We're lost in the middle of nowhere!"</p>
<p class="mb-3">Jamar gave me his classic calm look. "Relax, Marvin," he said smoothly, stepping into his usual leadership role. "Our crew of city kids couldn't have gotten very far." But when we tried using our phones to call Mr. B., our luck ran out. I groaned in frustration—I had zero bars of service. Jamar pulled out his phone only to discover his battery was completely dead from taking so many selfies.</p>
<p class="mb-3">As we walked around trying to find the trail, our panic gradually turned into curiosity. For the first time, we actually paid attention to our surroundings. We noticed the strange shapes of ancient rock formations and pointed at a bizarre tree whose branches curled up like an afro. I took a deep breath. Back in New York, the streets smelled like exhaust and honking buses rattled your teeth. Out here, the air was crisp and sweet, and the sky was the deepest blue I had ever seen.</p>
<p class="mb-3">Suddenly, a large bush in the distance began to rustle and shake violently. Jamar froze and let out a startled yell. Heavy footsteps broke through the twigs, and my heart jumped into my throat. But then the branches parted, and Mr. B. stepped out onto the path.</p>
<p class="mb-3">"Mr. B., you found us!" we shouted, rushing forward. We had never been happier to see our leader. But Mr. B. looked perplexed.</p>
<p class="mb-3">"Found you?" Mr. B. chuckled. "We never left. The entire group has been sitting thirty feet away behind this shrub meditating with our eyes closed the whole time! You two were the ones who wandered off."</p>
<p class="mb-3">Sitting down with the group and closing my eyes, I listened to the breeze rustle through the canopy. I finally understood what Mr. B. meant about nature being peaceful. But I also smiled, realizing that the familiar roar of buses, subways, and pigeons back home brought their own kind of peace to a city kid like me.</p>`
  },

  // ==========================================
  // PASSAGE 6: LIFE IN THE ELEVATOR (Full Text)
  // ==========================================
  y7_elevator: {
    title: "Life in the Elevator",
    author: "Jesse Kohn",
    genre: "Narrative",
    year: 7,
    body: `<p class="mb-3">When my family fell on hard financial times and lost our apartment, my parents came up with the most unconventional housing solution in city history: they decided we should move into the service elevator of a thirty-three-story apartment building. The elevator was rarely used because the tenants relied on the modern express lifts.</p>
<p class="mb-3">When my father first asked the building superintendent for permission, the super gave an immediate answer: “No. Categorically not.” But right at that moment, my sister kicked me hard in the shin. Tears flooded my eyes. The superintendent, being a softhearted man, mistook my crying for the despair of a poor, deprived child facing homelessness. Taking pity on us, he relented and agreed to let us stay, making us promise we would behave.</p>
<p class="mb-3">It was our parents the superintendent should have been worried about, not us. Once we settled into the cab, my parents' eccentric creativity took over. They rewired the control panel, installed bookshelves along the steel walls, and built cozy bunk beds. Life in the moving cab inspired my father tremendously; he set up an easel in the corner and spent all day painting an energetic series of modern artworks featuring escalators, completing canvases like 'Escalator to Ecstasy' and 'Escalator #7'.</p>
<p class="mb-3">Our mother was an engineer of wonder. With help from friends on various floors who brought bags of rich soil, she turned our lift into an indoor agricultural garden. She rigged mirrors along the shaft to amplify a thin shaft of sunlight into an overhead "sun," and we kept a hive of docile bees in an exhaust vent pipe to cross-pollinate blossoms of melons, kale, and yams.</p>
<p class="mb-3">On humid summer afternoons, condensation would gather along the steel roof. We would lay on our bunks and watch miniature bolts of static lightning scratch patterns across our tiny sky, listening to droplets fall like rain into our plant beds.</p>
<p class="mb-3">The other tenants in the building came to love our presence. A composer on the fourteenth floor and a lawyer on the twenty-second frequently stepped into the cab for afternoon tea and cucumber slices. In return, we shared our bountiful harvests of fresh vegetables with everyone who pressed our button.</p>
<p class="mb-3">Our elevator years ended just as unexpectedly as they began. An art critic from Germany visiting his physicist niece on the thirty-third floor rode our lift. The moment he laid eyes on my father's escalator paintings, he was captivated. He purchased the entire collection on the spot for his gallery in Berlin and insisted our family move into the grand guesthouse behind his German estate.</p>
<p class="mb-3">We packed our bags and said goodbye to our moving home. Looking back, although we had the smallest home and the least money during those elevator days, our lives were never richer in love, creativity, and shared imagination.</p>`
  },

  // ==========================================
  // PASSAGE 7: THE ROAD NOT TAKEN (Full Text)
  // ==========================================
  y7_frost: {
    title: "The Road Not Taken",
    author: "Robert Frost",
    genre: "Poetry",
    year: 7,
    body: `<p class="mb-3">Two roads diverged in a yellow wood,<br>And sorry I could not travel both<br>And be one traveler, long I stood<br>And looked down one as far as I could<br>To where it bent in the undergrowth;</p>
<p class="mb-3">Then took the other, as just as fair,<br>And having perhaps the better claim,<br>Because it was grassy and wanted wear;<br>Though as for that the passing there<br>Had worn them really about the same,</p>
<p class="mb-3">And both that morning equally lay<br>In leaves no step had trodden black.<br>Oh, I kept the first for another day!<br>Yet knowing how way leads on to way,<br>I doubted if I should ever come back.</p>
<p class="mb-3">I shall be telling this with a sigh<br>Somewhere ages and ages hence:<br>Two roads diverged in a wood, and I—<br>I took the one less traveled by,<br>And that has made all the difference.</p>`
  },

// ==========================================
  // PASSAGE 8: AUTUMN (Full Text)
  // ==========================================
  y7_autumn: {
    title: "Autumn",
    author: "Joseph Moncure March",
    genre: "Poetry",
    year: 7,
    body: `<p class="mb-3">The air breathes frost. A thin wind beats<br>Old dust and papers down gray streets<br>And blows brown leaves with curled-up edges<br>At frightened sparrows on window ledges.</p>
<p class="mb-3">A snowflake falls like an errant feather:<br>A vagabond draws his cloak together,<br>And an old man totters past with a cane<br>Wondering if he'll see spring again.</p>`
  },

  // ==========================================
  // PASSAGE 9: THE SCIENCE OF BELONGING (Full Text)
  // ==========================================
  y8_belonging: {
    title: "The Science of Belonging",
    author: "Caitlyn Meagher",
    genre: "Informational",
    year: 8,
    body: `<p class="mb-3">When you spend time with close friends or loved ones, how do you feel? You may feel happy, safe, and accepted, knowing that you can share your thoughts and opinions freely. You may feel like you belong. According to the Oxford dictionary, belonging is defined as a “deep sense of acceptance, inclusion, and identification within a group, place, or context.” But belonging is more than just a nice feeling—it is rooted in human biology and psychology, and researchers have used various methods to measure this subjective feeling.</p>
<div class="p-4 bg-slate-50 border border-slate-200 rounded-xl my-4">
<h4 class="font-bold text-slate-900 mb-2">Maslow’s Ideas about Human Need</h4>
<p class="mb-2">Abraham Maslow was the first psychologist to write about belonging as an essential human need in his 1943 Hierarchy of Needs. According to Maslow, humans must acquire basic physiological needs (like air, water, and food) and safety needs before achieving psychological needs like love and belonging.</p>
<p class="mb-2">Maslow argued that after those psychological needs are met, humans can achieve the needs on the hierarchy’s next level. These include developing self-esteem—defined as respect, self-worth, and status—and, ultimately, self-actualization, which is reaching one's full potential.</p>
</div>
<div class="p-4 bg-slate-50 border border-slate-200 rounded-xl my-4">
<h4 class="font-bold text-slate-900 mb-2">Leary and Baumeister’s Findings</h4>
<p class="mb-2">In 1995, Mark Leary and Roy F. Baumeister argued that the drive to belong was an evolutionary fundamental need rather than a secondary tier. Over millennia, social bonds increased early humans’ chances of finding food and surviving threats. Their research showed that self-esteem functions like a "warning signal" (a sociometer): when we feel accepted, our self-esteem rises, but when we face rejection, it drops, motivating us to repair damaged social bonds.</p>
</div>
<div class="p-4 bg-slate-50 border border-slate-200 rounded-xl my-4">
<h4 class="font-bold text-slate-900 mb-2">How Belonging Connects to Student Success</h4>
<p class="mb-2">According to the Student Experience Research Network, students who feel valued by their teachers engage more fully in their learning and persevere when they experience adversity. Conversely, when students feel unwelcome or isolated, scanning for environmental threats consumes cognitive resources (brain power), impairing academic learning and memory.</p>
</div>
<div class="p-4 bg-slate-50 border border-slate-200 rounded-xl my-4">
<h4 class="font-bold text-slate-900 mb-2">The State of Belonging in the United States</h4>
<p class="mb-2">A 2024 study by Over Zero and the American Immigration Council found that Americans reported high rates of non-belonging in workplaces (64%) and local communities (74%), but lower non-belonging among friends (44%) and family (40%). Notably, individuals with diverse friend groups reported stronger feelings of belonging. Belonging reduces stress and fosters community connection.</p>
<p class="mb-2">What are ways you can create a sense of belonging in your community?</p>
</div>`
  },

  // ==========================================
  // PASSAGE 10: TACKLING OCEAN PLASTIC (Full Text)
  // ==========================================
  y8_ocean_plastic: {
    title: "Tackling Ocean Plastic",
    author: "Caitlyn Meagher",
    genre: "Informational",
    year: 8,
    body: `<p class="mb-3">Certain problems in the world seem unresolvable, but individuals can tackle large issues step by step. Dutch inventor Boyan Slat was scuba diving in Greece when he was struck by the massive amount of floating plastic around him. This inspired him to launch a high school research project that eventually became The Ocean Cleanup, a non-profit organization dedicated to ridding the world's oceans of plastic.</p>
<p class="mb-3">His team mapped ocean accumulation zones, conducting the first aerial survey of the Great Pacific Garbage Patch, which holds over 80,000 tons of debris. They discovered that larger plastic breaks down into microplastics—pieces of plastic that are about the size of a sesame seed or smaller. To study the depth of pollution, they built a "Multi-Level Trawl" stacking 10 nets down to 5 meters, discovering that almost all plastic floats in the top few meters of the sea.</p>
<p class="mb-3">Using pool scale models, the team faced engineering challenges. Scale models are far cheaper than full-size ocean barriers and allow designers to test variations rapidly. Rather than anchoring heavy barriers to the stormy seabed floor, which risked snapping cables, they adopted a core principle: "We work with nature." By letting a U-shaped barrier drift slowly with surface currents, the barrier acts like the plastic, capturing debris while withstanding rough weather.</p>
<p class="mb-3">When their first full-scale ocean trial broke apart under severe waves, the engineers did not quit. They treated the failure as a learning opportunity, adjusting boat speeds and reinforcing netting materials. Their current system features a 3-meter deep net towed slowly between two vessels. Debris funnels into a central detachable "retention zone" that is periodically emptied, hoisted onto boats, and returned to land for recycling.</p>
<p class="mb-3">Engineers continue to refine the system to prevent unintended consequences, such as marine animals becoming entrapped in the netting. The Ocean Cleanup aims to remove 90% of floating ocean plastic by 2040, and invites the public to participate through its "Citizen Scientist" tracking program.</p>`
  },

  // ==========================================
  // PASSAGE 11: BACK IN TUNE (Full Text)
  // ==========================================
  y8_tune: {
    title: "Back in Tune",
    author: "Alistair Edwards",
    genre: "Narrative",
    year: 8,
    body: `<p class="mb-3">Every Wednesday afternoon, music resonated through Bear Creek Middle School as Mr. Green led forty orchestra students through Gustav Holst's "The Planets." All seemed to soar among the stars, except first violinist Jordan Robinson, who felt earthbound, heavy, and completely uninspired. A loud screech echoed through the room when Jordan played a jarringly flat note. The baton dropped. Embarrassed, he stayed behind after rehearsal to speak with his teacher.</p>
<p class="mb-3">He followed Mr. Green into his office, then waited nervously to see if his teacher was going to berate him. Instead, Mr. Green sat down quietly and asked what was wrong. Jordan admitted that despite practicing daily, his heart was not in the classical repertoire or the upcoming Mendelssohn piece assigned for the spring recital. Mr. Green nodded thoughtfully and urged him to take a few days away from the sheet music to find sounds that resonated with his spirit.</p>
<p class="mb-3">At home that evening, Jordan stared in frustration at the untouched Mendelssohn score resting on his music stand with not a page turned. Sensing his creative slump, his grandmother walked into the room. She reached beneath her bed, pulled out an old cardboard box, and handed him a CD of jazz violinist Regina Carter playing "Soul Eyes."</p>
<p class="mb-3">Hearing that number had flipped a switch in Jordan's mind. Jordan was immediately captivated by the freedom, warmth, and emotional vitality of jazz. He listened in awe to Carter’s improvisation—the art of inventing melodies spontaneously on the spot rather than reading rigid notes off a page.</p>
<p class="mb-3">The next morning before first period, Jordan excitedly rushed into the band room to share the recording with Mr. Green. Intrigued by Jordan’s newfound passion for improvisation, Mr. Green smiled, walked over to the upright piano, and began playing a smooth blues progression. Jordan lifted his violin to his chin. Together, they held an energetic, impromptu jam session. Immersed in the music's natural, joyful flow, Jordan smiled. Finally, Jordan was back in tune.</p>`
  },

  // ==========================================
  // PASSAGE 12: TAG TEAM (Full Text)
  // ==========================================
  y8_tag_team: {
    title: "Tag Team",
    author: "Fatima Shaik",
    genre: "Narrative",
    year: 8,
    body: `<p class="mb-3">It’s happening again. Every time I visit the mall, security trails me. Guards nod to clerks, passing surveillance of me from one shop to the next like a tag team with me as the baton. While my friend Leon laughs and tells me to get in their faces, Leon is a foot shorter and wears neat loafers and plaid shirts—nobody profiles him. At 6’2”, strangers label me a thug, completely ignoring my real passion: walking around with my notebook to observe and write stories.</p>
<p class="mb-3">Determined to stand up for my dignity, I return to the mall after school. Leon readies his phone camera to film the confrontation for social media. When I turn around with clenched fists and demand why the guard follows me simply for being Black, the officer fumbles for his radio while Leon chuckles in the background. What’s up with that—he’s supposed to be my guy!</p>
<p class="mb-3">Suddenly, a sharp, familiar voice cuts through the tension. Ms. Jameson, my former middle school principal, intervenes carrying an armful of shopping bags. She confronts both of us, revealing that she knows us both: the guard, Mr. Charles Walter, has two children at her school, and I am an aspiring writer who won the district essay ribbon.</p>
<p class="mb-3">“I… uh, I’m just… doing my job, Ms. J,” Mr. Walter burbles, his face flushing with embarrassment under her piercing gaze. She orders us to introduce ourselves, delivering her timeless lesson: people must learn to talk directly to one another as individuals instead of jumping to unfair conclusions.</p>
<p class="mb-3">Turning to Leon, she snaps, “Put away that phone before I put you up on my Facebook page for a fool!” Leon sheepishly tucks his phone into his pocket. We all crack a nervous smile, though neither Mr. Walter nor I emit a real real laugh; we’re not there yet.</p>
<p class="mb-3">She asks us to carry her packages to her car. While an awkward greeting cannot instantly erase years of profiling, Mr. Walter now knows my name and my face. I leave without buying anything at the mall, I realize, because this trip I got pretty much everything I needed.</p>`
  },

  // ==========================================
  // PASSAGE 13: THE SHEAVES (Full Text)
  // ==========================================
  y8_sheaves: {
    title: "The Sheaves",
    author: "Edwin Arlington Robinson",
    genre: "Poetry",
    year: 8,
    body: `<p class="mb-3">Where long the shadows of the wind had rolled,<br>Green wheat was yielding to the change assigned;<br>And as by some vast magic undivined<br>The world was turning slowly into gold.</p>
<p class="mb-3">Like nothing that was ever bought or sold<br>It waited there, the body and the mind;<br>And with a mighty meaning of a kind<br>That tells the more the more it is not told.</p>
<p class="mb-3">So in a land where all days are not fair,<br>Fair days went on till on another day<br>A thousand golden sheaves were lying there,<br>Shining and still, but not for long to stay—<br>As if a thousand girls with golden hair<br>Might rise from where they slept and go away.</p>`
  },

  // ==========================================
  // PASSAGE 14: THE SONG OF WANDERING AENGUS (Full Text)
  // ==========================================
  y8_aengus: {
    title: "The Song of Wandering Aengus",
    author: "W. B. Yeats",
    genre: "Poetry",
    year: 8,
    body: `<p class="mb-3">I went out to the hazel wood,<br>Because a fire was in my head,<br>And cut and peeled a hazel wand,<br>And hooked a berry to a thread;</p>
<p class="mb-3">And when white moths were on the wing,<br>And moth-like stars were flickering out,<br>I dropped the berry in a stream<br>And caught a little silver trout.</p>
<p class="mb-3">When I had laid it on the floor<br>I went to blow the fire a-flame,<br>But something rustled on the floor,<br>And someone called me by my name:</p>
<p class="mb-3">It had become a glimmering girl<br>With apple blossom in her hair<br>Who called me by my name and ran<br>And faded through the brightening air.</p>
<p class="mb-3">Though I am old with wandering<br>Through hollow lands and hilly lands,<br>I will find out where she has gone,<br>And kiss her lips and take her hands;</p>
<p class="mb-3">And walk among long dappled grass,<br>And pluck till time and times are done,<br>The silver apples of the moon,<br>The golden apples of the sun.</p>`
  }
};

// 2. Central Question Catalog
const READING_QUESTIONS = [
  // ==============================================================
  // PASSAGE 1: DIANA NYAD (Year 7 Informational - Caitlyn Meagher)
  // ==============================================================
  {
    passageId: "y7_nyad",
    question: "What caused Diana Nyad's first attempt to swim around Manhattan Island in 1975 to end after eight hours?",
    options: [
      "A sudden storm created dangerous swells and waves.",
      "She caught a virus from the unclean water and had to recover.",
      "Strong ocean currents pulled her far off-course.",
      "She suffered an asthma attack that lasted for hours."
    ],
    correctIndex: 1,
    hint: "Look back at paragraph 2 to find why she was pulled from the water.",
    explanation: "Paragraph 2 states that after eight hours of non-stop swimming, she was pulled out because she caught a virus from the unclean water and needed 10 days to recover."
  },
  {
    passageId: "y7_nyad",
    question: "Why did Nyad consult with meteorologists while planning her Cuba-to-Florida swim?",
    options: [
      "To check if ocean temperatures were warm enough to avoid hypothermia.",
      "To predict the seasonal migration patterns of predatory sharks.",
      "Because even a slight change in winds or currents could cause her to drift off-course.",
      "To ensure she would not swim during months when box jellyfish were present."
    ],
    correctIndex: 2,
    hint: "Check paragraph 4 where Nyad consults weather and ocean experts.",
    explanation: "Paragraph 4 explains that she spoke with meteorologists because 'even a slight change in winds could cause her to go off-course' over the 110-mile distance."
  },
  {
    passageId: "y7_nyad",
    question: "What does the word 'obstacles' mean in the sentence: 'Water currents, wind, and waves are all obstacles that marathon swimmers deal with during long swims.'?",
    options: [
      "Conditions or barriers that make progress difficult.",
      "Rules enforced by open-water race officials.",
      "Natural landmarks used by athletes to navigate.",
      "Unexpected rewards gained from strenuous training."
    ],
    correctIndex: 0,
    hint: "Consider what waves, currents, and wind do to an athlete trying to swim straight ahead.",
    explanation: "An obstacle is something that stands in the way or hinders progress. Wind, waves, and currents make marathon swimming harder to complete."
  },
  {
    passageId: "y7_nyad",
    question: "Which statement best outlines the main sequence of Nyad's attempts to complete the Cuba-to-Florida swim?",
    options: [
      "She succeeded in her twenties, retired for thirty years, and repeated it at age 64.",
      "She failed at age 29 in a cage, trained again decades later, faced several setbacks, and succeeded on her fifth attempt.",
      "She completed the swim without a cage in 1978, then returned in 2013 to beat the world speed record.",
      "She attempted the swim five consecutive years in her twenties before weather forced her to retire."
    ],
    correctIndex: 1,
    hint: "Track her first attempt at age 29, the 30-year break, and the repeated attempts between 2010 and 2013.",
    explanation: "Paragraph 3 notes her first attempt at age 29 failed due to high waves slamming her into the cage. She returned in 2010, suffered failed attempts from jellyfish and asthma, and finally succeeded on her fifth try in 2013."
  },
  {
    passageId: "y7_nyad",
    question: "What core message does the author highlight through Diana Nyad's swimming career?",
    options: [
      "Physical stamina in open water drops rapidly after an athlete turns thirty.",
      "Careful route planning guarantees that an athlete will face no unexpected hazards.",
      "Determination and persistence allow people to achieve ambitious dreams despite repeated setbacks.",
      "Individual athletes succeed entirely on their own without support crews or specialists."
    ],
    correctIndex: 2,
    hint: "Think about her final quote and how she responded every time an attempt failed.",
    explanation: "Throughout the text, every setback (Manhattan virus, 1978 storm, jellyfish stings, asthma) is followed by renewed effort, ending with her quote: 'You're never too old to chase your dream.'"
  },
  {
    passageId: "y7_nyad",
    question: "How old was Diana Nyad when she successfully completed the swim from Cuba to Key West, Florida?",
    options: ["20 years old", "29 years old", "50 years old", "64 years old"],
    correctIndex: 3,
    hint: "Look near the end of the text where her arrival in Florida is described.",
    explanation: "The text explicitly states: 'She was 64 years old when she completed this swim.'"
  },
  {
    passageId: "y7_nyad",
    question: "Why was Nyad forced to tread water for two hours during the second night of her 2013 swim?",
    options: [
      "A pod of aggressive sharks approached her support boat.",
      "A storm struck, churning the sea and creating rough conditions.",
      "She experienced a recurring asthma attack.",
      "She had to wait for medical treatment after a box jellyfish sting."
    ],
    correctIndex: 1,
    hint: "Read paragraph 5 where the conditions on the second night of the final swim are described.",
    explanation: "Paragraph 5 explains: 'On the second night of the swim, there was a storm. Nyad had to stop swimming and tread water for two hours, making her very cold.'"
  },
  {
    passageId: "y7_nyad",
    question: "What detail from Nyad's childhood best shows her dedication to becoming a high-level athlete?",
    options: [
      "Moving to Florida to be closer to ocean waters.",
      "Waking up at 4:30 a.m. to swim for two hours, running at lunch, and swimming again after school.",
      "Setting a record around Manhattan Island before entering her twenties.",
      "Refusing to use a shark cage during high school swim meets."
    ],
    correctIndex: 1,
    hint: "Check paragraph 1 for her daily childhood training schedule.",
    explanation: "Paragraph 1 describes her demanding routine: waking up at 4:30 a.m. to swim for two hours, running during lunch, and returning to the pool after school."
  },
  {
    passageId: "y7_nyad",
    question: "In the phrase 'swimming from Bimini to Florida without a shark cage', the author includes an explanation in brackets. What purpose does this explanation serve?",
    options: [
      "It argues that shark cages make swimming too easy.",
      "It clarifies what a shark cage is for readers who might not know.",
      "It describes the specific material used to construct the cage.",
      "It warns swimmers not to enter Bahamian waters."
    ],
    correctIndex: 1,
    hint: "The bracketed phrase reads: (an underwater cage that protects swimmers from sharks).",
    explanation: "The parenthetical definition provides a direct, informative explanation of an unfamiliar term for the reader."
  },
  {
    passageId: "y7_nyad",
    question: "Which detail from the text is a verifiable fact about Nyad's Bimini-to-Florida swim?",
    options: [
      "It was the most frightening swim of her entire sporting career.",
      "Bimini is the best island in the Bahamas for open-water athletics.",
      "She completed 102 miles in 27.5 hours, setting a world record.",
      "Swimming without a cage is foolish for any marathon athlete."
    ],
    correctIndex: 2,
    hint: "Look for a measurable statistic directly cited in paragraph 3.",
    explanation: "Paragraph 3 provides the exact measurement: 'She swam 102 miles in 27.5 hours, setting a world record.' The other choices are subjective opinions or unmentioned claims."
  },

  // ==============================================================
  // PASSAGE 2: FORCED RHUBARB (Year 7 Informational - Readworks)
  // ==============================================================
  {
    passageId: "y7_rhubarb",
    question: "Historically, why did people in Britain cultivate rhubarb plants for centuries before ever eating the stalks?",
    options: [
      "The poisonous leaves were used to control garden pests.",
      "Only the underground root was valued for its medicinal applications.",
      "Stalks were too bitter to chew unless baked into pies.",
      "The plant could only survive when grown inside heated glasshouses."
    ],
    correctIndex: 1,
    hint: "Look back at paragraph 1 where the early history of the plant is discussed.",
    explanation: "The passage states that rhubarb was valued for its medicinal applications and only the root was used for centuries, while the stalks were considered inedible."
  },
  {
    passageId: "y7_rhubarb",
    question: "According to the text, why does growing rhubarb in total darkness produce sweeter stalks?",
    options: [
      "The absence of light stops insects from feeding on sugars in the stems.",
      "Being kept in the dark forces the plant to absorb extra moisture from the potting boxes.",
      "Deprived of sunlight for photosynthesis, the plant channels stored root sugars into growing tall stalks rather than leaves.",
      "Candlelight gently heats the soil, caramelising the carbohydrates inside the roots."
    ],
    correctIndex: 2,
    hint: "Re-read the text to see how darkness affects where the plant directs its energy.",
    explanation: "Because there is no sunlight for photosynthesis, the plant cannot grow full green leaves. Instead, it uses stored root carbohydrates to shoot upward toward light, resulting in sweeter stalks."
  },
  {
    passageId: "y7_rhubarb",
    question: "Why was Yorkshire an ideal location for the large-scale commercial production of forced rhubarb during the 19th century?",
    options: [
      "Local coal mines fueled the heated sheds, and the regional wool industry provided nitrogen-rich waste as fertiliser.",
      "Yorkshire had the wettest climate and darkest winters in Great Britain.",
      "London markets were too distant for any other farming region to reach by road.",
      "Siberian botanists had settled in Carlton and built modern terracotta factories."
    ],
    correctIndex: 0,
    hint: "Review the paragraph describing local industries in Yorkshire.",
    explanation: "Yorkshire was ideal because local coal mines provided fuel to heat the forcing sheds, and the regional wool industry supplied nitrogen-rich wool waste (shoddy) as fertiliser."
  },
  {
    passageId: "y7_rhubarb",
    question: "What does the word 'nostalgic' mean in the sentence: 'White was nostalgic for a particularly British culinary tradition.'?",
    options: [
      "Critical and dismissive of old-fashioned farming methods.",
      "Experiencing an affectionate, longing feeling for things from the past.",
      "Highly trained in professional cooking techniques.",
      "Worried about whether an old recipe will succeed."
    ],
    correctIndex: 1,
    hint: "Notice how White remembers the rhubarb patches from his childhood in Leeds.",
    explanation: "'Nostalgic' means having a sentimental longing or affection for a period or experience in the past."
  },
  {
    passageId: "y7_rhubarb",
    question: "Why does the author describe Janet Oldroyd Hulme as a 'High Priestess' and compare her rhubarb shed to a 'church'?",
    options: [
      "The shed was built inside a deconsecrated 19th-century chapel.",
      "Workers must take silent religious vows before picking the crop.",
      "The quiet, candlelit atmosphere and her mastery of a mysterious, traditional craft give the space a sacred feeling.",
      "The Royal Horticultural Society officially awarded her a religious title."
    ],
    correctIndex: 2,
    hint: "Look at how the silence, candlelight, and special energy inside the wooden shed are described.",
    explanation: "The author highlights the quiet, candlelit setting and notes that calling her a priestess implies deep mastery over the mysterious, hidden process of growing forced rhubarb."
  },
  {
    passageId: "y7_rhubarb",
    question: "Why are rhubarb leaves never eaten?",
    options: [
      "They dry out and crumble into dust when picked.",
      "They contain high amounts of oxalic acid, which can be poisonous.",
      "They turn bright red and become too tough to chew.",
      "They lack any nutritional value or moisture."
    ],
    correctIndex: 1,
    hint: "Check the bracketed note regarding the plant's foliage.",
    explanation: "The text states directly: 'The leaves contain a high amount of oxalic acid, which can be poisonous.'"
  },
  {
    passageId: "y7_rhubarb",
    question: "According to gardening legend, how was the process of forcing rhubarb first discovered in 1817?",
    options: [
      "A fire warmed an outdoor garden patch during a cold winter.",
      "Workmen at the Chelsea Physic Garden accidentally covered rhubarb roots with soil.",
      "French chefs kept stalks in dark basements to stop them from turning red.",
      "Siberian farmers brought potted rhubarb plants indoors during blizzards."
    ],
    correctIndex: 1,
    hint: "Look at the description of the Chelsea Physic Garden in London.",
    explanation: "Workmen accidentally buried rhubarb roots under soil. When it was removed weeks later, growers noticed tender, pink, less astringent shoots growing from the roots."
  },
  {
    passageId: "y7_rhubarb",
    question: "Why does the author mention the 1827 Quarterly Journal of Agriculture?",
    options: [
      "To show the historical instructions gardeners used when forcing rhubarb in the 19th century.",
      "To prove that forced rhubarb was originally rejected by British chefs.",
      "To argue that modern farming methods produce inferior rhubarb.",
      "To explain how coal mines were built near Carlton."
    ],
    correctIndex: 0,
    hint: "The quoted historical text details transplanting roots into heated sheds.",
    explanation: "The reference provides authentic historical documentation of the exact practices recommended during the 1820s boom."
  },
  {
    passageId: "y7_rhubarb",
    question: "What unique sound can visitors sometimes hear inside the dark forcing sheds during the growing period?",
    options: [
      "Whistling as air passes through the wooden door screens.",
      "Popping as the rapidly growing rhubarb stalks push out from the buds.",
      "Trickling water dripping from the heating pipes into potting boxes.",
      "Sizzling as candlelight warms the cold earth."
    ],
    correctIndex: 1,
    hint: "Read the final paragraph for the sensory description of the stalks emerging.",
    explanation: "The text explains: 'Visitors to the forcing sheds of Yorkshire say they can hear the sound of popping as the rhubarb stalks emerge from the bud.'"
  },
  {
    passageId: "y7_rhubarb",
    question: "In the passage, what does the agricultural term 'forcing' mean?",
    options: [
      "Using chemical weedkillers to clear unwanted plants from a field.",
      "Pressing rhubarb stalks under heavy stone weights to extract sweet juice.",
      "Encouraging or inducing a plant to grow outside its natural season according to the grower's timetable.",
      "Transporting root stock on express trains before Easter."
    ],
    correctIndex: 2,
    hint: "Look at paragraph 2 where the term is formally defined.",
    explanation: "'Forcing' refers to inducing the plant to grow according to the grower's schedule, such as growing winter crops in warm, dark sheds."
  },

  // ==============================================================
  // PASSAGE 3: SPACE JUNK (Year 7 & 8 Persuasive - Josh Adler)
  // ==============================================================
  {
    passageId: "y7_space_junk",
    question: "According to BBC News data cited in the text, approximately how many trackable pieces of junk are currently orbiting Earth?",
    options: ["Around 2,000 pieces", "More than 22,000 pieces", "Exactly 100,000 pieces", "Several hundred pieces"],
    correctIndex: 1,
    hint: "Look back at paragraph 2 where tracking via telescope and radar is mentioned.",
    explanation: "Paragraph 2 states directly that there are 'more than 22,000 pieces of junk in space around the earth' that can be seen by surface telescopes or radars."
  },
  {
    passageId: "y7_space_junk",
    question: "Why can even a tiny fragment of space junk cause catastrophic damage to an active satellite or spacecraft?",
    options: [
      "The fragments are superheated by the sun's radiation.",
      "Space junk carries radioactive chemical fuel.",
      "Objects in orbit travel at extreme speeds, and higher speeds produce much greater collision forces.",
      "Space debris emits magnetic signals that jam spacecraft computers."
    ],
    correctIndex: 2,
    hint: "Read paragraph 3 carefully to see how speed relates to force.",
    explanation: "Paragraph 3 explains: 'the faster an object moves, the greater the impact if the object collides with something else,' meaning even a tiny speck carries enormous kinetic force."
  },
  {
    passageId: "y7_space_junk",
    question: "What unintended consequence occurred when China used a missile to blow up an old satellite in 2007?",
    options: [
      "The missile knocked several communications satellites out of alignment.",
      "The blast created thousands of smaller fragments, significantly worsening the space junk problem.",
      "The satellite fell unexpectedly through the atmosphere and landed on Earth.",
      "The explosion disabled tracking radars in England and Germany."
    ],
    correctIndex: 1,
    hint: "Check paragraph 8 for the outcome of the 2007 missile test.",
    explanation: "Paragraph 8 notes that blowing up the satellite backfired because 'the explosion only created thousands of smaller pieces, adding junk in space!'"
  },
  {
    passageId: "y7_space_junk",
    question: "In the text, what does the word 'fragments' mean in the sentence: 'The time to act is now; as we go farther in time we will need to remove more and more fragments.'?",
    options: [
      "Small, broken-off pieces or remnants of larger objects.",
      "Brand-new navigation satellites built by engineers.",
      "Chemical gases that make up the upper atmosphere.",
      "Research tools deployed on deep-space exploration missions."
    ],
    correctIndex: 0,
    hint: "Think about what happens when two metal objects smash into each other at high speed.",
    explanation: "A 'fragment' is a small part broken off or detached from a whole object. In this context, it refers to broken satellite and rocket remnants."
  },
  {
    passageId: "y7_space_junk",
    question: "What is the author's primary persuasive purpose in this article?",
    options: [
      "To persuade governments to completely stop sending communication satellites into space.",
      "To raise urgent awareness of the escalating dangers of orbital debris and advocate for active cleanup solutions.",
      "To argue that German robotics are superior to British harpoon technology.",
      "To prove that space exploration has failed to benefit human everyday life."
    ],
    correctIndex: 1,
    hint: "Look at how the author presents the danger, cites expert urgency, and outlines international solutions.",
    explanation: "The text structures a persuasive call-to-action: orbital debris is an urgent threat, and international cooperation is required now before collisions multiply out of control."
  },
  {
    passageId: "y7_space_junk",
    question: "Under an international agreement mentioned in the passage, what time limit has been set for space tools to remain in orbit?",
    options: ["10 years", "25 years", "50 years", "100 years"],
    correctIndex: 1,
    hint: "Look at paragraph 5 to find the rule agreed upon by countries around the world.",
    explanation: "Paragraph 5 states that countries have agreed to 'limit the time their space tools stay in orbit to 25 years' before safely falling into the atmosphere to burn up."
  },
  {
    passageId: "y7_space_junk",
    question: "What happened in 2009 when an active United States satellite collided with an inactive Russian satellite?",
    options: [
      "Both satellites safely bounced off one another with minor surface dents.",
      "The collision shattered the satellites into more than 2,000 additional debris items.",
      "Both spacecraft fell immediately into the ocean near Florida.",
      "Astronauts had to perform emergency spacewalks to tow them away."
    ],
    correctIndex: 1,
    hint: "Review paragraph 4 to find the exact result of the 2009 collision.",
    explanation: "Paragraph 4 explains: 'The collision caused the satellites to break into more than 2,000 pieces, increasing the items of space junk.'"
  },
  {
    passageId: "y7_space_junk",
    question: "How does the British cleanup method being tested differ from the proposed German strategy?",
    options: [
      "The British plan uses missiles, while the German plan uses high-power lasers.",
      "The British system fires a metal harpoon to drag debris down to burn up, whereas the Germans plan to use collector robots that return debris to Earth.",
      "The British method gathers junk with nets, while the German method uses giant electromagnets.",
      "The British system is designed for small screws, while the German system targets entire rockets."
    ],
    correctIndex: 1,
    hint: "Compare paragraphs 6 and 7 describing the English and German initiatives.",
    explanation: "Paragraph 6 outlines England's harpoon designed to pull debris down to burn up in the atmosphere, while paragraph 7 details Germany's plan for robotic missions that collect pieces and return them to Earth."
  },
  {
    passageId: "y7_space_junk",
    question: "Why does researcher Marco Castronuovo consider the space junk problem especially urgent for ordinary people on Earth?",
    options: [
      "Falling debris frequently crashes through roofs in residential neighborhoods.",
      "Many orbiting objects are critical tools supporting daily technology like cell phones and computer networks.",
      "Space debris blocks sunlight from reaching crops across the Southern Hemisphere.",
      "Rocket fuel vapors are altering the ozone layer and weather systems."
    ],
    correctIndex: 1,
    hint: "Look near the conclusion where Castronuovo explains why more items are being launched.",
    explanation: "Paragraph 9 highlights that countries are launching more satellites because 'many of these objects are tools that help people use their cell phones or computers.'"
  },
  {
    passageId: "y7_space_junk",
    question: "Why does the author conclude the text with the direct quotation: 'The time to act is now; as we go farther in time we will need to remove more and more fragments'?",
    options: [
      "To show that the problem has already been solved by modern technology.",
      "To create a sense of immediacy and reinforce the urgency of solving the issue before it compounds.",
      "To argue that space exploration should be permanently banned.",
      "To criticize scientists for taking too long to design effective tools."
    ],
    correctIndex: 1,
    hint: "Consider what ending on the words 'The time to act is now' makes the reader feel.",
    explanation: "Ending with an authoritative expert quotation creates a compelling call to action, leaving the reader with a clear sense of urgency."
  },

  // ==============================================================
  // PASSAGE 4: ANIMAL RIGHTS (Year 7 & 8 Persuasive - Readworks)
  // ==============================================================
  {
    passageId: "y7_animal_rights",
    question: "On what legal foundation did PETA base their 2012 lawsuit against SeaWorld?",
    options: [
      "Local city bylaws regarding cruelty toward sea animals.",
      "International maritime laws regulating open-ocean fishing.",
      "The U.S. Constitution's 13th Amendment banning slavery and involuntary servitude.",
      "Environmental laws prohibiting the capture of endangered species."
    ],
    correctIndex: 2,
    hint: "Check the opening paragraph to see which legal amendment PETA argued SeaWorld had violated.",
    explanation: "Paragraph 1 explicitly states that PETA claimed SeaWorld's treatment of orcas violated the U.S. Constitution's 13th Amendment, which bans slavery and involuntary servitude."
  },
  {
    passageId: "y7_animal_rights",
    question: "What practical issue did critics raise regarding the idea of granting human legal rights to animals?",
    options: [
      "Most wildlife parks would be forced to raise their ticket prices.",
      "It could disrupt vital industries that rely on working animals, such as police units using sniffer dogs.",
      "Zoos would run out of suitable habitats to house larger mammals.",
      "Animals would be forced to participate in legal courtroom trials."
    ],
    correctIndex: 1,
    hint: "Read paragraph 3 to find how working animals are mentioned.",
    explanation: "Paragraph 3 notes that critics worried granting animals legal rights would create serious problems for organizations that use working animals, such as police forces relying on drug-sniffing dogs."
  },
  {
    passageId: "y7_animal_rights",
    question: "In the section titled Animals Have Rights, why does the writer begin with: 'How would you feel if you were taken from your home, placed in a concrete box, and forced to do tricks for people...?'",
    options: [
      "To ask the reader for practical advice on building better pools for orcas.",
      "To encourage readers to put themselves in the animal's place and feel empathy for its situation.",
      "To quiz the reader on their knowledge of marine animal biology.",
      "To explain the daily training schedule of a SeaWorld employee."
    ],
    correctIndex: 1,
    hint: "Consider how this question makes the reader imagine captivity from the animal's perspective.",
    explanation: "The writer uses a rhetorical question to prompt the audience to imagine the emotional stress of captivity, creating personal empathy for the orcas."
  },
  {
    passageId: "y7_animal_rights",
    question: "In the Pro-People section, what does the word 'avalanche' mean in the sentence: 'giving one animal species constitutional rights could cause an avalanche of court cases'?",
    options: [
      "A sudden, overwhelming flood of events happening all at once.",
      "A slow and carefully planned legal negotiation between judges.",
      "A cold, snowy weather pattern disrupting court proceedings.",
      "A collection of official historical documents stored in archives."
    ],
    correctIndex: 0,
    hint: "Think of what a mountain avalanche looks like when a massive rush of snow suddenly crashes down.",
    explanation: "In this context, 'avalanche' is used metaphorically to describe an uncontrollable, sudden rush of numerous court challenges."
  },
  {
    passageId: "y7_animal_rights",
    question: "How does the Pro-People section counter the claim made in Animals Have Rights regarding the U.S. Constitution?",
    options: [
      "By pointing out that the Constitution has never been altered since it was drafted.",
      "By arguing that the Constitution explicitly begins with 'We the People,' proving it was crafted only for humans.",
      "By stating that orcas already possess their own set of marine rights.",
      "By showing that voters rejected amendments concerning farm animals."
    ],
    correctIndex: 1,
    hint: "Check how the Pro-People side interprets the first three words of the Constitution.",
    explanation: "While the pro-animal side points out that the Constitution evolves, the Pro-People writer counters that it begins with 'We the People,' showing it was written specifically for human beings."
  },
  {
    passageId: "y7_animal_rights",
    question: "Which statement from the passage represents a verifiable fact rather than an opinion?",
    options: [
      "'The treatment is unfair to them, and they deserve to be protected.'",
      "'Animals are a lot more intelligent than we give them credit for.'",
      "'The judge soon dismissed the lawsuit.'",
      "'Rover may be your most loyal companion.'"
    ],
    correctIndex: 2,
    hint: "Look for the historical event that can be proved true using public legal records.",
    explanation: "That the judge dismissed the lawsuit is a documented legal fact. The other options are personal viewpoints, emotional judgments, or subjective claims."
  },
  {
    passageId: "y7_animal_rights",
    question: "What core comparison does Sarah Ludwig use to support her argument that animals deserve legal rights?",
    options: [
      "She highlights that animals have thoughts, feelings, and fears just like people do.",
      "She compares the strength of wild orcas to that of Olympic swimmers.",
      "She points out that domestic animals are more obedient than wild creatures.",
      "She explains that working animals contribute more to society than machines."
    ],
    correctIndex: 0,
    hint: "Look closely at Ludwig's direct quotation in the Animals Have Rights section.",
    explanation: "Sarah Ludwig argues that animals have brains and experience thoughts, feelings, and fears similar to humans, which is why she believes they deserve protection."
  },
  {
    passageId: "y7_animal_rights",
    question: "What tone does the Pro-People author adopt with the comment: '“I don’t like being forced to give milk to anyone,” a cow might say. Oh, wait; animals can’t talk.'?",
    options: [
      "Solemn and grief-stricken.",
      "Sarcastic and dismissive of the opposing view.",
      "Objective and strictly scientific.",
      "Hesitant and unsure of the facts."
    ],
    correctIndex: 1,
    hint: "Notice how the author mocks the idea of farm animals complaining about their daily duties.",
    explanation: "The author uses a sarcastic, mocking tone to make the idea of giving animals legal rights to refuse work seem impractical and absurd."
  },
  {
    passageId: "y7_animal_rights",
    question: "What key reason does the Pro-People side give for why granting legal rights to animals is practically impossible?",
    options: [
      "Animals have no way of speaking or communicating their true thoughts and wishes to human courts.",
      "Most wild animal species live in areas far away from cities and lawyers.",
      "The legal system does not have enough judges to hear cases about wildlife.",
      "Animals are unable to understand the financial costs of being taken to court."
    ],
    correctIndex: 0,
    hint: "Read the paragraph that asks: 'How can we give animals legal rights when we don’t know how they truly feel?'",
    explanation: "The writer argues that without speech or clear communication, humans cannot know what animals truly feel or want, making legal representation unreasonable."
  },
  {
    passageId: "y7_animal_rights",
    question: "How is the overall passage structured to help intermediate students understand the animal rights debate?",
    options: [
      "It provides a single one-sided speech demanding the permanent closure of all marine parks.",
      "It starts with a real-life court case as a hook, followed by balanced side-by-side arguments presenting both perspectives.",
      "It explains the complete evolutionary history of killer whales in the Pacific Ocean.",
      "It lists the daily routines and diets of trainers working at SeaWorld parks."
    ],
    correctIndex: 1,
    hint: "Look at how the article opens with PETA's lawsuit before splitting into two viewpoint columns.",
    explanation: "The article uses an authentic real-world legal hook (PETA vs. SeaWorld) and then presents contrasting arguments side-by-side, giving students a balanced view of both sides."
  },

  // ==============================================================
  // PASSAGE 5: LOST IN THE WOODS (Year 7 Narrative - Daniel Case)
  // ==============================================================
  {
    passageId: "y7_lost_woods",
    question: "Why did Marvin and Jamar fall behind and lose track of their hiking group?",
    options: [
      "They stopped to tie their hiking boots by a stream.",
      "They grew bored and stepped away from the trail to take selfies.",
      "They took a wrong turn while chasing a squirrel through the trees.",
      "They stopped to make an urgent phone call to Mr. B."
    ],
    correctIndex: 1,
    hint: "Look back at paragraph 3 to find what the two boys were doing right before everyone disappeared.",
    explanation: "The text explains that after hiking for about 30 minutes, Jamar and Marvin stepped away from the group to take selfies, which caused them to lose sight of the crew."
  },
  {
    passageId: "y7_lost_woods",
    question: "How does Jamar initially react when Marvin starts to panic about being left behind?",
    options: [
      "He starts crying and demands that Marvin climb a tall tree.",
      "He tries to project calm confidence and reassures Marvin that the group cannot be far.",
      "He immediately runs back down the trail in the direction they came from.",
      "He blames Marvin for dropping his phone on the path."
    ],
    correctIndex: 1,
    hint: "Notice Jamar's expression and words when Marvin asks, 'What are we going to do?'",
    explanation: "Jamar gives Marvin his classic 'Calm down' look, assumes his usual leadership role, and calmly insists that their crew of city kids couldn't have gotten very far."
  },
  {
    passageId: "y7_lost_woods",
    question: "In the sentence 'marching through woods as thick as a Times Square rush hour', what comparison is the narrator making?",
    options: [
      "The trees are crowded so closely together that they resemble packed sidewalks in New York City.",
      "The forest is filled with bright electric billboards and yellow taxi cabs.",
      "The hiking trail is noisy and congested with lots of other hiking tourists.",
      "The hiking group is walking dangerously fast through the forest."
    ],
    correctIndex: 0,
    hint: "Think about what Times Square looks like during rush hour and apply that density to trees.",
    explanation: "The author uses a simile comparing the dense trees of the forest to crowded sidewalks in Times Square during rush hour, highlighting his urban perspective."
  },
  {
    passageId: "y7_lost_woods",
    question: "What does the word 'perplexed' mean in the sentence: '‘Mr. B., you found us!’ We had never been happier to see our leader. But Mr. B. looked perplexed.'?",
    options: [
      "Extremely frightened and distressed.",
      "Confused and puzzled by what someone is saying.",
      "Enthusiastic and bursting with energy.",
      "Deeply offended and angry about broken rules."
    ],
    correctIndex: 1,
    hint: "Think about why Mr. B. would look this way when he hadn't even moved from where the group was.",
    explanation: "'Perplexed' means baffled or puzzled. Mr. B. was confused because the group had been in the exact same spot meditating the entire time."
  },
  {
    passageId: "y7_lost_woods",
    question: "Why hadn't Marvin and Jamar heard any voices or footsteps from the rest of the hiking group?",
    options: [
      "The group had boarded a shuttle bus to return to Harlem.",
      "High winds through the canopy drowned out all shouting.",
      "The rest of the group was sitting quietly nearby meditating with their eyes closed.",
      "Mr. B. had told the other kids to play hide-and-seek."
    ],
    correctIndex: 2,
    hint: "Read what Mr. B. says when the two boys finally see him emerge from behind the shrub.",
    explanation: "Mr. B. explains with a chuckle that they couldn't hear the group because everyone had been sitting quietly in the same spot meditating."
  },
  {
    passageId: "y7_lost_woods",
    question: "How does the boys' attitude toward the forest change during their time being separated from the group?",
    options: [
      "They grow increasingly bored and fall asleep under a large oak tree.",
      "Their initial panic gradually gives way to curiosity as they begin to notice shapes, colors, and rock formations.",
      "They decide that they prefer living in the wilderness over staying in New York City.",
      "They become angry with each other and refuse to speak on the way back."
    ],
    correctIndex: 1,
    hint: "Look at how Marvin points out a tree shaped like an afro and how they start admiring rock formations.",
    explanation: "Even though they are nervous, Marvin and Jamar start noticing the natural features around them, realizing that the woods have interesting things they had never noticed before."
  },
  {
    passageId: "y7_lost_woods",
    question: "Which contrast does Marvin make between his home in New York City and the forest setting?",
    options: [
      "The forest has sweet berries, while the city only has corner grocery stores.",
      "The forest is cold and snowy, while the city streets are hot and humid.",
      "The forest has fresh air and a vivid blue sky, while the city smells bad and is filled with honking buses.",
      "The forest ground is soft and spongy, while the city sidewalks are cracked."
    ],
    correctIndex: 2,
    hint: "Review what Marvin says to lighten the mood when Jamar gets anxious.",
    explanation: "Marvin points out that New York stinks with exhaust and loud honking buses, whereas the park has crisp fresh air and the bluest sky he has ever seen."
  },
  {
    passageId: "y7_lost_woods",
    question: "Why do the boys' phones fail to help them when they finally decide to call for assistance?",
    options: [
      "Both phones had slipped out of Marvin's backpack into a deep stream.",
      "Marvin's phone has no reception and Jamar's battery is completely dead from taking too many selfies.",
      "Mr. B. had confiscated all electronic devices before starting the trail.",
      "Their phone screens were shattered when Jamar dropped his on a rock."
    ],
    correctIndex: 1,
    hint: "Check what both boys say when they pull their phones out of their pockets.",
    explanation: "Marvin groans that he has zero cellular reception, while Jamar laments that his battery died because they took too many selfies."
  },
  {
    passageId: "y7_lost_woods",
    question: "How does the author build suspense right before Marvin and Jamar reunite with Mr. B.?",
    options: [
      "By describing the sudden snapping of heavy branches followed by a loud, menacing roar.",
      "By having a large shrub in the distance begin to shake unexpectedly while the boys are gazing at it.",
      "By showing a thunderstorm rolling in quickly as darkness covers the canopy.",
      "By having Jamar trip into an underground cave."
    ],
    correctIndex: 1,
    hint: "Notice what happens just after the boys talk about the flowers and leaves.",
    explanation: "The author builds a brief moment of sudden tension when a large bush in the distance begins to rustle and shake, prompting Jamar to yell in alarm before discovering it is Mr. B."
  },
  {
    passageId: "y7_lost_woods",
    question: "What does Marvin realize at the end of the story as he sits with his eyes closed during the meditation?",
    options: [
      "He realizes that he wants to move to the countryside permanently.",
      "He learns that nature can be peaceful, but also recognizes that the familiar rhythms of the city bring their own kind of peace to him.",
      "He decides that he never wants to go on another empowerment group trip.",
      "He concludes that technology is completely harmful to young people."
    ],
    correctIndex: 1,
    hint: "Read the final paragraph where Marvin reflects on both nature and the sounds of New York.",
    explanation: "Marvin reflects that while he finally understands what Mr. B. meant about nature being peaceful, he also realizes that the familiar sights and sounds of his home city carry a meaningful sense of peace for him."
  },

  // ==============================================================
  // PASSAGE 6: LIFE IN THE ELEVATOR (Year 7 Narrative - Jesse Kohn)
  // ==============================================================
  {
    passageId: "y7_elevator",
    question: "Why did the building superintendent initially change his mind and allow the family to stay in the elevator?",
    options: [
      "The father offered to paint murals across all thirty-three floors.",
      "He was softhearted and mistook the narrator's tears from a kick to the shin as those of a deprived child.",
      "The wealthy friends on the top floor paid him a large sum of money.",
      "He discovered the family had brought their own soil and seeds."
    ],
    correctIndex: 1,
    hint: "Look back at paragraph 2 to see why the narrator was crying when the superintendent said no.",
    explanation: "Paragraph 2 explains that the superintendent relented because he mistook the narrator's tears—which were caused by his sister kicking his shin—for the sorrow of a deprived child."
  },
  {
    passageId: "y7_elevator",
    question: "What was the father's main artistic inspiration while residing in the elevator?",
    options: [
      "Painting realistic portraits of the building's tenants.",
      "Designing intricate botanical sketches of indoor vegetables.",
      "Creating a famous series of dynamic paintings focusing on escalators.",
      "Painting miniature copies of German landscape masterpieces."
    ],
    correctIndex: 2,
    hint: "Read paragraph 3 to find the titles of the paintings he completed during this period.",
    explanation: "The text explains that life in the elevator inspired the father to paint an escalator series, including works like 'Escalator to Ecstasy' and 'Escalator #7'."
  },
  {
    passageId: "y7_elevator",
    question: "How did the family manage to grow crops and garden vegetables inside a dark elevator shaft?",
    options: [
      "They left the doors wedged open with heavy wooden blocks during daylight hours.",
      "They installed industrial ultraviolet lamps powered by neighboring apartments.",
      "They hauled in garden soil, rigged mirrors to amplify a single beam of sunlight, and kept bees in a vent pipe.",
      "They purchased hydroponic kits using funds from the father's first art exhibition."
    ],
    correctIndex: 2,
    hint: "Look at paragraph 5 for the combination of soil, mirrors, and hidden insects.",
    explanation: "Friends brought soil, the mother engineered mirrors to amplify a crack of sunlight into an overhead 'sun,' and the children kept a bee colony in a ventilation pipe to cross-pollinate blossoms."
  },
  {
    passageId: "y7_elevator",
    question: "What does the word 'relished' mean in the sentence: 'Oh, how we relished these little disruptions in our chores and history lessons and art classes...'?",
    options: [
      "Greatly enjoyed and looked forward to.",
      "Deeply resented and tried to avoid.",
      "Prepared with spices and condiments.",
      "Feared because it brought unwanted noise."
    ],
    correctIndex: 0,
    hint: "Notice how the children welcomed visitors with cups of tea and fresh cucumber slices.",
    explanation: "'Relished' means to take great pleasure or delight in an experience. The children loved when visitors entered and paused their daily routine."
  },
  {
    passageId: "y7_elevator",
    question: "In the sentence 'watch miniature bolts of lightning scratch patterns across our tiny sky', what literary device is the author using to describe the elevator ceiling?",
    options: [
      "Understatement, to show how uncomfortable the elevator conditions were.",
      "Metaphor and magical realism, presenting the condensation and static as an indoor weather system.",
      "Historical allusion, referencing classic 19th-century scientific discoveries.",
      "Hyperbole, to prove that the building had severe structural wiring failures."
    ],
    correctIndex: 1,
    hint: "Consider how the author transforms the confined ceiling into a wondrous miniature sky.",
    explanation: "The author uses imaginative metaphorical imagery and magical realism, describing condensation and electrical sparks as a complete, miniature weather system inside the elevator."
  },
  {
    passageId: "y7_elevator",
    question: "How did the other residents of the building feel about the family living in the lift?",
    options: [
      "They frequently complained to the police about unauthorized electricity use.",
      "They welcomed the family, traded visits, enjoyed cups of tea, and received fresh garden produce.",
      "They refused to use the lift and took the stairs to avoid the bees.",
      "They were completely unaware that anyone lived inside the shaft."
    ],
    correctIndex: 1,
    hint: "Look at the descriptions of the composer, lawyer, and penthouse veterinarian.",
    explanation: "Tenants regularly visited for tea and cucumber snacks, while the family shared surplus harvests of melons, kale, and yams with everyone in the building."
  },
  {
    passageId: "y7_elevator",
    question: "What sudden event led to the family finally moving out of the elevator?",
    options: [
      "The superintendent caught them using the stove and evicted them immediately.",
      "The bee colony swarmed out of the vent into the building lobby.",
      "An elevator cable snapped, making the car too dangerous to inhabit.",
      "A German art critic bought the escalator paintings and invited the family to live in his Berlin guesthouse."
    ],
    correctIndex: 3,
    hint: "Read paragraph 7 about the visitor traveling to see his physicist niece on the thirty-third floor.",
    explanation: "An art critic visiting his niece loved the escalator paintings, bought them for his Berlin gallery, and insisted the family move into the immense guesthouse behind his mansion."
  },
  {
    passageId: "y7_elevator",
    question: "What humorous contrast does the narrator highlight regarding the superintendent's conditions?",
    options: [
      "The children were worried about the cost of living while the parents wanted to play games.",
      "The superintendent worried about the children behaving, but the parents were the ones causing chaotic modifications.",
      "The sister was a talented artist, but the father could only paint escalators.",
      "The friends brought gardening soil instead of fresh groceries."
    ],
    correctIndex: 1,
    hint: "Check the line: 'It was our parents the superintendent should have been worried about, not us.'",
    explanation: "The narrator makes a wry, humorous observation: the superintendent made the children promise to behave, but it was the parents who went wild rewiring boxes and building indoor farms."
  },
  {
    passageId: "y7_elevator",
    question: "In paragraph 2, what does the superintendent mean when he states: “No. Categorically not.”?",
    options: [
      "He wants them to file their request into alphabetical categories.",
      "He is saying an absolute, unconditional refusal with zero doubt.",
      "He will only agree if they limit their rides to weekend mornings.",
      "He is unsure and needs time to consult the building's owners."
    ],
    correctIndex: 1,
    hint: "'Categorically' means without any conditions, exceptions, or qualifications.",
    explanation: "'Categorically' means completely direct and unequivocal. The superintendent initially gave an absolute refusal."
  },
  {
    passageId: "y7_elevator",
    question: "What core theme is revealed in the story's concluding reflection?",
    options: [
      "Material luxury and large mansions are necessary to achieve true artistic success.",
      "Wealth is measured not by money or physical space, but by family creativity, warmth, and shared imagination.",
      "Living in big European cities is far superior to residing in cramped apartments.",
      "Breaking building rules will always result in unexpected penalties."
    ],
    correctIndex: 1,
    hint: "Reflect on the narrator's closing sentence about how their lives were 'never richer' than during those elevator years.",
    explanation: "The narrator concludes that despite having the smallest home and the least money, their time in the elevator was their richest because of their boundless creativity and closeness."
  },

  // ==============================================================
  // PASSAGE 7: THE ROAD NOT TAKEN (Year 7 Poetry - Robert Frost)
  // ==============================================================
  {
    passageId: "y7_frost",
    question: "What does the word 'diverged' mean in the opening line: 'Two roads diverged in a yellow wood'?",
    options: [
      "Merged together into a single highway.",
      "Split and branched off in two separate directions.",
      "Ended suddenly at the edge of a cliff.",
      "Twisted in circles through the trees."
    ],
    correctIndex: 1,
    hint: "Picture a fork in a walking trail where one path turns left and the other turns right.",
    explanation: "'Diverged' means split, separated, or branched off in different directions from a single point."
  },
  {
    passageId: "y7_frost",
    question: "What season of the year is suggested by the description of a 'yellow wood'?",
    options: [
      "Mid-winter, because the trees are bare.",
      "Early spring, because new buds are blooming.",
      "Autumn, because the leaves on the deciduous trees have turned yellow.",
      "High summer, because the forest is brightly lit by sunshine."
    ],
    correctIndex: 2,
    hint: "Think about when tree leaves naturally turn yellow and fall to the ground.",
    explanation: "The 'yellow wood' and leaves covering the ground signify autumn, when foliage changes color before falling."
  },
  {
    passageId: "y7_frost",
    question: "In line 8, the speaker describes one path as grassy and says it 'wanted wear'. What does this personification mean?",
    options: [
      "The path was worn out and needed repairs.",
      "The path was overgrown and looked as though fewer people had walked on it.",
      "The path had signs warning travelers not to wear heavy boots.",
      "The path was muddy and washed away by heavy rainfall."
    ],
    correctIndex: 1,
    hint: "In older English, to 'want' something often meant to lack or need it.",
    explanation: "'Wanted wear' personifies the road as wanting travelers, meaning the grass had not been trodden down and needed to be walked on."
  },
  {
    passageId: "y7_frost",
    question: "Although the speaker initially thinks the second path has 'perhaps the better claim,' what does he admit in lines 9–11?",
    options: [
      "The second path was far steeper and filled with thorns.",
      "Both paths were actually worn down about the same by passing travelers.",
      "The first path had completely disappeared into the undergrowth.",
      "Neither path had ever been used by human beings before."
    ],
    correctIndex: 1,
    hint: "Re-read lines 9–10: 'Though as for that, the passing there / Had worn them really about the same.'",
    explanation: "Lines 9–10 make it clear that despite initial appearances, travelers had actually worn both paths to roughly the same extent."
  },
  {
    passageId: "y7_frost",
    question: "In line 12, what does the phrase 'leaves no step had trodden black' tell the reader?",
    options: [
      "The fallen leaves had not yet been stepped on or crushed by walkers that morning.",
      "A fire had swept through the forest, leaving burnt ash.",
      "The trail was covered in dark, fertile gardening soil.",
      "The fallen leaves were wet and rotted from winter decay."
    ],
    correctIndex: 0,
    hint: "'Trodden' comes from the verb 'tread' (to step or walk upon).",
    explanation: "'Trodden black' refers to fresh leaves being trampled into dark, crushed mulch by travelers' feet; undisturbed leaves show no one had walked there that morning."
  },
  {
    passageId: "y7_frost",
    question: "In the context of the poem, what do the two diverging roads symbolize?",
    options: [
      "Two physical hiking routes through a national park.",
      "Important choices and decisions that people must make in life.",
      "The difference between traveling by foot or traveling by vehicle.",
      "Moving away from a busy city into a quiet rural community."
    ],
    correctIndex: 1,
    hint: "The roads represent a decision where choosing one pathway determines where your future leads.",
    explanation: "The diverging roads are an extended metaphor for life's choices—crossroads where an individual must make a decision that permanently shapes their journey."
  },
  {
    passageId: "y7_frost",
    question: "Why does the speaker doubt whether he will ever return to explore the first path (lines 14–15: 'Yet knowing how way leads on to way, / I doubted if I should ever come back')?",
    options: [
      "He knows he will quickly become lost in the dense undergrowth.",
      "He realizes that each decision in life leads to new paths and opportunities, making it unlikely he will ever return to this starting point.",
      "He plans to move to another country immediately after finishing his hike.",
      "He expects the first path will soon be fenced off by landowners."
    ],
    correctIndex: 1,
    hint: "Once you make a choice and move forward, life carries you along new directions.",
    explanation: "Frost recognizes that one choice leads to another series of paths, so travelers rarely get the chance to backtrack and undo their original decision."
  },
  {
    passageId: "y7_frost",
    question: "In stanza 4, the speaker states: 'I shall be telling this with a sigh / Somewhere ages and ages hence'. What does the word 'sigh' suggest about the speaker's tone?",
    options: [
      "Intense rage and anger toward nature.",
      "Complete boredom with outdoor exploration.",
      "Reflective nostalgia, wondering what life might have been like had he chosen differently.",
      "Exhaustion from running a long-distance race."
    ],
    correctIndex: 2,
    hint: "A sigh can express a wistful, reflective thought looking back on an important past choice.",
    explanation: "Telling the story 'with a sigh' ages in the future conveys a reflective, contemplative tone—looking back with mixed wonder and wistfulness over a defining decision."
  },
  {
    passageId: "y7_frost",
    question: "Why do literary critics often consider the final lines ('I took the one less traveled by, / And that has made all the difference') ironic when compared to earlier stanzas?",
    options: [
      "The speaker earlier stated that both paths were actually worn 'about the same'.",
      "The speaker actually took a bus rather than walking on either path.",
      "The second path led straight back to where he began.",
      "The forest was completely artificial and created inside a greenhouse."
    ],
    correctIndex: 0,
    hint: "Compare what the speaker says at the very end to what he observed in lines 9–11.",
    explanation: "In stanza 2, the speaker admits both paths were worn 'really about the same,' yet predicts that in the future he will narrate his story claiming he chose a unique, less-traveled road."
  },
  {
    passageId: "y7_frost",
    question: "Which statement best expresses the overarching theme of Frost's poem?",
    options: [
      "Always choose the most popular, well-worn path to ensure safety.",
      "Life presents difficult, inevitable choices where each path has lasting consequences on our future.",
      "Exploring nature alone is dangerous without detailed trail maps.",
      "People should never reflect on decisions made in their youth."
    ],
    correctIndex: 1,
    hint: "Consider the dilemma of having to choose one path when you wish you could travel both.",
    explanation: "The central theme centers on the inevitability and weight of human decision-making, where choosing one path over another permanently alters the trajectory of life."
  },

  // ==============================================================
  // PASSAGE 8: AUTUMN (Year 7 Poetry - Joseph Moncure March)
  // ==============================================================
  {
    passageId: "y7_autumn",
    question: "In line 1, the poet writes: 'The air breathes frost.' What literary device is used here, and what does it convey?",
    options: [
      "Hyperbole, showing that the town is completely frozen under ice.",
      "Personification, giving the cold air the human action of breathing to make the chill feel alive and sharp.",
      "Alliteration, repeating vowel sounds to create a musical rhyme.",
      "Onomatopoeia, imitating the loud howling noise of a gale."
    ],
    correctIndex: 1,
    hint: "Notice how the inanimate air is described as doing an action that living creatures do (breathing).",
    explanation: "The air is personified as breathing frost, making the cold feel active, biting, and present throughout the street."
  },
  {
    passageId: "y7_autumn",
    question: "What visual atmosphere is created in the opening two lines by describing 'old dust and papers down gray streets'?",
    options: [
      "A lively, festive festival preparing for a holiday parade.",
      "A bright, sunny morning in a prosperous country town.",
      "A bleak, chilly, and neglected urban setting in late autumn.",
      "A lush garden filled with blooming spring flowers."
    ],
    correctIndex: 2,
    hint: "Look at the color 'gray' and words like 'old dust' and 'papers' blowing down the street.",
    explanation: "The imagery of gray streets littered with blowing dust and old papers evokes a dreary, chilly, and gloomy urban landscape."
  },
  {
    passageId: "y7_autumn",
    question: "What comparison is made in line 5: 'A snowflake falls like an errant feather'?",
    options: [
      "A single snowflake is drifting down aimlessly and lightly, resembling a stray feather floating through the air.",
      "A wounded bird has lost its white wing feathers in the storm.",
      "Heavy winter snow is blanketing the sidewalk like a thick duvet.",
      "The wind is blowing feathers out of broken window ledges."
    ],
    correctIndex: 0,
    hint: "Look at the word 'like' linking the single falling snowflake to a stray feather.",
    explanation: "The poet uses a simile to compare the lonely, drifting fall of the first snowflake to a stray, wandering feather floating gently in the breeze."
  },
  {
    passageId: "y7_autumn",
    question: "In line 5, what does the word 'errant' mean in the phrase 'an errant feather'?",
    options: [
      "Heavy and weighed down by water.",
      "Wandering, stray, or drifting away from its proper place.",
      "Flying straight ahead at top speed.",
      "Brightly coloured and decorative."
    ],
    correctIndex: 1,
    hint: "'Errant' comes from words meaning to wander or stray off course.",
    explanation: "In this context, 'errant' means straying, drifting, or wandering without a fixed path."
  },
  {
    passageId: "y7_autumn",
    question: "Why are the sparrows on the window ledges described as 'frightened' in line 4?",
    options: [
      "A cat is stalking them along the roof tiles.",
      "The sudden cold wind is whipping dry, curled leaves directly at them, signaling the harsh arrival of winter.",
      "People are throwing stones at the window ledges.",
      "Loud thunder is booming over the city."
    ],
    correctIndex: 1,
    hint: "Read lines 3–4: 'And blows brown leaves with curled-up edges / At frightened sparrows on window ledges.'",
    explanation: "The thin, bitter wind is pelting dry leaves at the small birds, leaving them huddled and startled by the sudden onset of freezing weather."
  },
  {
    passageId: "y7_autumn",
    question: "What does the word 'vagabond' mean in line 6: 'A vagabond draws his cloak together'?",
    options: [
      "A wealthy shopkeeper locking his door.",
      "A person who wanders without a permanent home; a drifter.",
      "A city police officer patrolling the avenue.",
      "A horse carriage driver carrying passengers."
    ],
    correctIndex: 1,
    hint: "Think of someone living on the street who pulls their coat tight against the bitter wind.",
    explanation: "A 'vagabond' is a wanderer or traveler with no settled home, exposed directly to the harsh cold of the street."
  },
  {
    passageId: "y7_autumn",
    question: "What does the word 'totters' convey about the old man walking with a cane in line 7?",
    options: [
      "He is walking unsteadily, feebly, and with difficulty.",
      "He is striding confidently and briskly through the cold.",
      "He is dancing along the curb to keep warm.",
      "He is jogging to get out of the falling snow."
    ],
    correctIndex: 0,
    hint: "Think about how a frail person walks when leaning on a walking stick.",
    explanation: "'Totters' means to walk with shaky, unsteady steps, emphasizing the man's frailty and vulnerability in the freezing wind."
  },
  {
    passageId: "y7_autumn",
    question: "What is the deeper implication of the final line: 'Wondering if he'll see spring again'?",
    options: [
      "The old man is planning an overseas holiday when the weather warms up.",
      "The old man fears that his age and frailty mean he might not survive the harsh winter ahead.",
      "The old man dislikes winter sports and cannot wait for cricket season.",
      "The old man is wondering whether the city council will plant new flowers."
    ],
    correctIndex: 1,
    hint: "Think about what a severe, freezing winter means to an elderly, vulnerable person.",
    explanation: "The line expresses a poignant, somber reflection on mortality—the old man recognizes his frailty and worries that he may not live through the cold months until spring returns."
  },
  {
    passageId: "y7_autumn",
    question: "Which pair of words best describes the overall mood of this poem?",
    options: ["Joyful and celebratory", "Somber and desolate", "Humorous and playful", "Furious and chaotic"],
    correctIndex: 1,
    hint: "Look at the images: thin wind, gray streets, brown curled leaves, frightened birds, a vagabond shivering, and an old man facing mortality.",
    explanation: "The poem creates a melancholy, bleak, and somber atmosphere, capturing the fragile, vulnerable feeling that comes with the arrival of winter."
  },
  {
    passageId: "y7_autumn",
    question: "How does the poet capture the transition between seasons in just eight lines?",
    options: [
      "By showing summer sunshine slowly melting away the ice on the street.",
      "By moving from the last remnants of autumn (dead leaves, wind) to the very first signs of winter (a falling snowflake, shivering people).",
      "By describing a sudden spring thaw washing away heavy piles of snow.",
      "By showing farmers harvesting their final crops under a warm afternoon sun."
    ],
    correctIndex: 1,
    hint: "Notice how the poem starts with brown leaves and wind, and ends with the first snowflake and tightening cloaks.",
    explanation: "The poem tracks the precise moment autumn turns to winter, moving from dry brown leaves to the very first solitary snowflake and the cold reality it brings."
  },

// ==============================================================
  // PASSAGE 9: THE SCIENCE OF BELONGING (Year 8 Informational)
  // ==============================================================
  {
    passageId: "y8_belonging",
    question: "According to Abraham Maslow’s Hierarchy of Needs, which level must be satisfied immediately before a person can focus on developing self-esteem?",
    options: [
      "Physiological needs such as food, water, and rest.",
      "Psychological needs like love and belonging.",
      "Self-actualization and reaching one's full potential.",
      "Safety needs such as secure employment."
    ],
    correctIndex: 1,
    hint: "Track the upward order in Maslow's model: basic needs, psychological needs, self-esteem, then self-actualization.",
    explanation: "The passage states: 'Maslow argued that after those psychological needs [love and belonging] are met, humans can achieve the needs on the hierarchy’s next level. These include developing self-esteem...'"
  },
  {
    passageId: "y8_belonging",
    question: "How did Leary and Baumeister’s 1995 findings differ from Maslow's earlier view of belonging?",
    options: [
      "They claimed belonging was only important during early childhood development.",
      "They argued that belonging is an essential, primary need hard-wired for survival, rather than a secondary step in a ladder.",
      "They believed self-esteem had no connection to human relationships.",
      "They proved that physical survival does not depend on community support."
    ],
    correctIndex: 1,
    hint: "Look at how Leary and Baumeister redefined the priority of belonging compared to Maslow's step-by-step pyramid.",
    explanation: "Leary and Baumeister argued that the drive to form social ties is a hard-wired, fundamental human need driven by evolutionary survival, rather than a secondary need that waits behind basic physical needs."
  },
  {
    passageId: "y8_belonging",
    question: "Why do students who feel unwelcome or disconnected at school often experience poorer academic performance?",
    options: [
      "They refuse to complete homework assignments on time.",
      "Looking for environmental threats and signals of rejection consumes mental energy needed for learning.",
      "Teachers lower their grading expectations for quiet students.",
      "Disconnected students spend too much time participating in team sports."
    ],
    correctIndex: 1,
    hint: "Check the text for how stress affects 'cognitive resources.'",
    explanation: "The text explains that students who feel like they do not belong use up cognitive resources (brain power) scanning for social threats and signals that they are unwelcome, leaving less mental capacity for learning."
  },
  {
    passageId: "y8_belonging",
    question: "What does the phrase 'subjective feeling' mean in the opening of the article: 'researchers have used various methods to measure this subjective feeling'?",
    options: [
      "A physical measurement that can be calculated with a thermometer.",
      "An experience based on personal perception and emotion rather than external, physical facts.",
      "A scientific law that never changes over time.",
      "An idea tested only inside a chemistry laboratory."
    ],
    correctIndex: 1,
    hint: "'Subjective' relates to what happens inside an individual's personal thoughts and emotions.",
    explanation: "A subjective feeling is an internal, personal emotional experience that varies from person to person and cannot be measured like a physical object."
  },
  {
    passageId: "y8_belonging",
    question: "According to Leary and Baumeister, how does self-esteem function like a 'warning signal'?",
    options: [
      "It sounds an alarm when someone is physically tired.",
      "It monitors how accepted or rejected we are by others, dropping to alert us to repair damaged social bonds.",
      "It alerts doctors when a patient's stress hormones spike.",
      "It encourages people to ignore what others think of them."
    ],
    correctIndex: 1,
    hint: "Think of how an apology helps restore standing in a group when self-esteem drops after a mistake.",
    explanation: "Their research showed that self-esteem acts as a gauge or warning system: when we feel rejected, our self-esteem drops, which motivates us to change our behavior and rebuild connection."
  },
  {
    passageId: "y8_belonging",
    question: "According to the 2024 study by Over Zero and the American Immigration Council, in which setting did Americans report the highest feelings of non-belonging?",
    options: [
      "Among family members (40%)",
      "Among close friends (44%)",
      "In their workplace (64%)",
      "In their local community (74%)"
    ],
    correctIndex: 3,
    hint: "Check the specific percentages listed in the survey section.",
    explanation: "The survey reported non-belonging rates of 40% (family), 44% (friends), 64% (workplace), and a high of 74% in local communities."
  },
  {
    passageId: "y8_belonging",
    question: "What unexpected correlation did researchers find regarding people with diverse friend groups?",
    options: [
      "They spent less time socializing during work hours.",
      "They reported stronger feelings of belonging with their friends than people with less diverse circles.",
      "They found it harder to agree on shared hobbies.",
      "They moved neighborhoods more frequently than others."
    ],
    correctIndex: 1,
    hint: "Look at the survey data discussing differences in race, gender, or age among friends.",
    explanation: "The 2024 study revealed that Americans whose friend groups spanned diverse backgrounds (across race, ethnicity, age, and economic class) reported higher, stronger senses of belonging."
  },
  {
    passageId: "y8_belonging",
    question: "Why does the author organize the article with chronological subheadings (Maslow's Ideas, Leary and Baumeister's Findings, Student Success, The State of Belonging)?",
    options: [
      "To show that psychological research from the 1940s was completely wrong.",
      "To trace the historical evolution of belonging research from early theoretical models to modern classroom and community impacts.",
      "To argue that adults experience more loneliness than school students.",
      "To list psychological experiments in alphabetical order."
    ],
    correctIndex: 1,
    hint: "Notice how the article starts in 1943, advances to 1995, looks at modern school studies, and concludes with recent surveys.",
    explanation: "The structural timeline allows the reader to follow how understanding grew over eighty years—from an abstract pyramid of needs to measurable real-world effects on schools, health, and society."
  },
  {
    passageId: "y8_belonging",
    question: "What does the word 'persevere' mean in the sentence: 'students who feel valued by their teachers... engage more fully in their learning and persevere when they experience adversity'?",
    options: [
      "Give up quickly when tasks become too difficult.",
      "Persist and continue striving despite challenges or setbacks.",
      "Complain formally to school leaders.",
      "Work quietly in complete isolation from peers."
    ],
    correctIndex: 1,
    hint: "Think about sticking with a challenging problem rather than walking away.",
    explanation: "'Persevere' means to maintain effort and keep going in the face of obstacles, difficulty, or discouragement."
  },
  {
    passageId: "y8_belonging",
    question: "What is the author's primary purpose in concluding the article with the question: 'What are ways you can create a sense of belonging in your community?'",
    options: [
      "To test whether the reader memorized the survey percentages.",
      "To prompt readers to apply the psychological research to their own everyday lives and social circles.",
      "To request that students submit formal research papers to universities.",
      "To show that researchers do not know how to solve the problem of loneliness."
    ],
    correctIndex: 1,
    hint: "A reflective question at the end of an informational article invites the reader to take personal action.",
    explanation: "The author ends with an open-ended question to transition the reader from absorbing academic research to actively considering how they can foster inclusion and support others."
  },

  // ==============================================================
  // PASSAGE 10: TACKLING OCEAN PLASTIC (Year 8 Informational)
  // ==============================================================
  {
    passageId: "y8_ocean_plastic",
    question: "What initial experience inspired Boyan Slat to begin researching ocean pollution?",
    options: [
      "Flying over the Great Pacific Garbage Patch during an aerial survey.",
      "Noticing large quantities of plastic waste while scuba diving in Greece.",
      "Reading an engineering report about microplastics in European rivers.",
      "Working on a commercial fishing boat pulling heavy trawls."
    ],
    correctIndex: 1,
    hint: "Look back at paragraph 1 for the event that triggered his school project.",
    explanation: "Paragraph 1 explicitly notes that Slat was scuba diving in Greece when he saw large amounts of plastic around him, which sparked his school research project."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "In the passage, what are 'microplastics'?",
    options: [
      "Large plastic bottles that float high on the surface.",
      "Plastic fragments that are the size of a sesame seed or smaller.",
      "Biodegradable fishing nets designed to dissolve in saltwater.",
      "Plastic containers manufactured before the year 2020."
    ],
    correctIndex: 1,
    hint: "Find the definition given in paragraph 2 comparing the pieces to a tiny seed.",
    explanation: "Paragraph 2 defines microplastics as 'pieces of plastic that are about the size of a sesame seed or smaller,' which form as larger plastics break down."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "Why did Slat’s team build a 'Multi-Level Trawl' that stacked 10 fishing nets on top of each other?",
    options: [
      "To determine how deep into the water plastic waste actually reaches.",
      "To stop marine animals from swimming beneath the barrier.",
      "To anchor the testing nets securely to the seabed floor.",
      "To speed up the boats as they sailed toward Hawaii."
    ],
    correctIndex: 0,
    hint: "Re-read paragraph 2 to see what question the team needed to answer about ocean depth.",
    explanation: "They needed to know at what depth cleanup should occur, discovering through the Multi-Level Trawl that almost all plastic floats in the first few meters below the surface."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "What breakthrough realization led the team to abandon their idea of anchoring the cleanup system to the seafloor?",
    options: [
      "The seabed was too deep to reach with steel cables.",
      "Allowing the system to slowly drift with ocean currents removed the need to survive intense storms and let it turn toward incoming waste.",
      "Governments banned anchors in international waters.",
      "The plastic stayed completely still while the seabed moved."
    ],
    correctIndex: 1,
    hint: "Check paragraph 3 for the principle 'We work with nature' and the phrase 'act like the plastic.'",
    explanation: "By letting the barrier drift slowly rather than fixing it to the seabed, the team eliminated storm anchor-snapping risks and allowed the barrier to naturally face incoming waste."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "Why did Slat and his engineers construct scale models in large test pools before building full-sized ocean barriers?",
    options: [
      "Scale models are far cheaper and allow designers to test variations rapidly to discover new issues.",
      "International law requires all ocean vessels to be modeled indoors first.",
      "Test pools clean real plastic from tap water.",
      "The team did not have permission to visit the Pacific Ocean."
    ],
    correctIndex: 0,
    hint: "Review paragraph 3 regarding costs and design variations.",
    explanation: "Scale models are significantly less expensive than full-size systems and let engineers test multiple designs quickly to see what works best."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "Where does plastic gather before being lifted onto the boats in the modern cleanup system?",
    options: [
      "In an underwater cage bolted to the vessel hull.",
      "In a detachable 'retention zone' in the middle of the U-shaped net.",
      "Inside mechanical suction tubes mounted along the front floats.",
      "Across flat conveyor belts pulled behind the twin ships."
    ],
    correctIndex: 1,
    hint: "Read paragraph 4 to see how the net collects and stores the plastic.",
    explanation: "The passage describes how waste funnels into a central 'retention zone' in the net, which is detached and lifted onto boats when full."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "How did engineers respond when the first full-scale system deployed in the Pacific partly broke and failed to gather enough plastic?",
    options: [
      "They abandoned ocean cleanups and focused solely on river barriers.",
      "They treated the setback as a learning opportunity, adjusted boat speeds, and improved materials.",
      "They replaced the entire net system with chemical dissolving agents.",
      "They returned all donor money and paused operations."
    ],
    correctIndex: 1,
    hint: "Look at how the team viewed the initial failure.",
    explanation: "The engineers took the failure as an opportunity to analyze mistakes, discovering they needed higher pulling speeds and stronger materials."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "What does the phrase 'scaling up' mean in the passage: 'the Ocean Cleanup began working on scaling up their project to work in real oceans'?",
    options: [
      "Weighing plastic catches on certified industrial scales.",
      "Expanding an idea from small experimental models to full, real-world size and operation.",
      "Removing barnacles and marine growth from the ship hulls.",
      "Raising ticket prices for visitors touring the harbor."
    ],
    correctIndex: 1,
    hint: "Think of moving from miniature pool models to massive barriers in open water.",
    explanation: "'Scaling up' refers to expanding a project or design from a smaller pilot test to its full operational size."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "Which unintended consequence are engineers still actively refining and minimizing on newer systems?",
    options: [
      "Marine animals occasionally becoming caught in the netting.",
      "Solar panels losing power during cloudy days.",
      "Boats running out of fuel before reaching the garbage patch.",
      "Recycled plastic degrading too quickly on land."
    ],
    correctIndex: 0,
    hint: "Read the final paragraphs about the remaining challenges of the trawl.",
    explanation: "While most sea life can swim underneath the 3-meter net, animals sometimes get trapped, which engineers are actively working to eliminate."
  },
  {
    passageId: "y8_ocean_plastic",
    question: "Why does the author conclude the text by mentioning the 'Citizen Scientist' program?",
    options: [
      "To show that scientists are unwilling to carry out ocean research themselves.",
      "To invite readers to participate directly in identifying plastic accumulation points and emphasize that solving global issues involves collective effort.",
      "To prove that high school students are required to conduct boat surveys.",
      "To raise money by charging fees for website logins."
    ],
    correctIndex: 1,
    hint: "Look at the final call to action asking readers if they want to be part of the solution.",
    explanation: "The author invites the audience to become active contributors, reinforcing the central theme that large-scale global problems require broad teamwork and shared responsibility."
  },

  // ==============================================================
  // PASSAGE 11: BACK IN TUNE (Year 8 Narrative - Alistair Edwards)
  // ==============================================================
  {
    passageId: "y8_tune",
    question: "At the start of the story, why does Jordan feel 'earthbound… and uninspired' while the rest of the orchestra plays 'Jupiter'?",
    options: [
      "He has not practiced his sheet music and cannot keep up with the tempo.",
      "He feels emotionally disconnected from the rigid classical repertoire they are rehearsing.",
      "He is frustrated because Mr. Green assigned him second violin instead of first.",
      "He wants to switch from the violin to playing brass or percussion instruments."
    ],
    correctIndex: 1,
    hint: "Notice how the author contrasts the other students 'traveling to the stars' with Jordan's lack of emotional connection.",
    explanation: "Jordan explains later to Mr. Green that despite practicing daily, his heart isn't in the music; he feels creatively stuck and uninspired by the traditional pieces."
  },
  {
    passageId: "y8_tune",
    question: "What does the word 'berate' mean in the sentence: 'He followed Mr. Green into his office, then waited nervously to see if his teacher was going to berate him.'?",
    options: [
      "Praise enthusiastically for hard work.",
      "Scold, criticize, or lecture angrily.",
      "Assign extra homework as punishment.",
      "Offer gentle musical advice."
    ],
    correctIndex: 1,
    hint: "Jordan had just made a screeching, out-of-tune mistake in front of the whole class and felt embarrassed.",
    explanation: "'Berate' means to scold or rebuke harshly. Jordan fears his teacher is about to reprimand him for his glaring error."
  },
  {
    passageId: "y8_tune",
    question: "What does the detail of the Mendelssohn sheet music sitting on Jordan's stand with 'not a page turned' reveal about his state of mind?",
    options: [
      "He memorized the entire piece without needing to read the notes.",
      "He was unable to motivate himself to practice a piece that brought him no joy.",
      "The lighting in his room was too dim to read the score.",
      "His violin bow was broken and needed rehairing."
    ],
    correctIndex: 1,
    hint: "Think about why someone would sit for hours in front of a book or score without turning a single page.",
    explanation: "The unopened, unturned sheet music symbolizes Jordan's creative block and complete lack of engagement with the classical assignment."
  },
  {
    passageId: "y8_tune",
    question: "How does Grandma help Jordan overcome his artistic slump?",
    options: [
      "She insists that he practice classical scales for two more hours before dinner.",
      "She senses his frustration and introduces him to Regina Carter's expressive jazz violin playing.",
      "She calls Mr. Green and asks him to excuse Jordan from the spring recital.",
      "She buys him a brand-new electric violin for his bedroom."
    ],
    correctIndex: 1,
    hint: "Look at how Grandma notices his dejected posture and invites him to listen to a CD under her bed.",
    explanation: "Sizing up his discouragement, Grandma introduces him to an outstanding jazz violinist, providing the creative spark he was missing."
  },
  {
    passageId: "y8_tune",
    question: "In the story, what is 'improvisation'?",
    options: [
      "Carefully memorizing every measure of a composer's written score.",
      "Creating melodies and musical ideas spontaneously on the spot while performing.",
      "Tuning a violin using an electronic pitch tuner before rehearsal.",
      "Playing a duet with an instructor in perfect unison."
    ],
    correctIndex: 1,
    hint: "Jordan describes it as feeling 'free' and 'like she’s making things up as she’s going along.'",
    explanation: "Improvisation in music is the art of inventing melodies spontaneously during performance rather than reading fixed notes."
  },
  {
    passageId: "y8_tune",
    question: "What does the idiom 'flipped a switch' convey in the sentence: 'Hearing that number had flipped a switch in Jordan's mind.'?",
    options: [
      "It caused an unexpected electrical surge in his CD player.",
      "It suddenly triggered a clear, instantaneous change in his enthusiasm and perspective.",
      "It made him reconsider whether he wanted to continue middle school.",
      "It reminded him to turn off the lights before going to bed."
    ],
    correctIndex: 1,
    hint: "Think about how quickly a light bulb illuminates the moment a wall switch is flicked.",
    explanation: "'Flipped a switch' is an idiomatic expression indicating an instant, dramatic mental shift—Jordan's creative block vanished and his passion reignited immediately."
  },
  {
    passageId: "y8_tune",
    question: "How does Mr. Green respond when Jordan proposes playing jazz and improvising at the spring concert?",
    options: [
      "He refuses because the school has strict classical competition guidelines.",
      "He is initially thoughtful, then embraces the idea and joins Jordan in an impromptu piano jam.",
      "He tells Jordan that jazz is too difficult for middle school students to attempt.",
      "He asks Jordan to wait until high school before exploring improvisation."
    ],
    correctIndex: 1,
    hint: "Check what Mr. Green does at the piano after noting that no student had ever played jazz at their recitals before.",
    explanation: "Mr. Green pauses to consider the break from tradition, realizes it's a great opportunity, walks to the piano, and starts a spontaneous duet to encourage Jordan."
  },
  {
    passageId: "y8_tune",
    question: "How does the mood of the story shift from the opening band room scene to the final scene in Mr. Green's office?",
    options: [
      "From joyful celebration to somber disappointment.",
      "From tense, heavy self-doubt to energetic, liberated excitement.",
      "From chaotic anger to quiet boredom.",
      "From humorous silliness to formal seriousness."
    ],
    correctIndex: 1,
    hint: "Compare Jordan's shame after the screeching note to how the music 'just flows out of me' at the end.",
    explanation: "The narrative moves from awkwardness, anxiety, and creative stagnation to exuberant freedom and rekindled joy when Jordan discovers improvisation."
  },
  {
    passageId: "y8_tune",
    question: "What is the double meaning in the story's closing line: 'Finally, Jordan was back in tune.'?",
    options: [
      "He had purchased a new set of violin strings, and the school bell had rung on time.",
      "His physical violin was pitched correctly, and his inner confidence and joy for music were restored.",
      "He had memorized the entire Holst symphony, and his grandma called him to dinner.",
      "Mr. Green had tuned his piano, and the recital date was confirmed."
    ],
    correctIndex: 1,
    hint: "Think about the musical meaning of 'in tune' versus the emotional phrase 'in tune with oneself.'",
    explanation: "The phrase functions both literally (he is no longer screeching out of tune) and metaphorically (he is once again emotionally connected, inspired, and harmonious with his art)."
  },
  {
    passageId: "y8_tune",
    question: "What is the primary theme of 'Back in Tune'?",
    options: [
      "Achieving technical perfection on an instrument is more important than personal expression.",
      "True artistic passion flourishes when musicians find a style that genuinely resonates with their own voice.",
      "Classical music is inferior to modern jazz in school band programs.",
      "Students should avoid asking teachers for help when they face challenges."
    ],
    correctIndex: 1,
    hint: "Consider what changed between Jordan struggling over Mendelssohn and thriving with Regina Carter's style.",
    explanation: "The central message is that genuine motivation and artistic joy come when individuals connect personally with what they are creating, rather than forcing themselves to conform to uninspiring styles."
  },

  // ==============================================================
  // PASSAGE 12: TAG TEAM (Year 8 Narrative - Fatima Shaik)
  // ==============================================================
  {
    passageId: "y8_tag_team",
    question: "At the start of the story, why does Markus feel frustrated every time he visits the mall?",
    options: [
      "Shop assistants refuse to sell him sports gear.",
      "Security and staff treat him with suspicion and follow him as if he were a thief.",
      "Leon constantly embarrasses him in public clothing stores.",
      "The mall has banned teenagers from visiting after school."
    ],
    correctIndex: 1,
    hint: "Notice how Markus describes security nodding to workers like a 'tag team' tracking his movements.",
    explanation: "Markus is deeply frustrated because mall security and store clerks repeatedly profile and trail him through stores, assuming he intends to steal simply because of his appearance."
  },
  {
    passageId: "y8_tag_team",
    question: "In the second paragraph, what does Markus mean when he says, 'It’s like they’re a tag team and I’m the baton'?",
    options: [
      "The workers are running track races through the mall aisles.",
      "Security guards and shop clerks pass surveillance of him from one person to the next as he moves between shops.",
      "He is carrying heavy wooden sports equipment around the stores.",
      "The staff are competing to see who can offer him customer service first."
    ],
    correctIndex: 1,
    hint: "Think of a relay race where runners hand a baton smoothly to the next teammate.",
    explanation: "The simile compares how security guards hand off watching him to store clerks, tracking him continuously from one store to the next like a baton being passed between runners."
  },
  {
    passageId: "y8_tag_team",
    question: "Why does Markus think it is easier for Leon to suggest 'jumping in his face' than it is for Markus to actually do it?",
    options: [
      "Leon has trained in martial arts, whereas Markus has not.",
      "Leon is a foot shorter and dresses conservatively in loafers and plaid, so people rarely view him as intimidating or suspicious.",
      "Leon is good friends with all the mall security officers.",
      "Markus does not know how to speak up for himself."
    ],
    correctIndex: 1,
    hint: "Compare Markus's description of Leon's height and clothing to his own sleek 6'2\" build.",
    explanation: "Markus explains that Leon is short, wears innocent-looking loafers and plaid shirts, and draws no scrutiny, while Markus is 6'2\" and constantly subjected to unfair stereotypes."
  },
  {
    passageId: "y8_tag_team",
    question: "What does the word 'burbles' convey about the security guard when Ms. Jameson asks why he was following Markus?",
    options: [
      "He speaks clearly, authoritatively, and with complete confidence.",
      "He stammers and speaks in a flustered, clumsy manner because he is caught off guard.",
      "He shouts furiously across the entrance of the store.",
      "He whispers a secret message over his radio."
    ],
    correctIndex: 1,
    hint: "The guard stutters: 'I… uh, I’m just… doing my job, Ms. J.'",
    explanation: "'Burbles' conveys that Mr. Walter is embarrassed, flustered, and struggling to form a coherent response under his former principal's direct questioning."
  },
  {
    passageId: "y8_tag_team",
    question: "How does Markus feel when he notices Leon laughing while filming the confrontation on his phone?",
    options: [
      "Relieved that his friend thinks the situation is harmless.",
      "Let down and confused, because this was a serious, painful moment and Leon was treating it like entertainment.",
      "Proud that the video will attract millions of views online.",
      "Excited that the guard is retreating into the store."
    ],
    correctIndex: 1,
    hint: "Look at Markus's internal reaction: 'What’s up with that—he’s supposed to be my guy!'",
    explanation: "Markus feels a sting of betrayal; while Markus is taking a genuine emotional risk confronting discrimination, Leon is treating the incident like casual internet content."
  },
  {
    passageId: "y8_tag_team",
    question: "How does Ms. Jameson de-escalate the hostile standoff between Markus and Mr. Walter?",
    options: [
      "She threatens to have the security guard fired on the spot.",
      "She calls the police to review mall security footage.",
      "She uses her past authority over both men, humanises them by introducing their real identities, and insists they stop jumping to conclusions.",
      "She offers to pay for everything Markus was planning to buy."
    ],
    correctIndex: 2,
    hint: "Look at how she reveals that Markus wants to be a writer and that Mr. Walter has children in her school.",
    explanation: "Ms. Jameson breaks down the hostile confrontation by addressing both by name, revealing personal details that humanise each of them, and holding them to high moral standards."
  },
  {
    passageId: "y8_tag_team",
    question: "What core lesson does Ms. Jameson deliver to both Markus and Mr. Walter?",
    options: [
      "Always record arguments on your phone to gather legal evidence.",
      "People must learn to talk directly to one another as individuals instead of jumping to unfair conclusions.",
      "Teenagers should avoid visiting shopping centres without adult supervision.",
      "Security guards should never patrol clothing stores."
    ],
    correctIndex: 1,
    hint: "Recall her direct advice: 'You need to learn to talk to people instead of jumping to conclusions.'",
    explanation: "The story centres on assumptions: Mr. Walter assumed Markus was a thief based on bias, and Markus expected a fight. Ms. Jameson highlights the necessity of dialogue and mutual respect."
  },
  {
    passageId: "y8_tag_team",
    question: "Why does Ms. Jameson tell Leon to 'put away that phone before I put you up on my Facebook page for a fool'?",
    options: [
      "She wants to start a school social media channel with his video.",
      "She uses sharp, parental humour to shut down his attempts to turn a serious confrontation into online spectacle.",
      "She is asking him to take a high-quality photograph of her shopping bags.",
      "She does not know how social media platforms work."
    ],
    correctIndex: 1,
    hint: "Think about why an educator would call out a student trying to film drama for the internet.",
    explanation: "Ms. Jameson uses witty, no-nonsense authority to call out Leon's opportunistic filming, breaking the tension while putting him in his place."
  },
  {
    passageId: "y8_tag_team",
    question: "Why does the narrator state: 'neither of us emit a real real laugh; we’re not there yet' after laughing at Ms. Jameson's joke?",
    options: [
      "He is still secretly planning to file a formal complaint with the police.",
      "Genuine trust and healing take time to build, even after a tense conflict is de-escalated.",
      "He could not hear what Mr. Walter said over the mall background music.",
      "Mr. Walter threatened him again as soon as Ms. Jameson turned around."
    ],
    correctIndex: 1,
    hint: "Consider whether an awkward introduction immediately erases repeated racial profiling.",
    explanation: "The author keeps the resolution realistic: an introduction is a constructive starting point, but years of profiling and hurt cannot be resolved with a single joke."
  },
  {
    passageId: "y8_tag_team",
    question: "What does Markus mean by the concluding sentence: 'I don’t have to buy anything at the mall, I realize, because this trip I got pretty much everything I needed'?",
    options: [
      "He found the clothes he wanted on sale in the first store.",
      "He gained dignity, self-respect, and was finally seen and acknowledged as an individual with a name and a future.",
      "Ms. Jameson gave him enough money to buy dinner on the way home.",
      "He realized shopping at physical malls is a waste of time."
    ],
    correctIndex: 1,
    hint: "Reflect on what Markus said he wanted at the start: to be recognized for who he is.",
    explanation: "Markus came to the mall seeking to reclaim his dignity. By having his real identity, humanity, and ambition validated in front of the guard, he achieved what mattered most to him."
  },

  // ==============================================================
  // PASSAGE 13: THE SHEAVES (Year 8 Poetry - Edwin Arlington Robinson)
  // ==============================================================
  {
    passageId: "y8_sheaves",
    question: "What natural transformation is described in the opening lines ('Green wheat was yielding to the change assigned; / And as by some vast magic undivined / The world was turning slowly into gold.')?",
    options: [
      "A wildfire sweeping across a grassy field.",
      "A wheat field ripening from summer green to golden grain ready for harvest.",
      "Morning sunlight illuminating an emerald forest canopy.",
      "Frost coating the leaves of crops at the start of winter."
    ],
    correctIndex: 1,
    hint: "Think about how crops change color in the fields as late summer turns toward autumn harvest.",
    explanation: "The lines describe the natural seasonal ripening of wheat from green to golden amber as harvest time approaches."
  },
  {
    passageId: "y8_sheaves",
    question: "In line 3, what does the word 'undivined' mean in the phrase 'vast magic undivined'?",
    options: [
      "Weak and failing to achieve its purpose.",
      "Mysterious, unseen, and beyond human understanding.",
      "Predictable and strictly controlled by science.",
      "Harmful to the surrounding countryside."
    ],
    correctIndex: 1,
    hint: "To 'divine' something can mean to foresee or figure it out; the prefix 'un-' means not.",
    explanation: "'Undivined' means unrevealed, mysterious, or impossible to foresee or fully comprehend."
  },
  {
    passageId: "y8_sheaves",
    question: "What literary device and meaning is captured in line 8: 'That tells the more the more it is not told'?",
    options: [
      "An onomatopoeia showing the howling sound of the autumn wind.",
      "A paradox suggesting that nature holds profound, unspoken truths that words cannot fully express.",
      "A rhyme scheme designed to confuse the reader about the season.",
      "An exaggeration meant to mock farmers who work long hours."
    ],
    correctIndex: 1,
    hint: "A statement that appears contradictory on the surface but contains a deeper truth is a paradox.",
    explanation: "Robinson uses paradox to suggest that the profound mystery of nature's beauty communicates more deeply through quiet awe than through spoken explanation."
  },
  {
    passageId: "y8_sheaves",
    question: "What is a 'sheaf' (plural: 'sheaves') as described in line 11: 'A thousand golden sheaves were lying there'?",
    options: [
      "A bundle of cut wheat stalks bound together in the field after harvesting.",
      "A wooden fence built around a farm pasture.",
      "A flock of golden birds flying south for the winter.",
      "A sudden gust of wind blowing over a hill."
    ],
    correctIndex: 0,
    hint: "Look at the agricultural setting—wheat that has been harvested and gathered into stacks.",
    explanation: "In traditional farming, a sheaf is a bundle of reaped wheat stalks tied together in the field during harvest."
  },
  {
    passageId: "y8_sheaves",
    question: "Why are the sheaves described in line 12 as 'Shining and still, but not for long to stay'?",
    options: [
      "The crops will immediately rot in the heavy autumn rain.",
      "The cut bundles will soon be gathered, hauled away to barns, or threshed for flour.",
      "The birds will consume every single grain before sunset.",
      "The farmer intends to set the fields on fire."
    ],
    correctIndex: 1,
    hint: "After wheat is harvested and bundled, what is the next step in farming?",
    explanation: "The bundled grain remains still in the field only temporarily; it will soon be collected, carted away, and processed, marking the end of the harvest."
  },
  {
    passageId: "y8_sheaves",
    question: "What comparison is made in the closing couplet: 'As if a thousand girls with golden hair / Might rise from where they slept and go away'?",
    options: [
      "The golden bundles of wheat resting in the field are compared to sleeping maidens with blond hair who will soon vanish.",
      "Local village children are running through the uncut crops at dawn.",
      "Golden flowers are springing up through the dry stubble of the field.",
      "Statues of ancient goddesses are buried beneath the soil."
    ],
    correctIndex: 0,
    hint: "Notice the word 'As if' linking the quiet sheaves lying in the field to sleeping girls who might rise and leave.",
    explanation: "Robinson uses an evocative simile comparing the still bundles of golden wheat in the stubble to sleeping girls with golden hair who will soon quietly disappear."
  },
  {
    passageId: "y8_sheaves",
    question: "How does the mood of the poem shift from the first eight lines (the octave) to the final six lines (the sestet)?",
    options: [
      "From furious anger at nature to calm acceptance.",
      "From awe at the slow, majestic ripening of the crop to a wistful awareness of how quickly harvest beauty passes.",
      "From humorous country life to strict historical facts.",
      "From deep despair about winter to joyful springtime renewal."
    ],
    correctIndex: 1,
    hint: "The first part observes the slow turning to gold; the second part sees the crops cut down and soon to vanish.",
    explanation: "The first half marvels at the slow arrival of golden wheat, while the second half captures the fleeting transition when the harvested bundles are about to be carried away."
  },
  {
    passageId: "y8_sheaves",
    question: "What traditional poetic form does 'The Sheaves' follow (consisting of 14 lines with an ABBA ABBA CDECDE rhyme pattern)?",
    options: [
      "A free-verse ballad",
      "A Petrarchan (Italian) sonnet",
      "An epic narrative poem",
      "A dramatic monologue"
    ],
    correctIndex: 1,
    hint: "Count the total lines (14) and note the octave followed by the sestet.",
    explanation: "The poem is a classic 14-line Petrarchan sonnet written in iambic pentameter, featuring an octave presenting the scene and a sestet reflecting on its fleeting nature."
  },
  {
    passageId: "y8_sheaves",
    question: "In line 9, what does the poet suggest by noting that this happens 'in a land where all days are not fair'?",
    options: [
      "The region is known for frequent overcast, harsh, or difficult weather.",
      "The farmers are dishonest when selling their harvest to town merchants.",
      "The country has no clear seasonal boundaries.",
      "The government charges high taxes on grain production."
    ],
    correctIndex: 0,
    hint: "'Fair' here refers to fair weather—pleasant, sunny, and calm.",
    explanation: "Robinson points out that this bright harvest season exists in a place where sunny, gentle days are rare and transient, making the golden period all the more remarkable."
  },
  {
    passageId: "y8_sheaves",
    question: "Which statement best captures the central theme of Robinson's poem?",
    options: [
      "Human commerce and buying and selling are the ultimate achievements of civilization.",
      "Natural beauty and life's golden seasons are precious precisely because they are temporary and quickly pass.",
      "Modern industrial equipment has ruined the beauty of traditional agriculture.",
      "Wheat farming is an easy and predictable way to make a living."
    ],
    correctIndex: 1,
    hint: "Think about the emphasis on the wheat turning gold, resting briefly, and then departing like sleeping figures walking away.",
    explanation: "The poem centers on the poignant beauty and inevitable transience of life's peak moments; nature’s golden glory arrives slowly like magic, yet remains only fleetingly before vanishing."
  },

  // ==============================================================
  // PASSAGE 14: THE SONG OF WANDERING AENGUS (Year 8 Poetry - W. B. Yeats)
  // ==============================================================
  {
    passageId: "y8_aengus",
    question: "What does the speaker mean in line 2 by stating: 'Because a fire was in my head'?",
    options: [
      "He had contracted a dangerous physical fever and needed medicine.",
      "A burning ember from his fireplace landed on his hair.",
      "He felt an overwhelming, restless passion or mental obsession driving him into the woods.",
      "The afternoon heat in the forest was scorching his face."
    ],
    correctIndex: 2,
    hint: "Consider how 'fire' is often used figuratively to describe burning creative inspiration, agitation, or intense desire.",
    explanation: "The 'fire in my head' is a metaphor for an intense psychological agitation, restless urge, or visionary impulse that impels Aengus into the wild."
  },
  {
    passageId: "y8_aengus",
    question: "What time of day is created through the imagery in lines 5–6 ('when white moths were on the wing, / And moth-like stars were flickering out')?",
    options: [
      "High noon under a cloudless sky.",
      "Dawn or twilight, as nocturnal moths flutter and morning light causes the stars to fade.",
      "Pitch-black midnight during an eclipse.",
      "A stormy mid-afternoon thunderstorm."
    ],
    correctIndex: 1,
    hint: "Notice that stars are 'flickering out' as the air brightens and moths are flying.",
    explanation: "The combination of moths still flying and stars fading depicts the transition of early dawn or twilight as daylight begins to break."
  },
  {
    passageId: "y8_aengus",
    question: "What magical transformation occurs after the speaker places the 'little silver trout' on the floor?",
    options: [
      "The fish transforms into an ancient druid offering three wishes.",
      "The fish turns into a gleaming maiden with apple blossoms in her hair who calls his name and vanishes.",
      "The trout slips through the floorboards back into the hazel stream.",
      "The fish turns into an orchard of blooming apple trees."
    ],
    correctIndex: 1,
    hint: "Re-read lines 11–16 describing the rustling sound and the sudden figure.",
    explanation: "The lines describe the trout turning into a 'glimmering girl / With apple blossom in her hair' who speaks his name before dissolving into the morning air."
  },
  {
    passageId: "y8_aengus",
    question: "What does the word 'wand' mean in line 3: 'And cut and peeled a hazel wand'?",
    options: [
      "A magical glass rod purchased from a fairy bazaar.",
      "A slender, flexible straight branch or stick used as a fishing rod.",
      "A heavy wooden club designed for cutting firewood.",
      "A carved spear tip used in battle."
    ],
    correctIndex: 1,
    hint: "Look at what Aengus does with it: he peels it and attaches a thread with a berry hook to catch fish.",
    explanation: "In traditional folklore and rural English, a 'wand' is a slender, supple branch or shoot, here serving as an improvised fishing pole."
  },
  {
    passageId: "y8_aengus",
    question: "How does the setting and the speaker’s condition change between the second and third stanzas?",
    options: [
      "The speaker wakes up inside a modern city hospital.",
      "Many decades pass, transforming the youthful fisherman into an old man who has spent his entire life wandering.",
      "The speaker decides to stop walking and settles down as a farmer.",
      "The speaker forgets the girl's name and returns to the hazel wood."
    ],
    correctIndex: 1,
    hint: "Compare the youth fishing in stanzas 1–2 with line 17: 'Though I am old with wandering...'",
    explanation: "The poem leaps forward across a lifetime between stanzas 2 and 3; the youthful visionary has aged from years of searching through 'hollow lands and hilly lands.'"
  },
  {
    passageId: "y8_aengus",
    question: "In line 21, what does the adjective 'dappled' mean in the phrase 'long dappled grass'?",
    options: [
      "Marked with spotted patches of alternating light and shadow.",
      "Frozen stiff under winter frost.",
      "Cut short by cattle grazing in a pasture.",
      "Scorched brown by summer drought."
    ],
    correctIndex: 0,
    hint: "Think of sunlight filtering through leaves onto the grass below.",
    explanation: "'Dappled' means marked with spots or rounded patches of light and shade, such as sunlight filtering through an orchard canopy."
  },
  {
    passageId: "y8_aengus",
    question: "Despite growing old and weary from his travels, what is Aengus's attitude toward his quest in the final stanza?",
    options: [
      "Bitter regret for wasting his youth chasing an illusion.",
      "Unwavering devotion and certainty that he will find her and remain with her until the end of time.",
      "Resignation and acceptance of his coming death.",
      "Frustration that the magical stream dried up."
    ],
    correctIndex: 1,
    hint: "Notice the affirmative words: 'I will find out where she has gone, / And kiss her lips and take her hands...'",
    explanation: "Rather than feeling defeated by age, Aengus expresses absolute dedication, affirming that he will locate the glimmering maiden and pluck enchanted fruits until 'time and times are done.'"
  },
  {
    passageId: "y8_aengus",
    question: "In the closing lines, what do 'The silver apples of the moon, / The golden apples of the sun' symbolize?",
    options: [
      "Common orchard fruit exported to overseas markets.",
      "Celestial, immortal beauty and the ultimate harmony of complementary opposites (night and day, earthly and divine).",
      "Gold and silver coins hidden beneath the roots of the hazel tree.",
      "Falling leaves that mark the changing autumn season."
    ],
    correctIndex: 1,
    hint: "Consider the pairing of moon (silver, night, mystery) and sun (golden, day, warmth).",
    explanation: "Yeats pairs the silver lunar apples and golden solar apples as mythological symbols of transcendent, eternal perfection—a cosmic reward beyond mortal time."
  },
  {
    passageId: "y8_aengus",
    question: "Which description best captures the lyrical tone and musical quality of the poem?",
    options: [
      "Harsh, irregular, and aggressive like a military drill.",
      "Enchanting, rhythmic, and dreamlike, resembling an ancient folk ballad or fairy chant.",
      "Comedic, sarcastic, and skeptical of supernatural tales.",
      "Clinical, objective, and scientifically precise."
    ],
    correctIndex: 1,
    hint: "The rhythmic iambic tetrameter and AABB/CDCD rhyming create a hypnotic cadence.",
    explanation: "Yeats uses four-beat lines, rich assonance, and repetitive folklore cadences to evoke the dreamlike, incantatory quality of Irish mythological storytelling."
  },
  {
    passageId: "y8_aengus",
    question: "Which statement best summarizes the central theme of Yeats's poem?",
    options: [
      "Fishing in wild mountain streams is dangerous without proper equipment.",
      "The relentless pursuit of an ideal vision or transcendent love can give lifelong meaning and purpose, even across old age.",
      "Young people should avoid entering enchanted forests alone.",
      "Human relationships are too fragile to survive seasonal changes."
    ],
    correctIndex: 1,
    hint: "Reflect on how a fleeting moment of beauty transforms into a lifelong, meaningful journey.",
    explanation: "The poem centers on the enduring power of longing and the poetic imagination; a fleeting glimpse of supernatural beauty transforms Aengus's entire life into an unwavering quest."
  }
];

// Utility: Fisher-Yates array shuffler
function shuffleReadingArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Public export function consumed by app.js
 * @param {number} year - 7 or 8
 * @param {string} [genre='all'] - 'all', 'Informational', 'Persuasive', 'Narrative', or 'Poetry'
 * @returns {Array} Array of question objects matching the app runner schema
 */
function getReadingQuestions(year, genre = 'all') {
  // 1. Filter questions by year and matching passage
  let matchingQuestions = READING_QUESTIONS.filter(q => {
    const passage = READING_PASSAGES[q.passageId];
    if (!passage) return false;
    
    // Shared persuasive passages are available to both Year 7 and Year 8
    const isYearMatch = passage.year === year || 
      (year === 8 && (q.passageId === 'y7_space_junk' || q.passageId === 'y7_animal_rights'));
      
    if (!isYearMatch) return false;

    if (genre && genre !== 'all') {
      return passage.genre.toLowerCase() === genre.toLowerCase();
    }
    return true;
  });

  // 2. Shuffle questions
  const shuffled = shuffleReadingArray(matchingQuestions);

  // 3. Normalize into the structure expected by renderQuestion() in app.js
  return shuffled.map((q, idx) => {
    const p = READING_PASSAGES[q.passageId];
    return {
      id: `reading_y${year}_${idx + 1}`,
      year: year,
      subject: "reading",
      strand: p.genre,
      passage: {
        title: p.title,
        author: p.author,
        attribution: `Text by ${p.author}`,
        body: p.body
      },
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      hint: q.hint,
      explanation: q.explanation
    };
  });
}

// Global window exposure for browser app runner
if (typeof window !== 'undefined') {
  window.getReadingQuestions = getReadingQuestions;
  window.READING_PASSAGES = READING_PASSAGES;
  window.READING_QUESTIONS = READING_QUESTIONS;
}