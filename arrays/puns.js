const punsListInFile = ["How do you throw a space party? You planet.",
        "How was Rome split in two? With a pair of Ceasars.", "Nope. Unintended.",
        "The shovel was a ground breaking invention, but everyone was blow away by the leaf blower.",
        "A scarecrow says, 'This job isn't for everyone, but hay, it's in my jeans.''",
        "A Buddhist walks up to a hot dog stand and says 'Make me one with everything.'",
        "Did you hear about the guy who lost the left side of his body? He's alright now.",
        "What do you call a girl with one leg that's shorter than the other? Ilene.",
        "The broom swept the nation away.",
        "I did a theatrical performance on puns. It was a play on words.",
        "What does a clock do when it's hungry? It goes back for seconds.",
        "What do you do with a dead chemist? You barium.",
        "I bet the person who created the door knocker won a Nobel prize.",
        "Towels can’t tell jokes. They have a dry sense of humor.",
        "Two birds are sitting on a perch and one says “Do you smell fish?”",
        "Did you hear about the cheese factory that exploded in france? There was nothing but des brie.",
        "Do you know sign language? You should learn it, it’s pretty handy.",
        "What do you call a beautiful pumpkin? GOURDgeous.",
        "Why did one banana spy on the other? Because she was appealing.",
        "What do you call a cow with no legs? Ground beef.",
        "What do you call a cow with two legs? Lean beef.",
        "What do you call a cow with all of its legs? High steaks.",
        "A cross eyed teacher couldn’t control his pupils.",
        "After the accident, the juggler didn’t have the balls to do it.",
        "I used to be afraid of hurdles, but I got over it.",
        "To write with a broken pencil is pointless.",
        "I read a book on anti-gravity. I couldn’t put it down.",
        "I couldn’t remember how to throw a boomerang but it came back to me.",
        "What did the buffalo say to his son? Bison.",
        "What should you do if you’re cold? Stand in the corner. It’s 90 degrees.",
        "How does Moses make coffee? Hebrews it.",
        "The energizer bunny went to jail. He was charged with battery.",
        "What did the alien say to the pitcher of water? Take me to your liter.",
        "What happens when you eat too many spaghettiOs? You have a vowel movement.",
        "The soldier who survived mustard gas and pepper spray was a seasoned veteran.",
        "Sausage puns are the wurst.", "What do you call a bear with no teeth? A gummy bear.",
        "How did Darth Vader know what luke was getting him for his birthday? He could sense his presence.",
        "Why shouldn’t you trust atoms? They make up everything.",
        "What’s the difference between a bench, a fish, and a bucket of glue? You can’t tune a bench but you can tuna fish. I bet you got stuck on the bucket of glue part.",
        "What’s it called when you have too many aliens? Extraterrestrials.",
        "Want to hear a pizza joke? Nevermind, it’s too cheesy.",
        "What do you call a fake noodle? An impasta.",
        "What do cows tell each other at bedtime? Dairy tales.",
        "Why can’t you take inventory in Afghanistan? Because of the tally ban.",
        "Why didn’t the lion win the race? Because he was racing a cheetah.",
        "Why did the man dig a hole in his neighbor’s backyard and fill it with water? Because he meant well.",
        "What happens to nitrogen when the sun comes up? It becomes daytrogen.",
        "What’s it called when you put a cow in an elevator? Raising the steaks.",
        "What’s america’s favorite soda? Mini soda.",
        "Why did the tomato turn red? Because it saw the salad dressing.",
        "What kind of car does a sheep drive? A lamborghini, but if that breaks down they drive their SuBAHHru.",
        "What do you call a spanish pig? Porque.",
        "What do you call a line of rabbits marching backwards? A receding hairline.",
        "Why don’t vampires go to barbecues? They don’t like steak.",
        "A cabbage and celery walk into a bar and the cabbage gets served first because he was a head.",
        "How do trees access the internet? They log on.",
        "Why should you never trust a train? They have loco motives.",
        "Time flies like an arrow. Fruit flies like a banana.",
        "Show me a piano falling down a mineshaft and I'll show you A-flat minor.",
        "To write with a broken pencil is pointless.",
        "A bicycle can't stand on its own because it is two-tired.",
        "Those who get too big for their britches will be exposed in the end.",
        "When a clock is hungry it goes back four seconds.",
        "A chicken crossing the road is poultry in motion.",
        "If you don't pay your exorcist you get repossessed.",
        "What's the definition of a will? It's a dead giveaway.",
        "The man who fell into an upholstery machine is fully recovered.",
        "Every calendar's days are numbered.", "Bakers trade bread recipes on a knead to know basis.",
        "When the electricity went off during a storm at a school the students were de-lighted.",
        "I used to be a tap dancer until I fell in the sink.",
        "He wears glasses during math because it improves division.",
        "She was only a whisky maker but he loved her still.",
        "She had a boyfriend with a wooden leg, but broke it off.",
        "Those who jump off a Paris bridge are in Seine.",
        "It wasn't school John disliked it was just the principal of it.",
        "It's better to love a short girl than not a tall.",
        "There was once a cross-eyed teacher who couldn't control his  pupils.",
        "A grenade thrown into a kitchen in France would result in Linoleum Blownapart.",
        "A boiled egg in the morning is hard to beat.",
        "The one who invented the door knocker got a No-bell prize.",
        "Old power plant workers never die they just de-generate.",
        "There was a ghost at the hotel, so they called for an inn spectre.",
        "With her marriage she got a new name and a dress.",
        "The short fortune-teller who escaped from prison was a small medium at large",
        "Some Spanish government employees are Seville servants.",
        "He drove his expensive car into a tree and found out how the Mercedes bends.",
        "Show me someone in denial and I'll show you a person in Egypt up to their ankles.",
        "Two peanuts were walking in a tough neighborhood and one of them was a-salted.",
        "When cannibals ate a missionary they got a taste of religion.",
        "When an actress saw her first strands of gray hair she thought she'd dye.",
        "He often broke into song because he couldn't find the key.",
        "Marathon runners with bad footwear suffer the agony of defeat.",
        "Driving on so many turnpikes was taking its toll.",
        "To some - marriage is a word ... to others - a sentence.",
        "Old lawyers never die they just lose their appeal.",
        "In democracy its your vote that counts. In feudalism its your count that votes.",
        "Atheism is a non-prophet organization",
        "It was an emotional wedding. Even the cake was in tiers.",
        "Old skiers never die -- they just go down hill.",
        "A cardboard belt would be a waist of paper.",
        "Local Area Network in Australia: the LAN down under.",
        "When the TV repairman got married the reception was excellent.",
        "An office with many people and few electrical outlets could be in for a power struggle.",
        "How do you make antifreeze? Steal her blanket.",
        "A small boy swallowed some coins and was taken to a hospital. When his grandmother telephoned to ask how he was a nurse said 'No change yet'.",
        "A pediatrician is a doctor of little patients.", "Nylons give women a run for their money.",
        "Talking to her about computer hardware I make my mother board.",
        "Ancient orators tended to Babylon.",
        "The best way to stop a charging bull is to take away his credit card.",
        "If you give some managers an inch they think they're a ruler.",
        "Two silk worms had a race. They ended up in a tie.",
        "He had a photographic memory that was never developed.",
        "Old burglars never die they just steal away.",
        "A lawyer for a church did some cross-examining.",
        "Chronic illegal parkers suffer from parking zones disease.",
        "Some people don't like food going to waist..",
        "A cannibal's favourite game is 'swallow the leader'.",
        "You feel stuck with your debt if you can't budge it.",
        "Girls who don't get asked out as often as their friends could feel out-dated.",
        "We were so poor when I was growing up we couldn't even afford to pay attention. ",
        "A pet store had a bird contest with no perches necessary.",
        "A backwards poet writes inverse.",
        "If a lawyer can be disbarred can a musician be denoted or a model deposed?",
        "Once you've seen one shopping center you've seen a mall.",
        "When the smog lifts in Los Angeles, U C L A.", "A plateau is a high form of flattery.",
        "When chemists die, we barium.",
        "A long knife has been invented that cuts four loaves of bread at a time called a four loaf cleaver.",
        "When the wheel was invented, it caused a revolution.",
        "Two robbers with clubs went golfing, but they didn't play the fairway.",
        "Seven days without a pun makes one weak.",
        "A circus lion won't eat clowns because they taste funny.",
        "A toothless termite walked into a tavern and said, 'Is the bar tender here?'",
        "Did you hear about the fire at the circus? The heat was intense.",
        "A tattoo artist has designs on his clients.", "Santa's helpers are subordinate clauses.",
        "A lot of money is tainted. It taint yours and it taint mine.",
        "When they bought a water bed, the couple started to drift apart.",
        "What you seize is what you get.", "Gardeners always know the ground rules.",
        "Some people's noses and feet are build backwards: their feet smell and their noses run.",
        "Two banks with different rates have a conflict of interest.",
        "A successful diet is the triumph of mind over platter.",
        "What do you call cheese that is not yours? Nacho Cheese.",
        "When a new hive is done bees have a house swarming party.",
        "Looting a drugstore is called Pillaging",
        "Never lie to an x-ray technician. They can see right through you.",
        "Old programmers never die, they just can't C as well.",
        "A music store had a small sign which read: Bach in a Minuet.",
        "Long fairy tales have a tendency to dragon.",
        "Visitors to Cuba are usually Havana good time.",
        "A bachelor is a guy who is footloose and fiancée-free.",
        "A ditch digger was entrenched in his career.",
        "A girl and her boyfriend went to a party as a barcode. They were an item.",
        "A criminal's best asset is his lie ability.",
        "A vulture boards a plane, carrying two dead possums. The attendant looks at him and says, 'I'm sorry, sir, only one carry on allowed per passenger.'",
        "Santa’s helpers are known as subordinate Clauses.",
        "She had a photographic memory but never developed it.",
        "The two pianists had a good marriage. They always were in a chord.",
        "I was struggling to figure out how lightning works then it struck me.",
        "I really wanted a camouflage shirt, but I couldn't find one.",
        "The grammarian was very logical. He had a lot of comma sense.",
        "A chicken farmer's favorite car is a coupe.",
        "What do you call a person rabid with wordplay? An energizer punny.",
        "I've been to the dentist many times so I know the drill. ",
        "What did one plant say to another? What's stomata?",
        "The other day I held the door open for a clown. I thought it was a nice jester.",
        "A chicken crossing the road is truly poultry in motion.",
        "The politician is not one for Indian food. But he's good at currying favors.",
        "How do construction workers party? They raise the roof.",
        "A boiled egg every morning is hard to beat.",
        "When a woman returns new clothing, that's post traumatic dress syndrome.",
        "After hours of waiting for the bowling alley to open, we finally got the ball rolling.",
        "Two antennas met on a roof, fell in love and got married. The ceremony wasn't much, but the reception was brilliant!",
        "Always trust a glue salesman. They tend to stick to their word.",
        "Where do you find giant snails? On the ends of giants’ fingers.",
        "Guerrilla warfare is more than just throwing a banana.",
        "The cartoon animator felt imprisoned by his job. He could not free himself from his cel.",
        "I thought Santa was going to be late, but he arrived in the Nick of time.",
        "With her marriage, she got a new name and a dress", "Every calendar's days are numbered.",
        "A bicycle can't stand on its own because it is two-tired.",
        "No matter how much you push the envelope, it will still be stationery.",
        "A dog gave birth to puppies near the road and was cited for littering.",
        "If you don't pay your exorcist, you will get repossessed.",
        "Being struck by lightning is really a shocking experience!",
        "A pessimist's blood type is always B-negative.", "Dockyard: A physician's garden.",
        "I went to a seafood disco last week... and pulled a mussel.",
        "Two peanuts walk into a bar, and one was a-salted.",
        "Reading while sunbathing makes you well red.",
        "The lights were too bright at the Chinese restaurant so the manager decided to dim sum.",
        "In democracy, it's your vote that counts. In feudalism, it's your count that votes.", 
  "What did the tree say to autumn? Leaf me alone.", 
  "How do you get off a non-stop flight?", 
  "Why are there 5 syllables in the word 'monosyllabic'?", 
  "There is 1 thing 2 do 3 words 4 you I LOVE YOU.", 
  "What is a runner's favourite subject in school? Jog-raphy!", 
  "I'm trying to finish writing a script for a porno movie, but there are just too many holes in the plot.", 
  "What do elves learn in school? The Elf-abet!", 
  "No matter how much you push the envelope, it'll still be stationery.", 
  "Santa's elves are just a bunch of subordinate Clauses.", 
  "What day does an Easter egg hate the most? Fry-days.", 
  "Television is a medium because anything well done is rare.", 
  "What is the difference between acne and a catholic priest? Acne usually comes on a boys face after he turns 12.", 
  "Women were born to WOO MEN but why do they WOE MEN?", 
  "Sex on tv can't hurt unless you fall off.", 
  "My first job was working in an orange juice factory, but I got canned: couldn't concentrate.", 
  "Why did the scientist install a knocker on his door? He wanted to win the No-bell prize!", 
  "Love is like a machine... sometimes you need a good screw to fix it.", 
  "I'm glad I know sign language, it's pretty handy.", 
  "I put the 'fun' in dysfunctional.", 
  "How can you spot the blind guy at the nudist colony? It's not hard.", 
  "What tea do hockey players drink? Penaltea!", 
  "I'm no photographer, but I can picture us together.", 
  "What nationality is Santa Claus? North Polish", 
  "What are the 2 reasons the girl broke up with her boyfriend? Because he was a cheetah and because he was lion too much to her.", 
  "I swear to drunk I'm not God, but seriously, stay in drugs, eat school, and don't do vegetables.", 
  "Oxygen is proven to be a toxic gas. Anyone who inhales oxygen will normally dies within 80 years.", 
  "Why did the snowman smile? Because the snowblower is coming.", 
  "Did you hear about the Italian chef with a terminal illness? He pastaway.", 
  "Your gene pool could use a little chlorine.", 
  "Why did the bee get married? Because he found his honey.", 
  "I was going to give him a nasty look, but he already had one.", 
  "Why was Cinderella thrown off the basketball team? She ran away from the ball.", 
  "Where do you find a birthday present for a cat? In a cat-alogue!", 
  "I'm reading a book about anti-gravity. It's impossible to put down.", 
  "Why is the man who invests all your money called a broker?", 
  "What does the Bermuda Triangle and blondes have in common? They've both swallowed a lot of seamen.", 
  "Do skunks celebrate Valentine's Day? Sure, they're very scent-imental!", 
  "Fishermen are reel men.", 
  "STRESSED is just DESSERTS spelled backward.", 
  "A bus station is where a bus stops. A train station is where a train stops. On my desk, I have a work station..", 
  "How did I escape Iraq? Iran.", 
  "A book just fell on my head. I've only got myshelf to blame.", 
  "What if there were no hypothetical questions?", 
  "What did the boy cat say to the girl cat on Valentine's Day? You're purrr-fect for me!", 
  "My colleague can no longer attend next weeks Innuendo Seminar so I have to fill her slot instead.", 
  "Beauty is in the eye of the beer holder.", 
  "On the other hand, you have different fingers.", 
  "I am on a seafood diet. Every time I see food, I eat it.", 
  "My math teacher called me average. How mean!", 
  "I'm on a whiskey diet. I've lost three days already.", 
  "A hole was found in the wall of a nudist camp. The police are looking into it.", 
  "What do ghosts serve for dessert? I Scream.", 
  "A garage sale is actually a Garbage sale but the 'b' is silent.", 
  "I'm emotionally constipated. I haven't given a shit in days.", 
  "Black magic.... It doesn't work.", 
  "Why are most politicans in the closet or gay? Because they can only mandate.", 
  "What part of a football ground is never the same? The changing rooms.", 
  "What do you call a fish with no eye? FSH", 
  "I wanna make a joke about sodium, but Na..", 
  "I hate insects puns, they really bug me.", 
  "Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph", 
  "What do you call people who are afraid of Santa Claus? Claustrophobic", 
  "What do squirrels give for Valentine's Day? Forget-me-nuts.", 
  "Which day do chickens hate the most? Friday.", 
  "Last time I got caught stealing a calendar I got 12 months.", 
  "Whats long and hard and has cum in it? A cucumber.", 
  "If anything is possible, is it possible for something to be impossible?", 
  "Atheism is a non-prophet organization.", 
  "A waist is a terrible thing to mind.", 
  "What do prisoners use to call each other? Cell phones.", 
  "For Sale: Parachute. Only used once, never opened.", 
  "What do bees do with their honey? They cell it.", 
  "Why is a bra singular and panties plural?", 
  "What do sea monsters eat for lunch? Fish and ships.", 
  "What does a hockey player and a magician have in common? Both do hat tricks!", 
  "What was Forrest Gump's email password? '1forrest1'", 
  "I can't believe I got fired from the calendar factory. All I did was take a day off."]

module.exports = {punList: punsListInFile };