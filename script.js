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

  // Daily journal entries; adjust dates, names, topics, and messages as needed.
  dailyMessages: [
    {
      date: "2026-11-01",
      topic: { en: "🎉🎂 Melkam Lidet Yene Fikir ❤️👑🌹", am: "🎉🎂 Melkam Lidet Yene Fikir ❤️👑🌹" },
      description: {
        en: "Zare 🌟 le ene betam liyu ken new 😍 mikniyatum betam konjo ena miwdahu sew 👸✨ wedezih alem yemetabet ken selahon 🎂🎉. Behiywote wust anchin bemagnete 💖 betam edilegna sewu negn 🙏😊.\nAnchi 🌹\n🫶 yene desta 😍,\n🫶 yene selam 🕊️,\n🫶ena yene hayil 💪 nesh.\n\nFikirish ❤️ hiwoten tirgum yalew yadergewal ✨💞.\nAnchi melet le ene Betam tiru ❤️\n\n🫶 best guadenyaye 👫💕,\n🫶 tinish ehete 🤗🌸,\n🫶 ye wedefit misteye 👰❤️,\n🫶 ye lijoche enat 👶💖,\n🫶 le enem enate 🌹🙏,\n🫶  yene liyu 💎,\n🫶 yene wud 😘,\n🫶 yene fikir ❤️,\n🫶yene mar 🍯💕,\n🫶 yene hulu neger 🌍💞 nesh. Liben bedesta yemimolaw sew 😘❤️ silehonsh betam ameseginalew 🙏💖.\n\nGeta eyesus🎂🎊\n🫶 malekiya belelew desta 😄🌈,\n🫶  be tiru tena 💪🌹,\n🫶  be siket 🏆✨,\n🫶 be bereket 🙏💫,\n🫶 geta be tsega hulu 💕 endberkish emegnalew yen wud ❤️.\n\nAnchi 👑 beewnet asdenaki set nesh 🌹✨. Yene silehonsh, getan betam ameseginalew ❤️🙏💎.\n\nHiwot yetim biwiseden 🌍✨ ebakish ke libish ❤️ endetesewocign 🤗😘. Ene gin\n🥰  hulem afekirshalehu ❤️🔥,\n🥰  hulem asibeshalehu 🤝💞,\n🥰  hulem akbireshalehu 👑🌹.\nHulem be timrtish, be agelgelotish, be destash ena hazen hulu be gonish negn 🥰.\n\nYihin hulu hulem astawshi yen mar💕✨.\n🎊🎂 Melkam Lidet, Yene Nigist 👑,Yene liyu,  Yene enat, Destaye 😍, Yene Hulum Neger 💞, ena Yezelalem Fikire ❤️🌹🎂\n🎁🎉  ✨💫\n💖 Afekirshalehu Yene Fikir ❤️🔥🌹💘\nZare, Nege, ena Lezelalem ❤️♾️👑💍🌹",
        am: "Zare 🌟 le ene betam liyu ken new 😍 mikniyatum betam konjo ena miwdahu sew 👸✨ wedezih alem yemetabet ken selahon 🎂🎉. Behiywote wust anchin bemagnete 💖 betam edilegna sewu negn 🙏😊.\nAnchi 🌹\n🫶 yene desta 😍,\n🫶 yene selam 🕊️,\n🫶ena yene hayil 💪 nesh.\n\nFikirish ❤️ hiwoten tirgum yalew yadergewal ✨💞.\nAnchi melet le ene Betam tiru ❤️\n\n🫶 best guadenyaye 👫💕,\n🫶 tinish ehete 🤗🌸,\n🫶 ye wedefit misteye 👰❤️,\n🫶 ye lijoche enat 👶💖,\n🫶 le enem enate 🌹🙏,\n🫶  yene liyu 💎,\n🫶 yene wud 😘,\n🫶 yene fikir ❤️,\n🫶yene mar 🍯💕,\n🫶 yene hulu neger 🌍💞 nesh. Liben bedesta yemimolaw sew 😘❤️ silehonsh betam ameseginalew 🙏💖.\n\nGeta eyesus🎂🎊\n🫶 malekiya belelew desta 😄🌈,\n🫶  be tiru tena 💪🌹,\n🫶  be siket 🏆✨,\n🫶 be bereket 🙏💫,\n🫶 geta be tsega hulu 💕 endberkish emegnalew yen wud ❤️.\n\nAnchi 👑 beewnet asdenaki set nesh 🌹✨. Yene silehonsh, getan betam ameseginalew ❤️🙏💎.\n\nHiwot yetim biwiseden 🌍✨ ebakish ke libish ❤️ endetesewocign 🤗😘. Ene gin\n🥰  hulem afekirshalehu ❤️🔥,\n🥰  hulem asibeshalehu 🤝💞,\n🥰  hulem akbireshalehu 👑🌹.\nHulem be timrtish, be agelgelotish, be destash ena hazen hulu be gonish negn 🥰.\n\nYihin hulu hulem astawshi yen mar💕✨.\n🎊🎂 Melkam Lidet, Yene Nigist 👑,Yene liyu,  Yene enat, Destaye 😍, Yene Hulum Neger 💞, ena Yezelalem Fikire ❤️🌹🎂\n🎁🎉  ✨💫\n💖 Afekirshalehu Yene Fikir ❤️🔥🌹💘\nZare, Nege, ena Lezelalem ❤️♾️👑💍🌹"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-02",
      topic: { en: "Happy 1 Month Anniversary, Yene Fikir, Yene leyu, Yene wud, Yene enat! ❤️🥹🌹💖✨🤍🥰", am: "Happy 1 Month Anniversary, Yene Fikir, Yene leyu, Yene wud, Yene enat! ❤️🥹🌹💖✨🤍🥰" },
      description: {
        en: "And wer bicha bihonim, yehonew yene hiywot hulu qeyerwal Anchin ka'awkuwsh qen jemro, libe bedesta ❤️, beselam 🕊️, befekir 💕 temoltwal. Anch yene smile 😊, yene selam 🤍, yene desta 😍, ena yene hulu neger nesh. 👸❤️\nFitesh 🌸yen nafkot ☀️ new, fegegtash betlye sakish yen fiker minlibelish, uffff 😊 yen desta💪 nw dimtsish 🎶 yene selam 🕊️ new. 🥹❤️\nAnd wer bicha new... gin yene lib ❤️ lezelalem anch gar endinor new yemifelgew. Beyekenu ketilant yebelete ewedishalehu degmo afkershalehu. 🌹💕♾️\nQal egebalshalew... 🤝❤️ Bedestash 😂🥰 abresh esakalalehu. Be enbash /behazen😢🤍 abresh aleqsalew/azenalehu😭 🌧️. Hulem kegonsh eqomalew. Hulum gize astawosh yene hulu neger endhonsh. ❤️🫂✨....be ene lib anch yelishibet bota bitaki noro be rasish tikegn nebera betem wudu neger nesh🥰👸\nEgziabher 🙏🤍 fikirachinin yibarek. Befikiru ❤️ yatsinaln. Hulum almachinin 🌅💍 yifetsimaln. Ende zare, lezelalem abren endenor yirdan. 🕊️✨thank you ... 🙏❤️ Silewededshgn🥹💕 🤗🤍 Silemegnatsh 🌹❤️ be ene hiywot betam konjo miraf nesh . 📖💖\nKalat yemayigeltsutn fikir ewedishalehu. ❤️♾️ Zare ketnant yebelete ewedishalehu... 🥹💕 Negem kezare yebelete ewedishalehu... ❤️🌹 Lezelalem anch bicha yene lib nesh. 👸💍♾️\nI Love You Endless, Yene Queen. 👑❤️🥹🌹💖🤍🫶✨😘💋🌹💞♾️",
        am: "And wer bicha bihonim, yehonew yene hiywot hulu qeyerwal Anchin ka'awkuwsh qen jemro, libe bedesta ❤️, beselam 🕊️, befekir 💕 temoltwal. Anch yene smile 😊, yene selam 🤍, yene desta 😍, ena yene hulu neger nesh. 👸❤️\nFitesh 🌸yen nafkot ☀️ new, fegegtash betlye sakish yen fiker minlibelish, uffff 😊 yen desta💪 nw dimtsish 🎶 yene selam 🕊️ new. 🥹❤️\nAnd wer bicha new... gin yene lib ❤️ lezelalem anch gar endinor new yemifelgew. Beyekenu ketilant yebelete ewedishalehu degmo afkershalehu. 🌹💕♾️\nQal egebalshalew... 🤝❤️ Bedestash 😂🥰 abresh esakalalehu. Be enbash /behazen😢🤍 abresh aleqsalew/azenalehu😭 🌧️. Hulem kegonsh eqomalew. Hulum gize astawosh yene hulu neger endhonsh. ❤️🫂✨....be ene lib anch yelishibet bota bitaki noro be rasish tikegn nebera betem wudu neger nesh🥰👸\nEgziabher 🙏🤍 fikirachinin yibarek. Befikiru ❤️ yatsinaln. Hulum almachinin 🌅💍 yifetsimaln. Ende zare, lezelalem abren endenor yirdan. 🕊️✨thank you ... 🙏❤️ Silewededshgn🥹💕 🤗🤍 Silemegnatsh 🌹❤️ be ene hiywot betam konjo miraf nesh . 📖💖\nKalat yemayigeltsutn fikir ewedishalehu. ❤️♾️ Zare ketnant yebelete ewedishalehu... 🥹💕 Negem kezare yebelete ewedishalehu... ❤️🌹 Lezelalem anch bicha yene lib nesh. 👸💍♾️\nI Love You Endless, Yene Queen. 👑❤️🥹🌹💖🤍🫶✨😘💋🌹💞♾️"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-03",
      topic: { en: "Ewyyyy yene bal 😍😍 ....", am: "Ewyyyy yene bal 😍😍 ...." },
      description: {
        en: "Ewyyyy yene bal 😍😍 ....yemr betam bzu amet yekoyenbyakl nw misemagn leka 1 weriachin nw .....bcha beneberen bezih wer wst betam destegna neberku bante I know Kalat masemamer alchilbetm gn Lene megletse kechalkut belay neh ...Lene abate talak wedme mekariye kezih Hulu belay gn balnethn betam wedjewalehu ..asteway neh adamachi neh betam tagash neh ....mistyewa stawera joro bcha sayhon lbm nw mtsetat ena bezih betam nw Des milat .....zarem negem eske wediagnaw twedhalech kelbua ....wedefiten kantega sasbew menor ynafkegnal ....abreh lemenor eguagualehu ....geta siawk yemejemeria ye ewnet fkrua ena balaua ante neh lk yemejemeriawa edehonkew Hulu yemetseleshawa edthon atbka be getaway fit ttselyalech ...degmom yhonal ......sew edet bande bzu neger ynorewal ....gubzna, egziabhern mefrat ,mewded  ,tgat ,sewn yemr mewded,tamagnnet ,thtna ,merinet ,eneja bcha taskenagnaleh wd bale .....ena yene slehonk ena kante bzu neger slemtawersegn keza degmo lenem leljichim mrt bal ena abat edemiwetah amnalew .....ena mnm neger bebkat edemtweta ergtegna negn ....bcha Lene na lebete ke  krstos ketlo ras slehonk ena betachinn betbeb slemtmera edesetalehu.....wedhalehu😍😍😍😍 1 wer molan edalnew Hulu bzu ametatn abro yaskotren ......eske erjina blom eskemot dres mayleyayu tndoch yadrgen lela mn ellalehu ....bzu desta ena hazenochin abrew mikafelu basement yaderegut egziabher ena fkir eske wediagnaw yatsenachew ljoch yadrgen .....adelem relationshipachin ykrna egna rasachin besu eji Nen ...hulunm neger egziabher begizew wb edemiadergew amnalehu ....ke gabcha befit mnm aynet gnnunet yelelachew bekdsna egziabhern yakeberu baletdaroch nw mnhonew eshi .....ena balebet lbhn hasabhn tebk yene bal ..kelb afekrhalehu 😍😍😍😘😍😘😘😘😘😍",
        am: "Ewyyyy yene bal 😍😍 ....yemr betam bzu amet yekoyenbyakl nw misemagn leka 1 weriachin nw .....bcha beneberen bezih wer wst betam destegna neberku bante I know Kalat masemamer alchilbetm gn Lene megletse kechalkut belay neh ...Lene abate talak wedme mekariye kezih Hulu belay gn balnethn betam wedjewalehu ..asteway neh adamachi neh betam tagash neh ....mistyewa stawera joro bcha sayhon lbm nw mtsetat ena bezih betam nw Des milat .....zarem negem eske wediagnaw twedhalech kelbua ....wedefiten kantega sasbew menor ynafkegnal ....abreh lemenor eguagualehu ....geta siawk yemejemeria ye ewnet fkrua ena balaua ante neh lk yemejemeriawa edehonkew Hulu yemetseleshawa edthon atbka be getaway fit ttselyalech ...degmom yhonal ......sew edet bande bzu neger ynorewal ....gubzna, egziabhern mefrat ,mewded  ,tgat ,sewn yemr mewded,tamagnnet ,thtna ,merinet ,eneja bcha taskenagnaleh wd bale .....ena yene slehonk ena kante bzu neger slemtawersegn keza degmo lenem leljichim mrt bal ena abat edemiwetah amnalew .....ena mnm neger bebkat edemtweta ergtegna negn ....bcha Lene na lebete ke  krstos ketlo ras slehonk ena betachinn betbeb slemtmera edesetalehu.....wedhalehu😍😍😍😍 1 wer molan edalnew Hulu bzu ametatn abro yaskotren ......eske erjina blom eskemot dres mayleyayu tndoch yadrgen lela mn ellalehu ....bzu desta ena hazenochin abrew mikafelu basement yaderegut egziabher ena fkir eske wediagnaw yatsenachew ljoch yadrgen .....adelem relationshipachin ykrna egna rasachin besu eji Nen ...hulunm neger egziabher begizew wb edemiadergew amnalehu ....ke gabcha befit mnm aynet gnnunet yelelachew bekdsna egziabhern yakeberu baletdaroch nw mnhonew eshi .....ena balebet lbhn hasabhn tebk yene bal ..kelb afekrhalehu 😍😍😍😘😍😘😘😘😘😍"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-04",
      topic: { en: "Yene wd sew ...", am: "Yene wd sew ..." },
      description: {
        en: "Yene wd sew ...yene melkam bal enkuan teweledklgn😍😍😍😍😍🎈🎈 slawekuh Des blognal ... enkuan ketay zemenen abrehegn mtnor sew honk betam edlegna sew negn ....bekoyenbachew giziatoch kemlh belay destegna neberku ...HBD🎂🎂🎂 bezih seat abreh bihon Des ylegn neber ....gn beka slehulum egziabher ymesgen.....ante bzu negere neh yehiwote 1 sew adelehm wedhalehu 😍😍degmom afekrhalehu yewedefit bale neh kantegar menor betam ynafkegnal ....ena degmo wetatneth esuga ylek ...afla gulbeth le egziabher ywesed lerasu yaderegew ....sew edewm sichemr haylu ydekm adel ...antega gn edmeh sichemr haylh ychemr ..keza degmo tgegnneth ychemer ...Keri zemenhn bzu mtserabet bzu mtnorbet ena bzu mtageleglbet yhun ...pol yenorew yetetsafeletn neber egziabher be ahzab ,benegestat ena be esraeln ljoch fit amen yemishekem nw edetebalew lk edezia edecheresew Hulu yante hiwot egziabher edetsafew hono yleklh ....bale betam edemwedh tawkaleh lante mn yakl Bota ena fkr edalebgn tawkaleh gn still negrhalew wedhalehu eshi❤️❤️❤️❤️❤️❤️ kebzu neger antsar amgnehalehu ,tekebyehalehu ,afekrhalehu .....by the way fkr yetemarkubh sew neh ...malet fkr wst yalu sewech yalhonew image enega yefeterut ...malew sew fkr wst hono le geta ,le tmhrtu ena lesewech gize Yale aymeslegnm beteley ke spiritual antsar gize betam ykeleklal bye nw masbew gn antega yalegn gngnunet ybelt miastega hono agegnehut ....ena tkklegnawn ye fikir trgum antega agichalehu ......ene wesgnalehu sijemer egziabher balebet snor nw hiwot yalegn keza wchi yemotku sew negn benena bante ye fkr gngnunet egziabher sierra Des milegn leza nw egziabher mekakelegna huno bemekakelachin sikener say beka betam nw wste mirekaw ..behiwot hedalehu masbew egziabher beneger Hulu lay edale sasb nw .......nege tnat blen bakednew neger laym be mulat edale asbalehu ....bcha yene bal enkuan 24 amet ga deresk tbeltegnaleh ena akebrhalehu edemist etazezhalehu eshi ....",
        am: "Yene wd sew ...yene melkam bal enkuan teweledklgn😍😍😍😍😍🎈🎈 slawekuh Des blognal ... enkuan ketay zemenen abrehegn mtnor sew honk betam edlegna sew negn ....bekoyenbachew giziatoch kemlh belay destegna neberku ...HBD🎂🎂🎂 bezih seat abreh bihon Des ylegn neber ....gn beka slehulum egziabher ymesgen.....ante bzu negere neh yehiwote 1 sew adelehm wedhalehu 😍😍degmom afekrhalehu yewedefit bale neh kantegar menor betam ynafkegnal ....ena degmo wetatneth esuga ylek ...afla gulbeth le egziabher ywesed lerasu yaderegew ....sew edewm sichemr haylu ydekm adel ...antega gn edmeh sichemr haylh ychemr ..keza degmo tgegnneth ychemer ...Keri zemenhn bzu mtserabet bzu mtnorbet ena bzu mtageleglbet yhun ...pol yenorew yetetsafeletn neber egziabher be ahzab ,benegestat ena be esraeln ljoch fit amen yemishekem nw edetebalew lk edezia edecheresew Hulu yante hiwot egziabher edetsafew hono yleklh ....bale betam edemwedh tawkaleh lante mn yakl Bota ena fkr edalebgn tawkaleh gn still negrhalew wedhalehu eshi❤️❤️❤️❤️❤️❤️ kebzu neger antsar amgnehalehu ,tekebyehalehu ,afekrhalehu .....by the way fkr yetemarkubh sew neh ...malet fkr wst yalu sewech yalhonew image enega yefeterut ...malew sew fkr wst hono le geta ,le tmhrtu ena lesewech gize Yale aymeslegnm beteley ke spiritual antsar gize betam ykeleklal bye nw masbew gn antega yalegn gngnunet ybelt miastega hono agegnehut ....ena tkklegnawn ye fikir trgum antega agichalehu ......ene wesgnalehu sijemer egziabher balebet snor nw hiwot yalegn keza wchi yemotku sew negn benena bante ye fkr gngnunet egziabher sierra Des milegn leza nw egziabher mekakelegna huno bemekakelachin sikener say beka betam nw wste mirekaw ..behiwot hedalehu masbew egziabher beneger Hulu lay edale sasb nw .......nege tnat blen bakednew neger laym be mulat edale asbalehu ....bcha yene bal enkuan 24 amet ga deresk tbeltegnaleh ena akebrhalehu edemist etazezhalehu eshi ...."
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-05",
      topic: { en: "I Want to Grow With You 🌱", am: "ከአንቺ ጋር ማደግ እፈልጋለሁ 🌱" },
      description: {
        en: "I do not imagine love as two people who never change; I imagine it as two people who keep learning how to understand one another. I want to celebrate your growth, listen when your dreams shift, and make room for both of us to become more fully ourselves. We will each have lessons, hopes, and imperfect days, and I want to meet them with curiosity instead of judgment. Growing together means being honest, apologizing when we need to, and choosing kindness again. I feel hopeful about the person I am becoming, and even more hopeful about the good we can encourage in each other along the way.",
        am: "ፍቅርን ፈጽሞ እንደማይለወጡ ሁለት ሰዎች አላስብም፤ እርስ በርሳቸውን መረዳት መማር የሚቀጥሉ ሰዎች እንደሆኑ አስባለሁ። እድገትሽን ማክበር፣ ሕልሞችሽ ሲቀየሩ ማዳመጥ፣ ሁለታችንም ማንነታችንን በሙሉ እንድንሆን ስፍራ መስጠት እፈልጋለሁ። እያንዳንዳችን ትምህርቶች፣ ተስፋዎችና ፍጹም ያልሆኑ ቀናት ይኖሩናል፤ እነዚህንም በፍርድ ሳይሆን በጉጉት መቀበል እፈልጋለሁ። አብሮ ማደግ ሐቀኛ መሆን፣ ሲያስፈልግ ይቅርታ መጠየቅና ደግነትን እንደገና መምረጥ ነው። እየሆንኩ ባለው ሰው ተስፋ አለኝ፤ በመንገዳችንም እርስ በርሳችን የምናበረታታው መልካምነት የበለጠ ተስፋ ይሰጠኛል።"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-06",
      topic: { en: "You Make Ordinary Days Beautiful ☀️", am: "ተራ ቀናትን ውብ ታደርጊያለሽ ☀️" },
      description: {
        en: "Some of my favorite memories are not grand occasions at all. They are the simple minutes: sharing a story, checking in on each other, laughing at something small, or sitting quietly without needing to fill every pause. You help me notice the beauty that is already present in an ordinary day. A familiar place feels warmer when I know I will tell you about it later, and a simple plan becomes something I look forward to when it includes you. Thank you for making everyday life feel gentler and more alive. I treasure the quiet happiness we find in moments that might otherwise pass unnoticed.",
        am: "ከምወዳቸው ትዝታዎች መካከል ብዙዎቹ ታላላቅ ዝግጅቶች አይደሉም። ቀላል ደቂቃዎች ናቸው፤ ታሪክ መካፈል፣ እርስ በርሳችን መጠየቅ፣ ትንሽ ነገር ላይ መሳቅ ወይም ጸጥታን ሁሉ በቃላት መሙላት ሳያስፈልግ አብሮ መቀመጥ። በተራ ቀን ውስጥ ያለውን ውበት እንዳስተውል ትረጂኛለሽ። በኋላ ልነግርሽ እንደምችል ሳውቅ የታወቀ ቦታ የበለጠ ሞቅ ያለ ይሆናል፤ በአንቺ የሚካፈል ቀላል እቅድም በጉጉት የምጠብቀው ነገር ይሆናል። የዕለት ተዕለት ሕይወትን ለስላሳና ሕያው ስለምታደርጊ አመሰግናለሁ። ሳይታወቁ ሊያልፉ በሚችሉ ጊዜያት የምናገኘውን ጸጥ ያለ ደስታ እጠብቃለሁ።"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-07",
      topic: { en: "A Promise From My Heart 🤍", am: "ከልቤ የሚመነጭ ቃል 🤍" },
      description: {
        en: "Here is the promise I want to keep offering you: I will try to listen with care, speak to you with respect, and never treat your feelings as something small. I will celebrate your joys without envy and sit beside you through difficult moments without pretending to have every answer. I will keep learning what helps you feel seen, safe, and appreciated, while also being honest about my own heart. I know that love is shown through steady actions more than beautiful words. So I want my everyday choices to reflect the tenderness I feel for you, and I want us to keep making space for trust, laughter, and understanding.",
        am: "ሁልጊዜ ልሰጥሽ የምፈልገው ቃል ይህ ነው፤ በጥንቃቄ ለማዳመጥ፣ በክብር ለመናገርና ስሜትሽን ትንሽ ነገር አድርጌ ፈጽሞ ላለመቁጠር እሞክራለሁ። ደስታሽን በቅናት ሳይሆን በሙሉ ልብ እደሰታለሁ፤ በአስቸጋሪ ጊዜም ሁሉን መልስ እንዳለኝ ሳስመስል ከጎንሽ እቆማለሁ። እንደታየሽ፣ ደህንነት እንደተሰማሽና እንደተወደድሽ እንዲሰማሽ የሚረዳውን መማር እቀጥላለሁ፣ የራሴንም ልብ በሐቀኝነት እገልጻለሁ። ፍቅር ከውብ ቃላት በላይ በቋሚ ተግባር ይታያል። ስለዚህ የዕለት ምርጫዎቼ ለአንቺ የሚሰማኝን ርህራሄ እንዲያሳዩ እፈልጋለሁ፤ ለእምነት፣ ለሳቅና ለመግባባትም ስፍራ አብረን እንፍጠር።"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-08",
      topic: { en: "You Are Worth Every Beautiful Thought 🌷", am: "ውብ ሐሳብ ሁሉ ይገባሻል 🌷" },
      description: {
        en: "I hope you know that you deserve to be spoken to with gentleness, supported in the dreams that matter to you, and appreciated for the person you are—not only for what you do for others. When I think of you, I think of a heart that keeps trying, a spirit that carries quiet strength, and a presence that brings comfort without asking for attention. If you ever doubt your value, remember that your worth does not depend on a perfect day or on anyone's approval. I see so much beauty in your character and in the way you care. You deserve every sincere compliment, every thoughtful gesture, and every peaceful moment that reminds you how precious you are.",
        am: "በርህራሄ እንዲነገርልሽ፣ ለአንቺ ጠቃሚ በሆኑ ሕልሞች እንድትደገፊና ለሆንሽው ሰው እንድትወደሺ ይገባሻል፤ ለሌሎች በምታደርጊው ብቻ አይደለም። ስላንቺ ሳስብ መሞከር የማትተውን ልብ፣ ጸጥ ያለ ጥንካሬን የተሸከመ መንፈስና ትኩረት ሳይጠይቅ ማጽናኛ የሚሰጥ መገኘትሽን አስባለሁ። ዋጋሽን ከተጠራጠርሽ ማንነትሽ በፍጹም ቀን ወይም በሌሎች ፈቃድ ላይ እንዳልተመሰረተ አስታውሺ። በባህሪሽና በእንክብካቤሽ ውስጥ ብዙ ውበት አያለሁ። እውነተኛ ምስጋናዎች፣ አሳቢ ድርጊቶችና ምን ያህል ውድ እንደሆንሽ የሚያስታውሱ ሰላማዊ ጊዜያት ሁሉ ይገቡሻል።"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-09",
      topic: { en: "My Favorite Future 🌙", am: "የምወደው ወደፊት 🌙" },
      description: {
        en: "When I picture the future, I do not need it to be grand or perfectly planned. My favorite picture is made of small things we have not done yet: new places to discover, meals to share, stories to tell, and quiet evenings when we can simply be ourselves. I hope we keep making memories while also giving each other room to rest, grow, and follow our own hopes. The future feels less like a distant mystery when I imagine meeting it with honesty and care beside you. Whatever shape our days take, I want to keep noticing the good in them and thanking you for the part you play in my story.",
        am: "ወደፊትን ሳስብ ታላቅ ወይም ፍጹም የታቀደ እንዲሆን አልፈልግም። የምወደው ምስል ገና ባላደረግናቸው ትንንሽ ነገሮች የተሞላ ነው፤ አዳዲስ ቦታዎችን ማወቅ፣ ምግብ መካፈል፣ ታሪኮችን መነጋገርና ራሳችን ሆነን የምንቆይባቸው ጸጥ ያሉ ምሽቶች። አብረን ትዝታዎችን እየፈጠርን እረፍት ለማድረግ፣ ለማደግና የራሳችንን ተስፋ ለመከተል ስፍራ እንድንሰጣጥ እመኛለሁ። ከአንቺ ጎን በሐቀኝነትና በእንክብካቤ እንደምንቀበለው ሳስብ ወደፊት ሩቅ ምስጢር አይመስለኝም። ቀኖቻችን ምንም ቢመስሉ፣ መልካሙን ማስተዋልና በታሪኬ ውስጥ ላለሽ ስፍራ ማመስገን እፈልጋለሁ።"
      },
      name: { en: "Leyu", am: "Leyu" }
    },
    {
      date: "2026-11-10",
      topic: { en: "Today, Tomorrow, and Always ❤️", am: "ዛሬ፣ ነገና ሁልጊዜ ❤️" },
      description: {
        en: "Today I want you to know that you are loved in the middle of real life—not only in special moments, but in the ordinary hours too. Tomorrow, I hope I can keep showing that love through patience, attention, and the small ways I choose to be present. And always, I want to remember that caring for one another is something we practice, not something we take for granted. Thank you for every conversation, every shared laugh, and every chance to understand you more deeply. My feelings are not a passing celebration; they are a steady gratitude for who you are and for the possibility of continuing this beautiful story together.",
        am: "ዛሬ በእውነተኛ የሕይወት መካከል እንደምትወደጂ እንድታውቂ እፈልጋለሁ፤ በልዩ አፍታዎች ብቻ ሳይሆን በተራ ሰዓታትም ጭምር። ነገ ያንን ፍቅር በትዕግሥት፣ በትኩረትና በትንንሽ የመገኘት መንገዶች ማሳየቴን እንድቀጥል እመኛለሁ። ሁልጊዜም እርስ በርሳችንን መንከባከብ የምንለማመደው ነገር እንጂ ቀላል እንደሆነ የምንቆጥረው እንዳልሆነ ማስታወስ እፈልጋለሁ። ለእያንዳንዱ ውይይት፣ ለአብረን ሳቅንባቸው ጊዜያትና የበለጠ ለመረዳትሽ ለምትሰጪኝ እድል አመሰግናለሁ። ስሜቴ አልፎ የሚሄድ የደስታ በዓል አይደለም፤ ማንነትሽንና ይህን ውብ ታሪክ አብረን የመቀጠል እድልን በቋሚነት ማመስገን ነው።"
      },
      name: { en: "Leyu", am: "Leyu" }
    }
  ],

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

  // Add MP4 files to assets/videos/ and list each one here. The poster is optional.
  videos: [
    // { src: "assets/videos/memory-01.mp4", poster: "assets/photos/photo1.jpg", title: { en: "A favorite moment ❤️", am: "ውድ ጊዜያችን ❤️" } }
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
    navMemories: "Our Story",
    navGallery: "Gallery",
    navVideos: "Our Videos 🎬",
    navLetter: "Love Letter",
    navReasons: "Reasons",
    navDailyMessages: "Daily Messages",
    navSurprise: "Final Surprise",
    navLabel: "Main navigation",
    navLanguageLabel: "Language",
    navOpen: "Open navigation menu",
    navClose: "Close navigation menu",
    navLogoLabel: "For You, click 5 times for a surprise",
    switchToEnglish: "Switch to English",
    switchToAmharic: "Switch to Amharic",
    eyebrow: "✨ I made something special for you ✨",
    openingTitle: 'For the most<br>beautiful<br>person in my life <span class="heart-glyph">❤</span>',
    openGift: "Open Your Gift 🎁",
    giftHint: "(tap the box or the button)",
    welcomeHey: "Hey",
    continueStory: "Continue Our Story → ❤️",
    timelineTitle: 'Little Moments, Big Memories <span aria-hidden="true">💕</span>',
    galleryTitle: 'Our Beautiful Memories <span aria-hidden="true">📸❤️</span>',
    gallerySub: "Tap any photo to see it up close. Double-tap for a little love.",
    slideshowTitle: 'Our Photo Story <span aria-hidden="true">📸</span>',
    videoGalleryTitle: "Little Film Of Us ❤️",
    videoGallerySubtitle: "A few favorite moments, together in one place.",
    videoGalleryLabel: "Our videos",
    videoGalleryEmpty: "Add MP4 files to assets/videos/ and list them in the videos array in script.js.",
    videoUnsupported: "Your browser does not support HTML video.",
    videoUntitled: "A favorite moment ❤️",
    letterTitle: 'You Have A Letter <span aria-hidden="true">💌</span>',
    openLetter: "Open My Letter",
    reasonsTitle: "Reasons You're Special To Me ❤️",
    emojiTitle: 'A Few Things I Want To Say... <span aria-hidden="true">🥰</span>',
    emojiSub: "Tap any emoji.",
    heartTitle: 'Tap My Heart <span aria-hidden="true">❤️</span>',
    taps: "taps",
    counterTitle: "We've Been Creating Memories For",
    dailyJournalTitle: "Daily Love Messages ❤️",
    dailyJournalSubtitle: "A little note for each day, kept here to revisit.",
    footerTagline: "A little love story, made just for you.",
    footerLinksTitle: "Quick Links",
    footerMadeWithLove: "Made With Love",
    footerCopyright: "&copy; 2026 For You. Made with ❤️.",
    footerAriaLabel: "Footer",
    footerNavLabel: "Footer navigation",
    backToTopLabel: "Back to top",
    journalGridLabel: "Daily love messages",
    journalEmpty: "Add your first message in loveConfig.dailyMessages.",
    journalNotSet: "Not provided",
    journalDateMissing: "Date not set",
    months: "months",
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
    navMemories: "ታሪካችን",
    navGallery: "ማሳያ",
    navVideos: "ቪዲዮዎቻችን 🎬",
    navLetter: "የፍቅር ደብዳቤ",
    navReasons: "ምክንያቶች",
    navDailyMessages: "የዕለት መልዕክቶች",
    navSurprise: "የመጨረሻ አስገራሚ",
    navLabel: "ዋና አሰሳ",
    navLanguageLabel: "ቋንቋ",
    navOpen: "የአሰሳ ምናሌን ክፈት",
    navClose: "የአሰሳ ምናሌን ዝጋ",
    navLogoLabel: "ለአንቺ፣ ለአስገራሚው 5 ጊዜ ንኪ",
    switchToEnglish: "ወደ እንግሊዝኛ ቀይር",
    switchToAmharic: "ወደ አማርኛ ቀይር",
    eyebrow: "✨ ልዩ ነገር ሠራሁልሽ ✨",
    openingTitle: 'በህይወቴ ውስጥ<br>እጅግ ውብ<br>ለሆነች ሰው <span class="heart-glyph">❤</span>',
    openGift: "ስጦታሽን ክፈቺ 🎁",
    giftHint: "(ሳጥኑን ወይም አዝራሩን ተንኩዪ)",
    welcomeHey: "ሰላም",
    continueStory: "ታሪካችንን ቀጥዪ → ❤️",
    timelineTitle: 'ትናንሽ ጊዜያት፣ ትላልቅ ትዝታዎች <span aria-hidden="true">💕</span>',
    galleryTitle: 'ውብ ትዝታዎቻችን <span aria-hidden="true">📸❤️</span>',
    gallerySub: "ማንኛውንም ፎቶ በቅርበት ለማየት ንኪው። ለትንሽ ፍቅር ሁለት ጊዜ ንኪው።",
    slideshowTitle: 'የፎቶ ታሪካችን <span aria-hidden="true">📸</span>',
    videoGalleryTitle: "ትንሽ የእኛ ፊልም ❤️",
    videoGallerySubtitle: "ጥቂት ውድ ጊዜያችን በአንድ ቦታ።",
    videoGalleryLabel: "ቪዲዮዎቻችን",
    videoGalleryEmpty: "MP4 ፋይሎችን በassets/videos/ ውስጥ አክሉና በscript.js ውስጥ ባለው videos ዝርዝር ውስጥ ያስገቡ።",
    videoUnsupported: "አሳሽዎ HTML ቪዲዮን አይደግፍም።",
    videoUntitled: "ውድ ጊዜ ❤️",
    letterTitle: 'ደብዳቤ አለሽ <span aria-hidden="true">💌</span>',
    openLetter: "ደብዳቤዬን ክፈቺ",
    reasonsTitle: "ለምን ልዩ እንደሆንሽ ምክንያቶች ❤️",
    emojiTitle: 'ማለት የምፈልጋቸው ጥቂት ነገሮች... <span aria-hidden="true">🥰</span>',
    emojiSub: "ማንኛውንም ኢሞጂ ተንኩዪ።",
    heartTitle: 'ልቤን ተንኪ <span aria-hidden="true">❤️</span>',
    taps: "መንካት",
    counterTitle: "ትዝታዎችን እየፈጠርን ያለነው",
    dailyJournalTitle: "የዕለት የፍቅር መልዕክቶች ❤️",
    dailyJournalSubtitle: "ለእያንዳንዱ ቀን የተጻፈ ትንሽ መልዕክት፣ እንደገና ለማንበብ እዚህ የተቀመጠ።",
    footerTagline: "ትንሽ የፍቅር ታሪክ፣ ለአንቺ ብቻ የተዘጋጀ።",
    footerLinksTitle: "ፈጣን አገናኞች",
    footerMadeWithLove: "በፍቅር የተሰራ",
    footerCopyright: "&copy; 2026 For You. በ❤️ የተሰራ።",
    footerAriaLabel: "የገጹ መጨረጫ",
    footerNavLabel: "የግርጌ አሰሳ",
    backToTopLabel: "ወደ ላይ ተመለስ",
    journalGridLabel: "የዕለት የፍቅር መልዕክቶች",
    journalEmpty: "የመጀመሪያ መልዕክትዎን loveConfig.dailyMessages ውስጥ ያክሉ።",
    journalNotSet: "አልተሰጠም",
    journalDateMissing: "ቀን አልተዘጋጀም",
    months: "ወራት",
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
function readSavedLanguage() {
  try {
    const saved = localStorage.getItem('lang');
    return saved && translations[saved] ? saved : 'en';
  } catch {
    return 'en';
  }
}

let currentLang = readSavedLanguage();
let currentSlideIndex = 0;
let slideTimer = null;
let heartTapCount = 0;
let motionObserver = null;
let motionReduced = false;

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
  setupMotionSystem(prefersReducedMotion);
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
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch { /* Storage can be unavailable in private contexts. */ }
  document.documentElement.lang = lang;
  
  const t = translations[lang];
  if (!t) return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    btn.setAttribute('aria-label', btn.dataset.lang === 'en' ? t.switchToEnglish : t.switchToAmharic);
  });

  const nav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const langSwitcher = document.getElementById('langSwitcher');
  if (nav) nav.setAttribute('aria-label', t.navLabel);
  if (langSwitcher) langSwitcher.setAttribute('aria-label', t.navLanguageLabel);
  if (navToggle) navToggle.setAttribute('aria-label', document.body.classList.contains('menu-open') ? t.navClose : t.navOpen);
  const secretLogo = document.getElementById('secretLogo');
  if (secretLogo) secretLogo.setAttribute('aria-label', t.navLogoLabel);
  
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
    const items = (loveConfig.timeline[lang] || loveConfig.timeline.en || []).filter(Boolean);
    timelineContainer._revealObserver?.disconnect();
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
    if (!('IntersectionObserver' in window)) {
      timelineContainer.querySelectorAll('.timeline__item').forEach(el => el.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      timelineContainer._revealObserver = observer;
      timelineContainer.querySelectorAll('.timeline__item').forEach(el => observer.observe(el));
    }
  }
  
  // Update reasons
  const reasonsGrid = document.getElementById('reasonsGrid');
  if (reasonsGrid) {
    const reasons = (loveConfig.reasons[lang] || loveConfig.reasons.en || []).filter(Boolean);
    unobserveMotionElements(reasonsGrid);
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
    reasonsGrid.querySelectorAll('.reason-card').forEach((card, index) => {
      card.classList.add('motion-reveal');
      card.style.setProperty('--reveal-order', index % 8);
    });
    observeMotionElements(reasonsGrid);
  }
  
  // Update emojis
  const emojiField = document.getElementById('emojiField');
  if (emojiField) {
    const emojis = (loveConfig.emojis[lang] || loveConfig.emojis.en || []).filter(Boolean);
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

  renderDailyJournal(lang);
  renderVideoGallery(lang);
}

function parseJournalDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return date;
}

function getDailyJournalEntries() {
  return (Array.isArray(loveConfig.dailyMessages) ? loveConfig.dailyMessages : [])
    .filter(message => message && typeof message === 'object')
    .map((message, index) => {
      return {
        message,
        date: typeof message.date === 'string' ? message.date : '',
        parsedDate: parseJournalDate(message.date),
        originalIndex: index
      };
    })
    .sort((a, b) => {
      if (a.parsedDate && b.parsedDate) return a.parsedDate - b.parsedDate || a.originalIndex - b.originalIndex;
      if (a.parsedDate) return -1;
      if (b.parsedDate) return 1;
      return a.originalIndex - b.originalIndex;
    });
}

function getLocalDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function journalText(value, lang, fallback) {
  const text = typeof value === 'string' ? value : value?.[lang] || value?.en;
  return typeof text === 'string' && text.trim() ? text.trim() : fallback;
}

function renderDailyJournal(lang) {
  const grid = document.getElementById('dailyJournalCard');
  if (!grid) return;

  const labels = translations[lang] || translations.en;
  const entries = getDailyJournalEntries();
  unobserveMotionElements(grid);
  grid.replaceChildren();
  grid.setAttribute('aria-label', labels.journalGridLabel);

  if (!entries.length) {
    grid.classList.add('is-empty');
    const emptyMessage = document.createElement('p');
    emptyMessage.setAttribute('role', 'listitem');
    emptyMessage.textContent = labels.journalEmpty;
    grid.appendChild(emptyMessage);
    return;
  }

  grid.classList.remove('is-empty');
  const today = getLocalDateKey(new Date());

  entries.forEach((entry, index) => {
    const isToday = Boolean(entry.parsedDate && entry.date === today);
    const card = document.createElement('article');
    card.className = `daily-journal__card motion-reveal${isToday ? ' is-today' : ''}`;
    card.setAttribute('role', 'listitem');
    card.style.setProperty('--reveal-order', Math.min(index, 6));

    const header = document.createElement('div');
    header.className = 'daily-journal__card-header';
    const name = document.createElement('span');
    name.className = 'daily-journal__name';
    name.textContent = journalText(entry.message.name, lang, labels.journalNotSet);
    header.appendChild(name);

    const date = document.createElement('time');
    date.className = 'daily-journal__date';
    if (entry.parsedDate) {
      date.dateTime = entry.date;
      date.textContent = new Intl.DateTimeFormat(lang === 'am' ? 'am-ET' : 'en-US', {
        calendar: 'gregory', month: 'long', day: 'numeric', year: 'numeric'
      }).format(entry.parsedDate);
    } else {
      date.textContent = entry.date || labels.journalDateMissing;
    }
    header.appendChild(date);
    card.appendChild(header);

    const topic = document.createElement('h3');
    topic.className = 'daily-journal__topic';
    topic.textContent = journalText(entry.message.topic, lang, labels.journalNotSet);
    card.appendChild(topic);

    const description = document.createElement('p');
    description.className = 'daily-journal__description';
    description.textContent = journalText(entry.message.description, lang, labels.journalNotSet);
    card.appendChild(description);
    grid.appendChild(card);
  });

  observeMotionElements(grid);
}

function renderVideoGallery(lang) {
  const grid = document.getElementById('videoGallery');
  if (!grid) return;

  const labels = translations[lang] || translations.en;
  const videos = (Array.isArray(loveConfig.videos) ? loveConfig.videos : [])
    .filter(video => video && typeof video.src === 'string' && video.src.trim());
  unobserveMotionElements(grid);
  grid.replaceChildren();
  grid.setAttribute('aria-label', labels.videoGalleryLabel);

  if (!videos.length) {
    grid.classList.add('is-empty');
    const emptyMessage = document.createElement('p');
    emptyMessage.setAttribute('role', 'listitem');
    emptyMessage.textContent = labels.videoGalleryEmpty;
    grid.appendChild(emptyMessage);
    grid.classList.add('is-visible');
    observeMotionElements(grid);
    return;
  }

  grid.classList.remove('is-empty');
  videos.forEach((item, index) => {
    const title = journalText(item.title, lang, labels.videoUntitled);
    const card = document.createElement('article');
    card.className = 'video-gallery__card motion-reveal';
    card.setAttribute('role', 'listitem');
    card.style.setProperty('--reveal-order', Math.min(index, 6));

    const video = document.createElement('video');
    video.className = 'video-gallery__player';
    video.controls = true;
    video.preload = 'none';
    video.playsInline = true;
    video.setAttribute('aria-label', title);
    if (typeof item.poster === 'string' && item.poster.trim()) video.poster = item.poster;

    const source = document.createElement('source');
    source.src = item.src.trim();
    source.type = 'video/mp4';
    video.appendChild(source);
    video.appendChild(document.createTextNode(labels.videoUnsupported));

    const heading = document.createElement('h3');
    heading.className = 'video-gallery__title';
    heading.textContent = title;

    card.append(video, heading);
    grid.appendChild(card);
  });

  observeMotionElements(grid);
}

// ========== APPLY NAMES ==========
function applyNames() {
  document.querySelectorAll('#herNameWelcome, #herNameFinal').forEach(el => {
    el.textContent = loveConfig.girlfriendName;
  });
  document.title = `For ${loveConfig.girlfriendName} ❤️`;
}

function setupMotionSystem(reduced) {
  motionReduced = reduced;
  document.querySelectorAll('main .section > :not([hidden]), .section--surprise > :not([hidden]), .daily-journal__card, .daily-journal__title, .daily-journal__subtitle, .footer__container')
    .forEach(el => el.classList.add('motion-reveal'));
  if (reduced || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.motion-reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }
  motionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        motionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  observeMotionElements(document);
}

function observeMotionElements(root) {
  if (!root) return;
  const elements = [];
  if (root.matches?.('.motion-reveal')) elements.push(root);
  if (root.querySelectorAll) elements.push(...root.querySelectorAll('.motion-reveal'));
  elements.forEach(el => {
    if (motionReduced || !motionObserver) el.classList.add('is-visible');
    else if (!el.classList.contains('is-visible')) motionObserver.observe(el);
  });
}

function unobserveMotionElements(root) {
  if (!root || !motionObserver) return;
  if (root.matches?.('.motion-reveal')) motionObserver.unobserve(root);
  root.querySelectorAll?.('.motion-reveal').forEach(el => motionObserver.unobserve(el));
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
  if (!field || reduced || window.innerWidth < 480) return;
  
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

// ========== NAVIGATION & MOBILE MENU ==========
function setupNav() {
  const nav = document.getElementById('siteNav');
  const links = document.getElementById('navLinks');
  if (!links) return;

  const anchors = [...links.querySelectorAll('a[data-nav]')];
  const sections = anchors
    .map(anchor => ({ anchor, section: document.querySelector(anchor.getAttribute('href')) }))
    .filter(item => item.section);
  if (!sections.length) return;

  let frame = 0;
  const updateActive = () => {
    frame = 0;
    const line = (nav?.getBoundingClientRect().bottom || 0) + 18;
    const visible = sections.filter(({ section }) => section.getClientRects().length > 0);
    if (!visible.length) return;
    const containing = visible.find(({ section }) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= line && rect.bottom > line;
    });
    const active = containing || visible.reduce((best, item) => {
      const distance = Math.abs(item.section.getBoundingClientRect().top - line);
      return !best || distance < best.distance ? { ...item, distance } : best;
    }, null);

    anchors.forEach(anchor => {
      const isActive = anchor === active.anchor;
      anchor.classList.toggle('is-active', isActive);
      if (isActive) anchor.setAttribute('aria-current', 'location');
      else anchor.removeAttribute('aria-current');
    });
    nav?.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  const scheduleUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(updateActive);
  };

  document.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(scheduleUpdate, { threshold: 0 });
    sections.forEach(({ section }) => observer.observe(section));
  }
  updateActive();
}

function setupMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  const nav = document.getElementById('siteNav');
  if (!toggle || !links) return;

  const mobileQuery = window.matchMedia('(max-width: 1039px)');
  let savedBodyOverflow = '';

  function isMenuOpen() {
    return document.body.classList.contains('menu-open');
  }

  function setMenuOpen(isOpen, returnFocus = false) {
    if (!mobileQuery.matches) isOpen = false;
    document.body.classList.toggle('menu-open', isOpen);
    links.classList.toggle('is-open', isOpen);
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    links.setAttribute('aria-hidden', String(!isOpen && mobileQuery.matches));
    links.inert = !isOpen && mobileQuery.matches;
    toggle.setAttribute('aria-label', isOpen ? translations[currentLang].navClose : translations[currentLang].navOpen);

    if (overlay) overlay.classList.toggle('is-active', isOpen);

    if (isOpen) {
      savedBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = savedBodyOverflow;
      if (returnFocus) toggle.focus();
    }
  }

  const initialOpen = mobileQuery.matches && isMenuOpen();
  setMenuOpen(initialOpen);
  toggle.addEventListener('click', () => setMenuOpen(!isMenuOpen()));

  if (overlay) {
    overlay.addEventListener('click', () => setMenuOpen(false, true));
  }

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (isMenuOpen()) setMenuOpen(false);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) {
      setMenuOpen(false, true);
    }
  });

  mobileQuery.addEventListener('change', () => setMenuOpen(false));
}

// ========== SCROLL PROGRESS ==========
function setupScrollProgress() {
  const fill = document.getElementById('progressFill');
  if (!fill) return;
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

  if (!openingScreen || !welcomeScreen || !giftBox || !openBtn) return;
  let opening = false;
  function openGift() {
    if (opening) return;
    opening = true;
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
  const text = el.dataset.text || loveConfig.welcomeMessage[currentLang] || loveConfig.welcomeMessage.en || '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  let i = 0;

  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      if (i <= text.length) setTimeout(tick, 25);
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
  if (!grid) return;
  (Array.isArray(loveConfig.photos) ? loveConfig.photos : []).filter(photo => photo && photo.src).forEach((photo, index) => {
    const card = document.createElement('button');
    const isPolaroid = index % 3 === 0;
    card.className = 'photo-card' + (isPolaroid ? ' photo-card--polaroid' : '');
    card.classList.add('motion-reveal');
    card.style.setProperty('--reveal-order', index % 8);
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
  observeMotionElements(grid);
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
  if (!loveConfig.photos.length) return;
  currentLightboxIndex = index;
  renderLightbox();
  const lightbox = document.getElementById('lightbox');
  lightbox.hidden = false;
  document.getElementById('lightboxClose').focus();
  document.body.style.overflow = 'hidden';
}

function renderLightbox() {
  const photo = loveConfig.photos[currentLightboxIndex];
  if (!photo) return;
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
  const card = document.querySelector(`.photo-card[data-index="${currentLightboxIndex}"]`);
  if (card) card.focus();
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
    if (e.key === 'Tab') {
      const controls = [...lightbox.querySelectorAll('button:not([disabled])')];
      if (!controls.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });
}

// ========== SLIDESHOW ==========
function setupSlideshow() {
  const track = document.getElementById('slideshowTrack');
  const dotsWrap = document.getElementById('slideDots');
  const slideshow = document.getElementById('slideshow');
  const section = slideshow?.closest('.section--slideshow');
  let current = 0;
  let timer = null;
  let inView = true;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!track || !dotsWrap || !slideshow) return;
  const photos = (Array.isArray(loveConfig.photos) ? loveConfig.photos : []).filter(photo => photo && photo.src);
  if (!photos.length) {
    if (section) section.hidden = true;
    return;
  }
  photos.forEach((photo, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' is-active' : '');
    if (i === 0) slide.classList.add('is-entering');
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `Memory ${i + 1} of ${photos.length}: ${photo.caption}`);
    const image = buildImageOrFallback(photo.src, photo.caption);
    image.loading = i === 0 ? 'eager' : 'lazy';
    slide.appendChild(image);
    const cap = document.createElement('div');
    cap.className = 'slide__caption';
    cap.textContent = `Memory ${String(i + 1).padStart(2, '0')} — ${photo.caption}`;
    slide.appendChild(cap);
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Go to memory ${i + 1}`);
    dot.setAttribute('aria-pressed', String(i === 0));
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = track.querySelectorAll('.slide');
  const dots = dotsWrap.querySelectorAll('button');
  if (slides.length < 2) {
    const previous = document.getElementById('slidePrev');
    const next = document.getElementById('slideNext');
    if (previous) previous.hidden = true;
    if (next) next.hidden = true;
    dotsWrap.hidden = true;
  }

  function goTo(index) {
    if (!slides.length) return;
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    slides[current].classList.remove('is-entering');
    void slides[current].offsetWidth;
    slides[current].classList.add('is-entering');
    dots[current].classList.add('is-active');
    dots[current].setAttribute('aria-pressed', 'true');
    dots.forEach((dot, dotIndex) => {
      if (dotIndex !== current) dot.setAttribute('aria-pressed', 'false');
    });
    restart();
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function start() {
    if (reducedMotion || slides.length < 2 || document.hidden || !inView || timer) return;
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function restart() {
    stop();
    start();
  }

  document.getElementById('slidePrev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('slideNext')?.addEventListener('click', () => goTo(current + 1));

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      inView = entries[0]?.isIntersecting ?? false;
      if (inView) start();
      else stop();
    }, { threshold: 0.1 });
    observer.observe(slideshow);
  } else {
    start();
  }
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
  let previousFocus = null;

  function openLetterModal() {
    if (!modal || !modalText) return;
    previousFocus = document.activeElement;
    if (envelope) envelope.classList.add('is-open');
    const lang = currentLang || 'en';
    modalText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLetterModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousFocus && previousFocus.focus) previousFocus.focus();
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

  if (!modal) return;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Love letter');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLetterModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeLetterModal();
    }
    if (e.key === 'Tab' && modal.classList.contains('is-open')) {
      e.preventDefault();
      closeBtn.focus();
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
    countEl.classList.remove('is-updated');
    void countEl.offsetWidth;
    countEl.classList.add('is-updated');
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
    months: document.getElementById('cMonths'),
    days: document.getElementById('cDays'),
    hours: document.getElementById('cHours'),
    minutes: document.getElementById('cMinutes'),
    seconds: document.getElementById('cSeconds')
  };
  if (Object.values(els).some(el => !el)) return;

  function tick() {
    const duration = getRelationshipDuration(start, new Date());
    Object.entries(duration).forEach(([unit, value]) => { els[unit].textContent = String(value); });
    const secondsBox = els.seconds.closest('.counter-box');
    if (secondsBox) {
      secondsBox.classList.remove('is-ticking');
      void secondsBox.offsetWidth;
      secondsBox.classList.add('is-ticking');
    }
  }
  tick();
  let timer = setInterval(tick, 1000);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
      timer = null;
    } else if (!timer) {
      tick();
      timer = setInterval(tick, 1000);
    }
  });
}

function getRelationshipDuration(start, end) {
  const duration = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  if (!(start instanceof Date) || !(end instanceof Date) ||
      Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return duration;

  let months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
  const getAnniversary = monthOffset => {
    const monthStart = new Date(start.getFullYear(), start.getMonth() + monthOffset, 1,
      start.getHours(), start.getMinutes(), start.getSeconds(), start.getMilliseconds());
    const lastDay = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
    monthStart.setDate(Math.min(start.getDate(), lastDay));
    return monthStart;
  };

  if (getAnniversary(months) > end) months--;
  let remainder = end.getTime() - getAnniversary(months).getTime();
  duration.months = Math.max(0, months);
  duration.days = Math.floor(remainder / 86400000);
  remainder %= 86400000;
  duration.hours = Math.floor(remainder / 3600000);
  remainder %= 3600000;
  duration.minutes = Math.floor(remainder / 60000);
  remainder %= 60000;
  duration.seconds = Math.floor(remainder / 1000);
  return duration;
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
  if (!logo || !modal || !closeBtn) return;
  let previousFocus = null;

  logo.addEventListener('click', () => {
    taps++;
    if (taps >= 5) {
      previousFocus = logo;
      modal.hidden = false;
      closeBtn.focus();
      taps = 0;
    }
  });

  function closeModal() {
    modal.hidden = true;
    if (previousFocus) previousFocus.focus();
  }
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
    if (e.key === 'Tab' && !modal.hidden) { e.preventDefault(); closeBtn.focus(); }
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
