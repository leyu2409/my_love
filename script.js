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
    am: "ይህ ትንሽ ድረ ገጽ ለአንቺ ብቻ ነው።\n\nምክንያቱም አንዳንድ ጊዜ...\nቃላት ለማብራራት አይበቁም\nአንድ ሰው ምን ያህል ልዩ እንደሆነ። 💕",
  },

  // Daily journal entries; adjust dates, names, topics, and messages as needed.
  dailyMessages: [
    {
      date: "2026-06-06",
      topic: {
        en: "🎉🎂 Birthday wishes for my love ❤️👑🌹",
        am: "🎉🎂 Birthday wishes for my love ❤️👑🌹",
      },
      description: {
        en: `Zare 🌟 le ene betam liyu ken new 😍 mikniyatum betam konjo ena miwdahu sew 👸✨ wedezih alem yemetabet ken selahon 🎂🎉. Behiywote wust anchin bemagnete 💖 betam edilegna sewu negn 🙏😊.

Anchi 🌹
🫶 yene desta 😍,
🫶 yene selam 🕊️,
🫶ena yene hayil 💪 nesh.

Fikirish ❤️ hiwoten tirgum yalew yadergewal ✨💞.
Anchi melet le ene Betam tiru ❤️

🫶 best guadenyaye 👫💕,
🫶 tinish ehete 🤗🌸,
🫶 ye wedefit misteye 👰❤️,
🫶 ye lijoche enat 👶💖,
🫶 le enem enate 🌹🙏,
🫶  yene liyu 💎,
🫶 yene wud 😘,
🫶 yene fikir ❤️,
🫶yene mar 🍯💕,
🫶 yene hulu neger 🌍💞 nesh. Liben bedesta yemimolaw sew 😘❤️ silehonsh betam ameseginalew 🙏💖.

Geta eyesus🎂🎊

🫶 malekiya belelew desta 😄🌈,
🫶  be tiru tena 💪🌹,
🫶  be siket 🏆✨,
🫶  be bereket 🙏💫,
🫶 geta be tsega hulu 💕 endberkish emegnalew yen wud ❤️.

Anchi 👑 beewnet asdenaki set nesh 🌹✨. Yene silehonsh, getan betam ameseginalew ❤️🙏💎.

Hiwot yetim biwiseden 🌍✨ ebakish ke libish ❤️ endetesewocign 🤗😘. Ene gin

🥰  hulem afekirshalehu ❤️🔥,
🥰  hulem asibeshalehu 🤝💞,
🥰  hulem akbireshalehu 👑🌹.

Hulem be timrtish, be agelgelotish, be destash ena hazen hulu be gonish negn 🥰.

Yihin hulu hulem astawshi yen mar💕✨.

🎊🎂 Melkam Lidet, Yene Nigist 👑,Yene liyu,  Yene enat, Destaye 😍, Yene Hulum Neger 💞, ena Yezelalem Fikire ❤️🌹🎂

🎁🎉  ✨💫

💖 Afekirshalehu Yene Fikir ❤️🔥🌹💘

Zare, Nege, ena Lezelalem ❤️♾️👑💍🌹`,

        am: `Zare 🌟 le ene betam liyu ken new 😍 mikniyatum betam konjo ena miwdahu sew 👸✨ wedezih alem yemetabet ken selahon 🎂🎉. Behiywote wust anchin bemagnete 💖 betam edilegna sewu negn 🙏😊.

Anchi 🌹
🫶 yene desta 😍,
🫶 yene selam 🕊️,
🫶ena yene hayil 💪 nesh.

Fikirish ❤️ hiwoten tirgum yalew yadergewal ✨💞.
Anchi melet le ene Betam tiru ❤️

🫶 best guadenyaye 👫💕,
🫶 tinish ehete 🤗🌸,
🫶 ye wedefit misteye 👰❤️,
🫶 ye lijoche enat 👶💖,
🫶 le enem enate 🌹🙏,
🫶  yene liyu 💎,
🫶 yene wud 😘,
🫶 yene fikir ❤️,
🫶yene mar 🍯💕,
🫶 yene hulu neger 🌍💞 nesh. Liben bedesta yemimolaw sew 😘❤️ silehonsh betam ameseginalew 🙏💖.

Geta eyesus🎂🎊

🫶 malekiya belelew desta 😄🌈,
🫶  be tiru tena 💪🌹,
🫶  be siket 🏆✨,
🫶  be bereket 🙏💫,
🫶 geta be tsega hulu 💕 endberkish emegnalew yen wud ❤️.

Anchi 👑 beewnet asdenaki set nesh 🌹✨. Yene silehonsh, getan betam ameseginalew ❤️🙏💎.

Hiwot yetim biwiseden 🌍✨ ebakish ke libish ❤️ endetesewocign 🤗😘. Ene gin

🥰  hulem afekirshalehu ❤️🔥,
🥰  hulem asibeshalehu 🤝💞,
🥰  hulem akbireshalehu 👑🌹.

Hulem be timrtish, be agelgelotish, be destash ena hazen hulu be gonish negn 🥰.

Yihin hulu hulem astawshi yen mar💕✨.

🎊🎂 Melkam Lidet, Yene Nigist 👑,Yene liyu,  Yene enat, Destaye 😍, Yene Hulum Neger 💞, ena Yezelalem Fikire ❤️🌹🎂

🎁🎉  ✨💫

💖 Afekirshalehu Yene Fikir ❤️🔥🌹💘

Zare, Nege, ena Lezelalem ❤️♾️👑💍🌹`,
      },
      name: {
        en: "Yene",
        am: "Yene",
      },
    },
    {
      date: "2026-07-01",
      topic: {
        en: "Happy One Month Anniversary, Yene Fikir, Yene leyu, Yene wud, Yene enat! ❤️🥹🌹💖✨🤍🥰",
        am: "Happy One Month Anniversary, Yene Fikir, Yene leyu, Yene wud, Yene enat! ❤️🥹🌹💖✨🤍🥰",
      },
      description: {
        en: "And wer bicha bihonim, yehonew yene hiywot hulu qeyerwal Anchin ka'awkuwsh qen jemro, libe bedesta ❤️, beselam 🕊️, befekir 💕 temoltwal. Anch yene smile 😊, yene selam 🤍, yene desta 😍, ena yene hulu neger nesh. 👸❤️\nFitesh 🌸yen nafkot ☀️ new, fegegtash betlye sakish yen fiker minlibelish, uffff 😊 yen desta💪 nw dimtsish 🎶 yene selam 🕊️ new. 🥹❤️\nAnd wer bicha new... gin yene lib ❤️ lezelalem anch gar endinor new yemifelgew. Beyekenu ketilant yebelete ewedishalehu degmo afkershalehu. 🌹💕♾️\nQal egebalshalew... 🤝❤️ Bedestash 😂🥰 abresh esakalalehu. Be enbash /behazen😢🤍 abresh aleqsalew/azenalehu😭 🌧️. Hulem kegonsh eqomalew. Hulum gize astawosh yene hulu neger endhonsh. ❤️🫂✨....be ene lib anch yelishibet bota bitaki noro be rasish tikegn nebera betem wudu neger nesh🥰👸\nEgziabher 🙏🤍 fikirachinin yibarek. Befikiru ❤️ yatsinaln. Hulum almachinin 🌅💍 yifetsimaln. Ende zare, lezelalem abren endenor yirdan. 🕊️✨thank you ... 🙏❤️ Silewededshgn🥹💕 🤗🤍 Silemegnatsh 🌹❤️ be ene hiywot betam konjo miraf nesh . 📖💖\nKalat yemayigeltsutn fikir ewedishalehu. ❤️♾️ Zare ketnant yebelete ewedishalehu... 🥹💕 Negem kezare yebelete ewedishalehu... ❤️🌹 Lezelalem anch bicha yene lib nesh. 👸💍♾️\nI Love You Endless, Yene Queen. 👑❤️🥹🌹💖🤍🫶✨😘💋🌹💞♾️",
        am: "And wer bicha bihonim, yehonew yene hiywot hulu qeyerwal Anchin ka'awkuwsh qen jemro, libe bedesta ❤️, beselam 🕊️, befekir 💕 temoltwal. Anch yene smile 😊, yene selam 🤍, yene desta 😍, ena yene hulu neger nesh. 👸❤️\nFitesh 🌸yen nafkot ☀️ new, fegegtash betlye sakish yen fiker minlibelish, uffff 😊 yen desta💪 nw dimtsish 🎶 yene selam 🕊️ new. 🥹❤️\nAnd wer bicha new... gin yene lib ❤️ lezelalem anch gar endinor new yemifelgew. Beyekenu ketilant yebelete ewedishalehu degmo afkershalehu. 🌹💕♾️\nQal egebalshalew... 🤝❤️ Bedestash 😂🥰 abresh esakalalehu. Be enbash /behazen😢🤍 abresh aleqsalew/azenalehu😭 🌧️. Hulem kegonsh eqomalew. Hulum gize astawosh yene hulu neger endhonsh. ❤️🫂✨....be ene lib anch yelishibet bota bitaki noro be rasish tikegn nebera betem wudu neger nesh🥰👸\nEgziabher 🙏🤍 fikirachinin yibarek. Befikiru ❤️ yatsinaln. Hulum almachinin 🌅💍 yifetsimaln. Ende zare, lezelalem abren endenor yirdan. 🕊️✨thank you ... 🙏❤️ Silewededshgn🥹💕 🤗🤍 Silemegnatsh 🌹❤️ be ene hiywot betam konjo miraf nesh . 📖💖\nKalat yemayigeltsutn fikir ewedishalehu. ❤️♾️ Zare ketnant yebelete ewedishalehu... 🥹💕 Negem kezare yebelete ewedishalehu... ❤️🌹 Lezelalem anch bicha yene lib nesh. 👸💍♾️\nI Love You Endless, Yene Queen. 👑❤️🥹🌹💖🤍🫶✨😘💋🌹💞♾️",
      },
      name: { en: "Yene", am: "Yene" },
    },
    {
      date: "2026-07-01",
      topic: {
        en: "Ewyyyy yene bal 😍😍 ....",
        am: "Ewyyyy yene bal 😍😍 ....",
      },
      description: {
        en: "Ewyyyy yene bal 😍😍 ....yemr betam bzu amet yekoyenbyakl nw misemagn leka 1 weriachin nw .....bcha beneberen bezih wer wst betam destegna neberku bante I know Kalat masemamer alchilbetm gn Lene megletse kechalkut belay neh ...Lene abate talak wedme mekariye kezih Hulu belay gn balnethn betam wedjewalehu ..asteway neh adamachi neh betam tagash neh ....mistyewa stawera joro bcha sayhon lbm nw mtsetat ena bezih betam nw Des milat .....zarem negem eske wediagnaw twedhalech kelbua ....wedefiten kantega sasbew menor ynafkegnal ....abreh lemenor eguagualehu ....geta siawk yemejemeria ye ewnet fkrua ena balaua ante neh lk yemejemeriawa edehonkew Hulu yemetseleshawa edthon atbka be getaway fit ttselyalech ...degmom yhonal ......sew edet bande bzu neger ynorewal ....gubzna, egziabhern mefrat ,mewded  ,tgat ,sewn yemr mewded,tamagnnet ,thtna ,merinet ,eneja bcha taskenagnaleh wd bale .....ena yene slehonk ena kante bzu neger slemtawersegn keza degmo lenem leljichim mrt bal ena abat edemiwetah amnalew .....ena mnm neger bebkat edemtweta ergtegna negn ....bcha Lene na lebete ke  krstos ketlo ras slehonk ena betachinn betbeb slemtmera edesetalehu.....wedhalehu😍😍😍😍 1 wer molan edalnew Hulu bzu ametatn abro yaskotren ......eske erjina blom eskemot dres mayleyayu tndoch yadrgen lela mn ellalehu ....bzu desta ena hazenochin abrew mikafelu basement yaderegut egziabher ena fkir eske wediagnaw yatsenachew ljoch yadrgen .....adelem relationshipachin ykrna egna rasachin besu eji Nen ...hulunm neger egziabher begizew wb edemiadergew amnalehu ....ke gabcha befit mnm aynet gnnunet yelelachew bekdsna egziabhern yakeberu baletdaroch nw mnhonew eshi .....ena balebet lbhn hasabhn tebk yene bal ..kelb afekrhalehu 😍😍😍😘😍😘😘😘😘😍",
        am: "Ewyyyy yene bal 😍😍 ....yemr betam bzu amet yekoyenbyakl nw misemagn leka 1 weriachin nw .....bcha beneberen bezih wer wst betam destegna neberku bante I know Kalat masemamer alchilbetm gn Lene megletse kechalkut belay neh ...Lene abate talak wedme mekariye kezih Hulu belay gn balnethn betam wedjewalehu ..asteway neh adamachi neh betam tagash neh ....mistyewa stawera joro bcha sayhon lbm nw mtsetat ena bezih betam nw Des milat .....zarem negem eske wediagnaw twedhalech kelbua ....wedefiten kantega sasbew menor ynafkegnal ....abreh lemenor eguagualehu ....geta siawk yemejemeria ye ewnet fkrua ena balaua ante neh lk yemejemeriawa edehonkew Hulu yemetseleshawa edthon atbka be getaway fit ttselyalech ...degmom yhonal ......sew edet bande bzu neger ynorewal ....gubzna, egziabhern mefrat ,mewded  ,tgat ,sewn yemr mewded,tamagnnet ,thtna ,merinet ,eneja bcha taskenagnaleh wd bale .....ena yene slehonk ena kante bzu neger slemtawersegn keza degmo lenem leljichim mrt bal ena abat edemiwetah amnalew .....ena mnm neger bebkat edemtweta ergtegna negn ....bcha Lene na lebete ke  krstos ketlo ras slehonk ena betachinn betbeb slemtmera edesetalehu.....wedhalehu😍😍😍😍 1 wer molan edalnew Hulu bzu ametatn abro yaskotren ......eske erjina blom eskemot dres mayleyayu tndoch yadrgen lela mn ellalehu ....bzu desta ena hazenochin abrew mikafelu basement yaderegut egziabher ena fkir eske wediagnaw yatsenachew ljoch yadrgen .....adelem relationshipachin ykrna egna rasachin besu eji Nen ...hulunm neger egziabher begizew wb edemiadergew amnalehu ....ke gabcha befit mnm aynet gnnunet yelelachew bekdsna egziabhern yakeberu baletdaroch nw mnhonew eshi .....ena balebet lbhn hasabhn tebk yene bal ..kelb afekrhalehu 😍😍😍😘😍😘😘😘😘😍",
      },
      name: { en: "Leyu", am: "Leyu" },
    },
    {
      date: "2026-07-05",
      topic: { en: "Birthday wishes ...", am: "Birthday wishes..." },
      description: {
        en: "Yene wd sew ...yene melkam bal enkuan teweledklgn😍😍😍😍😍🎈🎈 slawekuh Des blognal ... enkuan ketay zemenen abrehegn mtnor sew honk betam edlegna sew negn ....bekoyenbachew giziatoch kemlh belay destegna neberku ...HBD🎂🎂🎂 bezih seat abreh bihon Des ylegn neber ....gn beka slehulum egziabher ymesgen.....ante bzu negere neh yehiwote 1 sew adelehm wedhalehu 😍😍degmom afekrhalehu yewedefit bale neh kantegar menor betam ynafkegnal ....ena degmo wetatneth esuga ylek ...afla gulbeth le egziabher ywesed lerasu yaderegew ....sew edewm sichemr haylu ydekm adel ...antega gn edmeh sichemr haylh ychemr ..keza degmo tgegnneth ychemer ...Keri zemenhn bzu mtserabet bzu mtnorbet ena bzu mtageleglbet yhun ...pol yenorew yetetsafeletn neber egziabher be ahzab ,benegestat ena be esraeln ljoch fit amen yemishekem nw edetebalew lk edezia edecheresew Hulu yante hiwot egziabher edetsafew hono yleklh ....bale betam edemwedh tawkaleh lante mn yakl Bota ena fkr edalebgn tawkaleh gn still negrhalew wedhalehu eshi❤️❤️❤️❤️❤️❤️ kebzu neger antsar amgnehalehu ,tekebyehalehu ,afekrhalehu .....by the way fkr yetemarkubh sew neh ...malet fkr wst yalu sewech yalhonew image enega yefeterut ...malew sew fkr wst hono le geta ,le tmhrtu ena lesewech gize Yale aymeslegnm beteley ke spiritual antsar gize betam ykeleklal bye nw masbew gn antega yalegn gngnunet ybelt miastega hono agegnehut ....ena tkklegnawn ye fikir trgum antega agichalehu ......ene wesgnalehu sijemer egziabher balebet snor nw hiwot yalegn keza wchi yemotku sew negn benena bante ye fkr gngnunet egziabher sierra Des milegn leza nw egziabher mekakelegna huno bemekakelachin sikener say beka betam nw wste mirekaw ..behiwot hedalehu masbew egziabher beneger Hulu lay edale sasb nw .......nege tnat blen bakednew neger laym be mulat edale asbalehu ....bcha yene bal enkuan 24 amet ga deresk tbeltegnaleh ena akebrhalehu edemist etazezhalehu eshi ....",
        am: "Yene wd sew ...yene melkam bal enkuan teweledklgn😍😍😍😍😍🎈🎈 slawekuh Des blognal ... enkuan ketay zemenen abrehegn mtnor sew honk betam edlegna sew negn ....bekoyenbachew giziatoch kemlh belay destegna neberku ...HBD🎂🎂🎂 bezih seat abreh bihon Des ylegn neber ....gn beka slehulum egziabher ymesgen.....ante bzu negere neh yehiwote 1 sew adelehm wedhalehu 😍😍degmom afekrhalehu yewedefit bale neh kantegar menor betam ynafkegnal ....ena degmo wetatneth esuga ylek ...afla gulbeth le egziabher ywesed lerasu yaderegew ....sew edewm sichemr haylu ydekm adel ...antega gn edmeh sichemr haylh ychemr ..keza degmo tgegnneth ychemer ...Keri zemenhn bzu mtserabet bzu mtnorbet ena bzu mtageleglbet yhun ...pol yenorew yetetsafeletn neber egziabher be ahzab ,benegestat ena be esraeln ljoch fit amen yemishekem nw edetebalew lk edezia edecheresew Hulu yante hiwot egziabher edetsafew hono yleklh ....bale betam edemwedh tawkaleh lante mn yakl Bota ena fkr edalebgn tawkaleh gn still negrhalew wedhalehu eshi❤️❤️❤️❤️❤️❤️ kebzu neger antsar amgnehalehu ,tekebyehalehu ,afekrhalehu .....by the way fkr yetemarkubh sew neh ...malet fkr wst yalu sewech yalhonew image enega yefeterut ...malew sew fkr wst hono le geta ,le tmhrtu ena lesewech gize Yale aymeslegnm beteley ke spiritual antsar gize betam ykeleklal bye nw masbew gn antega yalegn gngnunet ybelt miastega hono agegnehut ....ena tkklegnawn ye fikir trgum antega agichalehu ......ene wesgnalehu sijemer egziabher balebet snor nw hiwot yalegn keza wchi yemotku sew negn benena bante ye fkr gngnunet egziabher sierra Des milegn leza nw egziabher mekakelegna huno bemekakelachin sikener say beka betam nw wste mirekaw ..behiwot hedalehu masbew egziabher beneger Hulu lay edale sasb nw .......nege tnat blen bakednew neger laym be mulat edale asbalehu ....bcha yene bal enkuan 24 amet ga deresk tbeltegnaleh ena akebrhalehu edemist etazezhalehu eshi ....",
      },
      name: { en: "Leyu", am: "Leyu" },
    },
    {
      date: "2026-08-01",
      topic: {
        en: "Happy Two Month Anniversary...❤️🥹🌹💖✨🤍🥰",
        am: "Happy Two Month Anniversary...❤️🥹🌹💖✨🤍🥰",
      },
      description: {
        en: "Text adrgelh leka sms slecherese algebahm ..betam ykrta eshi yene .......zare hulet wer molan betam Des blognal ....... egziabher ymesgen sle hulum neger ....bezih hulet wer wst betam bzu yeteleye neger neber enega ...abrehegn slaleh Des ylegnal ...enega yalu negerochin sawerah mtmelsbet way betam nw mwedew .....dro lji eyalew mfelgew aynet tdar linoregn nw meselegn ...bekoyenbachew giziatoch yetetalanbetn gize alastawsm mkniatu degmo ante neh betam tagash neh ..negerochin teregagteh lemayet tmokralehna ..betam ygermegnal ya negerh...misth bante tkenalech eshi ...ena enkuan 2 gna werachinn lemekuter aderesen kezih belay bzu ametatochin abren edemnakeber asbalew ... egziabher begna hiwot wst melkam yadergal ....😍😍😍 Wedhalew eshi stotaye 🥰🥰",
        am: "Text adrgelh leka sms slecherese algebahm ..betam ykrta eshi yene .......zare hulet wer molan betam Des blognal ....... egziabher ymesgen sle hulum neger ....bezih hulet wer wst betam bzu yeteleye neger neber enega ...abrehegn slaleh Des ylegnal ...enega yalu negerochin sawerah mtmelsbet way betam nw mwedew .....dro lji eyalew mfelgew aynet tdar linoregn nw meselegn ...bekoyenbachew giziatoch yetetalanbetn gize alastawsm mkniatu degmo ante neh betam tagash neh ..negerochin teregagteh lemayet tmokralehna ..betam ygermegnal ya negerh...misth bante tkenalech eshi ...ena enkuan 2 gna werachinn lemekuter aderesen kezih belay bzu ametatochin abren edemnakeber asbalew ... egziabher begna hiwot wst melkam yadergal ....😍😍😍 Wedhalew eshi stotaye 🥰🥰",
      },
      name: { en: "Leyu", am: "Leyu" },
    },
    {
      date: "2026-08-01",
      topic: {
        en: "Happy Two Month Anniversary...❤️🥹🌹💖✨🤍🥰",
        am: "Happy Two Month Anniversary...❤️🥹🌹💖✨🤍🥰",
      },
      description: {
        en: "Betem des belognal geta yimasgin sela hulu neger be egna bertet yehon neger aydlm geta melkem nw temagn selehon nw...ehe hulet month betem destegna kehonkebachehu ye hiwote wusti andegna becha sehihon mache leresa melchil dink time nebern... konjit be anch bezu destegna negn...minm tinsh wor behon gen ye ene ena ye anch relationship ye hulet year nw memselehu sewu bazi fetenet chrish be reket endzi megebebt betem tilk neger nw ...geta yimasgin sele hulu neger ...ke andi wor koyeta yilk ehe wor more challenge nebern like moknit, gech, fiker, enatish ...becha anch dengitesh, azinshim yenbera month nebera gen ahun sasibehu enkuhan hona yelkuwachehu negerochim neberu... gen yemetu negeroch hulu ye ene ena ye anchin hibrt seyatenkiru nebera ...enem sasibehu betem konjo be hulum neger misle mehon tdr mehon nw memslegn anch hiwote thank you eshi🥰🥰🥰... bezu negeroch anch ge becha yelu negeroch alu bazi time ende anch aynet yetregegech, be getahu fit hule methon, getawan mitwod ena kaza baly lemwudad hulem gugut yelt set bazi seat felgo megegnat betem kabad nw ... hiwote afkireshalehu 🥰🥰🥰anchin miste endthogn yewosankut ken ...betem tikikl endhon lenegersh ewodalehu...beke kazi bowelam hulunim negeroch more in  details enaworalen ye ene ye anch mibel neger aynorm minm behon ye gera ye huletachinm nw ... anch ge minm befetr ke metfo eska teru neger be gelts awurgn enem minm befetr ke anch ger enwosenalen ...anch yehon sewu aydlish be ene life wusti hiwote nesh ...be kele becha sehihon be tigber degmo ye ehunt hiwote endhonish le negerish felgelehu...yen mist ye lijoch enat hulu neger so happy be anch hulu ke ena dikamish afkirshalehu🥰🥰🥰❤️🔥... next ye mider koyetachin hulu ke anch ger endemeslfi amenalehu, bezu baletin, lidatochin, anniversary , sergi, lekso ena lelam neger andi lay enaslefelen beye amenalehu degmo geta yergel...konjit enkuhan adrsen ...l love You so much 🥰🥰💍😍😘😘😍😘🌍👸👸😍😍😍",
        am: "Betem des belognal geta yimasgin sela hulu neger be egna bertet yehon neger aydlm geta melkem nw temagn selehon nw...ehe hulet month betem destegna kehonkebachehu ye hiwote wusti andegna becha sehihon mache leresa melchil dink time nebern... konjit be anch bezu destegna negn...minm tinsh wor behon gen ye ene ena ye anch relationship ye hulet year nw memselehu sewu bazi fetenet chrish be reket endzi megebebt betem tilk neger nw ...geta yimasgin sele hulu neger ...ke andi wor koyeta yilk ehe wor more challenge nebern like moknit, gech, fiker, enatish ...becha anch dengitesh, azinshim yenbera month nebera gen ahun sasibehu enkuhan hona yelkuwachehu negerochim neberu... gen yemetu negeroch hulu ye ene ena ye anchin hibrt seyatenkiru nebera ...enem sasibehu betem konjo be hulum neger misle mehon tdr mehon nw memslegn anch hiwote thank you eshi🥰🥰🥰... bezu negeroch anch ge becha yelu negeroch alu bazi time ende anch aynet yetregegech, be getahu fit hule methon, getawan mitwod ena kaza baly lemwudad hulem gugut yelt set bazi seat felgo megegnat betem kabad nw ... hiwote afkireshalehu 🥰🥰🥰anchin miste endthogn yewosankut ken ...betem tikikl endhon lenegersh ewodalehu...beke kazi bowelam hulunim negeroch more in  details enaworalen ye ene ye anch mibel neger aynorm minm behon ye gera ye huletachinm nw ... anch ge minm befetr ke metfo eska teru neger be gelts awurgn enem minm befetr ke anch ger enwosenalen ...anch yehon sewu aydlish be ene life wusti hiwote nesh ...be kele becha sehihon be tigber degmo ye ehunt hiwote endhonish le negerish felgelehu...yen mist ye lijoch enat hulu neger so happy be anch hulu ke ena dikamish afkirshalehu🥰🥰🥰❤️🔥... next ye mider koyetachin hulu ke anch ger endemeslfi amenalehu, bezu baletin, lidatochin, anniversary , sergi, lekso ena lelam neger andi lay enaslefelen beye amenalehu degmo geta yergel...konjit enkuhan adrsen ...l love You so much 🥰🥰💍😍😘😘😍😘🌍👸👸😍😍😍",
      },
      name: { en: "Yene", am: "Yene" },
    },
    {
      date: "2026-09-09",
      topic: { en: "Happy 100 days anniversary,", am: "Happy 100 days anniversary," },
      description: {
        en: `enate ❤️🥹
Ke anchi gar 100 ken behonim gen hibratachin kezi bely nw yen fiker..., yen wud ke anch gar yeslfkut time betam des yilegnal. ke anchi gar 100 ken bicha aydelem menor meflgehu gena betem bizu amatatochin nw . ❤️
Anchi yene hiywot, yene konjo, yene libe, nibse....hulu negere nesh ., hulunem desta ena hazan,  chigerochin inkwan andi lay enaslfelen yen akal..ke anch medbeke neger kazi bowela aynorm b/c miste , akale nesh. ye anch seki ena desta degmo betam des yilignal yene fegegita ... 🥹❤️
keanchi gar yeslfkutin hulunem moment betam new yemiwodehu leyu tirgum ale be ene life wusti.  🫶❤️
Mekniyatum anchi betam special neish le ene. Kazi bowela yekergnin ye medr koyeta hulunem kenoch ke anchi gar endihon efeligalehu. ❤️♾️
Betam aflershalehu, yene konjo. ❤️❤️♾️
Happy 100 days, my love.💕💝💞💖🥰❤️💋`,
        am: `enate ❤️🥹
Ke anchi gar 100 ken behonim gen hibratachin kezi bely nw yen fiker..., yen wud ke anch gar yeslfkut time betam des yilegnal. ke anchi gar 100 ken bicha aydelem menor meflgehu gena betem bizu amatatochin nw . ❤️
Anchi yene hiywot, yene konjo, yene libe, nibse....hulu negere nesh ., hulunem desta ena hazan,  chigerochin inkwan andi lay enaslfelen yen akal..ke anch medbeke neger kazi bowela aynorm b/c miste , akale nesh. ye anch seki ena desta degmo betam des yilignal yene fegegita ... 🥹❤️
keanchi gar yeslfkutin hulunem moment betam new yemiwodehu leyu tirgum ale be ene life wusti.  🫶❤️
Mekniyatum anchi betam special neish le ene. Kazi bowela yekergnin ye medr koyeta hulunem kenoch ke anchi gar endihon efeligalehu. ❤️♾️
Betam aflershalehu, yene konjo. ❤️❤️♾️
Happy 100 days, my love.💕💝💞💖🥰❤️💋`
      },
      name: { en: "Yene", am: "Yene" },
    },
    {
      date: "2026-08-22",
      topic: {
        en: "Special Love Message🌷",
        am: "Special Love Message🌷",
      },
      description: {
        en: "Yene bal yene Hulu neger edet edemafekrh ena edemamnh tawkaleh ....antega sawera betam Des ylegnal .....Yemren nw abat kasebkut belay befkrh teyzalew ....tchilaleh eshi ..bedenb nw yeyazkegn ....kelbe afekrhalew betam😍😍 kantega mawrat betam mwedew neger nw ....beka dmtshn kesemaw betam nw Des milegn ....hulem behu negere wst asbhew ....ahun ahun rasen eyeferahu metahu ....Yemren nw edet masredat edalebgn balawkm betam etamenkuh slemetahu rasen ferawalew ...gn beka bzu gize mlh neger ale esum ..betam afekrhalew nw .....kante wchi  bal ena fikir mnm neger alfelgm ..beka yemejemeriyaye edehonkew Hulu yemechereshaym neh .....gena ko altegabanm adel gn fkregnamich edehone alasbm ena leza nw bale yemalet dfretun yagegnehut  ...bzu gize sawerahm beka bale nw  ene ergtegna negn bale edemthon ena misth edemhon ....leza nw bezih seat enena ante and bet wst menor bnjemr aykebdenm mnlew huletachinm goal yaderegew neger ale ..manm lekeld or beka lmokrew blo yejemere yelem ena begna gngnunet wst agatami mibal neger yelem Hulum tasbobet ena tetselyobet nw yehonew ena wede huala mnasbbet mnm mkniat yelenm ......ena beka bale be edme zemene Hulu kante ga  misth hogne lnor fekadegna negn .....abreh lemenor mtguagualechewn ljochn lseth ...bebeth Selam desta fkir reft ljoch mtagegnbat misth lhon kewesenku koychalew ....kelbe afekrhalew .... kezih behuala abren Nen ..bzu destawech bzu alemedesetoch bzu chigrochn abren enasalfalen  enezihn negeroch degmo fikrachinn yataftutal enji lela mnm chigr aynorachewm egnaay ...mnm bifeter ategebh alew eshi abate ...hulem afekrhalew ......yantew afkaru hareg Mulugeta hailu ......",
        am: "Yene bal yene Hulu neger edet edemafekrh ena edemamnh tawkaleh ....antega sawera betam Des ylegnal .....Yemren nw abat kasebkut belay befkrh teyzalew ....tchilaleh eshi ..bedenb nw yeyazkegn ....kelbe afekrhalew betam😍😍 kantega mawrat betam mwedew neger nw ....beka dmtshn kesemaw betam nw Des milegn ....hulem behu negere wst asbhew ....ahun ahun rasen eyeferahu metahu ....Yemren nw edet masredat edalebgn balawkm betam etamenkuh slemetahu rasen ferawalew ...gn beka bzu gize mlh neger ale esum ..betam afekrhalew nw .....kante wchi  bal ena fikir mnm neger alfelgm ..beka yemejemeriyaye edehonkew Hulu yemechereshaym neh .....gena ko altegabanm adel gn fkregnamich edehone alasbm ena leza nw bale yemalet dfretun yagegnehut  ...bzu gize sawerahm beka bale nw  ene ergtegna negn bale edemthon ena misth edemhon ....leza nw bezih seat enena ante and bet wst menor bnjemr aykebdenm mnlew huletachinm goal yaderegew neger ale ..manm lekeld or beka lmokrew blo yejemere yelem ena begna gngnunet wst agatami mibal neger yelem Hulum tasbobet ena tetselyobet nw yehonew ena wede huala mnasbbet mnm mkniat yelenm ......ena beka bale be edme zemene Hulu kante ga  misth hogne lnor fekadegna negn .....abreh lemenor mtguagualechewn ljochn lseth ...bebeth Selam desta fkir reft ljoch mtagegnbat misth lhon kewesenku koychalew ....kelbe afekrhalew .... kezih behuala abren Nen ..bzu destawech bzu alemedesetoch bzu chigrochn abren enasalfalen  enezihn negeroch degmo fikrachinn yataftutal enji lela mnm chigr aynorachewm egnaay ...mnm bifeter ategebh alew eshi abate ...hulem afekrhalew ......yantew afkaru hareg Mulugeta hailu ......",
      },
      name: { en: "Leyu", am: "Leyu" },
    },
    {
      date: "2026-08-22",
      topic: { en: "Special Love Message 😍😘💕", am: "Special Love Message 💕😘😍" },
      description: {
        en: "Yen alam be anch fiker min endhon yefiker tergum yeyehubet ye kelet guday aydlm yemilehun yeyehubt set lijen mefker endzi nw ende beye yesbkubt...geta bemyewukehu anch becha nesh yen fiker hewoten mulu tekotetrsh ...anch be ene hiwote wusti seten bemyemelkt guday lemin ayhonim anch alesh be minm guday wusti anch alesh ....be fikersh tesrewelehu ...libe be sewu hiwote wusti betem wud new ...ke time bely ke birr bely lelam neger...betem wud neger ketebel lib nw anch libe wusti telkesh gebash tetotetersh yen ye libe sewu le anch betem wud bota lemaninm sewu lestehu melchlehu bota nw yesetehut ...bazi like nw anch be hiwote wusti wud...yen wud ..wud bota eheho setawush libe ye anch nw be libe wusti nuri degmo betem tenkeki endaligodabish ye anch menorya bota nw...yen wud laza nw anchin hiwotee milsh libe selehonsh nw yen libe...afkrshalehu hulem ke ena dekamish ...lela sewu lewodish yechelal teru negrshin , beretetishin ene gen mulu menintishin ke ena dikamish afkershalehu🤩🤩😍😍😍🥰🥰❤️❤️❤️🥰👸👸👸💍💍🔥🔥🔥🔥...ke anch liji mewuld anch megbt ke anch ger menor mewal andi ekf adrgo medr yen gugute nechehu konjo tdr yeteyegnal yen leyu...betem bizu neger wode hewotechi yemetel minm bemete yehon sewu ke anch ger ale...be desteshi gezi des yemelehu..be hazinesh gize ke anch gone mekon meybertshi sewu ale esum ene negn....yen mar yen tefci...ye anchin fiker kemskut betem yetefetel yen tafci ...mar kebeza yemeral aydl ababelu ye anch fiker be beza kutur le ene aymerm...yen tefci yen yemjmeryaye ye libe negist👸👸 yen wud hiwote yen leyu afkershalehu be hulum time ena huneta.... anchn ke sewu alwodadrm be wududur wusti atgbim bechegna sewu nesh.. ye libe sewu😍 esun edtwuki yehun...zare ahun lelit nw bazi seat akfesh atgebe edmegnish betem ergtegna negn ...be hiwote betem meminehu ena hergetegn yehonkubt guday ehe nw lemin edhona alkim ...kari ye hiwote chapter woyem tdr ke anch ger menor efelgelehu geta befkid ..ene ena anch liji mewuld ena mesdg nw mefelgehu...ke anch medrgehu neger des belogn nw medrgehu yen astewayi mist yen wud yen tefaci yen mar yen fiker😍😍😍😍 afkershalehu...min yehil edhon libe wust gebetsh betey noro des yelegn nebera gen beke kemilish belye nw mefkershi🥰🥰🥰🥰👸👸👸👸👸❤️❤️❤️❤️❤️😘😘😘😘😘",
        am: "Yen alam be anch fiker min endhon yefiker tergum yeyehubet ye kelet guday aydlm yemilehun yeyehubt set lijen mefker endzi nw ende beye yesbkubt...geta bemyewukehu anch becha nesh yen fiker hewoten mulu tekotetrsh ...anch be ene hiwote wusti seten bemyemelkt guday lemin ayhonim anch alesh be minm guday wusti anch alesh ....be fikersh tesrewelehu ...libe be sewu hiwote wusti betem wud new ...ke time bely ke birr bely lelam neger...betem wud neger ketebel lib nw anch libe wusti telkesh gebash tetotetersh yen ye libe sewu le anch betem wud bota lemaninm sewu lestehu melchlehu bota nw yesetehut ...bazi like nw anch be hiwote wusti wud...yen wud ..wud bota eheho setawush libe ye anch nw be libe wusti nuri degmo betem tenkeki endaligodabish ye anch menorya bota nw...yen wud laza nw anchin hiwotee milsh libe selehonsh nw yen libe...afkrshalehu hulem ke ena dekamish ...lela sewu lewodish yechelal teru negrshin , beretetishin ene gen mulu menintishin ke ena dikamish afkershalehu🤩🤩😍😍😍🥰🥰❤️❤️❤️🥰👸👸👸💍💍🔥🔥🔥🔥...ke anch liji mewuld anch megbt ke anch ger menor mewal andi ekf adrgo medr yen gugute nechehu konjo tdr yeteyegnal yen leyu...betem bizu neger wode hewotechi yemetel minm bemete yehon sewu ke anch ger ale...be desteshi gezi des yemelehu..be hazinesh gize ke anch gone mekon meybertshi sewu ale esum ene negn....yen mar yen tefci...ye anchin fiker kemskut betem yetefetel yen tafci ...mar kebeza yemeral aydl ababelu ye anch fiker be beza kutur le ene aymerm...yen tefci yen yemjmeryaye ye libe negist👸👸 yen wud hiwote yen leyu afkershalehu be hulum time ena huneta.... anchn ke sewu alwodadrm be wududur wusti atgbim bechegna sewu nesh.. ye libe sewu😍 esun edtwuki yehun...zare ahun lelit nw bazi seat akfesh atgebe edmegnish betem ergtegna negn ...be hiwote betem meminehu ena hergetegn yehonkubt guday ehe nw lemin edhona alkim ...kari ye hiwote chapter woyem tdr ke anch ger menor efelgelehu geta befkid ..ene ena anch liji mewuld ena mesdg nw mefelgehu...ke anch medrgehu neger des belogn nw medrgehu yen astewayi mist yen wud yen tefaci yen mar yen fiker😍😍😍😍 afkershalehu...min yehil edhon libe wust gebetsh betey noro des yelegn nebera gen beke kemilish belye nw mefkershi🥰🥰🥰🥰👸👸👸👸👸❤️❤️❤️❤️❤️😘😘😘😘😘",
      },
      name: { en: "Yene", am: "Yene" },
    },
     {
      date: "2026-09-01",
      topic: {
        en: "Happy Three Month Anniversary...❤️🥹🌹💖✨🤍🥰",
        am: "Happy Three Month Anniversary...❤️🥹🌹💖✨🤍🥰",
      },
      description: {
        en: "Yene bal enkuan geta redan betam Des blognal abate kantega ketegenagnen gize jemro betam destegna negn yene workye😘😘 bal ,yene shebela ,yene yewah ,yene jegna,yene tekochi bal betam betam afekrhalehu enkuanm tegenagnen ye sewn lb mewsedun tchilbetaleh eshi ..salhn swedew 😍😍 hulem saklgn yene chirash hasabh degmo betam ymechegnal arkeh mtasbew neger astewayneth beyesusm kasebkut belay asteway sew honeh agichehalew ena yhe menfes enega edigaba madreg alebh ...3 wer lay tekemche gn ye 80 bale nw mtmeslegn geta hoy 🫣🫣🫣 bcha bale afekrhalehu wedhalew😍😍😍😍😘😘😘😘😘😘😍😍 kantega Keri gizeyen  and bet wst menor felgalew ljochin mewled betam mnafkew neger nw...ante ye ljoch abat sthon mayet felgalew .. behiwote kalu sewech yemejemeriawa sew ante neh dkamen ena tnkareyen mtak betam tetegchew ye wsten waweraw smeten mgeltsket bchegnaw sew ante neh yene bal slemtadamtegn betam wedhalew 😍😍😍😘😘❤️❤️❤️ enkuan 3 werachinn lemakber egziabher redan .. kezih behualam weratochin sayhon ametatochin abren nw mnakebrew betdarachin wst ....by the way tdarn sasb malferaw balyew ante slehonk nw edewm ednafkew adrgehgnal  sewech mehalk eyaweran lbe wst yalehew ante neh yehone Bota heje masbew slante nw sra eyeseraw tz mtlegn ante neh .. bezih lk nw Yenen life yetekotterkew even tselotoche wstm aleh ...bcha stotaye neh eshi 😍😘😍🥰😍🥰🥰😍🥰🥰😘🥰😍hulem afekrhalew..kemasbew ena nw kalkut belay fikir yzognal le zih teteyakiw degmo ante neh .bcha gn kelbe afekrhalew Neff amet nurlgn",
        am: "Yene bal enkuan geta redan betam Des blognal abate kantega ketegenagnen gize jemro betam destegna negn yene workye😘😘 bal ,yene shebela ,yene yewah ,yene jegna,yene tekochi bal betam betam afekrhalehu enkuanm tegenagnen ye sewn lb mewsedun tchilbetaleh eshi ..salhn swedew 😍😍 hulem saklgn yene chirash hasabh degmo betam ymechegnal arkeh mtasbew neger astewayneth beyesusm kasebkut belay asteway sew honeh agichehalew ena yhe menfes enega edigaba madreg alebh ...3 wer lay tekemche gn ye 80 bale nw mtmeslegn geta hoy 🫣🫣🫣 bcha bale afekrhalehu wedhalew😍😍😍😍😘😘😘😘😘😘😍😍 kantega Keri gizeyen  and bet wst menor felgalew ljochin mewled betam mnafkew neger nw...ante ye ljoch abat sthon mayet felgalew .. behiwote kalu sewech yemejemeriawa sew ante neh dkamen ena tnkareyen mtak betam tetegchew ye wsten waweraw smeten mgeltsket bchegnaw sew ante neh yene bal slemtadamtegn betam wedhalew 😍😍😍😘😘❤️❤️❤️ enkuan 3 werachinn lemakber egziabher redan .. kezih behualam weratochin sayhon ametatochin abren nw mnakebrew betdarachin wst ....by the way tdarn sasb malferaw balyew ante slehonk nw edewm ednafkew adrgehgnal  sewech mehalk eyaweran lbe wst yalehew ante neh yehone Bota heje masbew slante nw sra eyeseraw tz mtlegn ante neh .. bezih lk nw Yenen life yetekotterkew even tselotoche wstm aleh ...bcha stotaye neh eshi 😍😘😍🥰😍🥰🥰😍🥰🥰😘🥰😍hulem afekrhalew..kemasbew ena nw kalkut belay fikir yzognal le zih teteyakiw degmo ante neh .bcha gn kelbe afekrhalew Neff amet nurlgn",
      },
      name: { en: "Leyu", am: "Leyu" },
    },
    {
      date: "2026-09-01",
      topic: {
        en: "Happy Three Month Anniversary...❤️🥹🌹💖✨🤍🥰",
        am: "Happy Three Month Anniversary...❤️🥹🌹💖✨🤍🥰",
      },
      description: {
        en: "yen fiker❤️❤️ enkuhan geta lazi ken aderesh🎁🎁🎁🎉🎉🎉 ehe ken  begugut yemintbekehu ken nw ..yen wub😊😊 ahun be akel andi lay hogn ye gera konjo time benselfi des yelegn nebera yen leyu🥰🥰🥰 ke anch ger sengenagn be agetm be mimesl mengd nebera yetgenagnenehu...miknetum huletachinm gib yegbanehu le temert nebera ...ahun kome beye sesib laka geta ehen asibo nw ene ehen hulu mengd  yewosedegn yen ye hiwote setota🎁❤️🥹🌹💖✨🤍🥰🎁 be anch betem destegna negn ke anch ger relashinship yejemrkubet ken machem leresa alchilm ...ye ene ena ye anch lidet ke nachin nw be gera yetwoldenbt dink ken nw so yen fiker🥰🥰🥰 hulem edetk mifelgehu neger anch melt hiwote edhonish mitregu neger hulu be ene lay value edale ...edeteki felgelehu yehon person aydleshim yen konjo😘❤️🥹🌹💖✨🤍🥰😘😘 ke anch lela mist, ke anch ke lela yen fiker, ke anch lela wud sewu ...be hiwote wusti yelem kazi bowelam ednor alfligm ...anch ye lijint fiker ...wodefit ye lijoch enate🤰🤰 nesh ....manim degmo ye anch bota be hiwote lenorehu aychlim konjit yen konjo🥰🥰 ...ke maninm ger alwodadrishm b/c akale nesh ....anch be hiwote wusti benorish be desta eynorku nw ...edlish betem teru nw minim selelefa tolo sera agegnahu,...mikenetu degmo hulem be tselotuwa mitsbegn geta yeberket libam konjo mist selalechign ...hulem be gone selelishgn hulem ewodishalehu..afkershalehu😘😘🥰❤️🥹🌹💖✨🤍🥰🥰🥰🥰....lela neger misb eskamalichl ders hulem anchin nw mesbehu yen fiker❤️❤️🥹🌹💖✨🤍🥰❤️❤️....wuddd 😘😘😘❤️❤️🥹🌹💖✨🤍🥰❤️🥰🥰nw mergish ...ke anch ger menor ...ede anch konjo lejochin ke anch mewuled betem be gugut metbekehu neger nw ...anch yen becha nesh enem ye anch becha ...be mehalachin maninm aygebam minm befeter huletachinm be mewurt enfetelen ...yen alam, yen fiker, yen konjo, yen leyu,ye lijoch enate yenem libam mist...hulem ke libe ke nabse afkershalehu❤️🥹🌹💖✨🤍🥰🥰🥰🥰🥰",
        am: "yen fiker❤️❤️ enkuhan geta lazi ken aderesh🎁🎁🎁🎉🎉🎉 ehe ken  begugut yemintbekehu ken nw ..yen wub😊😊 ahun be akel andi lay hogn ye gera konjo time benselfi des yelegn nebera yen leyu🥰🥰🥰 ke anch ger sengenagn be agetm be mimesl mengd nebera yetgenagnenehu...miknetum huletachinm gib yegbanehu le temert nebera ...ahun kome beye sesib laka geta ehen asibo nw ene ehen hulu mengd  yewosedegn yen ye hiwote setota🎁❤️🥹🌹💖✨🤍🥰🎁 be anch betem destegna negn ke anch ger relashinship yejemrkubet ken machem leresa alchilm ...ye ene ena ye anch lidet ke nachin nw be gera yetwoldenbt dink ken nw so yen fiker🥰🥰🥰 hulem edetk mifelgehu neger anch melt hiwote edhonish mitregu neger hulu be ene lay value edale ...edeteki felgelehu yehon person aydleshim yen konjo😘❤️🥹🌹💖✨🤍🥰😘😘 ke anch lela mist, ke anch ke lela yen fiker, ke anch lela wud sewu ...be hiwote wusti yelem kazi bowelam ednor alfligm ...anch ye lijint fiker ...wodefit ye lijoch enate🤰🤰 nesh ....manim degmo ye anch bota be hiwote lenorehu aychlim konjit yen konjo🥰🥰 ...ke maninm ger alwodadrishm b/c akale nesh ....anch be hiwote wusti benorish be desta eynorku nw ...edlish betem teru nw minim selelefa tolo sera agegnahu,...mikenetu degmo hulem be tselotuwa mitsbegn geta yeberket libam konjo mist selalechign ...hulem be gone selelishgn hulem ewodishalehu..afkershalehu😘😘🥰❤️🥹🌹💖✨🤍🥰🥰🥰🥰....lela neger misb eskamalichl ders hulem anchin nw mesbehu yen fiker❤️❤️🥹🌹💖✨🤍🥰❤️❤️....wuddd 😘😘😘❤️❤️🥹🌹💖✨🤍🥰❤️🥰🥰nw mergish ...ke anch ger menor ...ede anch konjo lejochin ke anch mewuled betem be gugut metbekehu neger nw ...anch yen becha nesh enem ye anch becha ...be mehalachin maninm aygebam minm befeter huletachinm be mewurt enfetelen ...yen alam, yen fiker, yen konjo, yen leyu,ye lijoch enate yenem libam mist...hulem ke libe ke nabse afkershalehu❤️🥹🌹💖✨🤍🥰🥰🥰🥰🥰",
      },
      name: { en: "Yene", am: "Yene" },
    },
     {
      date: "2026-09-25",
      topic: {
        en: "Special Love Message🌷",
        am: "Special Love Message🌷",
      },
      description: {
        en: `Abat smagnma ....hulem fikirem meglets ena metshaf kechalkut belay afekrhalew ....eneja alawkm lbe betam nw yameneh ....wend lji aytamenm balkubet andebete ..amgnehalew asbelhgnal ...ye ewnet amgnehalew afkrehalew kezih behuala behiwote latah alfelgm ante yene bcha neh ene yante bcha negn ...enem lbem hasabem sewnetem lante talfo tesetual yante bcha nw ....Yemren nw Kal yelegnm gn beka kelbe afekrhalew hulgizem tnafkegnaleh andade gize bante ekf wst mekoyet yamregnal ....gibi eyalen Selam stlegn mtakfegn neger ynafkegnal ....anten menkat bcha mayet bcha mnafkbet gize bzu nw ....bzu neger astemrehgnal ...bzu melkam negeroch kante temrialew ...Hulu negerhn wedewalew hasabhn lbhn akuamhn beka eyandadu negerhn wedewalew ...netsanete neh yetesemagnn mangnawnm neger be gltse maweraw antega nw ... egziabher bzu salefa bzu relationship wst salmokr gena bemejemerw tkklegnawn sew setognal betam edlegna sew negn ....edante aynet bal slalat hareg hulem edlegna nech ...yetum negere saybelash yante nw ....bale hulem afekrhalew.....ke fikir ketlo yalew meseber yasferagn nbr ..ahun gn tkklegnaw sew ga tetelfe be fikir yalehn mesrat ena ye bahri lewt aychebetalew ....yene yemejemeria bal yeljiche abat yebete ras kenebse afekrhalew ....lela kalt binorugn ena bedenb mawrat bchil Des ylegn nbr .... relationship tdar milewn sasb destegna yehonkut mngbabaw ante ga slehone nw ......ante edematgidagn awkalew ..betam edemtasblgn ena Lene yalehn ye fikir lb awkalew leza nw be fikirhn destegna mihonew ....afekrhalew ❤️❤️❤️❤️❤️❤️❤️
Afekrhalew 😍😍
Afekrhalew 😍😘😍😘
Amgnehalew 😍😘😍
Amgnehalew🤝🤝🤝🤝
Amgnehalew 🤝🤝🤝
Ewodhalew 🫶🫶
ewodhalew 🫶🫶🫶🫶
Ewodhalew 🫶🫶🫶🫶
Bale neh eshi 🤵‍♂🤵‍♂🤵‍♂🤵‍♂
Misth negn 👰‍♀👰‍♀👰‍♀
Yalenn fikir sasb betam ergtegna negn edemngaba .....ye ena yante relationship menged lay aykerm eshi gabcha lay ydersal fren yaferal .......eshi beka ena hunlgn wdye`,
        am: `Abat smagnma ....hulem fikirem meglets ena metshaf kechalkut belay afekrhalew ....eneja alawkm lbe betam nw yameneh ....wend lji aytamenm balkubet andebete ..amgnehalew asbelhgnal ...ye ewnet amgnehalew afkrehalew kezih behuala behiwote latah alfelgm ante yene bcha neh ene yante bcha negn ...enem lbem hasabem sewnetem lante talfo tesetual yante bcha nw ....Yemren nw Kal yelegnm gn beka kelbe afekrhalew hulgizem tnafkegnaleh andade gize bante ekf wst mekoyet yamregnal ....gibi eyalen Selam stlegn mtakfegn neger ynafkegnal ....anten menkat bcha mayet bcha mnafkbet gize bzu nw ....bzu neger astemrehgnal ...bzu melkam negeroch kante temrialew ...Hulu negerhn wedewalew hasabhn lbhn akuamhn beka eyandadu negerhn wedewalew ...netsanete neh yetesemagnn mangnawnm neger be gltse maweraw antega nw ... egziabher bzu salefa bzu relationship wst salmokr gena bemejemerw tkklegnawn sew setognal betam edlegna sew negn ....edante aynet bal slalat hareg hulem edlegna nech ...yetum negere saybelash yante nw ....bale hulem afekrhalew.....ke fikir ketlo yalew meseber yasferagn nbr ..ahun gn tkklegnaw sew ga tetelfe be fikir yalehn mesrat ena ye bahri lewt aychebetalew ....yene yemejemeria bal yeljiche abat yebete ras kenebse afekrhalew ....lela kalt binorugn ena bedenb mawrat bchil Des ylegn nbr .... relationship tdar milewn sasb destegna yehonkut mngbabaw ante ga slehone nw ......ante edematgidagn awkalew ..betam edemtasblgn ena Lene yalehn ye fikir lb awkalew leza nw be fikirhn destegna mihonew ....afekrhalew ❤️❤️❤️❤️❤️❤️❤️
Afekrhalew 😍😍
Afekrhalew 😍😘😍😘
Amgnehalew 😍😘😍
Amgnehalew🤝🤝🤝🤝
Amgnehalew 🤝🤝🤝
Ewodhalew 🫶🫶
ewodhalew 🫶🫶🫶🫶
Ewodhalew 🫶🫶🫶🫶
Bale neh eshi 🤵‍♂🤵‍♂🤵‍♂🤵‍♂
Misth negn 👰‍♀👰‍♀👰‍♀
Yalenn fikir sasb betam ergtegna negn edemngaba .....ye ena yante relationship menged lay aykerm eshi gabcha lay ydersal fren yaferal .......eshi beka ena hunlgn wdye`,
      },
      name: { en: "Leyu", am: "Leyu" },
    },
    {
      date: "2026-09-25",
      topic: {
        en: "Special Love Message🌷",
        am: "Special Love Message🌷",
      },
      description: {
        en: `Be geta zare degmo min aynet hasb nw yeworashihu...lela aynet semt tesemegn betem des alegn yen wud ...negeroch be 3 yetsenalu edmil sost sost gize degagemishihu...enem ke milish bely ...kemaworash bely afkershalehu...yen ababa anch sisb beke betem des yelgnal anchin sisb tdr yeteygnal anch sesib andi adar aydlm metyegn...bizu relationship le andi adr nw ...andi ken sex kergu bowela ...beke yeflkutin neger agegnahu tebeblo breakup yergelu...ene gen andim ken anchin le goda asib alwukim...geta bemywukehu libshin lemsebr .. beke yehon ken ke kebdegn break argelehu beye asbi alwukim...challenge yenoral ahu esun be gonish hogn ke anch ger tdr memsrt nw ekidee ...andi neger degmo lengirsh libshin betem etbkelehu eshi be ene miknet edtazin alflgem...be desta miknet enji be ene azenesh enbashi edwota machim alflgim...aydlm be ene be lela sewu enkuhan edtazin alflgim esu degmo be tinkeke etbkelehu...yen hulu neger ye anch nw ..ke manim ger equal bota aydlm yelesh ..ye anch bota kemanim ger aywodadrim anch anch nesh ye anch bota ye anch becha nw yen libe sewu...betem afkershalehu...yen libam set, ye setent lik nesh laza nw hulun negern le anch yesetahut...yen fiker hulem tenafkegnalesh andi sewu mani nafki ketbel anchi...ekif mergi hule yamergnal..ekif argi rithim seat mekoyet...gen sengenagn erfi eskity ders ekif edmadergi lenegrish felgelehu...kaza degmo denbershim edemisem ...yen tafaci hulem betem des selgnim afkershalehu degmo sekefegn ena sedkimim hulu afkershalehu...enkuhanim ke anch ger relationship jemerku enkuhanim miste honesh...be esu wusen hulem destegna negn yen stota...
balesh negn 
Balish negn
Balish negn...
Miste nesh💍💍💍
Miste mesh💍💍💍
Miste nesh💍💍💍...neger be sost yetsenal edmibelehu...
lib ye anch nw ❤️❤️💖💞
lib ye anch nw❤️❤️😘💞😘
lib ye anch nw💖💖❤️😘
Afkershalehu🥰❤️😘💖💞
Afkershalehu🥰❤️😘💖💞
Afkershalehu🥰❤️😘💖💞
Amnishalehu☺️
Amnishalehu☺️
Amnishalehu☺️ ...beke milsh bely...yen abab hulem tetkikgn be anch yetsebera lib machem aytgenim ...enem etnkeklehu💋💋👸💞💖💕💝❤️💍yen leyu, fiker,wud,nibse,lib, enat,libam, ewodishalehu ke libem afkershalehu❤️💝💝💖💞💞💝💞💖❤️💞💝🥰😘🥰😘🥰`,
        am: `Be geta zare degmo min aynet hasb nw yeworashihu...lela aynet semt tesemegn betem des alegn yen wud ...negeroch be 3 yetsenalu edmil sost sost gize degagemishihu...enem ke milish bely ...kemaworash bely afkershalehu...yen ababa anch sisb beke betem des yelgnal anchin sisb tdr yeteygnal anch sesib andi adar aydlm metyegn...bizu relationship le andi adr nw ...andi ken sex kergu bowela ...beke yeflkutin neger agegnahu tebeblo breakup yergelu...ene gen andim ken anchin le goda asib alwukim...geta bemywukehu libshin lemsebr .. beke yehon ken ke kebdegn break argelehu beye asbi alwukim...challenge yenoral ahu esun be gonish hogn ke anch ger tdr memsrt nw ekidee ...andi neger degmo lengirsh libshin betem etbkelehu eshi be ene miknet edtazin alflgem...be desta miknet enji be ene azenesh enbashi edwota machim alflgim...aydlm be ene be lela sewu enkuhan edtazin alflgim esu degmo be tinkeke etbkelehu...yen hulu neger ye anch nw ..ke manim ger equal bota aydlm yelesh ..ye anch bota kemanim ger aywodadrim anch anch nesh ye anch bota ye anch becha nw yen libe sewu...betem afkershalehu...yen libam set, ye setent lik nesh laza nw hulun negern le anch yesetahut...yen fiker hulem tenafkegnalesh andi sewu mani nafki ketbel anchi...ekif mergi hule yamergnal..ekif argi rithim seat mekoyet...gen sengenagn erfi eskity ders ekif edmadergi lenegrish felgelehu...kaza degmo denbershim edemisem ...yen tafaci hulem betem des selgnim afkershalehu degmo sekefegn ena sedkimim hulu afkershalehu...enkuhanim ke anch ger relationship jemerku enkuhanim miste honesh...be esu wusen hulem destegna negn yen stota...
balesh negn 
Balish negn
Balish negn...
Miste nesh💍💍💍
Miste mesh💍💍💍
Miste nesh💍💍💍...neger be sost yetsenal edmibelehu...
lib ye anch nw ❤️❤️💖💞
lib ye anch nw❤️❤️😘💞😘
lib ye anch nw💖💖❤️😘
Afkershalehu🥰❤️😘💖💞
Afkershalehu🥰❤️😘💖💞
Afkershalehu🥰❤️😘💖💞
Amnishalehu☺️
Amnishalehu☺️
Amnishalehu☺️ ...beke milsh bely...yen abab hulem tetkikgn be anch yetsebera lib machem aytgenim ...enem etnkeklehu💋💋👸💞💖💕💝❤️💍yen leyu, fiker,wud,nibse,lib, enat,libam, ewodishalehu ke libem afkershalehu❤️💝💝💖💞💞💝💞💖❤️💞💝🥰😘🥰😘🥰`,
      },
      name: { en: "Yene", am: "Yene" },
    },
    {
      date: "2026-11-03",
      topic: {
        en: "🎉💍🥰 Happy 5th Month Anniversary, yen alam!🌎🌍 ❤️👑😘🌹🦋✨💕♾️👸💖🎂🥂💑🔐😍💞",
        am: "🎉💍🥰 Happy 5th Month Anniversary, yen alam!🌎🌍 ❤️👑😘🌹🦋✨💕♾️👸💖🎂🥂💑🔐😍💞",
      },
      description: {
        en: `Yen alam zare 5 wor molan be geta edet des eyalegn edel ...❤️🥹💍💕 kelel neger aydlm geta bertat honlenal agzonal..🙏❤️ mehratu be hibratachin bezetowel ....🫂💞 abronatu ke egna ger nebera ...🥰👩‍❤️‍👨 chrinatu beza yen fiker beke geta yimasgin ede esu yele abat 👨 , wodaji ena temegn yelem...❤️🙏 ke anch ger yekoyenbt hulunim moment betem nw mewodehu betem konjo time  nebera..😍🌹 sengbaba be chkichik wusti , be kerekr wusti yeslfnehu ken hulu le ene tilk temrt ena tesfa eyesetegn nebera ...🥹💗 yen konjo ene fiker edzi yergel beye asibe alkem nebera edzi afkeralehu beye altbekum nebera...💘💍 mulu tekurate be anch lay nebera... beke yehon ke wuste yehon mafkeri ...❤️ libe be anch fiker temolto nebera esu becha aydlm lela sewu mesb aydlm  le anch enkuhan yelegn 24 seat eynesegn nebera...🥰💞 100 percent miste ede honesh wust amenowel ...💯❤️ ke ger anch 5 wor koyeta behonim next yekergn ye mider koyeta ke anch ger becha edhon amegnwelehu...♾️💍 ke geta yetsetishign yen worke yen tafaci ena ye akal edhonesh lengrsh felgelehu...👑🌹 machem behon yen wudu negere edehonesh hulem asib ...beke  anch akale , miste, ye lijoche enat, ke anch wuci feker bekegn ...🥹❤️ ande anch yemseleche libam set geta setognal...💞 tselote mals nesh...🙏 semignat woyem miste bethon beye yesbkuti set nesh...🥰 ke ena dikamish afkershalehu ...❤️ libe ye anch ena ye anch nw manim be anch bota aykemtim wudu bota ye anch nw....💍💕 fikern edi nw beye meglets alchlim kelet aybekugnim yen wud zim belesh terjign ...😘 ede adis yeyazegn fiker edi beye aywotalegnim gen beke ...💗 yen mist hulum neger yelfina miste honesh sofa lay derte lay tegnitesh sela wulo..🫂❤️ sela liji ...👶 sela bet nuro ...ke kirbu edminawora ena andi bet wusti edmninor be geta betem amenalehu...🙏🏡 be hiwote yemjmerya set nesh ...👸💖 fiker yezogn fikern edzi beye yegltsekut anch nesh ...❤️ kazi bowelam maninm edzi melt alflgim...ye anch becha yehona neger be ene life wusti bezu nechehu like ke kelete jemero...🥹💞 enate, yen wud, yen fiker , yen alam, yen akale, leyu...👸❤️ yemseselu simoch ye anch becha nechehu...💍 hulem liben etbkeshalehu hulem hasbn etbkeshalehu...🥰 yetestkekle bet ednorn etselyalehu degmo etgelehu..🙏 geta betachinin yeserelenal ...🏡❤️ egn degmo yan bet lemwusad enbertalen ....🥹💑 kaza wuci degmo minm lela hasb mesb maychil be libu anchin becha eyesbe yeminor andi misken sewu edalesh hulem asib...🥺❤️ be fikersh sewun meyzi chlishibet... ke anch ger yelegn relationship ehunetegn edhon yegbegn mulu negershin selmwud nw ...💞 sewu edet dekamunim chmir yefkeral ene ge yelehu fiker edzi nw ke ene dikamish edmfker nw...❤️ kazi bowel 5 wor becha seyhon ...5 years 50 years ..👩‍❤️‍👨💍 liji ye liji liji hulu eska shmgelen bezu hazen ena desta enselflen ...👶🥹❤️ geta anchin yemselech libam ena wud set setognal..👑💕 be tenkeke eyzishalehu...🥰 anch yen becha nesh ...❤️ ke ene wuci le lela sewu athognim ...enem ye anch becha negn ke anch wuci le lela set bal mehon alflgim...💍 yemjmrsh ena yemcherashash negn ...💞 lik belelahu fiker....
❤️ afkershalehu ❤️
💗 afkershalehu 💗
💘 afkershalehu 💘
🥰 afkershalehu 🥰
😘 afkershalehu 😘
❤️ afkershalehu ❤️
💍 afkershalehu 💍
👑 Hulem ye anch hasb hasbe nw ...destesh destye nw ...hazenshim degmo haznen nw...🥹💞
💖 yen wud
👑 yen mist
🌍 Yen alam
❤️ Yen akal
💑 Yen gudegna
💍 Yen leyu
🌹 Yen konjo
👸 Yen enat
🥰 Yen tensh
💕 Yen asibi
💎 Yen mekeri
😘 Yen nafkot
🌷 Yen work
🦋 Yen ehet
❤️ Yen hulu negere...hulu neger nesh minm hasb metyek behonim ke anch bowela nw le lela sewu medrsehu...🥹💞 💍anch be hulum huneta wusti yemjmryaye nesh ....♾️🥰 ker zemenen eyafkerkush lenor kel egbelshalehu...❤️💍 yen melkem set...👑💍👸
Wuddddd...😘❤️💋😘🥰🥰
Fikerrrrr nw mergish...🥰💞♾️`,

        am: `Yen alam zare 5 wor molan be geta edet des eyalegn edel ...❤️🥹💍💕 kelel neger aydlm geta bertat honlenal agzonal..🙏❤️ mehratu be hibratachin bezetowel ....🫂💞 abronatu ke egna ger nebera ...🥰👩‍❤️‍👨 chrinatu beza yen fiker beke geta yimasgin ede esu yele abat 👨 , wodaji ena temegn yelem...❤️🙏 ke anch ger yekoyenbt hulunim moment betem nw mewodehu betem konjo time  nebera..😍🌹 sengbaba be chkichik wusti , be kerekr wusti yeslfnehu ken hulu le ene tilk temrt ena tesfa eyesetegn nebera ...🥹💗 yen konjo ene fiker edzi yergel beye asibe alkem nebera edzi afkeralehu beye altbekum nebera...💘💍 mulu tekurate be anch lay nebera... beke yehon ke wuste yehon mafkeri ...❤️ libe be anch fiker temolto nebera esu becha aydlm lela sewu mesb aydlm  le anch enkuhan yelegn 24 seat eynesegn nebera...🥰💞 100 percent miste ede honesh wust amenowel ...💯❤️ ke ger anch 5 wor koyeta behonim next yekergn ye mider koyeta ke anch ger becha edhon amegnwelehu...♾️💍 ke geta yetsetishign yen worke yen tafaci ena ye akal edhonesh lengrsh felgelehu...👑🌹 machem behon yen wudu negere edehonesh hulem asib ...beke  anch akale , miste, ye lijoche enat, ke anch wuci feker bekegn ...🥹❤️ ande anch yemseleche libam set geta setognal...💞 tselote mals nesh...🙏 semignat woyem miste bethon beye yesbkuti set nesh...🥰 ke ena dikamish afkershalehu ...❤️ libe ye anch ena ye anch nw manim be anch bota aykemtim wudu bota ye anch nw....💍💕 fikern edi nw beye meglets alchlim kelet aybekugnim yen wud zim belesh terjign ...😘 ede adis yeyazegn fiker edi beye aywotalegnim gen beke ...💗 yen mist hulum neger yelfina miste honesh sofa lay derte lay tegnitesh sela wulo..🫂❤️ sela liji ...👶 sela bet nuro ...ke kirbu edminawora ena andi bet wusti edmninor be geta betem amenalehu...🙏🏡 be hiwote yemjmerya set nesh ...👸💖 fiker yezogn fikern edzi beye yegltsekut anch nesh ...❤️ kazi bowelam maninm edzi melt alflgim...ye anch becha yehona neger be ene life wusti bezu nechehu like ke kelete jemero...🥹💞 enate, yen wud, yen fiker , yen alam, yen akale, leyu...👸❤️ yemseselu simoch ye anch becha nechehu...💍 hulem liben etbkeshalehu hulem hasbn etbkeshalehu...🥰 yetestkekle bet ednorn etselyalehu degmo etgelehu..🙏 geta betachinin yeserelenal ...🏡❤️ egn degmo yan bet lemwusad enbertalen ....🥹💑 kaza wuci degmo minm lela hasb mesb maychil be libu anchin becha eyesbe yeminor andi misken sewu edalesh hulem asib...🥺❤️ be fikersh sewun meyzi chlishibet... ke anch ger yelegn relationship ehunetegn edhon yegbegn mulu negershin selmwud nw ...💞 sewu edet dekamunim chmir yefkeral ene ge yelehu fiker edzi nw ke ene dikamish edmfker nw...❤️ kazi bowel 5 wor becha seyhon ...5 years 50 years ..👩‍❤️‍👨💍 liji ye liji liji hulu eska shmgelen bezu hazen ena desta enselflen ...👶🥹❤️ geta anchin yemselech libam ena wud set setognal..👑💕 be tenkeke eyzishalehu...🥰 anch yen becha nesh ...❤️ ke ene wuci le lela sewu athognim ...enem ye anch becha negn ke anch wuci le lela set bal mehon alflgim...💍 yemjmrsh ena yemcherashash negn ...💞 lik belelahu fiker....
❤️ afkershalehu ❤️
💗 afkershalehu 💗
💘 afkershalehu 💘
🥰 afkershalehu 🥰
😘 afkershalehu 😘
❤️ afkershalehu ❤️
💍 afkershalehu 💍
👑 Hulem ye anch hasb hasbe nw ...destesh destye nw ...hazenshim degmo haznen nw...🥹💞
💖 yen wud
👑 yen mist
🌍 Yen alam
❤️ Yen akal
💑 Yen gudegna
💍 Yen leyu
🌹 Yen konjo
👸 Yen enat
🥰 Yen tensh
💕 Yen asibi
💎 Yen mekeri
😘 Yen nafkot
🌷 Yen work
🦋 Yen ehet
❤️ Yen hulu negere...hulu neger nesh minm hasb metyek behonim ke anch bowela nw le lela sewu medrsehu...🥹💞 💍anch be hulum huneta wusti yemjmryaye nesh ....♾️🥰 ker zemenen eyafkerkush lenor kel egbelshalehu...❤️💍 yen melkem set...👑💍👸
Wuddddd...😘❤️💋😘🥰🥰
Fikerrrrr nw mergish...🥰💞♾️`,
      },
      name: { en: "Yene", am: "Yene" },
    },
  ],

  anniversaryDate: "2026-06-01T00:00:00",
  showLoveCounter: true,
  occasion: "romantic",

  letter: {
    en: 'My Love,\n\nThere are some feelings that words can never fully describe, but tonight, I want to try to put a little piece of my heart into these words.\n\nYou are not just someone I love. You are someone who has become a beautiful part of who I am. Since you came into my life, ordinary moments have felt more meaningful, simple days have felt more beautiful, and my heart has found a reason to smile a little more.\n\nYour smile has a way of making everything around me feel lighter. Your voice brings me a kind of peace that I cannot explain. Your presence makes even the quietest moments feel special. And whenever I think about the memories we have created together, I realize how lucky I am to have someone as precious as you in my life.\n\nI love the little things about you—the way you smile, the way you speak, the way you make moments unforgettable without even trying. I love the person you are, and I hope you always remember just how deeply you are loved and appreciated.\n\nThank you for every smile, every conversation, every beautiful memory, and every moment we have shared. Thank you for simply being you. You may never truly know how much happiness your existence has brought into my life.\n\nIf I could give you one thing, it would be the ability to see yourself through my eyes, just for a moment. Then you would understand how beautiful, precious, and irreplaceable you are to me.\n\nNo matter how many photos we take, how many memories we create, or how many love letters I write, I know I will never run out of reasons to love you. There will always be another memory to treasure, another smile to admire, and another reason to fall for you all over again.\n\nI don\'t know what the future will bring, but I know one thing—I want many more beautiful moments with you. More smiles. More laughter. More memories. More days where I can look at you and quietly think, "I am so lucky to have you."\n\nYou are a beautiful chapter in my story, a precious memory in my heart, and a person I will always be grateful for.\n\nI love you more than these words can ever explain.\n\nAlways yours,\nMe ❤️',
    am: "ውዷ ልቤ፣\n\nአንዳንድ ስሜቶች በቃላት ሙሉ በሙሉ ሊገለጹ አይችሉም፣ ግን ዛሬ ማታ ከልቤ የሆነውን ትንሽ ክፍል በእነዚህ ቃላት ለማስቀመጥ እፈልጋለሁ።\n\nአንቺ የምወድሽ ሰው ብቻ አይደለሽም። የራሴ አካል የሆነች፣ በህይወቴ ውስጥ ውብ ስፍራ የያዝሽ ሰው ነሽ። ወደ ህይወቴ ከመጣሽ ጀምሮ ተራ ጊዜያት ትርጉም ያላቸው ሆነዋል፣ ቀላል ቀናትም የበለጠ ውብ ሆነዋል፣ ልቤም ትንሽ ተጨማሪ ምክንያት እንዲስቅ አግኝቷል።\n\nፈገግታሽ በዙሪያዬ ያለውን ሁሉ ቀለል እንዲል የሚያደርግ ልዩ ነገር አለው። ድምፅሽም በቃላት ልገልጸው የማልችለውን ሰላም ይሰጠኛል። መገኘትሽ ጸጥ ያሉ ጊዜያትን እንኳን ልዩ ያደርጋቸዋል። እና አብረን የፈጠርናቸውን ትዝታዎች ሳስብ፣ እንደ አንቺ ያለች ውድ ሰው በህይወቴ ስላለች ምን ያህል እድለኛ እንደሆንኩ እገነዘባለሁ።\n\nስለ አንቺ ያሉትን ትንንሽ ነገሮች እወዳቸዋለሁ—አገላለጽሽን፣ አነጋገርሽን፣ ሳትሞክሪ እንኳን ጊዜያትን የማይረሱ ማድረግሽን። የሆንሽውን ሰው እወዳለሁ፣ እናም ምን ያህል እንደምወድሽና እንደማደንቅሽ ሁልጊዜ እንድታስታውሺ እፈልጋለሁ።\n\nለሁሉም ፈገግታዎችሽ፣ ለእያንዳንዱ ውይይታችን፣ ለሁሉም ውብ ትዝታዎችና አብረን ላሳለፍናቸው ጊዜያት አመሰግናለሁ። በቀላሉ አንቺ ስለሆንሽ አመሰግናለሁ። የመኖርሽ ብቻ በህይወቴ ምን ያህል ደስታን እንዳመጣ ምናልባት ሙሉ በሙሉ ልታውቂው አትችይም።\n\nአንድ ነገር ልሰጥሽ ብችል፣ ራስሽን በእኔ ዓይን እንድታዪ የሚያስችልሽን ችሎታ እሰጥሽ ነበር—ለአንድ አፍታ ብቻ። ያኔ ለእኔ ምን ያህል ውብ፣ ውድ እና ልዩ እንደሆንሽ ትረዺ ነበር።\n\nምንም ያህል ፎቶዎችን ብንወስድ፣ ምንም ያህል ትዝታዎችን ብንፈጥር፣ ወይም ምንም ያህል የፍቅር ደብዳቤዎችን ብጽፍ፣ ለአንቺ የምወድሽባቸው ምክንያቶች ፈጽሞ አያልቁም። ሁልጊዜ ልወደው የምችለው አዲስ ትዝታ፣ ልመለከተው የምፈልገው ሌላ ፈገግታ እና እንደገና በአንቺ እንድወድ የሚያደርገኝ ሌላ ምክንያት ሁልጊዜ ይኖራል።\n\nወደፊት ምን እንደሚጠብቀን አላውቅም፣ ግን አንድ ነገር አውቃለሁ—ከአንቺ ጋር ብዙ ተጨማሪ ውብ ጊዜያትን ማሳለፍ እፈልጋለሁ። ብዙ ፈገግታዎች፣ ብዙ ሳቅ፣ ብዙ ትዝታዎች፣ እና አንቺን እያየሁ በልቤ በጸጥታ፣ “አንቺን በማግኘቴ በጣም እድለኛ ነኝ” የምልባቸው ብዙ ቀናት።\n\nአንቺ በታሪኬ ውስጥ ውብ ምዕራፍ፣ በልቤ ውስጥ ውድ ትዝታ፣ እና ሁልጊዜ የማመሰግነው ሰው ነሽ።\n\nፍቅሬን እነዚህ ቃላት ሊገልጹት ከሚችሉት በላይ ሁልጊዜ አፈቅርሻላዉ።\n\nሁልጊዜ የአንቺ፣\nእኔ ❤️",
  },

  photos: [
    {
      src: "assets/photos/photo1.jpg",
      caption: "A beautiful memory with my favorite person. ❤️",
    },

    {
      src: "assets/photos/photo2.jpg",
      caption: "One of my favorite moments with you. 🥰💕",
    },

    {
      src: "assets/photos/photo3.jpg",
      caption: "That smile will always have my heart. 😊❤️",
    },

    {
      src: "assets/photos/photo4.jpg",
      caption: "I could look at you like this forever. 💕✨",
    },

    {
      src: "assets/photos/photo5.jpg",
      caption: "Us, just being us — and I love it. 🥰❤️",
    },

    {
      src: "assets/photos/photo6.jpg",
      caption: "Every moment with you becomes a precious memory. ❤️✨",
    },

    {
      src: "assets/photos/photo7.jpg",
      caption: "A memory I will treasure in my heart forever. 💖",
    },

    {
      src: "assets/photos/photo8.jpg",
      caption: "You have a way of making every moment brighter. 🌸❤️",
    },

    {
      src: "assets/photos/photo9.jpg",
      caption: "Forever grateful for this beautiful moment with you. 💕",
    },

    {
      src: "assets/photos/photo10.jpg",
      caption: "Here's to this moment and all the memories still to come. 🥰✨",
    },

    {
      src: "assets/photos/photo11.jpg",
      caption:
        "Every picture of you gives my heart another reason to smile. ❤️😊",
    },

    {
      src: "assets/photos/photo12.jpg",
      caption:
        "Your gentle and humble heart is one of the things I cherish most about you. 💖✨",
    },

    {
      src: "assets/photos/photo13.jpg",
      caption:
        "A beautiful reminder of the blessing God has placed in my life. 🙏❤️✨",
    },

    {
      src: "assets/photos/photo14.jpg",
      caption:
        "This is me, with a heart full of love and gratitude for you. ❤️🙏✨",
    },

    {
      src: "assets/photos/photo15.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo16.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo17.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo18.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo19.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo20.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo21.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo22.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo23.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo24.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo25.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo26.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo27.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo28.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo29.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
     {
      src: "assets/photos/photo30.jpg",
      caption:
        "Just me, hoping to be someone worthy of the beautiful love you deserve. ❤️🥰✨",
    },
  ],

  // Add MP4 files to assets/videos/ and list each one here. The poster is optional.
  videos: [
    // { src: "assets/videos/memory-01.mp4", poster: "assets/photos/photo1.jpg", title: { en: "A favorite moment ❤️", am: "ውድ ጊዜያችን ❤️" } }
  ],

  finalPhotoIndex: 0,

  timeline: {
    en: [
      {
        icon: "✨",
        title: "The Beginning",
        text: "The moment everything started...",
      },
      {
        icon: "❤️",
        title: "Our First Special Memory",
        text: "A moment I'll never forget.",
      },
      {
        icon: "🥰",
        title: "The Beautiful Moments",
        text: "Every moment with you became a memory.",
      },
      {
        icon: "🌹",
        title: "Today",
        text: "And I'm still grateful to have you in my life.",
      },
    ],
    am: [
      { icon: "✨", title: "መጀመሪያ", text: "ሁሉም ነገር የተጀመረበት ጊዜ..." },
      { icon: "❤️", title: "የመጀመሪያ ልዩ ትዝታችን", text: "ፈጽሞ የማልረሳው ጊዜ።" },
      { icon: "🥰", title: "ውብ ጊዜያት", text: "ከአንቺ ጋር ያለኝ እያንዳንዱ ጊዜ ትዝታ ሆነ።" },
      {
        icon: "🌹",
        title: "ዛሬ",
        text: "እና አሁንም አንቺን በህይወቴ ውስጥ በማግኘቴ ደስተኛ ነኝ።",
      },
    ],
  },

  reasons: {
    en: [
      {
        icon: "😊",
        title: "Your Smile",
        text: "Your smile reaches a place in my heart that nothing else can. Whenever I see it, I quietly thank God for giving me a reason to smile too. ❤️🙏",
      },
      {
        icon: "🥰",
        title: "Your Gentle Heart",
        text: "Your gentleness is one of the things I treasure most about you. In a world that can be harsh, your soft and kind heart reminds me that beautiful souls still exist. 🥰❤️",
      },
      {
        icon: "❤️",
        title: "Your Humility",
        text: "I love the humility in you. You don't need to prove how special you are; the way you treat people, speak, and carry yourself says enough. It is a quality I deeply respect. 🙏❤️",
      },
      {
        icon: "✨",
        title: "Your Character",
        text: "What makes me love you isn't only what I see on the outside. It is your character, your kindness, your patience, and the beautiful person you are when no one is watching. ✨❤️",
      },
      {
        icon: "🌹",
        title: "Your Presence",
        text: "When you are around, my heart feels a kind of peace that is difficult to explain. Your presence has become one of the quiet blessings I am most grateful for. 🌹🙏",
      },
      {
        icon: "🙏",
        title: "Your Faith",
        text: "I admire the part of you that seeks God. I pray that your faith continues to grow and that God guides your steps, protects your heart, and blesses the life ahead of you. 🙏❤️",
      },
      {
        icon: "🫶",
        title: "Your Kindness",
        text: "The way you care for others tells me so much about the heart you carry. Your kindness is not something I simply notice; it is something I deeply cherish. 🫶❤️",
      },
      {
        icon: "💖",
        title: "The Way You Make Me Feel",
        text: "You make me feel grateful, peaceful, and hopeful. Somehow, having you in my life makes me want to become a better person and love with a more sincere heart. 💖🙏",
      },
      {
        icon: "🌸",
        title: "Your Soul",
        text: "There is something beautiful about your soul that goes beyond words. The more I know you, the more I realize that your beauty comes from who you are, not simply from how you look. 🌸❤️",
      },
      {
        icon: "💫",
        title: "God's Timing",
        text: "Sometimes I wonder how our paths crossed at exactly the right time. I don't know everything God has planned, but I know I am grateful that He allowed you to become part of my story. 💫🙏",
      },
      {
        icon: "🌹",
        title: "Simply You",
        text: "I could give you a hundred reasons, but the deepest truth is simple: I love you for who you are. Not because you are perfect, but because your heart is precious to me. ❤️🌹",
      },
    ],

    am: [
      {
        icon: "😊",
        title: "ፈገግታሽ",
        text: "ፈገግታሽ ልቤ ውስጥ ማንም ሊደርስበት የማይችል ቦታ ይደርሳል። ባየሁት ቁጥር እኔም ፈገግ የምልበትን ምክንያት ስለሰጠኝ እግዚአብሔርን በጸጥታ አመሰግናለሁ። ❤️🙏",
      },
      {
        icon: "🥰",
        title: "የዋህ ልብሽ",
        text: "ከሁሉ በላይ ከምወዳቸው ነገሮች አንዱ የዋህነትሽ ነው። ዓለም አንዳንድ ጊዜ ጨካኝ ስትሆን፣ የዋህና ደግ ልብ ያላቸው ውብ ሰዎች እንዳሉ አንቺ ታስታውሺኛለሽ። 🥰❤️",
      },
      {
        icon: "❤️",
        title: "ትሕትናሽ",
        text: "በአንቺ ውስጥ ያለውን ትሕትና በጣም እወደዋለሁ። ምን ያህል ልዩ እንደሆንሽ ለማሳየት ምንም ማስመሰል አያስፈልግሽም፤ ሰዎችን የምትይዝበት መንገድና ራስሽን የምትመራበት መንገድ በቂ ይናገራል። ይህም በጣም የማከብርሽ ባህርይ ነው። 🙏❤️",
      },
      {
        icon: "✨",
        title: "ባህርይሽ",
        text: "የምወድሽ በውጫዊ ውበትሽ ብቻ አይደለም። የምወደው ባህርይሽን፣ ቸርነትሽን፣ ትዕግሥትሽን እና ማንም በማያይበት ጊዜም የምትሆኚውን ውብ ሰው ነው። ✨❤️",
      },
      {
        icon: "🌹",
        title: "መገኘትሽ",
        text: "አንቺ በአጠገቤ ስትኖሪ ልቤ ለመግለጽ የሚከብደውን ሰላም ያገኛል። መገኘትሽ በጣም ከማመሰግናቸው የሕይወቴ ጸጥ ያሉ በረከቶች አንዱ ሆኗል። 🌹🙏",
      },
      {
        icon: "🙏",
        title: "እምነትሽ",
        text: "እግዚአብሔርን የምትፈልጊበትን መንፈስ አደንቃለሁ። እምነትሽ እየጠነከረ እንዲሄድ፣ እግዚአብሔርም እርምጃዎችሽን እንዲመራ፣ ልብሽን እንዲጠብቅ እና የወደፊት ሕይወትሽን እንዲባርክ እጸልያለሁ። 🙏❤️",
      },
      {
        icon: "🫶",
        title: "ቸርነትሽ",
        text: "ለሌሎች የምታስቢበትና የምትቆረቆሪበት መንገድ ስለ ያለሽን ልብ ብዙ ይናገራል። ቸርነትሽን ብቻ አላስተውልም፤ ከልቤ እከብረዋለሁ። 🫶❤️",
      },
      {
        icon: "💖",
        title: "በአንቺ ምክንያት",
        text: "አንቺ እንደምልት የምትሰጪኝ ስሜት ምስጋናን፣ ሰላምን እና ተስፋን ነው። በሕይወቴ መኖርሽ የተሻለ ሰው እንድሆን እና በበለጠ እውነተኛ ልብ እንድወድ ያነሳሳኛል። 💖🙏",
      },
      {
        icon: "🌸",
        title: "ነፍስሽ",
        text: "በነፍስሽ ውስጥ በቃላት ለመግለጽ የሚከብድ ውበት አለ። እያወቅሁሽ በሄድኩ ቁጥር ውበትሽ በመልክሽ ብቻ ሳይሆን በማንነትሽ ውስጥ እንዳለ የበለጠ እገነዘባለሁ። 🌸❤️",
      },
      {
        icon: "💫",
        title: "የእግዚአብሔር ጊዜ",
        text: "አንዳንድ ጊዜ መንገዳችን በትክክለኛው ጊዜ እንዴት እንደተገናኘ እገረማለሁ። እግዚአብሔር ስላዘጋጀልን ሁሉን አላውቅም፤ ነገር ግን ወደ ታሪኬ እንድትገቢ ስለፈቀደልኝ በጣም አመሰግናለሁ። 💫🙏",
      },
      {
        icon: "🌹",
        title: "አንቺ ብቻ",
        text: "መቶ ምክንያቶችን መዘርዘር እችላለሁ፤ ግን ከሁሉ ጥልቅ የሆነው እውነት ቀላል ነው፦ ስለሆንሽው ሰው እወድሻለሁ። ፍጹም ስለሆንሽ አይደለም፤ ልብሽ ለእኔ ውድ ስለሆነ ነው። ❤️🌹",
      },
    ],
  },

  emojis: {
    en: [
      {
        symbol: "❤️",
        message:
          "I believe God knew exactly what He was doing when He brought you into my life. You are a blessing my heart will never take for granted. 🙏❤️",
      },
      {
        symbol: "🥰",
        message:
          "Your gentle smile brings a peace to my heart that words cannot fully describe. I thank God for the beautiful soul behind that smile. 🥰🙏",
      },
      {
        symbol: "😘",
        message:
          "If I were beside you right now, I would simply hold you close and thank God for giving me another moment with someone so precious. ❤️🫶",
      },
      {
        symbol: "💕",
        message:
          "Every day, I find another reason to love and appreciate you. I pray that God continues to guide our hearts with patience, kindness, and genuine love. 🙏💕",
      },
      {
        symbol: "🌹",
        message:
          "Your beauty is not only what my eyes see; it is the kindness, humility, and gentle heart within you that makes you truly beautiful to me. 🌹❤️",
      },
      {
        symbol: "✨",
        message:
          "You are one of those blessings that reminds me that God's timing is greater than our plans. Having you in my life is something I quietly thank Him for. ✨🙏",
      },
      {
        symbol: "🫶",
        message:
          "I don't just want to be someone who loves you in beautiful moments; I want to be someone who stands beside you, prays for you, supports you, and respects the heart God gave you. 🫶❤️🙏",
      },
      {
        symbol: "😊",
        message:
          "Your happiness means more to me than simply seeing you smile. I pray that God protects your heart, gives you peace, and fills your life with countless reasons to smile. 😊🙏❤️",
      },
      {
        symbol: "💖",
        message:
          "If God allows our paths to continue together, I hope our love will always be built on faith, respect, patience, honesty, and a heart that seeks Him first. 💖🙏",
      },
      {
        symbol: "🌸",
        message:
          "You have such a gentle and humble spirit, and that is one of the things I treasure most about you. May God always protect that beautiful heart. 🌸🙏❤️",
      },
      {
        symbol: "💋",
        message:
          "More than anything, I want my love for you to be pure and meaningful—something that brings peace to your heart and reminds you that you are deeply valued. ❤️🙏🫶",
      },
    ],

    am: [
      {
        symbol: "❤️",
        message:
          "እግዚአብሔር ወደ ሕይወቴ እንድትገቢ ያደረገው ምክንያት እንዳለው አምናለሁ። አንቺ ልቤ ፈጽሞ የማይንቀው ውድ በረከት ነሽ። 🙏❤️",
      },
      {
        symbol: "🥰",
        message:
          "የዋህ ፈገግታሽ በቃላት ለመግለጽ የማልችለውን ሰላም በልቤ ውስጥ ይፈጥራል። ከዚያ ፈገግታ ጀርባ ላለው ውብ ነፍስሽ እግዚአብሔርን አመሰግናለሁ። 🥰🙏",
      },
      {
        symbol: "😘",
        message:
          "አሁን ከጎንሽ ብሆን ኖሮ፣ በቀላሉ አቅፌሽ እና እንደ አንቺ ያለች ውድ ሰው በሕይወቴ ስለሰጠኝ እግዚአብሔርን አመሰግን ነበር። ❤️🫶",
      },
      {
        symbol: "💕",
        message:
          "በየቀኑ አንቺን የምወድበትና የማደንቅበት አዲስ ምክንያት አገኛለሁ። እግዚአብሔር ልባችንን በትዕግሥት፣ በቸርነት እና በእውነተኛ ፍቅር እንዲመራ እጸልያለሁ። 🙏💕",
      },
      {
        symbol: "🌹",
        message:
          "ውበትሽ ዓይኖቼ በሚያዩት ብቻ አይደለም፤ በውስጥሽ ያለው ቸርነት፣ ትሕትና እና የዋህ ልብሽ እውነተኛ ውበትሽ ነው። 🌹❤️",
      },
      {
        symbol: "✨",
        message:
          "አንቺ እግዚአብሔር ጊዜውን ከእኛ እቅድ በላይ በጥበቡ እንደሚያውቅ የምታስታውሺኝ በረከት ነሽ። በሕይወቴ ውስጥ ስላለሽ በጸጥታ እግዚአብሔርን አመሰግናለሁ። ✨🙏",
      },
      {
        symbol: "🫶",
        message:
          "በደስታ ጊዜ ብቻ የሚወድሽ ሰው መሆን አልፈልግም፤ ከጎንሽ የሚቆም፣ ለአንቺ የሚጸልይ፣ የሚደግፍሽ እና እግዚአብሔር የሰጠሽን ውድ ልብ የሚያከብር ሰው መሆን እፈልጋለሁ። 🫶❤️🙏",
      },
      {
        symbol: "😊",
        message:
          "ደስታሽ ለእኔ ፈገግታሽን ከማየት የበለጠ ትርጉም አለው። እግዚአብሔር ልብሽን ይጠብቅ፣ ሰላም ይስጥሽ እና ፈገግ የምትዪበትን ብዙ ምክንያቶች ይስጥሽ። 😊🙏❤️",
      },
      {
        symbol: "💖",
        message:
          "እግዚአብሔር አብረን እንድንጓዝ ከፈቀደ፣ ፍቅራችን ሁልጊዜ በእምነት፣ በክብር፣ በትዕግሥት፣ በእውነት እና እግዚአብሔርን ከሁሉ በፊት በሚያስቀምጥ ልብ ላይ እንዲመሠረት እመኛለሁ። 💖🙏",
      },
      {
        symbol: "🌸",
        message:
          "በአንቺ ውስጥ ያለው የዋህነትና ትሕትና ከሁሉ በላይ የምወደውና የምከብረው ነገር ነው። እግዚአብሔር ያንን ውብ ልብሽን ሁልጊዜ ይጠብቅልሽ። 🌸🙏❤️",
      },
      {
        symbol: "💋",
        message:
          "ከሁሉ በላይ ፍቅሬ ንጹሕና ትርጉም ያለው እንዲሆን እፈልጋለሁ፤ በልብሽ ውስጥ ሰላምን የሚያመጣ እና ምን ያህል ውድና ተከባሪ እንደሆንሽ የሚያስታውስሽ ፍቅር። ❤️🙏🫶",
      },
    ],
  },

  finalMessage: {
    en: "You Have My Heart, Today, Tomorrow, Always. I Love You. ❤️💋",

    am: "ልቤ የአንቺ ነው፤ ዛሬ፣ ነገም ሁልጊዜ። እወድሻለሁ። ❤️💋",
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
    openingTitle:
      'For the most<br>beautiful<br>person in my life <span class="heart-glyph">❤</span>',
    openGift: "Open Your Gift 🎁",
    giftHint: "(tap the box or the button)",
    welcomeHey: "Hey",
    continueStory: "Continue Our Story → ❤️",
    timelineTitle:
      'Little Moments, Big Memories <span aria-hidden="true">💕</span>',
    galleryTitle: 'Our Beautiful Memories <span aria-hidden="true">📸❤️</span>',
    gallerySub:
      "Tap any photo to see it up close. Double-tap for a little love.",
    slideshowTitle: 'Our Photo Story <span aria-hidden="true">📸</span>',
    videoGalleryTitle: "Little Film Of Us ❤️",
    videoGallerySubtitle: "A few favorite moments, together in one place.",
    videoGalleryLabel: "Our videos",
    videoGalleryEmpty:
      "Add MP4 files to assets/videos/ and list them in the videos array in script.js.",
    videoUnsupported: "Your browser does not support HTML video.",
    videoUntitled: "A favorite moment ❤️",
    letterTitle: 'You Have A Letter <span aria-hidden="true">💌</span>',
    openLetter: "Open My Letter",
    reasonsTitle: "Reasons You're Special To Me ❤️",
    emojiTitle:
      'A Few Things I Want To Say... <span aria-hidden="true">🥰</span>',
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
    journalViewDetails: "View Details ❤️",
    journalHideDetails: "Hide Details",
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
    surpriseBody1:
      "I would give you the ability<br>to see yourself through my eyes.",
    surpriseBody2:
      "Then you would finally understand<br>how incredibly special you are to me. ❤️",
    finalMessage: 'I Love You <span class="heart-glyph">❤</span>',
    forever: "Forever & Always ✨",
    finalCaption: "My favorite person ❤️",
    finalThanks: "Thank you for being part of my story. 🫶",
    secretFound: "🤫 You found my secret...",
    secretMessage: "I love you more than this website could ever explain. ❤️",
    close: "Close",
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
    openingTitle:
      'በህይወቴ ውስጥ<br>እጅግ ውብ<br>ለሆነች ሰው <span class="heart-glyph">❤</span>',
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
    videoGalleryEmpty:
      "MP4 ፋይሎችን በassets/videos/ ውስጥ አክሉና በscript.js ውስጥ ባለው videos ዝርዝር ውስጥ ያስገቡ።",
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
    journalViewDetails: "ዝርዝሩን ይመልከቱ ❤️",
    journalHideDetails: "ዝርዝሩን ደብቅ",
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
    close: "ዝጊ",
  },
};

// ========== STATE ==========
function readSavedLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    return saved && translations[saved] ? saved : "en";
  } catch {
    return "en";
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
  const backBtn = document.getElementById("backToTop");
  if (!backBtn) return;

  function toggleBackToTop() {
    const scrollY = window.scrollY;
    if (scrollY > 400) {
      backBtn.classList.add("visible");
    } else {
      backBtn.classList.remove("visible");
    }
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  toggleBackToTop();
}

// ========== DOM READY ==========
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
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
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {
    /* Storage can be unavailable in private contexts. */
  }
  document.documentElement.lang = lang;

  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    btn.setAttribute(
      "aria-label",
      btn.dataset.lang === "en" ? t.switchToEnglish : t.switchToAmharic,
    );
  });

  const nav = document.getElementById("siteNav");
  const navToggle = document.getElementById("navToggle");
  const langSwitcher = document.getElementById("langSwitcher");
  if (nav) nav.setAttribute("aria-label", t.navLabel);
  if (langSwitcher) langSwitcher.setAttribute("aria-label", t.navLanguageLabel);
  if (navToggle)
    navToggle.setAttribute(
      "aria-label",
      document.body.classList.contains("menu-open") ? t.navClose : t.navOpen,
    );
  const secretLogo = document.getElementById("secretLogo");
  if (secretLogo) secretLogo.setAttribute("aria-label", t.navLogoLabel);

  updateDynamicContent(lang);
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        applyLanguage(lang);
        const modalText = document.getElementById("letterModalText");
        if (
          modalText &&
          document.getElementById("letterModal").classList.contains("is-open")
        ) {
          modalText.textContent =
            loveConfig.letter[currentLang] || loveConfig.letter.en;
        }
      }
    });
  });
}

function updateDynamicContent(lang) {
  // Update timeline
  const timelineContainer = document.getElementById("timeline");
  if (timelineContainer) {
    const items = (
      loveConfig.timeline[lang] ||
      loveConfig.timeline.en ||
      []
    ).filter(Boolean);
    timelineContainer._revealObserver?.disconnect();
    timelineContainer.innerHTML = "";
    items.forEach((item) => {
      const el = document.createElement("div");
      el.className = "timeline__item";
      el.innerHTML = `
        <div class="timeline__card">
          <h3>${item.icon} ${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.text)}</p>
        </div>`;
      timelineContainer.appendChild(el);
    });
    if (!("IntersectionObserver" in window)) {
      timelineContainer
        .querySelectorAll(".timeline__item")
        .forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 },
      );
      timelineContainer._revealObserver = observer;
      timelineContainer
        .querySelectorAll(".timeline__item")
        .forEach((el) => observer.observe(el));
    }
  }

  // Update reasons
  const reasonsGrid = document.getElementById("reasonsGrid");
  if (reasonsGrid) {
    const reasons = (
      loveConfig.reasons[lang] ||
      loveConfig.reasons.en ||
      []
    ).filter(Boolean);
    unobserveMotionElements(reasonsGrid);
    reasonsGrid.innerHTML = "";
    reasons.forEach((reason) => {
      const card = document.createElement("button");
      card.className = "reason-card";
      card.innerHTML = `
        <span class="reason-card__icon" aria-hidden="true">${reason.icon}</span>
        <h3>${escapeHTML(reason.title)}</h3>
        <p>${escapeHTML(reason.text)}</p>`;
      card.addEventListener("click", () => card.classList.toggle("is-tapped"));
      reasonsGrid.appendChild(card);
    });
    reasonsGrid.querySelectorAll(".reason-card").forEach((card, index) => {
      card.classList.add("motion-reveal");
      card.style.setProperty("--reveal-order", index % 8);
    });
    observeMotionElements(reasonsGrid);
  }

  // Update emojis
  const emojiField = document.getElementById("emojiField");
  if (emojiField) {
    const emojis = (
      loveConfig.emojis[lang] ||
      loveConfig.emojis.en ||
      []
    ).filter(Boolean);
    emojiField.innerHTML = "";
    emojis.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = "emoji-btn";
      btn.textContent = item.symbol;
      btn.setAttribute("aria-label", item.symbol);
      btn.addEventListener("click", (e) => {
        btn.classList.remove("is-tapped");
        void btn.offsetWidth;
        btn.classList.add("is-tapped");
        document.getElementById("emojiMessage").textContent =
          `${item.symbol} ${item.message}`;
        spawnDoubleTapHearts(e.clientX, e.clientY);
      });
      emojiField.appendChild(btn);
    });
  }

  // Update letter text in modal
  const modalText = document.getElementById("letterModalText");
  if (modalText) {
    modalText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
  }

  // Update envelope letter text
  const letterText = document.getElementById("letterText");
  if (letterText) {
    letterText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
  }

  // Update welcome message
  const typewriterEl = document.getElementById("typewriter");
  if (typewriterEl && !typewriterEl.dataset.started) {
    typewriterEl.dataset.text =
      loveConfig.welcomeMessage[lang] || loveConfig.welcomeMessage.en;
  }

  // Update final message
  const finalTitle = document.querySelector(".surprise__final");
  if (finalTitle) {
    finalTitle.innerHTML =
      (loveConfig.finalMessage[lang] || loveConfig.finalMessage.en) +
      ' <span class="heart-glyph">❤</span>';
  }

  renderDailyJournal(lang);
  renderVideoGallery(lang);
}

function parseJournalDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value))
    return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  )
    return null;
  return date;
}

function getDailyJournalEntries() {
  return (
    Array.isArray(loveConfig.dailyMessages) ? loveConfig.dailyMessages : []
  )
    .filter((message) => message && typeof message === "object")
    .map((message, index) => {
      return {
        message,
        date: typeof message.date === "string" ? message.date : "",
        parsedDate: parseJournalDate(message.date),
        originalIndex: index,
      };
    })
    .sort((a, b) => {
      if (a.parsedDate && b.parsedDate)
        return a.parsedDate - b.parsedDate || a.originalIndex - b.originalIndex;
      if (a.parsedDate) return -1;
      if (b.parsedDate) return 1;
      return a.originalIndex - b.originalIndex;
    });
}

function getLocalDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function journalText(value, lang, fallback) {
  const text = typeof value === "string" ? value : value?.[lang] || value?.en;
  return typeof text === "string" && text.trim() ? text.trim() : fallback;
}

const expandedJournalEntries = new Set();

function setJournalExpanded(card, body, toggle, expanded, labels, animate) {
  const label = toggle.querySelector(".daily-journal__toggle-label");
  const duration = parseFloat(getComputedStyle(body).transitionDuration) || 0;
  const instant = !animate || motionReduced || duration === 0;
  let finished = false;

  const finish = () => {
    if (finished) return;
    finished = true;
    body.removeEventListener("transitionend", onEnd);
    if (expanded) {
      body.style.maxHeight = "none";
    } else {
      body.style.maxHeight = "";
      const top = card.getBoundingClientRect().top;
      if (animate && top < 0) {
        card.scrollIntoView({
          block: "start",
          behavior: motionReduced ? "auto" : "smooth",
        });
      }
    }
  };
  const onEnd = (e) => {
    if (e.target === body && e.propertyName === "max-height") finish();
  };

  card.classList.toggle("is-expanded", expanded);
  toggle.setAttribute("aria-expanded", String(expanded));
  label.textContent = expanded
    ? labels.journalHideDetails
    : labels.journalViewDetails;

  if (instant) {
    finished = false;
    body.style.maxHeight = expanded ? "none" : "";
    return;
  }

  if (expanded) {
    body.style.maxHeight = `${body.scrollHeight}px`;
  } else {
    body.style.maxHeight = `${body.scrollHeight}px`;
    void body.offsetHeight;
    body.style.maxHeight = "";
  }
  body.addEventListener("transitionend", onEnd);
  window.setTimeout(finish, duration * 1000 + 150);
}

function renderDailyJournal(lang) {
  const grid = document.getElementById("dailyJournalCard");
  if (!grid) return;

  const labels = translations[lang] || translations.en;
  const entries = getDailyJournalEntries();
  unobserveMotionElements(grid);
  grid.replaceChildren();
  grid.setAttribute("aria-label", labels.journalGridLabel);

  if (!entries.length) {
    grid.classList.add("is-empty");
    const emptyMessage = document.createElement("p");
    emptyMessage.setAttribute("role", "listitem");
    emptyMessage.textContent = labels.journalEmpty;
    grid.appendChild(emptyMessage);
    return;
  }

  grid.classList.remove("is-empty");
  const today = getLocalDateKey(new Date());

  entries.forEach((entry, index) => {
    const isToday = Boolean(entry.parsedDate && entry.date === today);
    const card = document.createElement("article");
    card.className = `daily-journal__card motion-reveal${isToday ? " is-today" : ""}`;
    card.setAttribute("role", "listitem");
    card.style.setProperty("--reveal-order", Math.min(index, 6));

    const header = document.createElement("div");
    header.className = "daily-journal__card-header";
    const name = document.createElement("span");
    name.className = "daily-journal__name";
    name.textContent = journalText(
      entry.message.name,
      lang,
      labels.journalNotSet,
    );
    header.appendChild(name);

    const date = document.createElement("time");
    date.className = "daily-journal__date";
    if (entry.parsedDate) {
      date.dateTime = entry.date;
      date.textContent = new Intl.DateTimeFormat(
        lang === "am" ? "am-ET" : "en-US",
        {
          calendar: "gregory",
          month: "long",
          day: "numeric",
          year: "numeric",
        },
      ).format(entry.parsedDate);
    } else {
      date.textContent = entry.date || labels.journalDateMissing;
    }
    header.appendChild(date);
    card.appendChild(header);

    const topic = document.createElement("h3");
    topic.className = "daily-journal__topic";
    topic.textContent = journalText(
      entry.message.topic,
      lang,
      labels.journalNotSet,
    );
    card.appendChild(topic);

    const description = document.createElement("p");
    description.className = "daily-journal__description";
    description.textContent = journalText(
      entry.message.description,
      lang,
      labels.journalNotSet,
    );

    const body = document.createElement("div");
    body.className = "daily-journal__body";
    body.id = `dailyJournalBody${entry.originalIndex}`;
    body.appendChild(description);
    card.appendChild(body);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "daily-journal__toggle";
    toggle.setAttribute("aria-controls", body.id);
    const toggleLabel = document.createElement("span");
    toggleLabel.className = "daily-journal__toggle-label";
    toggle.appendChild(toggleLabel);
    card.appendChild(toggle);

    const startOpen = expandedJournalEntries.has(entry.originalIndex);
    setJournalExpanded(card, body, toggle, startOpen, labels, false);

    toggle.addEventListener("click", () => {
      const open = !card.classList.contains("is-expanded");
      if (open) expandedJournalEntries.add(entry.originalIndex);
      else expandedJournalEntries.delete(entry.originalIndex);
      setJournalExpanded(
        card,
        body,
        toggle,
        open,
        translations[currentLang] || translations.en,
        true,
      );
    });

    grid.appendChild(card);
  });

  observeMotionElements(grid);
}

function renderVideoGallery(lang) {
  const grid = document.getElementById("videoGallery");
  if (!grid) return;

  const labels = translations[lang] || translations.en;
  const videos = (
    Array.isArray(loveConfig.videos) ? loveConfig.videos : []
  ).filter(
    (video) => video && typeof video.src === "string" && video.src.trim(),
  );
  unobserveMotionElements(grid);
  grid.replaceChildren();
  grid.setAttribute("aria-label", labels.videoGalleryLabel);

  if (!videos.length) {
    grid.classList.add("is-empty");
    const emptyMessage = document.createElement("p");
    emptyMessage.setAttribute("role", "listitem");
    emptyMessage.textContent = labels.videoGalleryEmpty;
    grid.appendChild(emptyMessage);
    grid.classList.add("is-visible");
    observeMotionElements(grid);
    return;
  }

  grid.classList.remove("is-empty");
  videos.forEach((item, index) => {
    const title = journalText(item.title, lang, labels.videoUntitled);
    const card = document.createElement("article");
    card.className = "video-gallery__card motion-reveal";
    card.setAttribute("role", "listitem");
    card.style.setProperty("--reveal-order", Math.min(index, 6));

    const video = document.createElement("video");
    video.className = "video-gallery__player";
    video.controls = true;
    video.preload = "none";
    video.playsInline = true;
    video.setAttribute("aria-label", title);
    if (typeof item.poster === "string" && item.poster.trim())
      video.poster = item.poster;

    const source = document.createElement("source");
    source.src = item.src.trim();
    source.type = "video/mp4";
    video.appendChild(source);
    video.appendChild(document.createTextNode(labels.videoUnsupported));

    const heading = document.createElement("h3");
    heading.className = "video-gallery__title";
    heading.textContent = title;

    card.append(video, heading);
    grid.appendChild(card);
  });

  observeMotionElements(grid);
}

// ========== APPLY NAMES ==========
function applyNames() {
  document.querySelectorAll("#herNameWelcome, #herNameFinal").forEach((el) => {
    el.textContent = loveConfig.girlfriendName;
  });
  document.title = `For ${loveConfig.girlfriendName} ❤️`;
}

function setupMotionSystem(reduced) {
  motionReduced = reduced;
  document
    .querySelectorAll(
      "main .section > :not([hidden]), .section--surprise > :not([hidden]), .daily-journal__card, .daily-journal__title, .daily-journal__subtitle, .footer__container",
    )
    .forEach((el) => el.classList.add("motion-reveal"));
  if (reduced || !("IntersectionObserver" in window)) {
    document
      .querySelectorAll(".motion-reveal")
      .forEach((el) => el.classList.add("is-visible"));
    return;
  }
  motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          motionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
  );
  observeMotionElements(document);
}

function observeMotionElements(root) {
  if (!root) return;
  const elements = [];
  if (root.matches?.(".motion-reveal")) elements.push(root);
  if (root.querySelectorAll)
    elements.push(...root.querySelectorAll(".motion-reveal"));
  elements.forEach((el) => {
    if (motionReduced || !motionObserver) el.classList.add("is-visible");
    else if (!el.classList.contains("is-visible")) motionObserver.observe(el);
  });
}

function unobserveMotionElements(root) {
  if (!root || !motionObserver) return;
  if (root.matches?.(".motion-reveal")) motionObserver.unobserve(root);
  root
    .querySelectorAll?.(".motion-reveal")
    .forEach((el) => motionObserver.unobserve(el));
}

// ========== BUILD IMAGE WITH FALLBACK ==========
function buildImageOrFallback(src, alt) {
  const img = document.createElement("img");
  img.alt = alt || "";
  img.loading = "lazy";
  img.src = src;
  img.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "photo-fallback";
    fallback.textContent = "📷";
    img.replaceWith(fallback);
  });
  return img;
}

// ========== FLOATING HEARTS - OPTIMIZED ==========
function setupHeartField(reduced) {
  const field = document.getElementById("heart-field");
  if (!field || reduced || window.innerWidth < 480) return;

  const symbols = ["❤", "💕", "💖", "💗", "💓"];
  const MAX_PARTICLES = window.innerWidth < 768 ? 8 : 15;
  let count = 0;
  let interval = null; // FIXED: Preventing multiple intervals

  function spawn() {
    if (count >= MAX_PARTICLES || document.hidden) return;
    const span = document.createElement("span");
    span.className = "floaty";
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const size = 10 + Math.random() * 16;
    const duration = 10 + Math.random() * 8;
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 80 + "px";
    span.style.left = left + "vw";
    span.style.fontSize = size + "px";
    span.style.animationDuration = duration + "s";
    span.style.setProperty("--drift", drift);
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

  document.addEventListener("visibilitychange", () => {
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
  const nav = document.getElementById("siteNav");
  const links = document.getElementById("navLinks");
  if (!links) return;

  document.querySelectorAll("a[data-nav]").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target && target.getClientRects().length === 0) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: motionReduced ? "auto" : "smooth",
        });
      }
    });
  });

  const anchors = [...links.querySelectorAll("a[data-nav]")];
  const sections = anchors
    .map((anchor) => ({
      anchor,
      section: document.querySelector(anchor.getAttribute("href")),
    }))
    .filter((item) => item.section);
  if (!sections.length) return;

  let frame = 0;
  const updateActive = () => {
    frame = 0;
    const line = (nav?.getBoundingClientRect().bottom || 0) + 18;
    const visible = sections.filter(
      ({ section }) => section.getClientRects().length > 0,
    );
    if (!visible.length) return;
    const containing = visible.find(({ section }) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= line && rect.bottom > line;
    });
    const active =
      containing ||
      visible.reduce((best, item) => {
        const distance = Math.abs(
          item.section.getBoundingClientRect().top - line,
        );
        return !best || distance < best.distance ? { ...item, distance } : best;
      }, null);

    anchors.forEach((anchor) => {
      const isActive = anchor === active.anchor;
      anchor.classList.toggle("is-active", isActive);
      if (isActive) anchor.setAttribute("aria-current", "location");
      else anchor.removeAttribute("aria-current");
    });
    nav?.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  const scheduleUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(updateActive);
  };

  document.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(scheduleUpdate, { threshold: 0 });
    sections.forEach(({ section }) => observer.observe(section));
  }
  updateActive();
}

function setupMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");

  const nav = document.getElementById("siteNav");
  if (!toggle || !links) return;

  const mobileQuery = window.matchMedia("(max-width: 1039px)");
  let savedBodyOverflow = "";

  function isMenuOpen() {
    return document.body.classList.contains("menu-open");
  }

  function setMenuOpen(isOpen, returnFocus = false) {
    if (!mobileQuery.matches) isOpen = false;
    document.body.classList.toggle("menu-open", isOpen);
    links.classList.toggle("is-open", isOpen);
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    links.setAttribute("aria-hidden", String(!isOpen && mobileQuery.matches));
    links.inert = !isOpen && mobileQuery.matches;
    toggle.setAttribute(
      "aria-label",
      isOpen
        ? translations[currentLang].navClose
        : translations[currentLang].navOpen,
    );

    if (overlay) overlay.classList.toggle("is-active", isOpen);

    if (isOpen) {
      savedBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = savedBodyOverflow;
      if (returnFocus) toggle.focus();
    }
  }

  const initialOpen = mobileQuery.matches && isMenuOpen();
  setMenuOpen(initialOpen);
  toggle.addEventListener("click", () => setMenuOpen(!isMenuOpen()));

  if (overlay) {
    overlay.addEventListener("click", () => setMenuOpen(false, true));
  }

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (isMenuOpen()) setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen()) {
      setMenuOpen(false, true);
    }
  });

  mobileQuery.addEventListener("change", () => setMenuOpen(false));
}

// ========== SCROLL PROGRESS ==========
function setupScrollProgress() {
  const fill = document.getElementById("progressFill");
  if (!fill) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : "0%";
  });
}

// ========== GIFT OPENING ==========
function setupGiftOpening(reduced) {
  const openingScreen = document.getElementById("opening");
  const welcomeScreen = document.getElementById("welcome");
  const giftBox = document.getElementById("giftBox");
  const openBtn = document.getElementById("openGiftBtn");

  if (!openingScreen || !welcomeScreen || !giftBox || !openBtn) return;
  let opening = false;
  function openGift() {
    if (opening) return;
    opening = true;
    if (giftBox.classList.contains("is-open")) return;
    giftBox.classList.add("is-open");

    if (!reduced) burstParticles(giftBox);

    setTimeout(
      () => {
        openingScreen.hidden = true;
        welcomeScreen.hidden = false;
        welcomeScreen.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        startTypewriter();
      },
      reduced ? 150 : 800,
    );
  }

  giftBox.addEventListener("click", openGift);
  openBtn.addEventListener("click", openGift);
}

// ========== BURST PARTICLES - OPTIMIZED ==========
function burstParticles(originEl) {
  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const symbols = ["❤", "💕", "✨", "💖"];
  const count = Math.min(20, Math.floor(window.innerWidth / 30));

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "burst-particle";
    p.textContent = symbols[i % symbols.length];
    p.style.left = originX + "px";
    p.style.top = originY + "px";
    p.style.fontSize = 12 + Math.random() * 14 + "px";
    document.body.appendChild(p);

    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    const distance = 80 + Math.random() * 140;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    p.animate(
      [
        { transform: "translate(0,0) scale(0.5)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 0 },
      ],
      {
        duration: 700 + Math.random() * 300,
        easing: "cubic-bezier(.22,.9,.35,1)",
      },
    ).onfinish = () => p.remove();
  }
}

// ========== TYPING ANIMATION (FIXED text extraction) ==========
function startTypewriter() {
  const el = document.getElementById("typewriter");
  if (el.dataset.started) return;
  el.dataset.started = "true";

  // If text isn't already set by the updateDynamicContent, fallback
  const text =
    el.dataset.text ||
    loveConfig.welcomeMessage[currentLang] ||
    loveConfig.welcomeMessage.en ||
    "";
  const cursor = document.createElement("span");
  cursor.className = "cursor";
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
  document.getElementById("continueBtn").addEventListener("click", () => {
    document.getElementById("story").scrollIntoView({ behavior: "smooth" });
  });
}

// ========== GALLERY ==========
function setupGallery() {
  const grid = document.getElementById("masonryGallery");
  if (!grid) return;
  (Array.isArray(loveConfig.photos) ? loveConfig.photos : [])
    .filter((photo) => photo && photo.src)
    .forEach((photo, index) => {
      const card = document.createElement("button");
      const isPolaroid = index % 3 === 0;
      card.className =
        "photo-card" + (isPolaroid ? " photo-card--polaroid" : "");
      card.classList.add("motion-reveal");
      card.style.setProperty("--reveal-order", index % 8);
      card.style.setProperty(
        "--tilt",
        (Math.random() * 4 - 2).toFixed(1) + "deg",
      );
      card.setAttribute(
        "aria-label",
        `Open photo ${index + 1}: ${photo.caption}`,
      );
      card.dataset.index = String(index);

      card.appendChild(buildImageOrFallback(photo.src, photo.caption));

      const caption = document.createElement("span");
      caption.className = "photo-card__caption";
      caption.textContent = photo.caption;
      card.appendChild(caption);

      card.addEventListener("click", () => openLightbox(index));

      let lastTap = 0;
      card.addEventListener("click", (e) => {
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
    const h = document.createElement("span");
    h.className = "double-tap-heart";
    h.textContent = "❤";
    h.style.left = x + (Math.random() * 30 - 15) + "px";
    h.style.top = y + (Math.random() * 20 - 10) + "px";
    h.style.fontSize = 14 + Math.random() * 14 + "px";
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
  const lightbox = document.getElementById("lightbox");
  lightbox.hidden = false;
  document.getElementById("lightboxClose").focus();
  document.body.style.overflow = "hidden";
}

function renderLightbox() {
  const photo = loveConfig.photos[currentLightboxIndex];
  if (!photo) return;
  const img = document.getElementById("lightboxImg");
  img.src = photo.src;
  img.alt = photo.caption;
  img.onerror = () => {
    img.style.display = "none";
  };
  img.onload = () => {
    img.style.display = "block";
  };
  document.getElementById("lightboxCaption").textContent = photo.caption;
  document.getElementById("lightboxCounter").textContent =
    `${currentLightboxIndex + 1} / ${loveConfig.photos.length}`;
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  document.body.style.overflow = "";
  const card = document.querySelector(
    `.photo-card[data-index="${currentLightboxIndex}"]`,
  );
  if (card) card.focus();
}

function setupLightbox() {
  document
    .getElementById("lightboxClose")
    .addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => {
    currentLightboxIndex =
      (currentLightboxIndex - 1 + loveConfig.photos.length) %
      loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    currentLightboxIndex =
      (currentLightboxIndex + 1) % loveConfig.photos.length;
    renderLightbox();
  });
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox.hidden) return;
    if (e.key === "Tab") {
      const controls = [...lightbox.querySelectorAll("button:not([disabled])")];
      if (!controls.length) return;
      const first = controls[0],
        last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
    if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
  });
}

// ========== SLIDESHOW ==========
function setupSlideshow() {
  const track = document.getElementById("slideshowTrack");
  const dotsWrap = document.getElementById("slideDots");
  const slideshow = document.getElementById("slideshow");
  const section = slideshow?.closest(".section--slideshow");
  let current = 0;
  let timer = null;
  let inView = true;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!track || !dotsWrap || !slideshow) return;
  const photos = (
    Array.isArray(loveConfig.photos) ? loveConfig.photos : []
  ).filter((photo) => photo && photo.src);
  if (!photos.length) {
    if (section) section.hidden = true;
    return;
  }
  photos.forEach((photo, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " is-active" : "");
    if (i === 0) slide.classList.add("is-entering");
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute(
      "aria-label",
      `Memory ${i + 1} of ${photos.length}: ${photo.caption}`,
    );
    const image = buildImageOrFallback(photo.src, photo.caption);
    image.loading = i === 0 ? "eager" : "lazy";
    slide.appendChild(image);
    const cap = document.createElement("div");
    cap.className = "slide__caption";
    cap.textContent = `Memory ${String(i + 1).padStart(2, "0")} — ${photo.caption}`;
    slide.appendChild(cap);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to memory ${i + 1}`);
    dot.setAttribute("aria-pressed", String(i === 0));
    if (i === 0) dot.classList.add("is-active");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = track.querySelectorAll(".slide");
  const dots = dotsWrap.querySelectorAll("button");
  if (slides.length < 2) {
    const previous = document.getElementById("slidePrev");
    const next = document.getElementById("slideNext");
    if (previous) previous.hidden = true;
    if (next) next.hidden = true;
    dotsWrap.hidden = true;
  }

  function goTo(index) {
    if (!slides.length) return;
    slides[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    slides[current].classList.remove("is-entering");
    void slides[current].offsetWidth;
    slides[current].classList.add("is-entering");
    dots[current].classList.add("is-active");
    dots[current].setAttribute("aria-pressed", "true");
    dots.forEach((dot, dotIndex) => {
      if (dotIndex !== current) dot.setAttribute("aria-pressed", "false");
    });
    restart();
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function start() {
    if (
      reducedMotion ||
      slides.length < 2 ||
      document.hidden ||
      !inView ||
      timer
    )
      return;
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function restart() {
    stop();
    start();
  }

  document
    .getElementById("slidePrev")
    ?.addEventListener("click", () => goTo(current - 1));
  document
    .getElementById("slideNext")
    ?.addEventListener("click", () => goTo(current + 1));

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
        if (inView) start();
        else stop();
      },
      { threshold: 0.1 },
    );
    observer.observe(slideshow);
  } else {
    start();
  }
}

// ========== LOVE LETTER ==========
function setupLetter() {
  const lang = currentLang;
  document.getElementById("letterText").textContent =
    loveConfig.letter[lang] || loveConfig.letter.en;
}

// ========== LETTER MODAL ==========
function setupLetterModal() {
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openLetterBtn");
  const modal = document.getElementById("letterModal");
  const modalText = document.getElementById("letterModalText");
  const closeBtn = document.getElementById("letterModalClose");
  let previousFocus = null;

  function openLetterModal() {
    if (!modal || !modalText) return;
    previousFocus = document.activeElement;
    if (envelope) envelope.classList.add("is-open");
    const lang = currentLang || "en";
    modalText.textContent = loveConfig.letter[lang] || loveConfig.letter.en;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLetterModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (previousFocus && previousFocus.focus) previousFocus.focus();
  }

  if (envelope) {
    envelope.addEventListener("click", openLetterModal);
  }

  if (openBtn) {
    openBtn.addEventListener("click", openLetterModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLetterModal);
  }

  if (!modal) return;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Love letter");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeLetterModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeLetterModal();
    }
    if (e.key === "Tab" && modal.classList.contains("is-open")) {
      e.preventDefault();
      closeBtn.focus();
    }
  });
}

// ========== HEART TAP ==========
function setupHeartTap(reduced) {
  const heart = document.getElementById("heartTap");
  const countEl = document.getElementById("heartCount");
  const msgEl = document.getElementById("heartMsg");
  let count = 0;

  const getMilestones = () => [
    [1, currentLang === "am" ? "❤️ ልቤ የአንቺ ነው።" : "❤️ My heart chooses you."],
    [
      5,
      currentLang === "am"
        ? "ደጋግመሽ ትመጪያለሽ። 🥰"
        : "You keep coming back for more. 🥰",
    ],
    [
      15,
      currentLang === "am"
        ? "እሺ... ልቤን ሙሉ በሙሉ የሰረቅሽው ይመስለኛል። 😂❤️"
        : "Okay... I think you've stolen my heart completely. 😂❤️",
    ],
    [
      30,
      currentLang === "am"
        ? "በዚህ ነጥብ ላይ በይፋ የአንቺ ነው። 💍😆"
        : "At this point it's officially, legally yours. 💍😆",
    ],
  ];

  heart.addEventListener("click", (e) => {
    count++;
    countEl.textContent = String(count);
    countEl.classList.remove("is-updated");
    void countEl.offsetWidth;
    countEl.classList.add("is-updated");
    heart.classList.remove("is-beating");
    void heart.offsetWidth;
    heart.classList.add("is-beating");

    if (!reduced) {
      const rect = heart.getBoundingClientRect();
      const heartCount = Math.min(3, Math.floor(window.innerWidth / 120));
      for (let i = 0; i < heartCount; i++) {
        const fh = document.createElement("span");
        fh.className = "flying-heart";
        fh.textContent = "❤";
        fh.style.left =
          rect.left + rect.width / 2 + (Math.random() * 20 - 10) + "px";
        fh.style.top = rect.top + "px";
        fh.style.fontSize = 14 + Math.random() * 12 + "px";
        document.body.appendChild(fh);
        setTimeout(() => fh.remove(), 1200);
      }
    }

    const match = getMilestones().reverse().find(([n]) => count >= n);
    if (match) msgEl.textContent = match[1];
  });
}

// ========== LOVE COUNTER ==========
function setupLoveCounter() {
  if (!loveConfig.showLoveCounter) return;
  const section = document.getElementById("loveCounter");
  const start = new Date(loveConfig.anniversaryDate);
  if (isNaN(start.getTime())) return;

  section.hidden = false;
  const els = {
    months: document.getElementById("cMonths"),
    days: document.getElementById("cDays"),
    hours: document.getElementById("cHours"),
    minutes: document.getElementById("cMinutes"),
    seconds: document.getElementById("cSeconds"),
  };
  if (Object.values(els).some((el) => !el)) return;

  function tick() {
    const duration = getRelationshipDuration(start, new Date());
    Object.entries(duration).forEach(([unit, value]) => {
      els[unit].textContent = String(value);
    });
    const secondsBox = els.seconds.closest(".counter-box");
    if (secondsBox) {
      secondsBox.classList.remove("is-ticking");
      void secondsBox.offsetWidth;
      secondsBox.classList.add("is-ticking");
    }
  }
  tick();
  let timer = setInterval(tick, 1000);
  document.addEventListener("visibilitychange", () => {
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
  if (
    !(start instanceof Date) ||
    !(end instanceof Date) ||
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime()) ||
    end < start
  )
    return duration;

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();
  const getAnniversary = (monthOffset) => {
    const monthStart = new Date(
      start.getFullYear(),
      start.getMonth() + monthOffset,
      1,
      start.getHours(),
      start.getMinutes(),
      start.getSeconds(),
      start.getMilliseconds(),
    );
    const lastDay = new Date(
      monthStart.getFullYear(),
      monthStart.getMonth() + 1,
      0,
    ).getDate();
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
  document.getElementById("herNameFinal").textContent =
    loveConfig.girlfriendName;
  const revealBtn = document.getElementById("revealBtn");
  const pre = document.getElementById("surprisePre");
  const reveal = document.getElementById("surpriseReveal");

  const finalTitle = reveal.querySelector(".surprise__final");
  finalTitle.innerHTML =
    (loveConfig.finalMessage[currentLang] || loveConfig.finalMessage.en) +
    ' <span class="heart-glyph">❤</span>';

  revealBtn.addEventListener("click", () => {
    pre.hidden = true;
    reveal.hidden = false;
    reveal.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "center",
    });
    if (!reduced) {
      launchConfetti();
      burstParticles(revealBtn);
    }
  });
}

// ========== CONFETTI - OPTIMIZED ==========
function launchConfetti() {
  const colors = ["#c2185b", "#d4af37", "#f7c6d9", "#ffffff"];
  const count = Math.min(40, Math.floor(window.innerWidth / 8));

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.width = piece.style.height = 4 + Math.random() * 4 + "px";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

// ========== FINAL PHOTO ==========
function setupFinalPhoto() {
  const wrap = document.getElementById("finalPhoto");
  const photo =
    loveConfig.photos[loveConfig.finalPhotoIndex] || loveConfig.photos[0];
  if (!photo) return;
  const img = document.getElementById("finalPhotoImg");
  img.src = photo.src;
  img.alt = photo.caption;
  img.addEventListener("error", () => {
    wrap.innerHTML =
      '<div class="photo-fallback" style="border-radius:50%;height:100%;">📷</div>';
  });
}

// ========== SECRET EASTER EGG ==========
function setupSecretMessage() {
  const logo = document.getElementById("secretLogo");
  const modal = document.getElementById("secretModal");
  const closeBtn = document.getElementById("secretClose");
  let taps = 0;
  if (!logo || !modal || !closeBtn) return;
  let previousFocus = null;

  logo.addEventListener("click", () => {
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
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
    if (e.key === "Tab" && !modal.hidden) {
      e.preventDefault();
      closeBtn.focus();
    }
  });
}

// ========== CURSOR EFFECTS - OPTIMIZED ==========
function setupCursorEffects(reduced) {
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (reduced || isTouch) return;

  let lastSpawn = 0;
  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastSpawn < 80) return;
    lastSpawn = now;
    const dot = document.createElement("span");
    dot.textContent = Math.random() > 0.6 ? "✨" : "❤";
    dot.style.position = "fixed";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "999";
    dot.style.fontSize = "10px";
    dot.style.color = "rgba(247,198,217,0.6)";
    dot.style.transform = "translate(-50%,-50%)";
    document.body.appendChild(dot);
    dot.animate(
      [
        { opacity: 0.6, transform: "translate(-50%,-50%) scale(1)" },
        {
          opacity: 0,
          transform: "translate(-50%,-50%) scale(0.4) translateY(-8px)",
        },
      ],
      { duration: 500 },
    ).onfinish = () => dot.remove();
  });

  document.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.style.position = "fixed";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.width = ripple.style.height = "8px";
    ripple.style.border = "1px solid rgba(194,24,91,0.4)";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.zIndex = "999";
    ripple.style.transform = "translate(-50%,-50%)";
    document.body.appendChild(ripple);
    ripple.animate(
      [
        { opacity: 1, width: "8px", height: "8px" },
        { opacity: 0, width: "40px", height: "40px" },
      ],
      { duration: 450 },
    ).onfinish = () => ripple.remove();
  });
}

// ========== UTILITY ==========
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}