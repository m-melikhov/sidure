export const CATEGORIES = [
  { id: 'all',      label: 'Все' },
  { id: 'shacharit',label: 'Утро' },
  { id: 'mincha',   label: 'День' },
  { id: 'maariv',   label: 'Вечер' },
  { id: 'shabbat',  label: 'Шаббат' },
  { id: 'daily',    label: 'Ежедневно' },
];

export const PRAYERS = [
  {
    id: 'modeh-ani',
    titleHe: 'מוֹדֶה אֲנִי',
    titleRu: 'Модэ Ани — благодарность при пробуждении',
    time: 'Утро',
    cats: ['shacharit', 'daily'],
    note: 'Сразу после пробуждения, ещё лёжа. Произносится до омовения рук (нетилат ядаим). Женщины говорят «מוֹדָה אֲנִי» (Мода́ ани).',
    heb: `<div class="p-center">
<span class="hl">מוֹדֶה אֲנִי לְפָנֶיךָ</span><br>
מֶלֶךְ חַי וְקַיָּם,<br>
שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה —<br>
<span class="hl">רַבָּה אֱמוּנָתֶךָ.</span>
</div>`,
    trans: `<div class="p-center italic">
<span class="stress">Mo·dé</span> a·ni le·fa·né·<span class="stress">cha</span><br>
<span class="stress">mé</span>·lech chai ve·<span class="stress">ka</span>·yam,<br>
she·he·che·<span class="stress">zar</span>·ta bi nish·<span class="stress">ma</span>·ti be·chem·<span class="stress">la</span> —<br>
<span class="stress">ra</span>·ba e·mu·na·<span class="stress">te</span>·cha.
</div>`,
    ru: `<div class="p-center">
Благодарю Тебя, Царь живой и вечный,<br>
за то, что Ты возвратил мне мою душу с милосердием —<br>
<strong>велика Твоя верность.</strong>
</div>`,
  },

  {
    id: 'netilat-yadaim',
    titleHe: 'נְטִילַת יָדַיִם',
    titleRu: 'Нетилат ядаим — омовение рук',
    time: 'Утро',
    cats: ['shacharit', 'daily'],
    note: 'Утром после пробуждения, трижды поливая каждую руку поочерёдно. Также перед едой с хлебом.',
    heb: `<div class="p-center">
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם,<br>
<span class="hl">אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו</span><br>
<span class="hl">וְצִוָּנוּ עַל נְטִילַת יָדָיִם.</span>
</div>`,
    trans: `<div class="p-center italic">
<span class="stress">Ba</span>·ruch a·<span class="stress">ta</span> A·do·<span class="stress">nai</span> E·lo·<span class="stress">hei</span>·nu <span class="stress">me</span>·lech ha·o·<span class="stress">lam</span>,<br>
a·<span class="stress">sher</span> ki·de·<span class="stress">sha</span>·nu be·mitz·vo·<span class="stress">tav</span><br>
ve·tzi·<span class="stress">va</span>·nu al ne·ti·<span class="stress">lat</span> ya·<span class="stress">da</span>·yim.
</div>`,
    ru: `<div class="p-center">
Благословен Ты, Господь, Бог наш, Царь вселенной,<br>
освятивший нас Своими заповедями<br>
и повелевший нам омовение рук.
</div>`,
  },

  {
    id: 'birkhot-hashachar',
    titleHe: 'בִּרְכוֹת הַשַּׁחַר',
    titleRu: 'Биркот хашахар — 15 утренних благословений',
    time: 'Утро',
    cats: ['shacharit', 'daily'],
    note: 'Каждое утро, в составе Шахарита. 15 благословений отражают 15 ощущений при пробуждении — от открытия глаз до первого шага.',
    heb: `<p class="heb-sm">
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">אֲשֶׁר נָתַן לַשֶּׂכְוִי בִינָה לְהַבְחִין בֵּין יוֹם וּבֵין לָיְלָה.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">שֶׁלֹּא עָשַׂנִי גּוֹי.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">שֶׁלֹּא עָשַׂנִי עָבֶד.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">שֶׁלֹּא עָשַׂנִי אִשָּׁה.</span><br>
<span class="muted">(Женщины: שֶׁעָשַׂנִי כִּרְצוֹנוֹ)</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">פּוֹקֵחַ עִוְרִים.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">מַלְבִּישׁ עֲרֻמִּים.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">מַתִּיר אֲסוּרִים.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">זוֹקֵף כְּפוּפִים.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">רוֹקַע הָאָרֶץ עַל הַמָּיִם.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">שֶׁעָשָׂה לִי כָּל צָרְכִּי.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">הַמֵּכִין מִצְעֲדֵי גָבֶר.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">אוֹזֵר יִשְׂרָאֵל בִּגְבוּרָה.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">עוֹטֵר יִשְׂרָאֵל בְּתִפְאָרָה.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">הַנּוֹתֵן לַיָּעֵף כֹּחַ.</span><br>
בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">הַמַּעֲבִיר שֵׁנָה מֵעֵינָי וּתְנוּמָה מֵעַפְעַפָּי.</span><br><br>
וִיהִי רָצוֹן מִלְּפָנֶיךָ יְהוָה אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, שֶׁתַּרְגִּילֵנוּ בְּתוֹרָתֶךָ וְדַבְּקֵנוּ בְּמִצְוֹתֶיךָ, וְאַל תְּבִיאֵנוּ לֹא לִידֵי חֵטְא, וְלֹא לִידֵי עֲבֵרָה וְעָוֹן, וְלֹא לִידֵי נִסָּיוֹן, וְלֹא לִידֵי בִזָּיוֹן. וְאַל תַּשְׁלֶט בָּנוּ יֵצֶר הָרָע. וְהַרְחִקֵנוּ מֵאָדָם רָע וּמֵחָבֵр רָע. וְדַבְּקֵנוּ בְּיֵצֶר הַטּוֹב וּבְמַעֲשִׂים טוֹבִים. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַגּוֹמֵל חֲסָדִים טוֹבִים לְעַמּוֹ יִשְׂרָאֵל.</span>
</p>`,
    trans: `<p class="trans-sm">
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, a·sher na·tan la·<span class="stress">sech</span>·vi vi·<span class="stress">na</span> le·hav·<span class="stress">chin</span> bein yom u·vein <span class="stress">lai</span>·la.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, she·<span class="stress">lo</span> a·<span class="stress">sa</span>·ni <span class="stress">goy</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, she·<span class="stress">lo</span> a·<span class="stress">sa</span>·ni <span class="stress">a</span>·ved.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, she·<span class="stress">lo</span> a·<span class="stress">sa</span>·ni i·<span class="stress">sha</span>. <span class="muted">(Женщины: she·a·sa·ni kir·tzo·no)</span><br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, po·<span class="stress">ke</span>·ach iv·<span class="stress">rim</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, mal·<span class="stress">bish</span> a·ru·<span class="stress">mim</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, ma·<span class="stress">tir</span> a·su·<span class="stress">rim</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, zo·<span class="stress">kef</span> ke·fu·<span class="stress">fim</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, ro·<span class="stress">ka</span> ha·<span class="stress">a</span>·retz al ha·<span class="stress">ma</span>·yim.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, she·a·<span class="stress">sa</span> li kol tzor·<span class="stress">ki</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, ha·me·<span class="stress">chin</span> mitz·a·<span class="stress">dei</span> <span class="stress">ga</span>·ver.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, o·<span class="stress">zer</span> Yis·ra·<span class="stress">el</span> big·vu·<span class="stress">ra</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, o·<span class="stress">ter</span> Yis·ra·<span class="stress">el</span> be·tif·a·<span class="stress">ra</span>.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, ha·no·<span class="stress">ten</span> la·ya·<span class="stress">ef</span> <span class="stress">ko</span>·ach.<br>
Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, ha·ma·a·<span class="stress">vir</span> she·<span class="stress">na</span> me·ei·<span class="stress">nai</span> u·te·nu·ma me·af·a·pai.<br><br>
Vi·hi ra·tzon mi·le·fa·ne·cha A·do·nai E·lo·hei·nu vE·lo·hei a·vo·tei·nu, she·tar·gi·le·nu be·to·ra·te·cha ve·dav·ke·nu be·mitz·vo·te·cha, ve·al te·vi·e·nu lo li·dei che·t, ve·lo li·dei a·ve·ra ve·a·von, ve·lo li·dei nis·sa·yon, ve·lo li·dei vi·za·yon. Ve·al tash·let ba·nu ye·tzer ha·ra. Ve·har·chi·ke·nu me·a·dam ra u·me·cha·ver ra. Ve·dav·ke·nu be·ye·tzer ha·tov u·ve·ma·a·sim to·vim. Ba·ruch a·ta A·do·nai, ha·go·mel cha·sa·dim to·vim le·am·mo Yis·ra·el.
</p>`,
    ru: `<p class="ru-sm">
Благословен Ты, Господь, Бог наш, Царь Вселенной, который дал петуху разум различать между днем и ночью.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, за то, что не создал меня язычником.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, за то, что не создал меня рабом.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, за то, что не создал меня женщиной. <span class="muted">(Женщины: создавший меня по воле Своей)</span><br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, открывающий глаза слепым.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, одевающий нагих.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, освобождающий скованных.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, поднимающий поникших.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, распростерший землю над водами.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, снабдивший меня всем необходимым.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, направляющий шаги человека.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, опоясывающий Израиль силой.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, венчающий Израиль славой.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, дарующий силу усталому.<br>
Благословен Ты, Господь, Бог наш, Царь Вселенной, прогоняющий сон с моих глаз и дремоту с моих вежд.<br><br>
И да будет воля Твоя, Господь, Бог наш и Бог отцов наших, приучить нас к Торе Твоей и прилепить нас к заповедям Твоим; и не руководи нами ни ради греха, ни ради преступления или порока, ни ради искушения, ни ради позора. И пусть не правит нами дурное влечение. И удали нас от злого человека и злого товарища. И прилепи нас к доброму влечению и к добрым делам. <strong>Благословен Ты, Господь, творящий добрые благодеяния Своему народу, Израилю.</strong>
</p>`,
  },

  {
    id: 'shema',
    titleHe: 'קְרִיאַת שְׁמַע',
    titleRu: 'Крият Шма — три параши Торы',
    time: 'Утро / Вечер',
    cats: ['shacharit', 'maariv', 'daily'],
    note: 'Дважды в день — утром и вечером. При чтении первого стиха закрывают правой рукой глаза и сосредотачиваются на единстве Бога.',
    heb: `
<div class="stanza">
  <div class="slabel">Первый стих — Дварим 6:4</div>
  <div class="p-center heb-lg"><span class="hl">שְׁמַע יִשְׂרָאֵל</span><br>יְהוָה אֱלֹהֵנוּ<br>יְהוָה <span class="hl">אֶחָד:</span></div>
</div>
<div class="stanza">
  <div class="slabel">Барух Шем (тихо)</div>
  <div class="p-center heb-md muted-text">בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד</div>
</div>
<div class="stanza">
  <div class="slabel">Ве-ахавта — Дварим 6:5–9</div>
  <div class="heb-md">
    וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל-לְבָבְךָ וּבְכָל-נַפְשְׁךָ וּבְכָל-מְאֹדֶךָ:<br>
    וְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם עַל-לְבָבֶךָ:<br>
    וְשִׁנַּנְתָּם לְבָנֶיךָ וְדִבַּרְתָּ בָּם בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ:<br>
    וּקְשַׁרְתָּם לְאוֹת עַל-יָדֶךָ וְהָיוּ לְטֹטָפֹת בֵּין עעינֶיךָ:<br>
    וּכְתַבְתָּם עַל-מְזֻזוֹת בֵּיתֶךָ וּבִשְׁעָרֶיךָ:
  </div>
</div>
<div class="stanza">
  <div class="slabel">Вэ-хая — Дварим 11:13–21</div>
  <div class="heb-md">
    וְהָיָה אִם-שָׁמֹעַ תִּשְׁמְעוּ אֶל-מִצְוֹתַי אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם הַיּוֹם, לְאַהֲבָה אֶת-יְהוָה אֱלֹהֵיכֶם וּלְעָבְדוֹ בְּכָל-לְבַבְכֶם וּבְכָל-נַפְשְׁכֶם:<br>
    וְנָתַתִּי מְטַר-אַרְצְכֶם בְּעִתּוֹ יוֹרֶה וּמַלְקוֹשׁ, וְאָסַפְתָּ דְגָנֶךָ וְתִירֹשְׁךָ וְיִצְהָרֶךָ:<br>
    וְנָתַתִּי עֵשֶׂב בְּשָׂדְךָ לִבְהֶמְתֶּךָ, וְאָכַלְתָּ וְשָׂבָעְתָּ:<br>
    הִשָּׁמְרוּ לָכֶם פֶּן-יִפְתֶּה לְבַבְכֶם, וְסַרְתֶּם וַעֲבַדְתֶּם אֱלֹהִים אֲחֵרִים וְהִשְׁתַּחֲוִיתֶם לָהֶם:<br>
    וְחָרָה אַף-יְהוָה בָכֶם, וְעָצַר אֶת-הַשָּׁמַיִם וְלֹא-יִהְיֶה מָטָר, וְהָאֲדָמָה לֹא תִתֵּן אֶת-יְבוּלָהּ, וַאֲבַדְתֶּם מְהֵרָה מֵעַל הָאָרֶץ הַטֹּבָה אֲשֶׁר יְהוָה נֹתֵן לָכֶם:<br>
    וְשַׂמְתֶּם אֶת-דְּבָרַי אֵלֶּה עַל-לְבַבְכֶם וְעַל-נַפְשְׁכֶם, וּקְשַׁרְתָּם אֹתָם לְאוֹת עַל-יֶדְכֶם, וְהָיוּ לְטוֹטָפֹת בֵּין עֵינֵיכֶם:<br>
    וְלִמַּדְתֶּם אֹתָם אֶת-בְּנֵיכֶם לְדַבֵּר בָּם, בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ:<br>
    וּכְתַבְתָּם עַל-מְזוּזוֹת בֵּיתֶךָ וּבִשְׁעָרֶיךָ:<br>
    לְמַעַן יִרְבּוּ יְמֵיכֶם וִימֵי בְנֵיכֶם עַל הָאֲדָמָה אֲשֶׁר נִשְׁבַּע יְהוָה לַאֲבֹתֵיכֶם לָתֵת לָהֶם, כִּימֵי הַשָּׁמַיִם עַל-הָאָרֶץ:
  </div>
</div>
<div class="stanza">
  <div class="slabel">Вайомер — Бамидбар 15:37–41 (Цицит)</div>
  <div class="heb-md">
    וַיֹּאמֶר יְהוָה אֶל-מֹשֶׁה לֵּאמֹר: דַּבֵּר אֶל-בְּנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם,<br>
    וְעָשׂוּ לָהֶם צִיצִת עַל-כַּנְפֵי בִגְדֵיהֶם לְדֹרֹתָם, וְנָתְנוּ עַל-צִיצִת הַכָּנָף פְּתִיל תְּכֵלֶת:<br>
    וְהָיָה לָכֶם לְצִיצִת, וּרְאִיתֶם אֹתוֹ וּזְכַרְתֶּם אֶת-כָּל-מִצְוֹת יְהוָה וַעֲשִׂיתֶם אֹתָם,<br>
    וְלֹא-תָתוּרוּ אַחֲרֵי לְבַבְכֶם וְאַחֲרֵי עֵינֵיכֶם אֲשֶׁר-אַתֶּם זֹנִים אַחֲרֵיהֶם:<br>
    לְמַעַן תִּזְכְּרוּ וַעֲשִׂיתֶם אֶת-כָּל-מִצְוֹתָי, וִהְיִיתֶם קְדֹשִׁים לֵאלֹהֵיכֶם:<br>
    אֲנִי יְהוָה אֱלֹהֵיכֶם, אֲשֶׁר הוֹצֵאתִי אֶתְכֶם מֵאֶרֶץ מִצְרַיִם לִהְיוֹת לָכֶם לֵאלֹהִים —<br>
    <span class="hl">אֲנִי יְהוָה אֱלֹהֵיכֶם. אֱמֶת.</span>
  </div>
</div>`,
    trans: `
<div class="stanza"><div class="slabel">Шма</div><div class="p-center italic t-lg"><span class="stress">Shma</span> Yis·ra·<span class="stress">el</span>,<br>A·do·<span class="stress">nai</span> E·lo·<span class="stress">hei</span>·nu,<br>A·do·<span class="stress">nai</span> E·<span class="stress">chad</span>.</div></div>
<div class="stanza"><div class="slabel">Барух Шем</div><div class="italic muted-text">Ba·<span class="stress">ruch</span> shem ke·<span class="stress">vod</span> mal·chu·<span class="stress">to</span> le·o·<span class="stress">lam</span> va·<span class="stress">ed</span>.</div></div>
<div class="stanza"><div class="slabel">Ве-ахавта</div><div class="trans-sm italic">
Ve·a·<span class="stress">hav</span>·ta et A·do·<span class="stress">nai</span> E·lo·<span class="stress">he</span>·cha be·chol le·<span class="stress">vav</span>·cha u·ve·chol <span class="stress">naf</span>·she·cha u·ve·chol me·o·<span class="stress">de</span>·cha.<br>
Ve·<span class="stress">ha</span>·yu ha·de·va·<span class="stress">rim</span> ha·<span class="stress">e</span>·leh a·sher a·no·<span class="stress">chi</span> me·tzav·ve·cha ha·<span class="stress">yom</span> al le·va·<span class="stress">ve</span>·cha.<br>
Ve·shi·<span class="stress">nan</span>·tam le·va·<span class="stress">ne</span>·cha ve·di·<span class="stress">bar</span>·ta bam be·shiv·te·<span class="stress">cha</span> be·<span class="stress">ve</span>·te·cha u·ve·lech·te·<span class="stress">cha</span> va·<span class="stress">de</span>·rech u·ve·shoch·be·<span class="stress">cha</span> u·ve·ku·<span class="stress">me</span>·cha.<br>
Uk·shar·<span class="stress">tam</span> le·ot al ya·<span class="stress">de</span>·cha ve·ha·yu le·to·ta·<span class="stress">fot</span> bein ei·<span class="stress">nei</span>·cha.<br>
Uch·tav·<span class="stress">tam</span> al me·zu·<span class="stress">zot</span> bei·<span class="stress">te</span>·cha u·vish·a·<span class="stress">re</span>·cha.
</div></div>
<div class="stanza"><div class="slabel">Вэ-хая</div><div class="trans-sm italic">
Ve·ha·ya im sha·mo·a tish·me·u el mitz·vo·tai a·sher a·no·chi me·tzav·ve et·chem ha·yom, le·a·ha·va et A·do·nai E·lo·hei·chem u·le·o·vdo be·chol le·vav·chem u·ve·chol naf·she·chem.<br>
Ve·na·ta·ti me·tar ar·tze·chem be·i·to yo·re u·mal·kosh, ve·a·saf·ta de·ga·ne·cha ve·ti·rosh·cha ve·yitz·ha·re·cha.<br>
Ve·na·ta·ti e·sev be·sa·de·cha liv·hem·te·cha, ve·a·chal·ta ve·sa·va·ta.<br>
Hi·sha·me·ru la·chem pen yif·te le·vav·chem, ve·sar·tem va·a·vad·tem e·lo·him a·che·rim ve·hish·ta·cha·vi·tem la·hem.<br>
Ve·cha·ra af A·do·nai ba·chem, ve·a·tzar et ha·sha·ma·yim ve·lo yih·ye ma·tar, ve·ha·a·da·ma lo ti·ten et ye·vu·lah, va·a·vad·tem me·he·ra me·al ha·a·retz ha·to·va a·sher A·do·nai no·ten la·chem.<br>
Ve·sam·tem et de·va·rai e·leh al le·vav·chem ve·al naf·she·chem, uk·shar·tem o·tam le·ot al yed·chem, ve·ha·yu le·to·ta·fot bein ei·nei·chem.<br>
Ve·li·mad·tem o·tam et be·nei·chem le·da·ber bam, be·shiv·te·cha be·vei·te·cha u·ve·lech·te·cha va·de·rech u·ve·shoch·be·cha u·ve·ku·me·cha.<br>
Uch·tav·tem al me·zu·zot bei·te·cha u·vish·a·re·cha.<br>
Le·ma·an yir·bu ye·mei·chem vi·mei ve·nei·chem al ha·a·da·ma a·sher nish·ba A·do·nai la·a·vo·tei·chem la·tet la·hem, ki·mei ha·sha·ma·yim al ha·a·retz.
</div></div>
<div class="stanza"><div class="slabel">Вайомер (Цицит)</div><div class="trans-sm italic">
Va·yo·mer A·do·nai el Mo·she le·mor.<br>
Da·ber el be·nei Yis·ra·el ve·a·mar·ta a·le·hem, ve·a·su la·hem tzi·tzit al kan·fei vig·dei·hem le·do·ro·tam, ve·na·te·nu al tzi·tzit ha·ka·naf pe·til tche·let.<br>
Ve·ha·ya la·chem le·tzi·tzit, u·re·i·tem o·to uz·char·tem et kol mitz·vot A·do·nai va·a·si·tem o·tam, ve·lo ta·tu·ru a·cha·rei le·vav·chem ve·cha·rei ei·nei·chem a·sher at·tem zo·nim a·cha·rei·hem.<br>
Le·ma·an tiz·ke·ru va·a·si·tem et kol mitz·vo·tai, vi·hi·yi·tem ke·do·shim lE·lo·hei·chem.<br>
A·ni A·do·nai E·lo·hei·chem, a·sher ho·tze·ti et·chem me·e·retz Mitz·ra·yim li·h·yot la·chem lE·lo·him — A·ni A·do·nai E·lo·hei·chem. E·met.
</div></div>`,
    ru: `
<div class="stanza"><div class="slabel">Шма</div><div class="p-center t-lg"><strong>Слушай, Израиль: Господь — Бог наш, Господь — един.</strong></div></div>
<div class="stanza"><div class="slabel">Барух Шем</div><div class="muted-text">Благословенно имя Его славного царства во веки веков.</div></div>
<div class="stanza"><div class="slabel">Ве-ахавта</div><div class="ru-sm">И возлюби Господа, Бога твоего, всем сердцем своим, и всей душой своей, и всем существом своим. И да будут слова эти, которые Я заповедую тебе сегодня, на сердце твоем. И повторяй их детям своим, и говори о них, сидя в доме твоем, и идя дорогою, и ложась, и вставая. И повяжи их как знак на руку свою, и да будут они знаками над глазами твоими. И напиши их на дверных косяках дома твоего и на воротах твоих.</div></div>
<div class="stanza"><div class="slabel">Вэ-хая</div><div class="ru-sm">И будет так: если вы прилежно будете слушать Мои заповеди, которые Я заповедую вам сегодня, — любить Господа, Бога вашего, и служить Ему всем сердцем вашим и всей душой вашей, — то дам Я дождь земле вашей в назначенное время: ранний и поздний; и ты соберешь свой хлеб, и свое вино, и свой елей. И дам Я траву на поле твоем для скота твоего, и будешь ты есть и насыщаться. Берегитесь, чтобы не обольстилось сердце ваше, и вы не уклонились, и не стали служить иным богам, и не поклонялись им. И тогда воспылает гнев Господа на вас, и затворит Он небеса, и не будет дождя, и земля не даст своего урожая, и вы скоро исчезнете с этой доброй земли, которую Господь дает вам. Возложите же эти слова Мои на сердце ваше и на душу вашу, и повяжите их как знак на руку вашу, и да будут они знаками над глазами твоими. И учите им сыновей ваших, говоря о них, сидя в доме твоем, и идя дорогою, и ложась, и вставая. И напиши их на дверных косяках дома твоего и на воротах твоих, дабы умножились дни ваши и дни детей ваших на той земле, которую Господь поклялся дать отцам вашим, — столько времени, сколько небеса пребудут над землею.</div></div>
<div class="stanza"><div class="slabel">Вайомер (Цицит)</div><div class="ru-sm">И сказал Господь Моше, говоря: Говори сынам Израиля и скажи им, чтобы они делали себе кисти (цицит) на углах одежд своих во всех поколениях своих, и вплетали в кисть на каждом углу синюю нить. И будет она у вас в кисти, и, смотря на нее, вы будете вспоминать все заповеди Господа и исполнять их, и не будете следовать за сердцем вашим и глазами вашими, которые влекут вас к блуду, — дабы вы помнили и исполняли все заповеди Мои и были святы пред Богом вашим. Я — Господь, Бог ваш, Который вывел вас из земли Египетской, чтобы быть вашим Богом. <strong>Я Господь, Бог ваш. Истина.</strong></div></div>`,
  },

  {
    id: 'amida',
    titleHe: 'עֲמִידָה (שְׁמוֹנֶה עֶשְׂרֵה)',
    titleRu: 'Амида — 19 благословений (Шмонэ Эсрэ)',
    time: '3× в день',
    cats: ['shacharit', 'mincha', 'maariv'],
    note: 'Трижды в день стоя, лицом к востоку (к Иерусалиму). В будни — 19 благословений, в Шаббат и праздники — 7. Три шага вперёд перед началом, три назад в конце.',
    heb: `
<div class="stanza"><div class="slabel">1. Авот — Отцы</div><div class="heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵנוּ וֵאלֹהֵי אֲבוֹתֵינוּ, אֱלֹהֵי אַבְרָהָם אֱלֹהֵי יִצְחָק וֵאלֹהֵי יַעֲקֹב, הָאֵל הַגָּדוֹל הַגִּבּוֹר וְהַנּוֹרָא, אֵל עֶלְיוֹן, גּוֹמֵל חֲסָדִים טוֹבִים, וְקוֹנֵה הַכֹּל, וְזוֹכֵר חַסְדֵי אָבוֹת, וּמֵבִיא גוֹאֵל לִבְנֵי בְנֵיהֶם לְמַעַן שְׁמוֹ בְּאַהֲבָה. מֶלֶךְ עוֹזֵר וּמוֹשִׁיעַ וּמָגֵן. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מָגֵן אַבְרָהָם.</span></div></div>
<div class="stanza"><div class="slabel">2. Гвурот — Могущество</div><div class="heb-md">אַתָּה גִּבּוֹר לְעוֹלָם אֲדֹנָי, מְחַיֵּה מֵתִים אַתָּה, רַב לְהוֹשִׁיעַ. מַשִּׁיב הָרוּחַ וּמוֹרִיד הַגָּשֶׁם. מְכַלְכֵּל חַיִּים בְּחֶסֶד, מְחַיֵּה מֵתִים בְּרַחֲמִים רַבִּים, סוֹמֵךְ נוֹפְלִים, וְרוֹפֵא חוֹלִים, וּמַתִּיר אֲסוּרִים, וּמְקַיֵּם אֱמוּנָתוֹ לִישֵׁנֵי עָפָר. מִי כָמוֹךָ בַּעַל גְּבוּרוֹת וּמִי דּוֹמֶה לָּךְ, מֶלֶךְ מֵמִית וּמְחַיֶּה וּמַצְמִיחַ יְשׁוּעָה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מְחַיֵּה הַמֵּתִים.</span></div></div>
<div class="stanza"><div class="slabel">3. Кдушат Хашем - Святость Имени</div><div class="heb-md">אַתָּה קָדוֹשׁ וְשִׁמְךָ קָדוֹשׁ, וּקְדוֹשִׁים בְּכָל-יוֹם יְהַלְלוּךָ סֶּלָה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הָאֵל הַקָּדוֹשׁ.</span></div></div>
<div class="stanza"><div class="slabel">4. Бина — Мудрость</div><div class="heb-md">אַתָּה חוֹנֵן לְאָדָם דַּעַת, וּמְלַמֵּד לֶאֱנוֹשׁ בִּינָה. חָנֵּנוּ מֵאִתְּךָ דֵּעָה בִּינָה וְהַשְׂכֵּל. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, חוֹנֵן הַדָּעַת.</span></div></div>
<div class="stanza"><div class="slabel">5. Тшува — Покаяние</div><div class="heb-md">הֲשִׁיבֵנוּ אָבִינוּ לְתוֹרָתֶךָ, וְקָרְבֵנוּ מַלְכֵּנוּ לַעֲבוֹדָתֶךָ, וְהַחֲזִירֵנוּ בִּתְשׁוּבָה שְׁלֵמָה לְפָנֶיךָ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הָרוֹצֶה בִּתְשׁוּבָה.</span></div></div>
<div class="stanza"><div class="slabel">6. Слиха — Прощение</div><div class="heb-md">סְלַח לָנוּ אָבִינוּ כִּי חָטָאנוּ, מְחַל לָנוּ מַלְכֵּנוּ כִּי פָשָׁעְנוּ, כִּי מוֹחֵל וְסוֹלֵחַ אָתָּה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, חַנּוּן הַמַּרְבֶּה לִסְלֹחַ.</span></div></div>
<div class="stanza"><div class="slabel">7. Геула — Избавление</div><div class="heb-md">רְאֵה בְעָנְיֵנוּ וְרִיבָה רִיבֵנוּ, וּגְאָלֵנוּ מְהֵרָה לְמַעַן שְׁמֶךָ, כִּי גּוֹאֵל חָזָק אָתָּה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, גּוֹאֵל יִשְׂרָאֵל.</span></div></div>
<div class="stanza"><div class="slabel">8. Рфуа — Исцеление</div><div class="heb-md">רְפָאֵנוּ יְהוָה וְנֵרָפֵא, הוֹשִׁיעֵנוּ וְנִוָּשֵׁעָה, כִּי תְהִלָּתֵנוּ אָתָּה, וְהַעֲלֵה רְפוּאָה שְׁלֵמָה לְכָל-מַכּוֹתֵינוּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, רוֹפֵא חוֹלֵי עַמּוֹ יִשְׂרָאֵל.</span></div></div>
<div class="stanza"><div class="slabel">9. Биркат Хашаним — Пропитание</div><div class="heb-md">בָּרֵךְ עָלֵינוּ יְהוָה אֱלֹהֵינוּ אֶת-הַשָּׁנָה הַזֹּאת וְאֶת-כָּל-מִינֵי תְבוּאָתָהּ לְטוֹבָה, וְתֵן בְּרָכָה עַל פְּנֵי הָאֲדָמָה, וְשַׂבְּעֵנוּ מִטּוּבָהּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מְבָרֵךְ הַשָּׁנִים.</span></div></div>
<div class="stanza"><div class="slabel">10. Кибуц Галуйот — Собирание</div><div class="heb-md">תְּקַע בְּשׁוֹפָר גָּדוֹל לְחֵרוּתֵנוּ, וְשָׂא נֵס לְקַבֵּץ גָּלֻיּוֹתֵינוּ, וְקַבְּצֵנוּ יַחַד מֵאַרְבַּع כַּנְפוֹת הָאָרֶץ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מְקַבֵּץ נִדְחֵי עַמּוֹ יִשְׂרָאֵל.</span></div></div>
<div class="stanza"><div class="slabel">11. Биркат Хамишпат — Правосудие</div><div class="heb-md">הָשִׁיבָה שׁוֹפְטֵינוּ כְּבָרִאשׁוֹנָה וְיוֹעֲצֵינוּ כְּבַתְּחִלָּה, וְהָסֵר מִמֶּנּוּ יָגוֹן וַאֲנָחָה, וּמְלוֹךְ עָלֵינוּ אַתָּה יְהוָה לְבַדְּךָ בְּחֶסֶด וּבְרַחֲמִים, וְצַדְּקֵנוּ בַּמִּשְׁפָּט. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מֶלֶךְ אוֹהֵב צְדָקָה וּמִשְׁפָּט.</span></div></div>
<div class="stanza"><div class="slabel">12. Биркат Хаминим — Против злодеев</div><div class="heb-md">וְלַמַּלְשִׁינִים אַל-תְּהִי תִקְוָה, וְכָל-הָרִשְׁעָה כְּרֶגַע תֹּאבֵד, וְכָל-אוֹיְבֵי עַמְּךָ מְהֵרָה יִכָּרֵתוּ, וְהַזֵּדִים מְהֵרָה תְעַקֵּר וּתְשַׁבֵּר וּתְמַגֵּר וְתַכְנִיעַ בִּמְהֵרָה בְיָמֵינו... <span class="hl">בָּרוּךְ אַתָּה יְהוָה, שׁוֹבֵר אוֹיְבִים וּמַכְנִיעַ זֵדִים.</span></div></div>
<div class="stanza"><div class="slabel">13. Аль Хацадиким — Праведники</div><div class="heb-md">עַל-הַצַּדִּיקִים וְעַל-הַחֲסִידִים וְעַל-זִקְנֵי עַמְּךָ בֵּית יִשְׂרָאֵל, וְעַל-פְּלֵיטַת סוֹפְרֵיהֶם, וְעַל-גֵּרֵי הַצֶּדֶק וְעָלֵינוּ, יֶהֱמוּ נָא רַחֲמֶיךָ יְהוָה אֱלֹהֵינוּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מִשְׁעָן וּמִבְטָח לַצַּדִּיקִים.</span></div></div>
<div class="stanza"><div class="slabel">14. Биньян Йерушалаим</div><div class="heb-md">וְלִירוּשָׁלַיִם עִירְךָ בְּרַחֲמִים תָּשׁוּב, וְתִשְׁכּוֹן בְּתוֹכָהּ כַּאֲשֶׁר דִּבַּרְתָּ, וּבְנֵה אוֹתָהּ בְּקָרוֹב בְּיָמֵינוּ בִּנְיַן עוֹלָם, וְכִסֵּא דָוִד מְהֵרָה לְתוֹכָהּ תָּכִין. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, בּוֹנֵה יְרוּשָׁלָיִם.</span></div></div>
<div class="stanza"><div class="slabel">15. Цемах Давид — Мессия</div><div class="heb-md">אֶת-צֶמַח דָּוִד עַבְדְּךָ מְהֵרָה תַצְמִיחַ, וְקַרְנוֹ תָּרוּם בִּישׁוּעָתֶךָ, כִּי לִישׁוּעָתְךָ קִוִּינוּ כָּל-הַיּוֹם. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מַצְמִיחַ קֶרֶן יְשׁוּעָה.</span></div></div>
<div class="stanza"><div class="slabel">16. Шомеа Тфила — Услышь молитву</div><div class="heb-md">שְׁמַע קוֹלֵנוּ יְהוָה אֱלֹהֵינוּ, חוּס וְרַחֵם עָלֵינוּ, וְקַבֵּל בְּרַחֲמִים וּבְרָצוֹן אֶת-תְּפִלָּתֵנוּ, כִּי אֵל שׁוֹמֵעַ תְּפִלּוֹת וְתַחֲנוּנִים אָתָּה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, שׁוֹמֵעַ תְּפִלָּה.</span></div></div>
<div class="stanza"><div class="slabel">17. Авода — Богослужение</div><div class="heb-md">רְצֵה יְהוָה אֱלֹהֵינוּ בְּעַמְּךָ יִשְׂרָאֵל וּבִתְפִלָּתָם, וְהָשֵׁב אֶת-הָעֲבוֹדָה לִדְבִיר בֵּיתֶךָ, וְאִשֵּׁי יִשְׂרָאֵל וּתְפִלָּתָם בְּאַהֲבָה תְקַבֵּל בְּרָצוֹן. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַמַּחֲזִיר שְׁכִינָתוֹ לְצִיּוֹן.</span></div></div>
<div class="stanza"><div class="slabel">18. Модим — Благодарность</div><div class="heb-md"><span class="hl">מוֹדִים אֲנַחְנוּ לָךְ</span>, שָׁאַתָּה הוּא יְהוָה אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ לְעוֹלָם וָעֶד. צוּר חַיֵּינוּ מָגֵן יִשְׁעֵנוּ אַתָּה הוּא לְדוֹר וָדוֹר. נוֹדֶה לְּךָ וּנְסַפֵּר תְּהִלָּתֶךָ עַל חַיֵּינוּ הַמְּסוּרִים בְּיָדֶךָ, וְעַל נִשְׁמוֹתֵינוּ הַפְּקוּדוֹת לָךְ, וְעַל נִסֶּיךָ שֶׁבְּכָל-יוֹם עִמָּנוּ, וְעַל נִפְלְאוֹתֶיךָ וְטוֹבוֹתֶיךָ שֶׁבְּכָל-עֵת, עֶרֶב וָבֹקֶר וְצָהֳרָיִם. הַטּוֹב כִּי לֹא-כָלוּ רַחֲמֶיךָ, וְהַמְרַחֵם כִּי לֹא-תַמּוּ חֲסָדֶיךָ מֵעוֹלָם קִוִּינוּ לָךְ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַטּוֹב שִׁמְךָ וּלְךָ נָאֶה לְהוֹדוֹת.</span></div></div>
<div class="stanza"><div class="slabel">19. Шалом — Мир</div><div class="heb-md">שִׂים שָׁלוֹם טוֹבָה וּבְרָכָה, חֵן וָחֶסֶด וְרַחֲמִים עָלֵינוּ וְעַל כָּל-יִשְׂרָאֵל עַמֶּךָ. בָּרְכֵנוּ אָבִינוּ כֻּלָּנוּ כְּאֶחָד בְּאוֹר פָּנֶיךָ, כִּי בְאוֹר פָּנֶיךָ נָתַתָּ לָנוּ יְהוָה אֱלֹהֵינוּ תּוֹרַת חַיִּים וְאַהֲבַת חֶסֶד, וּצְדָקָה וּבְרָכָה וְרַחֲמִים וְחַיִּים וְשָׁלוֹם. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַמְבָרֵךְ אֶת-עַמּוֹ יִשְׂרָאֵל בַּשָּׁלוֹם.</span></div></div>`,
    trans: `<div class="trans-sm italic">
<div class="stanza"><div class="slabel">1. Авот</div>Ba·ruch a·ta A·do·nai, E·lo·hei·nu vE·lo·hei a·vo·tei·nu, E·lo·hei Av·ra·ham, E·lo·hei Yitz·chak, vE·lo·hei Ya·a·kov, ha·El ha·ga·dol, ha·gi·bor ve·ha·no·ra, El El·yon, go·mel cha·sa·dim to·vim, ve·ko·neh ha·kol, ve·zo·cher chas·dei a·vot, u·me·vi go·el liv·nei ve·nei·hem le·ma·an she·mo be·a·ha·va. Me·lech o·zer u·mo·shi·a u·ma·gen. Ba·ruch a·ta A·do·nai, ma·gen Av·ra·ham.</div>
<div class="stanza"><div class="slabel">2. Гвурот</div>A·ta gi·bor le·o·lam A·do·nai, me·cha·yeh me·tim a·ta, rav le·ho·shi·a. Mash·shiv ha·ru·ach u·mo·rid ha·ga·shem. Me·chal·kel chay·yim be·che·sed, me·cha·yeh me·tim be·ra·cha·mim ra·bim, so·mech no·fleim, ve·ro·fe cho·lim, u·ma·tir a·su·rim, u·me·kay·yem e·mu·na·to li·shei·nei a·far. Mi cha·mo·cha ba·al gvu·rot u·mi do·meh lach, me·lech me·mit u·me·cha·yeh u·matz·mi·ach ye·shu·a. Ba·ruch a·ta A·do·nai, me·cha·yeh ha·me·tim.</div>
<div class="stanza"><div class="slabel">3. Кдушат Хашем</div>A·ta ka·dosh ve·shim·cha ka·dosh, u·k·do·shim be·chol yom ye·ha·le·lu·cha se·la. Ba·ruch a·ta A·do·nai, ha·El ha·ka·dosh.</div>
<div class="stanza"><div class="slabel">4. Бина</div>A·ta cho·nen le·a·dam da·at, u·me·la·med le·e·nosh bi·na. Cha·ne·nu me·it·cha de·ah bi·na ve·has·kel. Ba·ruch a·ta A·do·nai, cho·nen ha·da·at.</div>
<div class="stanza"><div class="slabel">5. Тшува</div>Ha·shi·ve·nu a·bi·nu le·to·ra·te·cha, ve·ka·r·ve·nu mal·kei·nu la·a·vo·da·te·cha, ve·ha·cha·zi·re·nu bi·tshu·va shle·ma le·fa·ne·cha. Ba·ruch a·ta A·do·nai, ha·ro·tze bi·tshu·va.</div>
<div class="stanza"><div class="slabel">6. Слиха</div>Se·lach la·nu a·bi·nu ki cha·ta·nu, m·chal la·nu mal·kei·nu ki fa·sha·nu, ki mo·chel ve·so·le·ach a·ta. Ba·ruch a·ta A·do·nai, cha·nun ha·mar·beh lis·lo·ach.</div>
<div class="stanza"><div class="slabel">7. Геула</div>Re·eh ve·on·ye·nu ve·ri·va ri·ve·nu, u·g·a·le·nu m·he·ra le·ma·an she·me·cha, ki go·el cha·zak a·ta. Ba·ruch a·ta A·do·nai, go·el Yis·ra·el.</div>
<div class="stanza"><div class="slabel">8. Рфуа</div>R·fa·e·nu A·do·nai ve·ne·ra·fe, ho·shi·e·nu ve·ni·va·she·a, ki t·hi·la·te·nu a·ta, ve·ha·a·leh r·fu·ah shle·ma le·chol ma·ko·tei·nu. Ba·ruch a·ta A·do·nai, ro·fe cho·lei am·mo Yis·ra·el.</div>
<div class="stanza"><div class="slabel">9. Биркат Хашаним</div>Ba·rech a·lei·nu A·do·nai E·lo·hei·nu et ha·sha·na ha·zo_at ve·et kol mi·nei te·vu·a·tah le·to·va, ve·ten b·ra·cha al p·nei ha·a·da·ma, ve·sa_b·e·nu mi·tu·vah. Ba·ruch a·ta A·do·nai, m·ba·rech ha·sha·nim.</div>
<div class="stanza"><div class="slabel">10. Кибуц Галуйот</div>T·ka b·sho·far ga·dol le·che·ru·te·nu, ve·sa nes le·ka·betz ga·lu·yo_tei·nu, ve·kab_tze·nu ya·chad me·ar·ba kan·fot ha·a·retz. Ba·ruch a·ta A·do·nai, m·ka·betz nid_chei am·mo Yis·ra·el.</div>
<div class="stanza"><div class="slabel">11. Биркат Хамишпат</div>Ha·shi·va sho_f·tei·nu ke·va·ri·sho_na ve·yo·a·tzei·nu ke·va_t_chi·lah, ve·ha·ser mi_me_nu ya·gon va·a·na_cha, u_m·loch a·lei_nu a·ta A·do·nai le_va_d·cha be·che·sed u·ve·ra·cha·mim, ve·tzad_ke·nu ba·mish·pat. Ba·ruch a·ta A·do·nai, me·lech o·hev tze·da_ka u·mish·pat.</div>
<div class="stanza"><div class="slabel">12. Биркат Хаминим</div>Ve·la·mal·shi·nim al t·hi tik·va, ve·chol ha·rish·ah ke·re·ga to·ved, ve·chol oy·vei am·m·cha m·he·ra yi_ka·re·tu, ve·ha·ze·dim m·he·ra t·a_ker u·t·sha_ber u·t·ma_ger ve·tach·ni·a bi_m·he·ra ve·ya·mei·nu. Ba·ruch a·ta A·do·nai, sho·ver oy·vim u·mach·ni·a ze·dim.</div>
<div class="stanza"><div class="slabel">13. Аль Хацадиким</div>Al ha·tza·di·kim ve·al ha·cha·si·dim ve·al zik·nei am·m·cha beit Yis·ra·el, ve·al p·lei_tat so_f·rei_hem, ve·al ge·rei ha·tze·dek ve·a·lei_nu, ye·ha·mu na ra·cha·mei_cha A·do·nai E·lo·hei_nu. Ba·ruch a·ta A·do·nai, mish·an u·miv·tach la·tza·di·kim.</div>
<div class="stanza"><div class="slabel">14. Биньян Йерушалаим</div>Ve·li·ru·sha·la·yim i_r·cha be·ra·cha·mim ta·shuv, ve·tish·kon be·to_chah ka·a·sher di_bar·ta, u·v·neh o·tah be·ka·rov be·ya·mei·nu bin·yan o·lam, ve·chis·e Da·vid m·he·ra le·to_chah ta·chin. Ba·ruch a·ta A·do·nai, bo·neh Yi·ru·sha·la_yim.</div>
<div class="stanza"><div class="slabel">15. Цемах Давид</div>Et tze·mach Da·vid av·d·cha m·he·ra tatz·mi·ach, ve·kar·no ta·rum bi·shu·a·te·cha, ki li·shu·a_t·cha ki_vi·nu kol ha·yom. Ba·ruch a·ta A·do·nai, matz·mi·ach ke·ren ye·shu_ah.</div>
<div class="stanza"><div class="slabel">16. Шомеа Тфила</div>She·ma ko·le·nu A·do·nai E·lo·hei·nu, chus ve·ra·chem a·lei_nu, ve·ka·bel be·ra·cha·mim u·v·ra·tzon et t·fi_la·te·nu, ki El sho·me·a t·fi_lot ve·tach·nu·nim a·ta. Ba·ruch a·ta A·do·nai, sho·me·a t·fi_lah.</div>
<div class="stanza"><div class="slabel">17. Авода</div>Ret·ze A·do·nai E·lo·hei·nu be·am·m·cha Yis·ra·el u·vit·fi_la·tam, ve·ha·shev et ha·a·vo·da li_d·vir bei·te·cha, ve·i_shei Yis·ra·el ut·fi_la·tam be·a·ha·va t·ka·bel be·ra·tzon. Ba·ruch a·ta A·do·nai, ha·ma·cha·zir Sh_chi·na·to le·Tzi·yon.</div>
<div class="stanza"><div class="slabel">18. Модим</div>Mo·dim a·nach·nu lach, she·a·ta hu A·do·nai E·lo·hei·nu vE·lo·hei a·vo·tei·nu le·o·lam va·ed. Tzur chay·yei_nu, ma·gen yish·e·nu a·ta hu le·dor va·dor. No·deh l·cha u·ne·sa_per t·hi_la·te·cha al chay·yei_nu ha_m·su·rim be·ya·de·cha, ve·al nish·mo·tei_nu ha_p·ku·dot lach, ve·al ni·sei_cha she·be·chol yom i_ma_nu, ve·al nif·le·o_tei_cha ve·to·vo_tei_cha she·be·chol et, e·rev va·vo·ker ve·tzo_ho_ra·yim. Ha·tov ki lo cha·lu ra·cha·mei_cha, ve·ha·m·ra·chem ki lo ta·mu cha·sa·dei_cha, me·o·lam ki_vi·nu lach. Ba·ruch a·ta A·do·nai, ha·tov shim·cha u·l·cha na·eh le·ho·dot.</div>
<div class="stanza"><div class="slabel">19. Шалом</div>Sim sha·lom to·va u_v·ra_cha, chen va·che·sed ve·ra·cha·mim a·lei_nu ve·al kol Yis·ra·el am·me·cha. Ba·r·che·nu a·bi·nu ku_la·nu ke·e_chad be·or pa·nei_cha, ki ve·or pa·nei_cha na·ta·ta la·nu A·do·nai E·lo·hei_nu to·rat chay·yim ve·a_ha_vat che·sed, u·tze_da_ka u_v·ra_cha ve·ra·cha·mim ve·chay·yim ve·sha·lom. Ba·ruch a·ta A·do·nai, ha·m·ba·rech et am·mo Yis·ra·el ba·sha·lom.</div>
</div>`,
    ru: `<div class="ru-sm">
<div class="stanza"><div class="slabel">1. Авот</div>Благословен Ты, Господь, Бог наш и Бог отцов наших, Бог Авраама, Бог Ицхака и Бог Яакова, Бог великий, могучий и грозный, Бог Всевышний, дарующий добрые благодеяния, Владыка всего, помнящий добрые дела отцов и посылающий избавителя сыновьям их сыновей ради Имени Своего, с любовью. Царь, Помощник, Спаситель и Щит! <strong>Благословен Ты, Господь, Щит Авраама.</strong></div>
<div class="stanza"><div class="slabel">2. Гвурот</div>Ты всесилен вовеки, Господь, Ты возвращаешь мертвых к жизни, Ты велик во спасении. Ты заставляешь дуть ветер и проливаться дождь. Ты кормишь живых по милости Своей, великим милосердием возвращаешь мертвых к жизни, поддерживаешь падающих, исцеляешь больных, освобождаешь узников и сохраняешь верность Свою спящим в земле. Кто подобен Тебе, Властелин могущества, и кто сравнится с Тобой, Царь, который умерщвляет, оживляет и взращивает спасение! <strong>Благословен Ты, Господь, возвращающий мертвых к жизни.</strong></div>
<div class="stanza"><div class="slabel">3. Кдуша</div>Ты свят, и Имя Твое свято, и святые каждый день будут восхвалять Тебя вовек. <strong>Благословен Ты, Господь, Бог Святой.</strong></div>
<div class="stanza"><div class="slabel">4. Бина</div>Ты даруешь человеку знание и учишь смертного разуму. Даруй нам от Тебя мудрость, разум и знание. <strong>Благословен Ты, Господь, дарующий знание.</strong></div>
<div class="stanza"><div class="slabel">5. Тшува</div>Обрати нас, Отец наш, к Торе Твоей, и приблизь нас, Царь наш, к служению Тебе, и возврати нас в искреннем раскаянии пред Твое Лицо. <strong>Благословен Ты, Господь, желающий покаяния.</strong></div>
<div class="stanza"><div class="slabel">6. Слиха</div>Прости нас, Отец наш, ибо мы согрешили, помилуй нас, Царь наш, ибо мы преступили законы, ведь Ты Бог прощающий и милующий. <strong>Благословен Ты, Господь, Милосердный, многократно прощающий.</strong></div>
<div class="stanza"><div class="slabel">7. Геула</div>Взгляни на бедствие наше, и заступись в споре нашем, и спаси нас поскорее ради Имени Твоего, ибо Ты могучий Избавитель. <strong>Благословен Ты, Господь, Избавитель Израиля.</strong></div>
<div class="stanza"><div class="slabel">8. Рфуа</div>Исцели нас, Господь, и мы исцелимся; спаси нас, и мы будем спасены, ибо Ты — слава наша. И пошли полное исцеление от всех недугов наших. <strong>Благословен Ты, Господь, исцеляющий больных Своего народа, Израиля.</strong></div>
<div class="stanza"><div class="slabel">9. Хашаним</div>Благослови для нас, Господь, Бог наш, этот год и все виды его урожая во благо, и дай благословение на лицо земли, и насыти нас от Своих благ. <strong>Благословен Ты, Господь, благословляющий годы.</strong></div>
<div class="stanza"><div class="slabel">10. Кибуц Галуйот</div>Затруби в великий шофар на свободу нашу, и подними знамя, чтобы собрать изгнанников наших, и собери нас вместе с четырех концов земли. <strong>Благословен Ты, Господь, собирающий рассеянных Своего народа, Израиля.</strong></div>
<div class="stanza"><div class="slabel">11. Мишпат</div>Верни нам наших судей, как прежде, и наших советников, как вначале, и удали от нас печаль и стон, и царствуй над нами Ты один, Господь, по милости и милосердию, и оправдай нас на суде. <strong>Благословен Ты, Господь, Царь, любящий справедливость и правосудие.</strong></div>
<div class="stanza"><div class="slabel">12. Минин</div>А клеветникам да не будет надежды, и всякое злодеяние пусть мгновенно погибнет, и все враги Твоего народа пусть будут скоро истреблены, а злодеев поскорее искорени, сокруши, низвергни и смири в скором времени, в наши дни. <strong>Благословен Ты, Господь, сокрушающий врагов и смиряющий злодеев.</strong></div>
<div class="stanza"><div class="slabel">13. Цадиким</div>К праведникам, и к благочестивым, и к старейшинам Твоего народа, дома Израиля, и к уцелевшим из их мудрецов, и к истинным прозелитам, и к нам самим да пробудится Твое милосердие, Господь, Бог наш. <strong>Благословен Ты, Господь, опора и оплот для праведников.</strong></div>
<div class="stanza"><div class="slabel">14. Йерушалаим</div>И в Иерусалим, Твой город, вернись по милосердию Своему, и обитай в нем, как Ты обещал, и отстрой его вскоре, в наши дни, как вечное строение, и престол Давида поскорее в нем утверди. <strong>Благословен Ты, Господь, отстраивающий Иерусалим.</strong></div>
<div class="stanza"><div class="slabel">15. Давид</div>Потомку Давида, раба Твоего, дай поскорее взрасти, и пусть возвысится его рог благодаря Твоему спасению, ибо на Твое спасение мы надеемся всякий день. <strong>Благословен Ты, Господь, взращивающий рог спасения.</strong></div>
<div class="stanza"><div class="slabel">16. Шомеа Тфила</div>Услышь наш голос, Господь, Бог наш, пощади и помилуй нас, и прими с милосердием и благосклонностью наши молитвы, ибо Ты Бог, выслушивающий молитвы и мольбы. <strong>Благословен Ты, Господь, внимающий молитве.</strong></div>
<div class="stanza"><div class="slabel">17. Авода</div>Благоволи, Господь, Бог наш, к Своему народу, Израилю, и к их молитве, и восстанови служение в святыне Твоего Дома, и жертвы Израиля и их молитвы с любовью прими благосклонно. <strong>Благословен Ты, Господь, возвращающий Свое Присутствие на Сион.</strong></div>
<div class="stanza"><div class="slabel">18. Модим</div>Благодарим Тебя за то, что Ты — Господь, Бог наш и Бог отцов наших во веки веков. Ты — Оплот нашей жизни, Щит нашего спасения из поколения в поколение. Будем благодарить Тебя и возглашать Тебе хвалу за наши жизни, вверенные Твоей Руке, и за наши души, доверенные Тебе, и за Твои чудеса, которые каждый день с нами, и за Твои знамения и блага во всякое время — вечером, утром и в полдень. Ты — Благой, ибо не иссякли Твои милости, Ты — Милосердный, ибо не прекратились Твои благодеяния, от века мы уповаем на Тебя. <strong>Благословен Ты, Господь, Благое Имя Твое, и Тебя достойно благодарить.</strong></div>
<div class="stanza"><div class="slabel">19. Шалом</div>Даруй мир, благо, благословение, милость, благость и милосердие нам и всему Израилю, Твоему народу. Благослови нас, Отец наш, всех нас как одного, светом Своего Лица, ибо в свете Своего Лица Ты дал нам, Господь, Бог наш, закон жизни и любовь к добродетели, справедливость, благословение, милосердие, жизнь и мир. <strong>Благословен Ты, Господь, благословляющий Свой народ, Израиль, миром.</strong></div>
</div>`,
  },

  {
    id: 'birkat-hamazon',
    titleHe: 'בִּרְכַּת הַמָּזוֹן',
    titleRu: 'Биркат Хамазон — 4 благословения после хлеба',
    time: 'После трапезы',
    cats: ['daily'],
    note: 'После трапезы с хлебом. При 3+ взрослых мужчинах произносится зимун. Первые три благословения — из Торы, четвёртое установлено мудрецами.',
    heb: `
<div class="stanza"><div class="slabel">Зимун (при 3+ мужчинах)</div><div class="heb-md">מְזַמֵּן: <span class="hl">רַבּוֹתַי, נְבָרֵךְ!</span><br>עוֹנִים: <span class="hl">יְהִי שֵׁם יְהוָה מְבֹרָךְ מֵעַתָּה וְעַד-עוֹלָם!</span><br>מְזַמֵּן: בִּרְשׁוּת מָרָנָן וְרַבָּנָן וְרַבּוֹתַי, נְבָרֵךְ (אֱלֹהֵינוּ) שֶׁאָכַלְנוּ מִשֶּׁלּוֹ.<br>עוֹנִים: <span class="hl">בָּרוּךְ (אֱלֹהֵינוּ) שֶׁאָכַלְנוּ מִשֶּׁלּוֹ וּבְטוּבוֹ חָיִינוּ.</span></div></div>
<div class="stanza"><div class="slabel">1. Биркат Хазан — Пропитание</div><div class="heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַזָּן אֶת הָעוֹלָם כֻּלּוֹ בְּטוּבוֹ בְּחֵן בְּחֶסֶד וּבְרַחֲמִים. הוּא נוֹתֵן לֶחֶם לְכָל בָּשָׂר כִּי לְעוֹלָם חַסְדּוֹ. וּבְטוּבוֹ הַגָּדוֹל תָּמיד לֹא חָסַר לָנוּ וְאַל יֶחְסַר לָנוּ מָזוֹן לְעוֹלָם וָעֶד, בַּעֲבוּר שְׁמוֹ הַגָּדוֹל כִּי הוּא אֵל זָן וּמְפַרְנֵס לַכֹּל וּמֵטִיב לַכֹּל וּמֵכִין מָזוֹן לְכָל בְּרִיּוֹתָיו אֲשֶׁר בָּרָא. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַזָּן אֶת הַכֹּל.</span></div></div>`,
    trans: `
<div class="stanza"><div class="slabel">Зимун</div>Me·za·men: <span class="stress">Ra·bo·tai</span> ne·va·rech!<br>O·nim: Ye·hi shem A·do·nai me·vo·rach me·a·ta ve·ad o·lam!<br>Me·za·men: Bi_r·shut ma·ra_nan ve·ra_ba_nan ve·ra·bo·tai ne·va·rech (E·lo·hei·nu) she·a·chal·nu mi·she·lo.<br>O·nim: Ba·ruch (E·lo·hei·nu) she·a·chal·nu mi·she·lo u·ve·tu·vo cha·yi·nu.</div>
<div class="stanza"><div class="slabel">1. Биркат Хазан</div>Ba·ruch a·ta A·do·nai E·lo·hei·nu me·lech ha·o·lam, ha·zan et ha·o·lam ku·lo be·tu·vo be·chen be·che·sed u·ve·ra·cha·mim. Hu no·ten le·chem le·chol ba·sar ki le·o·lam chas·do. U·ve·tu·vo ha·ga·dol ta·mid lo cha·sar la·nu ve·al yech·sar la·nu ma·zon le·o·lam va·ed, ba·a·vur she·mo ha·ga·dol ki hu El zan u·m·far·nes la·kol u·me·tiv la·kol u·me·chin ma·zon le·chol b·ri·yo_tav a·sher ba·ra. Ba·ruch a·ta A·do·nai, ha·zan et ha·kol.</div>`,
    ru: `
<div class="stanza"><div class="slabel">Зимун</div>Ведущий: <strong>Господа, благословим!</strong><br>Все: Да будет имя Господа благословенно отныне и вовек!<br>Ведущий: С разрешения учителей и господ моих, благословим (Бога нашего), от щедрот Которого мы вкушали.<br>Все: <strong>Благословен (Бог наш), от щедрот Которого мы вкушали и по благости Которого живем.</strong></div>
<div class="stanza"><div class="slabel">1. Пропитание</div>Благословен Ты, Господь, Бог наш, Царь Вселенной, питающий весь мир по благости Своей, по милости, любви и состраданию. Он дает хлеб всякой плоти, ибо вечна Его милость. И по великой Его благости у нас никогда не было и не будет недостатка в пище во веки веков ради Имени Его великого, ибо Он — Бог, Который питает и содержит всех, делает добро всем и заботится о пропитании для всех Своих творений, которые Он создал. <strong>Благословен Ты, Господь, питающий всех.</strong></div>`,
  },
];