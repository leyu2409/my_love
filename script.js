/* =========================================================
   ROMANTIC GIFT WEBSITE — SCRIPT
   Fully optimized, multilingual (EN/AM), no security
   ========================================================= */

// ========== CONFIGURATION ==========
const loveConfig = {
  girlfriendName: "My Love",
  yourName: "Me",

  welcomeMessage: {
    en: "This little website is just for you.\n\nBecause sometimes...\nwords aren't enough to explain\nhow special someone is. 💕",
    am: "ይህ ትንሽ ድረ ገጽ ለአንቺ ብቻ ነው።\n\nምክንያቱም አንዳንድ ጊዜ...\nቃላት ለማብራራት አይበቁም\nአንድ ሰው ምን ያህል ልዩ እንደሆነ። 💕"
  },

  anniversaryDate: "2026-06-01T00:00:00",
  showLoveCounter: true,
  occasion: "romantic",

  letter: {
    en: "My Love,\n\nThere are some feelings that words can never fully describe, but tonight, I want to try to put a little piece of my heart into these words.\n\nYou are not just someone I love. You are someone who has become a beautiful part of who I am. Since you came into my life, ordinary moments have felt more meaningful, simple days have felt more beautiful, and my heart has found a reason to smile a little more.\n\nYour smile has a way of making everything around me feel lighter. Your voice brings me a kind of peace that I cannot explain. Your presence makes even the quietest moments feel special. And whenever I think about the memories we have created together, I realize how lucky I am to have someone as precious as you in my life.\n\nI love the little things about you—the way you smile, the way you speak, the way you make moments unforgettable without even trying. I love the person you are, and I hope you always remember just how deeply you are loved and appreciated.\n\nThank you for every smile, every conversation, every beautiful memory, and every moment we have shared. Thank you for simply being you. You may never truly know how much happiness your existence has brought into my life.\n\nIf I could give you one thing, it would be the ability to see yourself through my eyes, just for a moment. Then you would understand how beautiful, precious, and irreplaceable you are to me.\n\nNo matter how many photos we take, how many memories we create, or how many love letters I write, I know I will never run out of reasons to love you. There will always be another memory to treasure, another smile to admire, and another reason to fall for you all over again.\n\nI don't know what the future will bring, but I know one thing—I want many more beautiful moments with you. More smiles. More laughter. More memories. More days where I can look at you and quietly think, \"I am so lucky to have you.\"\n\nYou are a beautiful chapter in my story, a precious memory in my heart, and a person I will always be grateful for.\n\nI love you more than these words can ever explain.\n\nAlways yours,\nMe ❤️",
    am: "ውዷ ልቤ፣\n\nአንዳንድ ስሜቶች በቃላት ሙሉ በሙሉ ሊገለጹ አይችሉም፣ ግን ዛሬ ማታ ከልቤ የሆነውን ትንሽ ክፍል በእነዚህ ቃላት ለማስቀመጥ እፈልጋለሁ።\n\nአንቺ የምወድሽ ሰው ብቻ አይደለሽም። የራሴ አካል የሆነች፣ በህይወቴ ውስጥ ውብ ስፍራ የያዝሽ ሰው ነሽ። ወደ ህይወቴ ከመጣሽ ጀምሮ ተራ ጊዜያት ትርጉም ያላቸው ሆነዋል፣ ቀላል ቀናትም የበለጠ ውብ ሆነዋል፣ ልቤም ትንሽ ተጨማሪ ምክንያት እንዲስቅ አግኝቷል።\n\nፈገግታሽ በዙሪያዬ ያለውን ሁሉ ቀለል እንዲል የሚያደርግ ልዩ ነገር አለው። ድምፅሽም በቃላት ልገልጸው የማልችለውን ሰላም ይሰጠኛል። መገኘትሽ ጸጥ ያሉ ጊዜያትን እንኳን ልዩ ያደርጋቸዋል። እና አብረን የፈጠርናቸውን ትዝታዎች ሳስብ፣ እንደ አንቺ ያለች ውድ ሰው በህይወቴ ስላለች ምን ያህል እድለኛ እንደሆንኩ እገነዘባለሁ።\n\nስለ አንቺ ያሉትን ትንንሽ ነገሮች እወዳቸዋለሁ—አገላለጽሽን፣ አነጋገርሽን፣ ሳትሞክሪ እንኳን ጊዜያትን የማይረሱ ማድረግሽን። የሆንሽውን ሰው እወዳለሁ፣ እናም ምን ያህል እንደምወድሽና እንደማደንቅሽ ሁልጊዜ እንድታስታውሺ እፈልጋለሁ።\n\nለሁሉም ፈገግታዎችሽ፣ ለእያንዳንዱ ውይይታችን፣ ለሁሉም ውብ ትዝታዎችና አብረን ላሳለፍናቸው ጊዜያት አመሰግናለሁ። በቀላሉ አንቺ ስለሆንሽ አመሰግናለሁ። የመኖርሽ ብቻ በህይወቴ ምን ያህል ደስታን እንዳመጣ ምናልባት ሙሉ በሙሉ ልታውቂው አትችይም።\n\nአንድ ነገር ልሰጥሽ ብችል፣ ራስሽን በእኔ ዓይን እንድታዪ የሚያስችልሽን ችሎታ እሰጥሽ ነበር—ለአንድ አፍታ ብቻ። ያኔ ለእኔ ምን ያህል ውብ፣ ውድ እና ልዩ እንደሆንሽ ትረዺ ነበር።\n\nምንም ያህል ፎቶዎችን ብንወስድ፣ ምንም ያህል ትዝታዎችን ብንፈጥር፣ ወይም ምንም ያህል የፍቅር ደብዳቤዎችን ብጽፍ፣ ለአንቺ የምወድሽባቸው ምክንያቶች ፈጽሞ አያልቁም። ሁልጊዜ ልወደው የምችለው አዲስ ትዝታ፣ ልመለከተው የምፈልገው ሌላ ፈገግታ እና እንደገና በአንቺ እንድወድ የሚያደርገኝ ሌላ ምክንያት ሁልጊዜ ይኖራል።\n\nወደፊት ምን እንደሚጠብቀን አላውቅም፣ ግን አንድ ነገር አውቃለሁ—ከአንቺ ጋር ብዙ ተጨማሪ ውብ ጊዜያትን ማሳለፍ እፈልጋለሁ። ብዙ ፈገግታዎች፣ ብዙ ሳቅ፣ ብዙ ትዝታዎች፣ እና አንቺን እያየሁ በልቤ በጸጥታ፣ “አንቺን በማግኘቴ በጣም እድለኛ ነኝ” የምልባቸው ብዙ ቀናት።\n\nአንቺ በታሪኬ ውስጥ ውብ ምዕራፍ፣ በልቤ ውስጥ ውድ ትዝታ፣ እና ሁልጊዜ የማመሰግነው ሰው ነሽ።\n\nፍቅሬን እነዚህ ቃላት ሊገልጹት ከሚችሉት በላይ ሁልጊዜ አፈቅርሻላዉ።\n\nሁልጊዜ የአንቺ፣\nእኔ ❤️"
  },

  photos: [
  { src: "assets/photos/photo1.jpg", caption: "A beautiful memory with my favorite person. ❤️" },

  { src: "assets/photos/photo2.jpg", caption: "One of my favorite moments with you. 🥰💕" },

  { src: "assets/photos/photo3.jpg", caption: "That smile will always have my heart. 😊❤️" },

  { src: "assets/photos/photo4.jpg", caption: "I could look at you like this forever. 💕✨" },

  { src: "assets/photos/photo5.jpg", caption: "Us, just being us — and I love it. 🥰❤️" },

  { src: "assets/photos/photo6.jpg", caption: "Every moment with you becomes a precious memory. ❤️✨" },

  { src: "assets/photos/photo7.jpg", caption: "A memory I will treasure in my heart forever. 💖" },

  { src: "assets/photos/photo8.jpg", caption: "You have a way of making every moment brighter. 🌸❤️" },

  { src: "assets/photos/photo9.jpg", caption: "Forever grateful for this beautiful moment with you. 💕" },

  { src: "assets/photos/photo10.jpg", caption: "Here's to this moment and all the memories still to come. 🥰✨" },

  { src: "assets/photos/photo11.jpg", caption: "Every picture of you gives my heart another reason to smile. ❤️😊" },

  { src: "assets/photos/photo12.jpg", caption: "Your gentle and humble heart is one of the things I cherish most about you. 💖✨" },

  { src: "assets/photos/photo13.jpg", caption: "A beautiful reminder of the blessing God has placed in my life. 🙏❤️✨" },

  { src: "assets/photos/photo14.jpg", caption: "This is me, with a heart full of love and gratitude for you. ❤️🙏✨" },

  { src: "assets/photos/photo15.jpg", caption: "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨" }
],

  finalPhotoIndex: 0,

  timeline: {
    en: [
      { icon: "✨", title: "The Beginning", text: "The moment everything started..." },
      { icon: "❤️", title: "Our First Special Memory", text: "A moment I'll never forget." },
      { icon: "🥰", title: "The Beautiful Moments", text: "Every moment with you became a memory." },
      { icon: "🌹", title: "Today", text: "And I'm still grateful to have you in my life." }
    ],
    am: [
      { icon: "✨", title: "መጀመሪያ", text: "ሁሉም ነገር የተጀመረበት ጊዜ..." },
      { icon: "❤️", title: "የመጀመሪያ ልዩ ትዝታችን", text: "ፈጽሞ የማልረሳው ጊዜ።" },
      { icon: "🥰", title: "ውብ ጊዜያት", text: "ከአንቺ ጋር ያለኝ እያንዳንዱ ጊዜ ትዝታ ሆነ።" },
      { icon: "🌹", title: "ዛሬ", text: "እና አሁንም አንቺን በህይወቴ ውስጥ በማግኘቴ ደስተኛ ነኝ።" }
    ]
  },

  reasons: { 
    en: [ 
    { icon: "😊", title: "Your Smile", text: "Your smile reaches a place in my heart that nothing else can. Whenever I see it, I quietly thank God for giving me a reason to smile too. ❤️🙏" }, 
    { icon: "🥰", title: "Your Gentle Heart", text: "Your gentleness is one of the things I treasure most about you. In a world that can be harsh, your soft and kind heart reminds me that beautiful souls still exist. 🥰❤️" }, 
    { icon: "❤️", title: "Your Humility", text: "I love the humility in you. You don't need to prove how special you are; the way you treat people, speak, and carry yourself says enough. It is a quality I deeply respect. 🙏❤️" }, 
    { icon: "✨", title: "Your Character", text: "What makes me love you isn't only what I see on the outside. It is your character, your kindness, your patience, and the beautiful person you are when no one is watching. ✨❤️" }, 
    { icon: "🌹", title: "Your Presence", text: "When you are around, my heart feels a kind of peace that is difficult to explain. Your presence has become one of the quiet blessings I am most grateful for. 🌹🙏" }, 
    { icon: "🙏", title: "Your Faith", text: "I admire the part of you that seeks God. I pray that your faith continues to grow and that God guides your steps, protects your heart, and blesses the life ahead of you. 🙏❤️" }, 
    { icon: "🫶", title: "Your Kindness", text: "The way you care for others tells me so much about the heart you carry. Your kindness is not something I simply notice; it is something I deeply cherish. 🫶❤️" }, 
    { icon: "💖", title: "The Way You Make Me Feel", text: "You make me feel grateful, peaceful, and hopeful. Somehow, having you in my life makes me want to become a better person and love with a more sincere heart. 💖🙏" }, 
    { icon: "🌸", title: "Your Soul", text: "There is something beautiful about your soul that goes beyond words. The more I know you, the more I realize that your beauty comes from who you are, not simply from how you look. 🌸❤️" }, 
    { icon: "💫", title: "God's Timing", text: "Sometimes I wonder how our paths crossed at exactly the right time. I don't know everything God has planned, but I know I am grateful that He allowed you to become part of my story. 💫🙏" }, 
    { icon: "🌹", title: "Simply You", text: "I could give you a hundred reasons, but the deepest truth is simple: I love you for who you are. Not because you are perfect, but because your heart is precious to me. ❤️🌹" }
   ], 
   
  am: [ 
    { icon: "😊", title: "ፈገግታሽ", text: "ፈገግታሽ ልቤ ውስጥ ማንም ሊደርስበት የማይችል ቦታ ይደርሳል። ባየሁት ቁጥር እኔም ፈገግ የምልበትን ምክንያት ስለሰጠኝ እግዚአብሔርን በጸጥታ አመሰግናለሁ። ❤️🙏" }, 
    { icon: "🥰", title: "የዋህ ልብሽ", text: "ከሁሉ በላይ ከምወዳቸው ነገሮች አንዱ የዋህነትሽ ነው። ዓለም አንዳንድ ጊዜ ጨካኝ ስትሆን፣ የዋህና ደግ ልብ ያላቸው ውብ ሰዎች እንዳሉ አንቺ ታስታውሺኛለሽ። 🥰❤️" }, 
    { icon: "❤️", title: "ትሕትናሽ", text: "በአንቺ ውስጥ ያለውን ትሕትና በጣም እወደዋለሁ። ምን ያህል ልዩ እንደሆንሽ ለማሳየት ምንም ማስመሰል አያስፈልግሽም፤ ሰዎችን የምትይዝበት መንገድና ራስሽን የምትመራበት መንገድ በቂ ይናገራል። ይህም በጣም የማከብርሽ ባህርይ ነው። 🙏❤️" }, 
    { icon: "✨", title: "ባህርይሽ", text: "የምወድሽ በውጫዊ ውበትሽ ብቻ አይደለም። የምወደው ባህርይሽን፣ ቸርነትሽን፣ ትዕግሥትሽን እና ማንም በማያይበት ጊዜም የምትሆኚውን ውብ ሰው ነው። ✨❤️" }, 
    { icon: "🌹", title: "መገኘትሽ", text: "አንቺ በአጠገቤ ስትኖሪ ልቤ ለመግለጽ የሚከብደውን ሰላም ያገኛል። መገኘትሽ በጣም ከማመሰግናቸው የሕይወቴ ጸጥ ያሉ በረከቶች አንዱ ሆኗል። 🌹🙏" }, 
    { icon: "🙏", title: "እምነትሽ", text: "እግዚአብሔርን የምትፈልጊበትን መንፈስ አደንቃለሁ። እምነትሽ እየጠነከረ እንዲሄድ፣ እግዚአብሔርም እርምጃዎችሽን እንዲመራ፣ ልብሽን እንዲጠብቅ እና የወደፊት ሕይወትሽን እንዲባርክ እጸልያለሁ። 🙏❤️" }, 
    { icon: "🫶", title: "ቸርነትሽ", text: "ለሌሎች የምታስቢበትና የምትቆረቆሪበት መንገድ ስለ ያለሽን ልብ ብዙ ይናገራል። ቸርነትሽን ብቻ አላስተውልም፤ ከልቤ እከብረዋለሁ። 🫶❤️" }, 
    { icon: "💖", title: "በአንቺ ምክንያት", text: "አንቺ እንደምልት የምትሰጪኝ ስሜት ምስጋናን፣ ሰላምን እና ተስፋን ነው። በሕይወቴ መኖርሽ የተሻለ ሰው እንድሆን እና በበለጠ እውነተኛ ልብ እንድወድ ያነሳሳኛል። 💖🙏" }, 
    { icon: "🌸", title: "ነፍስሽ", text: "በነፍስሽ ውስጥ በቃላት ለመግለጽ የሚከብድ ውበት አለ። እያወቅሁሽ በሄድኩ ቁጥር ውበትሽ በመልክሽ ብቻ ሳይሆን በማንነትሽ ውስጥ እንዳለ የበለጠ እገነዘባለሁ። 🌸❤️" }, 
    { icon: "💫", title: "የእግዚአብሔር ጊዜ", text: "አንዳንድ ጊዜ መንገዳችን በትክክለኛው ጊዜ እንዴት እንደተገናኘ እገረማለሁ። እግዚአብሔር ስላዘጋጀልን ሁሉን አላውቅም፤ ነገር ግን ወደ ታሪኬ እንድትገቢ ስለፈቀደልኝ በጣም አመሰግናለሁ። 💫🙏" }, 
    { icon: "🌹", title: "አንቺ ብቻ", text: "መቶ ምክንያቶችን መዘርዘር እችላለሁ፤ ግን ከሁሉ ጥልቅ የሆነው እውነት ቀላል ነው፦ ስለሆንሽው ሰው እወድሻለሁ። ፍጹም ስለሆንሽ አይደለም፤ ልብሽ ለእኔ ውድ ስለሆነ ነው። ❤️🌹" } ] },


  
  emojis: {
     en: [ 
      { symbol: "❤️", message: "I believe God knew exactly what He was doing when He brought you into my life. You are a blessing my heart will never take for granted. 🙏❤️" }, 
      { symbol: "🥰", message: "Your gentle smile brings a peace to my heart that words cannot fully describe. I thank God for the beautiful soul behind that smile. 🥰🙏" }, 
      { symbol: "😘", message: "If I were beside you right now, I would simply hold you close and thank God for giving me another moment with someone so precious. ❤️🫶" }, 
      { symbol: "💕", message: "Every day, I find another reason to love and appreciate you. I pray that God continues to guide our hearts with patience, kindness, and genuine love. 🙏💕" }, 
      { symbol: "🌹", message: "Your beauty is not only what my eyes see; it is the kindness, humility, and gentle heart within you that makes you truly beautiful to me. 🌹❤️" }, 
      { symbol: "✨", message: "You are one of those blessings that reminds me that God's timing is greater than our plans. Having you in my life is something I quietly thank Him for. ✨🙏" }, 
      { symbol: "🫶", message: "I don't just want to be someone who loves you in beautiful moments; I want to be someone who stands beside you, prays for you, supports you, and respects the heart God gave you. 🫶❤️🙏" }, 
      { symbol: "😊", message: "Your happiness means more to me than simply seeing you smile. I pray that God protects your heart, gives you peace, and fills your life with countless reasons to smile. 😊🙏❤️" }, 
      { symbol: "💖", message: "If God allows our paths to continue together, I hope our love will always be built on faith, respect, patience, honesty, and a heart that seeks Him first. 💖🙏" }, 
      { symbol: "🌸", message: "You have such a gentle and humble spirit, and that is one of the things I treasure most about you. May God always protect that beautiful heart. 🌸🙏❤️" }, 
      { symbol: "💋", message: "More than anything, I want my love for you to be pure and meaningful—something that brings peace to your heart and reminds you that you are deeply valued. ❤️🙏🫶" } ], 
  
    am: [ 
      { symbol: "❤️", message: "እግዚአብሔር ወደ ሕይወቴ እንድትገቢ ያደረገው ምክንያት እንዳለው አምናለሁ። አንቺ ልቤ ፈጽሞ የማይንቀው ውድ በረከት ነሽ። 🙏❤️" }, 
      { symbol: "🥰", message: "የዋህ ፈገግታሽ በቃላት ለመግለጽ የማልችለውን ሰላም በልቤ ውስጥ ይፈጥራል። ከዚያ ፈገግታ ጀርባ ላለው ውብ ነፍስሽ እግዚአብሔርን አመሰግናለሁ። 🥰🙏" }, 
      { symbol: "😘", message: "አሁን ከጎንሽ ብሆን ኖሮ፣ በቀላሉ አቅፌሽ እና እንደ አንቺ ያለች ውድ ሰው በሕይወቴ ስለሰጠኝ እግዚአብሔርን አመሰግን ነበር። ❤️🫶" }, 
      { symbol: "💕", message: "በየቀኑ አንቺን የምወድበትና የማደንቅበት አዲስ ምክንያት አገኛለሁ። እግዚአብሔር ልባችንን በትዕግሥት፣ በቸርነት እና በእውነተኛ ፍቅር እንዲመራ እጸልያለሁ። 🙏💕" }, 
      { symbol: "🌹", message: "ውበትሽ ዓይኖቼ በሚያዩት ብቻ አይደለም፤ በውስጥሽ ያለው ቸርነት፣ ትሕትና እና የዋህ ልብሽ እውነተኛ ውበትሽ ነው። 🌹❤️" }, 
      { symbol: "✨", message: "አንቺ እግዚአብሔር ጊዜውን ከእኛ እቅድ በላይ በጥበቡ እንደሚያውቅ የምታስታውሺኝ በረከት ነሽ። በሕይወቴ ውስጥ ስላለሽ በጸጥታ እግዚአብሔርን አመሰግናለሁ። ✨🙏" }, 
      { symbol: "🫶", message: "በደስታ ጊዜ ብቻ የሚወድሽ ሰው መሆን አልፈልግም፤ ከጎንሽ የሚቆም፣ ለአንቺ የሚጸልይ፣ የሚደግፍሽ እና እግዚአብሔር የሰጠሽን ውድ ልብ የሚያከብር ሰው መሆን እፈልጋለሁ። 🫶❤️🙏" }, 
      { symbol: "😊", message: "ደስታሽ ለእኔ ፈገግታሽን ከማየት የበለጠ ትርጉም አለው። እግዚአብሔር ልብሽን ይጠብቅ፣ ሰላም ይስጥሽ እና ፈገግ የምትዪበትን ብዙ ምክንያቶች ይስጥሽ። 😊🙏❤️" }, 
      { symbol: "💖", message: "እግዚአብሔር አብረን እንድንጓዝ ከፈቀደ፣ ፍቅራችን ሁልጊዜ በእምነት፣ በክብር፣ በትዕግሥት፣ በእውነት እና እግዚአብሔርን ከሁሉ በፊት በሚያስቀምጥ ልብ ላይ እንዲመሠረት እመኛለሁ። 💖🙏" }, 
      { symbol: "🌸", message: "በአንቺ ውስጥ ያለው የዋህነትና ትሕትና ከሁሉ በላይ የምወደውና የምከብረው ነገር ነው። እግዚአብሔር ያንን ውብ ልብሽን ሁልጊዜ ይጠብቅልሽ። 🌸🙏❤️" }, 
      { symbol: "💋", message: "ከሁሉ በላይ ፍቅሬ ንጹሕና ትርጉም ያለው እንዲሆን እፈልጋለሁ፤ በልብሽ ውስጥ ሰላምን የሚያመጣ እና ምን ያህል ውድና ተከባሪ እንደሆንሽ የሚያስታውስሽ ፍቅር። ❤️🙏🫶" } ] 
},
  
finalMessage: {

    en: "You Have My Heart, Today, Tomorrow, Always. I Love You. ❤️💋",

    am: "ልቤ የአንቺ ነው፤ ዛሬ፣ ነገም ሁልጊዜ። እወድሻለሁ። ❤️💋"

},
  };

// Occasion tweaks
if (loveConfig.occasion === "birthday") {
  loveConfig.finalMessage.en = `Happy Birthday, ${loveConfig.girlfriendName} 🎂❤️`;
  loveConfig.finalMessage.am = `መልካም ልደት፣ ${loveConfig.girlfriendName} 🎂❤️`;
} else if (loveConfig.occasion === "anniversary") {
  loveConfig.finalMessage.en = "Happy Anniversary ❤️";
  loveConfig.finalMessage.am = "መልካም አመታዊ በዓል ❤️";
}

// ========== TRANSLATIONS ==========
const translations = {
  en: {
    navHome: "Home",
    navMemories: "Memories",
    navGallery: "Gallery",
    navLetter: "Letter",
    navReasons: "Reasons",
    navSurprise: "Surprise",
    eyebrow: "✨ I made something special for you ✨",
    openingTitle: 'For the most<br>beautiful<br>person in my life <span class="heart-glyph">❤</span>',
    openGift: "Open Your Gift 🎁",
    giftHint: "(tap the box or the button)",
    welcomeHey: "Hey",
    continueStory: "Continue Our Story → ❤️",
    timelineTitle: 'Little Moments, Big Memories <span aria-hidden="true">💕</span>',
    galleryTitle: 'Our Beautiful Memories <span aria-hidden="true">📸❤️</span>',
    gallerySub: "Tap any photo to see it up close. Double-tap for a little love.",
    slideshowTitle: 'A Little Film Of Us <span aria-hidden="true">🎞️</span>',
    letterTitle: 'You Have A Letter <span aria-hidden="true">💌</span>',
    openLetter: "Open My Letter",
    reasonsTitle: "Reasons You're Special To Me ❤️",
    emojiTitle: 'A Few Things I Want To Say... <span aria-hidden="true">🥰</span>',
    emojiSub: "Tap any emoji.",
    heartTitle: 'Tap My Heart <span aria-hidden="true">❤️</span>',
    taps: "taps",
    counterTitle: "We've Been Creating Memories For",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    surpriseTitle: 'One Last Surprise <span aria-hidden="true">🎁</span>',
    revealBtn: "Reveal It ❤️",
    surpriseLead: "If I could give you one thing...",
    surpriseBody1: "I would give you the ability<br>to see yourself through my eyes.",
    surpriseBody2: "Then you would finally understand<br>how incredibly special you are to me. ❤️",
    finalMessage: 'I Love You <span class="heart-glyph">❤</span>',
    forever: "Forever & Always ✨",
    finalCaption: "My favorite person ❤️",
    finalThanks: "Thank you for being part of my story. 🫶",
    secretFound: "🤫 You found my secret...",
    secretMessage: "I love you more than this website could ever explain. ❤️",
    close: "Close"
  },
  am: {
    navHome: "መነሻ",
    navMemories: "ትዝታዎች",
    navGallery: "ማሳያ",
    navLetter: "ደብዳቤ",
    navReasons: "ምክንያቶች",
    navSurprise: "አስገራሚ",
    eyebrow: "✨ ልዩ ነገር ሠራሁልሽ ✨",
    openingTitle: 'በህይወቴ ውስጥ<br>እጅግ ውብ<br>ለሆነች ሰው <span class="heart-glyph">❤</span>',
    openGift: "ስጦታሽን ክፈቺ 🎁",
    giftHint: "(ሳጥኑን ወይም አዝራሩን ተንኩዪ)",
    welcomeHey: "ሰላም",
    continueStory: "ታሪካችንን ቀጥዪ → ❤️",
    timelineTitle: 'ትናንሽ ጊዜያት፣ ትላልቅ ትዝታዎች <span aria-hidden="true">💕</span>',
    galleryTitle: 'ውብ ትዝታዎቻችን <span aria-hidden="true">📸❤️</span>',
    gallerySub: "ማንኛውንም ፎቶ በቅርበት ለማየት ንኪው። ለትንሽ ፍቅር ሁለት ጊዜ ንኪው።",
    slideshowTitle: 'ትንሽ የእኛ ፊልም <span aria-hidden="true">🎞️</span>',
    letterTitle: 'ደብዳቤ አለሽ <span aria-hidden="true">💌</span>',
    openLetter: "ደብዳቤዬን ክፈቺ",
    reasonsTitle: "ለምን ልዩ እንደሆንሽ ምክንያቶች ❤️",
    emojiTitle: 'ማለት የምፈልጋቸው ጥቂት ነገሮች... <span aria-hidden="true">🥰</span>',
    emojiSub: "ማንኛውንም ኢሞጂ ተንኩዪ።",
    heartTitle: 'ልቤን ተንኪ <span aria-hidden="true">❤️</span>',
    taps: "መንካት",
    counterTitle: "ትዝታዎችን እየፈጠርን ያለነው",
    days: "ቀናት",
    hours: "ሰዓታት",
    minutes: "ደቂቃዎች",
    seconds: "ሰከንዶች",
    surpriseTitle: 'የመጨረሻ አስገራሚ <span aria-hidden="true">🎁</span>',
    revealBtn: "ግለጺ ❤️",
    surpriseLead: "አንድ ነገር ልሰጥሽ ብችል...",
    surpriseBody1: "በአይኔ ራስሽን<br>የምታይበትን ችሎታ እሰጥሻለሁ።",
    surpriseBody2: "ከዚያ በኋላ በመጨረሻ<br>ለእኔ ምን ያህል ልዩ እንደሆንሽ ትገነዘቢያለሽ። ❤️",
    finalMessage: 'እወድሻለሁ <span class="heart-glyph">❤</span>',
    forever: "ለዘላለም & ሁልጊዜ ✨",
    finalCaption: "የኔ ተወዳጅ ሰው ❤️",
    finalThanks: "በታሪኬ ውስጥ ስለነበርሽ አመሰግናለሁ። 🫶",
    secretFound: "🤫 ሚስጥሬን አገኘሽ...",
    secretMessage: "ይህ ድረ ገጽ ሊገልጸው ከሚችለው በላይ እወድሻለሁ። ❤️",
    close: "ዝጊ"
  }
};

// ========== STATE ==========
let currentLang = localStorage.getItem('lang') || 'en';
let currentSlideIndex = 0;
let slideTimer = null;
let heartTapCount = 0;

// ========== BACK TO TOP FUNCTION ==========
function setupBackToTop() {
  const backBtn = document.getElementById('backToTop');
  if (!backBtn) return;

  function toggleBackToTop() {
    const scrollY = window.scrollY;
    if (scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  toggleBackToTop();
}

// ========== DOM READY ==========
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  applyLanguage(currentLang);
  setupLanguageSwitcher();
  applyNames();
  setupHeartField(prefersReducedMotion);
  setupNav();
  setupMobileMenu(); // Fixed hamburger menu
  setupScrollProgress();
  setupGiftOpening(prefersReducedMotion);
  setupWelcomeTyping();
  setupGallery();
  setupLightbox();
  setupSlideshow();
  setupLetter();
  setupLetterModal();
  setupHeartTap(prefersReducedMotion);
  setupLoveCounter();
  setupSurprise(prefersReducedMotion);
  setupFinalPhoto();
  setupSecretMessage();
  setupCursorEffects(prefersReducedMotion);
  
  // Initialize Back to Top
  setupBackToTop();
});

// ========== LANGUAGE SYSTEM ==========
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  const t = translations[lang];
  if (!t) return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
  
  updateDynamicContent(lang);
}

function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        applyLanguage(lang);
        const modalText = document.getElementById('letterModalText');
        if (modalText && document.getElementById('letterModal').classList.contains('is-open')) {
          modalText.textContent = loveConfig.letter[currentLang] || loveConfig.letter.en;
        }
      }
    });
  });
}

function updateDynamicContent(lang) {
  // Update timeline
  const timelineContainer = document.getElementById('timeline');
  if (timelineContainer) {
    const items = loveConfig.timeline[lang] || loveConfig.timeline.en;
    timelineContainer.innerHTML = '';
    items.forEach((item) => {
      const el = document.createElement('div');
      el.className = 'timeline__item';
      el.innerHTML = `
        <div class="timeline__card">
          <h3>${item.icon} ${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.text)}</p>
        </div>`;
      timelineContainer.appendChild(el);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    timelineContainer.querySelectorAll('.timeline__item').forEach(el => observer.observe(el));
  }
  
  // Update reasons
  const reasonsGrid = document.getElementById('reasonsGrid');
  if (reasonsGrid) {
    const reasons = loveConfig.reasons[lang] || loveConfig.reasons.en;
    reasonsGrid.innerHTML = '';
    reasons.forEach(reason => {
      const card = document.createElement('button');
      card.className = 'reason-card';
      card.innerHTML = `
        <span class="reason-card__icon" aria-hidden="true">${reason.icon}</span>
        <h3>${escapeHTML(reason.title)}</h3>
        <p>${escapeHTML(reason.text)}</p>`;
      card.addEventListener('click', () => card.classList.toggle('is-tapped'));
      reasonsGrid.appendChild(card);
    });
  }
  
  // Update emojis
  const emojiField = document.getElementById('emojiField');
  if (emojiField) {
    const emojis = loveConfig.emojis[lang] || loveConfig.emojis.en;
    emojiField.innerHTML = '';
    emojis.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'emoji-btn';
      btn.textContent = item.symbol;
      btn.setAttribute('aria-label', item.symbol);
      btn.addEventListener('click', (e) => {
        btn.classList.remove('is-tapped');
        void btn.offsetWidth;
        btn.classList.add('is-tapped');
        document.getElementById('emojiMessage').textContent = `${item.symbol} ${item.message}`;
        spawnDoubleTapHearts(e.clientX, e.clientY);
      });
      emojiField.appendChild(btn);
    });
  }
  
  // Update letter text in modal
  const modalText = document.getElementById('letterModalText');
  if (modalText) {
    modalText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
  }
  
  // Update envelope letter text
  const letterText = document.getElementById('letterText');
  if (letterText) {
    letterText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
  }
  
  // Update welcome message
  const typewriterEl = document.getElementById('typewriter');
  if (typewriterEl && !typewriterEl.dataset.started) {
    typewriterEl.dataset.text = loveConfig.welcomeMessage[lang] || loveConfig.welcomeMessage.en;
  }
  
  // Update final message
  const finalTitle = document.querySelector('.surprise__final');
  if (finalTitle && !document.getElementById('surpriseReveal').hidden) {
    finalTitle.innerHTML = (loveConfig.finalMessage[lang] || loveConfig.finalMessage.en) + ' <span class="heart-glyph">❤</span>';
  }
}

// ========== APPLY NAMES ==========
function applyNames() {
  document.querySelectorAll('#herNameWelcome, #herNameFinal').forEach(el => {
    el.textContent = loveConfig.girlfriendName;
  });
  document.title = `For ${loveConfig.girlfriendName} ❤️`;
}

// ========== BUILD IMAGE WITH FALLBACK ==========
function buildImageOrFallback(src, alt) {
  const img = document.createElement('img');
  img.alt = alt || '';
  img.loading = 'lazy';
  img.src = src;
  img.addEventListener('error', () => {
    const fallback = document.createElement('div');
    fallback.className = 'photo-fallback';
    fallback.textContent = '📷';
    img.replaceWith(fallback);
  });
  return img;
}

// ========== FLOATING HEARTS - OPTIMIZED ==========
function setupHeartField(reduced) {
  const field = document.getElementById('heart-field');
  if (reduced || window.innerWidth < 480) return;
  
  const symbols = ['❤', '💕', '💖', '💗', '💓'];
  const MAX_PARTICLES = window.innerWidth < 768 ? 8 : 15;
  let count = 0;
  let interval = null; // FIXED: Preventing multiple intervals

  function spawn() {
    if (count >= MAX_PARTICLES || document.hidden) return;
    const span = document.createElement('span');
    span.className = 'floaty';
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const size = 10 + Math.random() * 16;
    const duration = 10 + Math.random() * 8;
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 80 + 'px';
    span.style.left = left + 'vw';
    span.style.fontSize = size + 'px';
    span.style.animationDuration = duration + 's';
    span.style.setProperty('--drift', drift);
    field.appendChild(span);
    count++;
    setTimeout(() => {
      if (span.parentNode) {
        span.remove();
        count--;
      }
    }, duration * 1000);
  }

  interval = setInterval(spawn, 2000);
  for (let i = 0; i < 3; i++) setTimeout(spawn, i * 400);
  
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(interval);
    } else {
      if (interval) clearInterval(interval);
      interval = setInterval(spawn, 2000);
    }
  });
}

// ========== NAVIGATION & MOBILE MENU (UNIFIED & FIXED) ==========
function setupNav() {
  const links = document.getElementById('navLinks');

  // Active section highlighting
  const sections = [...links.querySelectorAll('a')]
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          links.querySelectorAll('a').forEach(a => {
            a.classList.toggle('is-active', a.getAttribute('href') === id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );
  sections.forEach(s => observer.observe(s));
}

function setupMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  if (!toggle || !links) return;

  function isMenuOpen() {
    return document.body.classList.contains('menu-open');
  }

  function toggleMenu() {
    // CSS visibility is driven by body.menu-open, so that's the source of truth.
    const isOpen = document.body.classList.toggle('menu-open');
    links.classList.toggle('is-open', isOpen);
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));

    if (overlay) {
      overlay.classList.toggle('is-active', isOpen);
    }

    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggle.addEventListener('click', toggleMenu);

  if (overlay) {
    overlay.addEventListener('click', () => {
      if (isMenuOpen()) {
        toggleMenu();
      }
    });
  }

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (isMenuOpen()) {
        toggleMenu();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) {
      toggleMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen()) {
      toggleMenu();
    }
  });
}

// ========== SCROLL PROGRESS ==========
function setupScrollProgress() {
  const fill = document.getElementById('progressFill');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : '0%';
  });
}

// ========== GIFT OPENING ==========
function setupGiftOpening(reduced) {
  const openingScreen = document.getElementById('opening');
  const welcomeScreen = document.getElementById('welcome');
  const giftBox = document.getElementById('giftBox');
  const openBtn = document.getElementById('openGiftBtn');

  function openGift() {
    if (giftBox.classList.contains('is-open')) return;
    giftBox.classList.add('is-open');

    if (!reduced) burstParticles(giftBox);

    setTimeout(() => {
      openingScreen.hidden = true;
      welcomeScreen.hidden = false;
      welcomeScreen.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      startTypewriter();
    }, reduced ? 150 : 800);
  }

  giftBox.addEventListener('click', openGift);
  openBtn.addEventListener('click', openGift);
}

// ========== BURST PARTICLES - OPTIMIZED ==========
function burstParticles(originEl) {
  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const symbols = ['❤', '💕', '✨', '💖'];
  const count = Math.min(20, Math.floor(window.innerWidth / 30));

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'burst-particle';
    p.textContent = symbols[i % symbols.length];
    p.style.left = originX + 'px';
    p.style.top = originY + 'px';
    p.style.fontSize = (12 + Math.random() * 14) + 'px';
    document.body.appendChild(p);

    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    const distance = 80 + Math.random() * 140;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    p.animate(
      [
        { transform: 'translate(0,0) scale(0.5)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 0 }
      ],
      { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(.22,.9,.35,1)' }
    ).onfinish = () => p.remove();
  }
}

// ========== TYPING ANIMATION (FIXED text extraction) ==========
function startTypewriter() {
  const el = document.getElementById('typewriter');
  if (el.dataset.started) return;
  el.dataset.started = 'true';

  // If text isn't already set by the updateDynamicContent, fallback
  const text = el.dataset.text || loveConfig.welcomeMessage[currentLang] || loveConfig.welcomeMessage.en;
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  let i = 0;

  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(tick, 25);
    }
  }
  tick();
}

function setupWelcomeTyping() {
  document.getElementById('continueBtn').addEventListener('click', () => {
    document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
  });
}

// ========== GALLERY ==========
function setupGallery() {
  const grid = document.getElementById('masonryGallery');
  loveConfig.photos.forEach((photo, index) => {
    const card = document.createElement('button');
    const isPolaroid = index % 3 === 0;
    card.className = 'photo-card' + (isPolaroid ? ' photo-card--polaroid' : '');
    card.style.setProperty('--tilt', (Math.random() * 4 - 2).toFixed(1) + 'deg');
    card.setAttribute('aria-label', `Open photo ${index + 1}: ${photo.caption}`);
    card.dataset.index = String(index);

    card.appendChild(buildImageOrFallback(photo.src, photo.caption));

    const caption = document.createElement('span');
    caption.className = 'photo-card__caption';
    caption.textContent = photo.caption;
    card.appendChild(caption);

    card.addEventListener('click', () => openLightbox(index));

    let lastTap = 0;
    card.addEventListener('click', (e) => {
      const now = Date.now();
      if (now - lastTap < 350) spawnDoubleTapHearts(e.clientX, e.clientY);
      lastTap = now;
    });

    grid.appendChild(card);
  });
}

// ========== DOUBLE TAP HEARTS ==========
function spawnDoubleTapHearts(x, y) {
  const count = Math.min(6, Math.floor(window.innerWidth / 60));
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'double-tap-heart';
    h.textContent = '❤';
    h.style.left = x + (Math.random() * 30 - 15) + 'px';
    h.style.top = y + (Math.random() * 20 - 10) + 'px';
    h.style.fontSize = (14 + Math.random() * 14) + 'px';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 800);
  }
}

// ========== LIGHTBOX ==========
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  renderLightbox();
  const lightbox = document.getElementById('lightbox');
  lightbox.hidden = false;
  document.getElementById('lightboxClose').focus();
  document.body.style.overflow = 'hidden';
}

function renderLightbox() {
  const photo = loveConfig.photos[currentLightboxIndex];
  const img = document.getElementById('lightboxImg');
  img.src = photo.src;
  img.alt = photo.caption;
  img.onerror = () => { img.style.display = 'none'; };
  img.onload = () => { img.style.display = 'block'; };
  document.getElementById('lightboxCaption').textContent = photo.caption;
  document.getElementById('lightboxCounter').textContent = `${currentLightboxIndex + 1} / ${loveConfig.photos.length}`;
}

function closeLightbox() {
  document.getElementById('lightbox').hidden = true;
  document.body.style.overflow = '';
}

function setupLightbox() {
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + loveConfig.photos.length) % loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById('lightboxNext').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });
}

// ========== SLIDESHOW ==========
function setupSlideshow() {
  const track = document.getElementById('slideshowTrack');
  const dotsWrap = document.getElementById('slideDots');
  let current = 0;
  let timer = null;

  loveConfig.photos.forEach((photo, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' is-active' : '');
    slide.appendChild(buildImageOrFallback(photo.src, photo.caption));
    const cap = document.createElement('div');
    cap.className = 'slide__caption';
    cap.textContent = `Memory ${String(i + 1).padStart(2, '0')} — ${photo.caption}`;
    slide.appendChild(cap);
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to memory ${i + 1}`);
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = track.querySelectorAll('.slide');
  const dots = dotsWrap.querySelectorAll('button');

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('slidePrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('slideNext').addEventListener('click', () => goTo(current + 1));

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
    } else if (slides.length > 1) {
      restart();
    }
  });

  if (slides.length > 1) restart();
}

// ========== LOVE LETTER ==========
function setupLetter() {
  const lang = currentLang;
  document.getElementById('letterText').textContent = loveConfig.letter[lang] || loveConfig.letter.en;
}

// ========== LETTER MODAL ==========
function setupLetterModal() {
  const envelope = document.getElementById('envelope');
  const openBtn = document.getElementById('openLetterBtn');
  const modal = document.getElementById('letterModal');
  const modalText = document.getElementById('letterModalText');
  const closeBtn = document.getElementById('letterModalClose');

  function openLetterModal() {
    const lang = currentLang || 'en';
    modalText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn.focus(), 100);
  }

  function closeLetterModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (openBtn) {
      setTimeout(() => openBtn.focus(), 100);
    }
  }

  if (envelope) {
    envelope.addEventListener('click', openLetterModal);
  }

  if (openBtn) {
    openBtn.addEventListener('click', openLetterModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLetterModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLetterModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeLetterModal();
    }
  });
}

// ========== HEART TAP ==========
function setupHeartTap(reduced) {
  const heart = document.getElementById('heartTap');
  const countEl = document.getElementById('heartCount');
  const msgEl = document.getElementById('heartMsg');
  let count = 0;

  const milestones = [
    [1, currentLang === 'am' ? '❤️ ልቤ የአንቺ ነው።' : '❤️ My heart chooses you.'],
    [5, currentLang === 'am' ? 'ደጋግመሽ ትመጪያለሽ። 🥰' : 'You keep coming back for more. 🥰'],
    [15, currentLang === 'am' ? 'እሺ... ልቤን ሙሉ በሙሉ የሰረቅሽው ይመስለኛል። 😂❤️' : 'Okay... I think you\'ve stolen my heart completely. 😂❤️'],
    [30, currentLang === 'am' ? 'በዚህ ነጥብ ላይ በይፋ የአንቺ ነው። 💍😆' : 'At this point it\'s officially, legally yours. 💍😆']
  ];

  heart.addEventListener('click', (e) => {
    count++;
    countEl.textContent = String(count);
    heart.classList.remove('is-beating');
    void heart.offsetWidth;
    heart.classList.add('is-beating');

    if (!reduced) {
      const rect = heart.getBoundingClientRect();
      const heartCount = Math.min(3, Math.floor(window.innerWidth / 120));
      for (let i = 0; i < heartCount; i++) {
        const fh = document.createElement('span');
        fh.className = 'flying-heart';
        fh.textContent = '❤';
        fh.style.left = rect.left + rect.width / 2 + (Math.random() * 20 - 10) + 'px';
        fh.style.top = rect.top + 'px';
        fh.style.fontSize = (14 + Math.random() * 12) + 'px';
        document.body.appendChild(fh);
        setTimeout(() => fh.remove(), 1200);
      }
    }

    const match = [...milestones].reverse().find(([n]) => count >= n);
    if (match) msgEl.textContent = match[1];
  });
}

// ========== LOVE COUNTER ==========
function setupLoveCounter() {
  if (!loveConfig.showLoveCounter) return;
  const section = document.getElementById('loveCounter');
  const start = new Date(loveConfig.anniversaryDate);
  if (isNaN(start.getTime())) return;

  section.hidden = false;
  const els = {
    d: document.getElementById('cDays'),
    h: document.getElementById('cHours'),
    m: document.getElementById('cMinutes'),
    s: document.getElementById('cSeconds')
  };

  function tick() {
    const diff = Math.max(0, Date.now() - start.getTime());
    const totalSeconds = Math.floor(diff / 1000);
    els.d.textContent = String(Math.floor(totalSeconds / 86400));
    els.h.textContent = String(Math.floor((totalSeconds % 86400) / 3600));
    els.m.textContent = String(Math.floor((totalSeconds % 3600) / 60));
    els.s.textContent = String(totalSeconds % 60);
  }
  tick();
  setInterval(tick, 1000);
}

// ========== SURPRISE ==========
function setupSurprise(reduced) {
  document.getElementById('herNameFinal').textContent = loveConfig.girlfriendName;
  const revealBtn = document.getElementById('revealBtn');
  const pre = document.getElementById('surprisePre');
  const reveal = document.getElementById('surpriseReveal');

  const finalTitle = reveal.querySelector('.surprise__final');
  finalTitle.innerHTML = (loveConfig.finalMessage[currentLang] || loveConfig.finalMessage.en) + ' <span class="heart-glyph">❤</span>';

  revealBtn.addEventListener('click', () => {
    pre.hidden = true;
    reveal.hidden = false;
    reveal.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    if (!reduced) {
      launchConfetti();
      burstParticles(revealBtn);
    }
  });
}

// ========== CONFETTI - OPTIMIZED ==========
function launchConfetti() {
  const colors = ['#c2185b', '#d4af37', '#f7c6d9', '#ffffff'];
  const count = Math.min(40, Math.floor(window.innerWidth / 8));
  
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.width = piece.style.height = (4 + Math.random() * 4) + 'px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

// ========== FINAL PHOTO ==========
function setupFinalPhoto() {
  const wrap = document.getElementById('finalPhoto');
  const photo = loveConfig.photos[loveConfig.finalPhotoIndex] || loveConfig.photos[0];
  if (!photo) return;
  const img = document.getElementById('finalPhotoImg');
  img.src = photo.src;
  img.alt = photo.caption;
  img.addEventListener('error', () => {
    wrap.innerHTML = '<div class="photo-fallback" style="border-radius:50%;height:100%;">📷</div>';
  });
}

// ========== SECRET EASTER EGG ==========
function setupSecretMessage() {
  const logo = document.getElementById('secretLogo');
  const modal = document.getElementById('secretModal');
  const closeBtn = document.getElementById('secretClose');
  let taps = 0;

  logo.addEventListener('click', () => {
    taps++;
    if (taps >= 5) {
      modal.hidden = false;
      taps = 0;
    }
  });

  closeBtn.addEventListener('click', () => modal.hidden = true);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.hidden = true;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) modal.hidden = true;
  });
}

// ========== CURSOR EFFECTS - OPTIMIZED ==========
function setupCursorEffects(reduced) {
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if (reduced || isTouch) return;

  let lastSpawn = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpawn < 80) return;
    lastSpawn = now;
    const dot = document.createElement('span');
    dot.textContent = Math.random() > 0.6 ? '✨' : '❤';
    dot.style.position = 'fixed';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.pointerEvents = 'none';
    dot.style.zIndex = '999';
    dot.style.fontSize = '10px';
    dot.style.color = 'rgba(247,198,217,0.6)';
    dot.style.transform = 'translate(-50%,-50%)';
    document.body.appendChild(dot);
    dot.animate(
      [
        { opacity: 0.6, transform: 'translate(-50%,-50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%,-50%) scale(0.4) translateY(-8px)' }
      ],
      { duration: 500 }
    ).onfinish = () => dot.remove();
  });

  document.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    ripple.style.position = 'fixed';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = ripple.style.height = '8px';
    ripple.style.border = '1px solid rgba(194,24,91,0.4)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '999';
    ripple.style.transform = 'translate(-50%,-50%)';
    document.body.appendChild(ripple);
    ripple.animate(
      [
        { opacity: 1, width: '8px', height: '8px' },
        { opacity: 0, width: '40px', height: '40px' }
      ],
      { duration: 450 }
    ).onfinish = () => ripple.remove();
  });
}

// ========== UTILITY ==========
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}