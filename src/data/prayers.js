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
וִיהִי רָצוֹן מִלְּפָנֶיךָ יְהוָה אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, שֶׁתַּרְגִּילֵנוּ בְּתוֹרָתֶךָ וְדַבְּקֵנוּ בְּמִצְוֹתֶיךָ, וְאַל תְּבִיאֵנוּ לֹא לִידֵי חֵטְא, וְלֹא לִידֵי עֲבֵרָה וְעָוֹן, וְלֹא לִידֵי נִסָּיוֹן, וְלֹא לִידֵי בִזָּיוֹן. וְאַל תַּשְׁלֶט בָּנוּ יֵצֶר הָרָע. וְהַרְחִקֵנוּ מֵאָדָם רָע וּמֵחָבֵר רָע. וְדַבְּקֵנוּ בְּיֵצֶר הַטּוֹב וּבְמַעֲשִׂים טוֹבִים. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַגּוֹמֵל חֲסָדִים טוֹבִים לְעַמּוֹ יִשְׂרָאֵל.</span>
</p>`,
    trans: `<p class="trans-sm">
Ba·ruch... a·sher na·tan la·<span class="stress">sech</span>·vi vi·<span class="stress">na</span> le·hav·<span class="stress">chin</span> bein yom u·vein <span class="stress">lai</span>·la.<br>
...she·<span class="stress">lo</span> a·<span class="stress">sa</span>·ni <span class="stress">goy</span>. <span class="muted">(не создал меня язычником)</span><br>
...she·<span class="stress">lo</span> a·<span class="stress">sa</span>·ni <span class="stress">a</span>·ved. <span class="muted">(не создал меня рабом)</span><br>
...she·<span class="stress">lo</span> a·<span class="stress">sa</span>·ni i·<span class="stress">sha</span>. <span class="muted">(не создал меня женщиной)</span><br>
...po·<span class="stress">ke</span>·ach iv·<span class="stress">rim</span>. <span class="muted">(открывающий слепым)</span><br>
...mal·<span class="stress">bish</span> a·ru·<span class="stress">mim</span>. <span class="muted">(одевающий нагих)</span><br>
...ma·<span class="stress">tir</span> a·su·<span class="stress">rim</span>. <span class="muted">(освобождающий скованных)</span><br>
...zo·<span class="stress">kef</span> ke·fu·<span class="stress">fim</span>. <span class="muted">(поднимающий поникших)</span><br>
...ro·<span class="stress">ka</span> ha·<span class="stress">a</span>·retz al ha·<span class="stress">ma</span>·yim. <span class="muted">(распростёрший землю над водами)</span><br>
...she·a·<span class="stress">sa</span> li kol tzor·<span class="stress">ki</span>. <span class="muted">(снабдивший всем необходимым)</span><br>
...ha·me·<span class="stress">chin</span> mitz·a·<span class="stress">dei</span> <span class="stress">ga</span>·ver. <span class="muted">(направляющий шаги человека)</span><br>
...o·<span class="stress">zer</span> Yis·ra·<span class="stress">el</span> big·vu·<span class="stress">ra</span>. <span class="muted">(опоясывающий Израиль силой)</span><br>
...o·<span class="stress">ter</span> Yis·ra·<span class="stress">el</span> be·tif·a·<span class="stress">ra</span>. <span class="muted">(венчающий Израиль славой)</span><br>
...ha·no·<span class="stress">ten</span> la·ya·<span class="stress">ef</span> <span class="stress">ko</span>·ach. <span class="muted">(дающий силу усталым)</span><br>
...ha·ma·a·<span class="stress">vir</span> she·<span class="stress">na</span> me·ei·<span class="stress">nai</span>... <span class="muted">(прогоняющий сон с моих глаз)</span>
</p>`,
    ru: `<p class="ru-sm">
Благословен... давший петуху разум различать день и ночь.<br>
...за то, что не создал меня язычником.<br>
...за то, что не создал меня рабом.<br>
...за то, что не создал меня женщиной. <span class="muted">(женщины: создавший меня по воле Своей)</span><br>
...открывающий глаза слепым.<br>
...одевающий нагих.<br>
...освобождающий скованных.<br>
...поднимающий поникших.<br>
...распростёрший землю над водами.<br>
...снабдивший меня всем необходимым.<br>
...направляющий шаги человека.<br>
...опоясывающий Израиль силой.<br>
...венчающий Израиль славой.<br>
...дающий силу усталым.<br>
...прогоняющий сон с моих глаз.<br><br>
Да будет воля Твоя приучить нас к Торе и прилепить к заповедям... да не приведи к греху, нарушению, искушению или позору. Удали от злого человека, прилепи к доброму началу... <strong>Благословен Ты, Господь, творящий благодеяния народу Своему Израилю.</strong>
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
    וּקְשַׁרְתָּם לְאוֹת עַל-יָדֶךָ וְהָיוּ לְטֹטָפֹת בֵּין עֵינֶיךָ:<br>
    וּכְתַבְתָּם עַל-מְזֻזוֹת Bֵיתֶךָ וּבִשְׁעָרֶיךָ:
  </div>
</div>
<div class="stanza">
  <div class="slabel">Вэ-хая — Дварим 11:13–21</div>
  <div class="heb-md">
    וְהָיָה אִם-שָׁמֹעַ תִּשְׁמְעוּ אֶל-מִצְוֹתַי אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם הַיּוֹם, לְאַהֲבָה אֶת-יְהוָה אֱלֹהֵיכֶם וּלְעָבְדוֹ בְּכָל-לְבַבְכֶם וּבְכָל-נַפְשְׁכֶם:<br>
    וְנָתַתִּי מְטַר-אַרְצְכֶם בְּעִתּוֹ יוֹרֶה וּמַלְקוֹשׁ, וְאָסַפְתָּ דְגָנֶךָ וְתִירֹשְׁךָ וְיִצְהָרֶךָ:<br>
    וְנָתַתִּי עֵשֶׂב בְּשָׂדְךָ Lִבְהֶמְתֶּךָ, וְאָכַלְתָּ וְשָׂבָעְתָּ:<br>
    הִשָּׁמְרוּ לָכֶם פֶּן-יִפְתֶּה לְבַבְכֶם, וְסַרְתֶּם וַעֲבַדְתֶּם אֱלֹהִים אֲחֵרִים וְהִשְׁתַּחֲוִיתֶם לָהֶם:<br>
    וְחָרָה אַף-יְהוָה Bָכֶם, וְעָצַר אֶת-הַשָּׁמַיִם וְלֹא-יִהְיֶה מָטָר, וְהָאֲדָמָה לֹא תִתֵּן אֶת-יְבוּלָהּ, וַאֲבַדְתֶּם מְהֵרָה מֵעַל הָאָרֶץ הַטֹּבָה אֲשֶׁר יְהוָה נֹתֵן לָכֶם:<br>
    וְשַׂמְתֶּם אֶת-Dְּבָרַי אֵלֶּה עַל-לְבַבְכֶם וְעַל-נַפְשְׁכֶם, וּקְשַׁרְתָּם אֹתָם לְאוֹת עַל-יֶדְכֶם, וְהָיוּ לְטוֹטָפֹת בֵּין עֵינֵיכֶם:<br>
    וְלִמַּדְתֶּם אֹתָם אֶת-Bְּנֵיכֶם לְדַבֵּר Bָם, בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ:<br>
    וּכְתַבְתָּם עַל-מְזוּזוֹת Bֵיתֶךָ וּבִשְׁעָרֶיךָ:<br>
    לְמַעַן יִרְבּוּ יְמֵיכֶם וִימֵי בְנֵיכֶם עַל הָאֲדָמָה אֲשֶׁר נִשְׁבַּע יְהוָה לַאֲבֹתֵיכֶם לָתֵת לָהֶם, כִּימֵי הַשָּׁמַיִם עַל-הָאָרֶץ:
  </div>
</div>
<div class="stanza">
  <div class="slabel">Вайомер — Бамидбар 15:37–41 (Цицит)</div>
  <div class="heb-md">
    וַיֹּאמֶר יְהוָה אֶל-מֹשֶׁה לֵּאמֹר: דַּבֵּר אֶל-בְּנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם,<br>
    וְעָשׂוּ לָהם צִיצִת עַל-כַּנְפֵי בִגְדֵיהֶם לְדֹרֹתָם, וְנָתְנוּ עַל-צִיצִת הַכָּנָף פְּתִיל תְּכֵלֶת:<br>
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
Ve·<span class="stress">ha</span>·yu ha·de·va·<span class="stress">rim</span> ha·<span class="stress">e</span>·leh a·sher a·no·<span class="stress">chi</span> me·tzav·ּve·cha ha·<span class="stress">yom</span> al le·va·<span class="stress">ve</span>·cha.<br>
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
<div class="stanza"><div class="slabel">1. Авот — Отцы</div><div class="heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, אֱלֹהֵי אַבְרָהָם אֱלֹהֵי יִצְחָק וֵאלֹהֵי יַעֲקֹב, הָאֵל הַגָּדוֹל הַגִּבּוֹר וְהַנּוֹרָא, אֵל עֶלְיוֹן, גּוֹמֵל חֲסָדִים טוֹבִים, וְקוֹנֵה הַכֹּל, וְזוֹכֵר חַסְדֵי אָבוֹת, וּמֵבִיא גוֹאֵל לִבְנֵי בְנֵיהֶם לְמַעַן שְׁמוֹ בְּאַהֲבָה. מֶלֶךְ עוֹזֵר וּמוֹשִׁיעַ וּמָגֵן. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מָגֵן אַבְרָהָם.</span></div></div>
<div class="stanza"><div class="slabel">2. Гвурот — Могущество</div><div class="heb-md">אַתָּה גִּבּוֹר לְעוֹלָם אֲדֹנָי, מְחַיֵּה מֵתִים אַתָּה, רַב לְהוֹשִׁיעַ. מַשִּׁיב הָרוּחַ וּמוֹרִיד הַגָּשֶׁם. מְכַלְכֵּל חַיִּים בְּחֶסֶד, מְחַיֵּה מֵתִים בְּרַחֲמִים רַבִּים, סוֹמֵךְ נוֹפְלִים, וְרוֹפֵא חוֹלִים, וּמַתִּיר אֲסוּרִים, וּמְקַיֵּם אֱמוּנָתוֹ לִישֵׁנֵי עָפָר. מִי כָמוֹךָ בַּעַל גְּבוּרוֹת וּמִי דּוֹמֶה לָּךְ, מֶלֶךְ מֵמִית וּמְחַיֶּה וּמַצְמִיחַ יְשׁוּעָה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מְחַיֵּה הַמֵּתִים.</span></div></div>
<div class="stanza"><div class="slabel">3. Кдушат Хашем</div><div class="heb-md">אַתָּה קָדוֹשׁ וְשִׁמְךָ קָדוֹשׁ, וּקְדוֹשִׁים בְּכָל-יוֹם יְהַלְלוּךָ סֶּלָה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הָאֵל הַקָּדוֹשׁ.</span></div></div>
<div class="stanza"><div class="slabel">4. Бина — Мудрость</div><div class="heb-md">אַתָּה חוֹנֵן לְאָדָם דַּעַת, וּמְלַמֵּד לֶאֱנוֹשׁ בִּינָה. חָנֵּנוּ מֵאִתְּךָ דֵּעָה בִּינָה וְהַשְׂכֵּל. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, חוֹנֵן הַדָּעַת.</span></div></div>
<div class="stanza"><div class="slabel">5. Тшува — Покаяние</div><div class="heb-md">הֲשִׁיבֵנוּ אָבִינוּ לְתוֹרָתֶךָ, וְקָרְבֵנוּ מַלְכֵּנוּ לַעֲבוֹדָתֶךָ, וְהַחֲזִירֵנוּ בִּתְשׁוּבָה שְׁלֵמָה לְפָנֶיךָ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הָרוֹצֶה בִּתְשׁוּבָה.</span></div></div>
<div class="stanza"><div class="slabel">6. Слиха — Прощение</div><div class="heb-md">סְלַח לָנוּ אָבִינוּ כִּי חָטָאנוּ, מְחַל לָנוּ מַלְכֵּנוּ כִּי פָשָׁעְנוּ, כִּי מוֹחֵל וְסוֹלֵחַ אָתָּה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, חַנּוּן הַמַּרְבֶּה לִסְלֹחַ.</span></div></div>
<div class="stanza"><div class="slabel">7. Геула — Избавление</div><div class="heb-md">רְאֵה בְעָנְיֵנוּ וְרִיבָה רִיבֵנוּ, וּגְאָלֵנוּ מְהֵרָה לְמַעַן שְׁמֶךָ, כִּי גּוֹאֵל חָזָק אָתָּה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, גּוֹאֵל יִשְׂרָאֵל.</span></div></div>
<div class="stanza"><div class="slabel">8. Рфуа — Исцеление</div><div class="heb-md">רְפָאֵנוּ יְהוָה וְנֵרָפֵא, הוֹשִׁיעֵנוּ וְנִוָּשֵׁעָה, כִּי תְהִלָּתֵנוּ אָתָּה, וְהַעֲלֵה רְפוּאָה שְׁלֵמָה לְכָל-מַכּוֹתֵינוּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, רוֹפֵא חוֹלֵי עַמּוֹ יִשְׂרָאֵל.</span></div></div>
<div class="stanza"><div class="slabel">9. Биркат Хашаним — Пропитание</div><div class="heb-md">בָּרֵךְ עָלֵינוּ יְהוָה אֱלֹהֵינוּ אֶת-הַשָּׁנָה הַזֹּאת וְאֶת-כָּל-מִינֵי תְבוּאָתָהּ לְטוֹבָה, וְתֵן בְּרָכָה עַל פְּנֵי הָאֲדָמָה, וְשַׂבְּעֵנוּ מִטּוּבָהּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מְבָרֵךְ הַשָּׁנִים.</span></div></div>
<div class="stanza"><div class="slabel">10. Кибуц Галуйот — Собирание</div><div class="heb-md">תְּקַע בְּשׁוֹפָר גָּדוֹל לְחֵרוּתֵנוּ, וְשָׂא נֵס לְקַבֵּץ גָּלֻיּוֹתֵינוּ, וְקַבְּצֵנוּ יַחַד מֵאַרְבַּע כַּנְפוֹת הָאָרֶץ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מְקַבֵּץ נִדְחֵי עַמּוֹ יִשְׂרָאֵל.</span></div></div>
<div class="stanza"><div class="slabel">11. Биркат Хамишпат — Правосудие</div><div class="heb-md">הָשִׁיבָה שׁוֹפְטֵינוּ כְּבָרִאשׁוֹנָה וְיוֹעֲצֵינוּ כְּבַתְּחִלָּה, וְהָסֵר מִמֶּנּוּ יָגוֹן וַאֲנָחָה, וּמְלוֹךְ עָלֵינוּ אַתָּה יְהוָה לְבַדְּךָ בְּחֶסֶד וּבְרַחֲמִים, וְצַדְּקֵנוּ בַּמִּשְׁפָּט. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מֶלֶךְ אוֹהֵב צְדָקָה וּמִשְׁפָּט.</span></div></div>
<div class="stanza"><div class="slabel">12. Биркат Хаминим — Против злодеев</div><div class="heb-md">וְלַמַּלְשִׁינִים אַל-תְּהִי תִקְוָה, וְכָל-הָרִשְׁעָה כְּרֶגַע תֹּאבֵד, וְכָל-אוֹיְבֵי עַמְּךָ מְהֵרָה יִכָּרֵתוּ, וְהַזֵּדִים מְהֵרָה תְעַקֵּר וּתְשַׁבֵּר וּתְמַגֵּר וְתַכְנִיעַ בִּמְהֵרָה בְיָמֵינוּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, שׁוֹבֵר אוֹיְבִים וּמַכְנִיעַ זֵדִים.</span></div></div>
<div class="stanza"><div class="slabel">13. Аль Хацадиким — Праведники</div><div class="heb-md">עַל-הַצַּדִּיקִים וְעַל-הַחֲסִידִים וְעַל-זִקְנֵי עַמְּךָ בֵּית יִשְׂרָאֵל, וְעַל-פְּלֵיטַת סוֹפְרֵיהֶם, וְעַל-גֵּרֵי הַצֶּדֶק וְעָלֵינוּ, יֶהֱמוּ נָא רַחֲמֶיךָ יְהוָה אֱלֹהֵינוּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מִשְׁעָן וּמִבְטָח לַצַּדִּיקִים.</span></div></div>
<div class="stanza"><div class="slabel">14. Биньян Йерушалаим</div><div class="heb-md">וְלִירוּשָׁלַיִם עִירְךָ בְּרַחֲמִים תָּשׁוּב, וְתִשְׁכּוֹן בְּתוֹכָהּ כַּאֲשֶׁר דִּבַּרְתָּ, וּבְנֵה אוֹתָהּ בְּקָרוֹב בְּיָמֵינוּ בִּנְיַן עוֹלָם, וְכִסֵּא דָוִד מְהֵרָה לְתוֹכָהּ תָּכִין. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, בּוֹנֵה יְרוּשָׁלָיִם.</span></div></div>
<div class="stanza"><div class="slabel">15. Царах Давид — Мессия</div><div class="heb-md">אֶת-צֶמַח דָּוִד עַבְדְּךָ מְהֵרָה תַצְמִיחַ, וְקַרְנוֹ תָּרוּם בִּישׁוּעָתֶךָ, כִּי לִישׁוּעָתְךָ קִוִּינוּ כָּל-הַיּוֹם. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מַצְמִיחַ קֶרֶן יְשׁוּעָה.</span></div></div>
<div class="stanza"><div class="slabel">16. Шомеа Тфила — Услышь молитву</div><div class="heb-md">שְׁמַע קוֹלֵנוּ יְהוָה אֱלֹהֵינוּ, חוּס וְרַחֵם עָלֵינוּ, וְקַבֵּל בְּרַחֲמִים וּבְרָצוֹן אֶת-תְּפִלָּתֵנוּ, כִּי אֵל שׁוֹמֵעַ תְּפִלּוֹת וְתַחֲנוּנִים אָתָּה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, שׁוֹמֵעַ תְּפִלָּה.</span></div></div>
<div class="stanza"><div class="slabel">17. Авода — Богослужение</div><div class="heb-md">רְצֵה יְהוָה אֱלֹהֵינוּ בְּעַמְּךָ יִשְׂרָאֵל וּבִתְפִלָּתָם, וְהָשֵׁב אֶת-הָעֲבוֹדָה לִדְבִיר בֵּיתֶךָ, וְאִשֵּׁי יִשְׂרָאֵל וּתְפִלָּתָם בְּאַהֲבָה תְקַבֵּל בְּרָצוֹן. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַמַּחֲזִיר שְׁכִינָתוֹ לְצִיּוֹן.</span></div></div>
<div class="stanza"><div class="slabel">18. Модим — Благодарность</div><div class="heb-md"><span class="hl">מוֹדִים אֲנַחְנוּ לָךְ</span>, שָׁאַתָּה הוּא יְהוָה אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ לְעוֹלָם וָעֶד. צוּר חַיֵּינוּ מָגֵן יִשְׁעֵנוּ אַתָּה הוּא לְדוֹר וָדוֹר. נוֹדֶה לְּךָ וּנְסַפֵּר תְּהִלָּתֶךָ עַל חַיֵּינוּ הַמְּסוּרִים בְּיָדֶךָ, וְעַל נִשְׁמוֹתֵינוּ הַפְּקוּדוֹת לָךְ, וְעַל נִסֶּיךָ שֶׁבְּכָל-יוֹם עִמָּנוּ, וְעַל נִפְלְאוֹתֶיךָ וְטוֹבוֹתֶיךָ שֶׁבְּכָל-עֵת, עֶרֶב וָבֹקֶר וְצָהֳרָיִם. הַטּוֹב כִּי לֹא-כָלוּ רַחֲמֶיךָ, וְהַמְרַחֵם כִּי לֹא-תַמּוּ חֲסָדֶיךָ מֵעוֹלָם קִוִּינוּ לָךְ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַטּוֹב שִׁמְךָ וּלְךָ נָאֶה לְהוֹדוֹת.</span></div></div>
<div class="stanza"><div class="slabel">19. Шалом — Мир</div><div class="heb-md">שִׂים שָׁלוֹם טוֹבָה וּבְרָכָה, חֵן וָחֶסֶד וְרַחֲמִים עָלֵינוּ וְעַל כָּל-יִשְׂרָאֵל עַמֶּךָ. בָּרְכֵנוּ אָבִינוּ כֻּלָּנוּ כְּאֶחָד בְּאוֹר פָּנֶיךָ, כִּי בְאוֹר פָּנֶיךָ נָתַתָּ לָנוּ יְהוָה אֱלֹהֵינוּ תּוֹרַת חַיִּים וְאַהֲבַת חֶסֶד, וּצְדָקָה וּבְרָכָה וְרַחֲמִים וְחַיִּים וְשָׁלוֹם. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַמְבָרֵךְ אֶת-עַמּוֹ יִשְׂרָאֵל בַּשָּׁלוֹם.</span></div></div>`,
    trans: `<div class="trans-sm italic">
<div class="stanza"><div class="slabel">1. Авот</div>Ba·<span class="stress">ruch</span>... E·lo·<span class="stress">hei</span> Av·ra·<span class="stress">ham</span>... <span class="stress">me</span>·lech o·<span class="stress">zer</span> u·mo·<span class="stress">shi</span>·a u·ma·<span class="stress">gen</span>. Ba·<span class="stress">ruch</span>... ma·<span class="stress">gen</span> Av·ra·<span class="stress">ham</span>.</div>
<div class="stanza"><div class="slabel">2. Гвурот</div>A·<span class="stress">ta</span> gi·<span class="stress">bor</span> le·o·<span class="stress">lam</span>... me·cha·<span class="stress">ye</span> me·<span class="stress">tim</span>... Ba·<span class="stress">ruch</span>... me·cha·<span class="stress">ye</span> ha·me·<span class="stress">tim</span>.</div>
<div class="stanza"><div class="slabel">3–19</div>Полные транскрипции: <span class="stress">A·ta</span> ka·<span class="stress">dosh</span>... / A·<span class="stress">ta</span> cho·<span class="stress">nen</span>... / Ha·shi·<span class="stress">ve</span>·nu... / Se·<span class="stress">lach</span> la·<span class="stress">nu</span>... / Re·<span class="stress">e</span> ve·on·<span class="stress">ye</span>·nu... / Re·fa·<span class="stress">e</span>·nu... / Ba·<span class="stress">rech</span> a·<span class="stress">le</span>·nu... / Te·<span class="stress">ka</span>... / Ha·shi·<span class="stress">va</span>... / Ve·la·mal·shi·<span class="stress">nim</span>... / Al ha·tza·di·<span class="stress">kim</span>... / Ve·li·ru·sha·<span class="stress">la</span>·yim... / Et <span class="stress">tze</span>·mach Da·<span class="stress">vid</span>... / She·<span class="stress">ma</span> ko·<span class="stress">le</span>·nu... / Ret·<span class="stress">ze</span>... / Mo·<span class="stress">dim</span> a·<span class="stress">nach</span>·nu... / <span class="stress">Sim</span> sha·<span class="stress">lom</span>...</div>
</div>`,
    ru: `<div class="ru-sm">
<div class="stanza"><div class="slabel">1. Авот</div>Благословен Ты... Бог Авраама, Ицхака и Яакова... Царь-помощник, Спаситель и Щит. <strong>Благословен Ты — Щит Авраама.</strong></div>
<div class="stanza"><div class="slabel">2. Гвурот</div>Ты могуч вовеки... воскрешающий мёртвых, поддерживающий падших, исцеляющий больных, освобождающий скованных. <strong>Благословен Ты... воскрешающий мёртвых.</strong></div>
<div class="stanza"><div class="slabel">3. Кдуша</div>Ты свят и имя Твоё свято. <strong>Благословен Ты — Бог Святой.</strong></div>
<div class="stanza"><div class="slabel">4. Бина</div>Ты даруешь человеку знание и учишь разуму. <strong>Благословен Ты — дарующий знание.</strong></div>
<div class="stanza"><div class="slabel">5. Тшува</div>Возврати нас к Торе Твоей... <strong>Благословен Ты — желающий покаяния.</strong></div>
<div class="stanza"><div class="slabel">6. Слиха</div>Прости нас, Отец наш, ибо мы согрешили. <strong>Благословен Ты — великий в прощении.</strong></div>
<div class="stanza"><div class="slabel">7. Геула</div>Взгляни на страдание наше... <strong>Благословен Ты — Избавитель Израиля.</strong></div>
<div class="stanza"><div class="slabel">8. Рфуа</div>Исцели нас, Господи, и будем исцелены. <strong>Благословен Ты — исцеляющий больных народа Своего Израиля.</strong></div>
<div class="stanza"><div class="slabel">9. Хашаним</div>Благослови нам этот год и все плоды его. <strong>Благословен Ты — благословляющий годы.</strong></div>
<div class="stanza"><div class="slabel">10. Кибуц Галуйот</div>Затруби в великий шофар к нашей свободе... <strong>Благословен Ты — собирающий рассеянных Израиля.</strong></div>
<div class="stanza"><div class="slabel">11. Мишпат</div>Восстанови наших судей... <strong>Благословен Ты — Царь, любящий правду.</strong></div>
<div class="stanza"><div class="slabel">12. Минин</div>Доносчикам да не будет надежды... <strong>Благословен Ты — сокрушающий врагов.</strong></div>
<div class="stanza"><div class="slabel">13. Цадиким</div>На праведников... да снизойдёт Твоё милосердие. <strong>Благословен Ты — опора праведников.</strong></div>
<div class="stanza"><div class="slabel">14. Йерушалаим</div>В Иерусалим вернись с милосердием... <strong>Благословен Ты — строящий Иерусалим.</strong></div>
<div class="stanza"><div class="slabel">15. Давид</div>Побег Давида скоро взрасти... <strong>Благословен Ты — произращающий рог спасения.</strong></div>
<div class="stanza"><div class="slabel">16. Шомеа Тфила</div>Услышь голос наш... <strong>Благословен Ты — слышащий молитву.</strong></div>
<div class="stanza"><div class="slabel">17. Авода</div>Благоволи к народу Твоему... <strong>Благословен Ты — возвращающий Присутствие Своё на Цион.</strong></div>
<div class="stanza"><div class="slabel">18. Модим</div>Благодарим Тебя за жизни наши, вверенные в Твои руки... за чудеса каждый день. <strong>Благословен Ты — Тебе подобает благодарность.</strong></div>
<div class="stanza"><div class="slabel">19. Шалом</div>Даруй мир, добро и благословение, милость и сострадание нам и всему Израилю. <strong>Благословен Ты — благословляющий Израиль миром.</strong></div>
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
<div class="stanza"><div class="slabel">1-е — Хазан эт хакол</div><div class="heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַזָּן אֶת-הָעוֹלָם כֻּלּוֹ בְּטוּבוֹ, בְּחֵן בְּחֶסֶד וּבְרַחֲמִים, הוּא נוֹתֵן לֶחֶם לְכָל-בָּשָׂר כִּי לְעוֹלָם חַסְדּוֹ. וּבְטוּבוֹ הַגָּדוֹל תָּמִיד לֹא-חָסַר לָנוּ, וְאַל-יֶחְסַר לָנוּ מָזוֹן לְעוֹלָם וָעֶד. בַּעֲבוּר שְׁמוֹ הַגָּדוֹל, כִּי הוּא אֵל זָן וּמְפַרְנֵס לַכֹּל וּמֵטִיב לַכֹּל, וּמֵכִין מָזוֹן לְכָל-בְּרִיּוֹתָיו אֲשֶׁר בָּרָא. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַזָּן אֶת-הַכֹּל.</span></div></div>
<div class="stanza"><div class="slabel">2-е — Нодэ лэха (на Землю Израиля)</div><div class="heb-md">נוֹדֶה לְּךָ יְהוָה אֱלֹהֵינוּ עַל שֶׁהִנְחַלְתָּ לַאֲבוֹתֵינוּ אֶרֶץ חֶמְדָּה טוֹבָה וּרְחָבָה, בְּרִית וְתוֹרָה, חַיִּים וּמָזוֹן. וְעַל שֶׁהוֹצֵאתָנוּ יְהוָה אֱלֹהֵינוּ מֵאֶרֶץ מִצְרַיִם, וּפְדִיתָנוּ מִבֵּית עֲבָדִים, וְעַל בְּרִיתְךָ שֶׁחָתַמְתָּ בִּבְשָׂרֵנוּ, וְעַל תּוֹרָתְךָ שֶׁלִּמַּדְתָּנוּ, וְעַל חֻקֶּיךָ שֶׁהוֹדַעְתָּנוּ, וְעַל חַיִּים חֵן וָחֶסֶד שֶׁחוֹנַנְתָּנוּ, וְעַל אֲכִילַת מָזוֹן שָׁאַתָּה זָן וּמְפַרְנֵס אוֹתָנוּ תָּמִיד, בְּכָל-יוֹם וּבְכָל-עֵת וּבְכָל-שָׁעָה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, עַל הָאָרֶץ וְעַל הַמָּזוֹן.</span></div></div>
<div class="stanza"><div class="slabel">3-е — Рахем (на Иерусалим)</div><div class="heb-md">רַחֵם נָא יְהוָה אֱלֹהֵינוּ עַל יִשְׂרָאֵל עַמֶּךָ, וְעַל יְרוּשָׁלַיִם עִירֶךָ, וְעַל צִיּוֹן מִשְׁכַּן כְּבוֹדֶךָ, וְעַל מַלְכוּת בֵּית דָּוִד מְשִׁיחֶךָ, וְעַל הַבַּיִת הַגָּדוֹל וְהַקָּדוֹשׁ שֶׁנִּקְרָא שִׁמְךָ עָלָיו. אֱלֹהֵינוּ, אָבִינוּ, רְעֵנוּ, זוּנֵנוּ, פַּרְנְסֵנוּ וְכַלְכְּלֵנוּ וְהַרְוִיחֵנוּ, וְנָא אַל-תַּצְרִיכֵנוּ יְהוָה אֱלֹהֵינוּ לֹא לִידֵי מַתְּנַת בָּשָׂר וָדָם וְלֹא לִידֵי הַלְוָאָתָם, כִּי אִם לְיָדְךָ הַמְּלֵאָה הַפְּתוּחָה הַקְּדוֹשָׁה וְהָרְחָבָה, שֶׁלֹּא נֵבוֹשׁ וְלֹא נִכָּלֵם לְעוֹלָם וָעֶד. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, בּוֹנֵה בְרַחֲמָיו יְרוּשָׁלָיִם, אָמֵן.</span></div></div>
<div class="stanza"><div class="slabel">4-е — Хатов вэ-амэтив</div><div class="heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הָאֵל אָבִינוּ מַלְכֵּנוּ אַדִּירֵנוּ בּוֹרְאֵנוּ גֹּאֲלֵנוּ יוֹצְרֵנוּ קְדוֹשֵׁנוּ קְדוֹשׁ יַעֲקֹב, רוֹעֵנוּ רוֹעֵה יִשְׂרָאֵל, הַמֶּלֶךְ הַטּוֹב וְהַמֵּטִיב לַכֹּל, שֶׁבְּכָל-יוֹם וָיוֹם הוּא הֵטִיב, הוּא מֵטִיב, הוּא יֵיטִיב לָנוּ, הוּא גְמָלָנוּ, הוּא גוֹמְלֵנוּ, הוּא יִגְמְלֵנוּ לָעַד לְחֵן וּלְחֶסֶד וּלְרַחֲמִים וּלְרֶוַח הַצָּלָה וְהַצְלָחָה בְּרָכָה וִישׁוּעָה נֶחָמָה פַּרְנָסָה וְכַלְכָּלָה וְרַחֲמִים וְחַיִּים וְשָׁלוֹם וְכָל-טוֹב, וּמִכָּל-טוּב לְעוֹלָם אַל-יְחַסְּרֵנוּ. <span class="hl">הָרַחֲמָן הוּא יִמְלוֹךְ עָלֵינוּ לְעוֹלָם וָעֶד.</span></div></div>
<div class="stanza"><div class="slabel">Харахаман — заключительные просьбы</div><div class="heb-md">הָרַחֲמָן הוּא יְבָרֵךְ אֶת-כָּל-הַמְּסֻבִּין כָּאן.<br>הָרַחֲמָן הוּא יְבָרֵךְ אוֹתִי (וְאֶת-אִשְׁתִּי וְאֶת-זַרְעִי).<br>הָרַחֲמָן הוּא יִשְׁלַח לָנוּ בְּרָכָה מְרֻבָּה בַּבַּיִת הַזֶּה.<br>הָרַחֲמָן הוּא יְבָרֵךְ אֶת-מְדִינַת יִשְׂרָאֵל.<br>הָרַחֲמָן הוּא יְזַכֵּנוּ לִימוֹת הַמָּשִׁיחַ וּלְחַיֵּי הָעוֹלָם הַבָּא.<br><br>עֹשֶׂה שָׁלוֹם בִּמְרוֹמָיו, הוּא יַעֲשֶׂה שָׁלוֹם עָלֵינוּ וְעַל-כָּל-יִשְׂרָאֵל, וְאִמְרוּ: <span class="hl">אָמֵן.</span></div></div>`,
    trans: `<div class="trans-sm italic">
<div class="stanza"><div class="slabel">Зимун</div>Ra·bo·<span class="stress">tai</span> ne·va·<span class="stress">rech</span>! — Ye·hi <span class="stress">shem</span>... me·vo·<span class="stress">rach</span>...<br>Ba·<span class="stress">ruch</span>... she·a·<span class="stress">chal</span>·nu mi·shel·<span class="stress">lo</span> u·ve·tu·<span class="stress">vo</span> cha·<span class="stress">yi</span>·nu.</div>
<div class="stanza"><div class="slabel">1-е</div>Ba·<span class="stress">ruch</span>... ha·<span class="stress">zan</span> et ha·o·<span class="stress">lam</span> ku·<span class="stress">lo</span> be·tu·<span class="stress">vo</span>... Ba·<span class="stress">ruch</span>... ha·<span class="stress">zan</span> et ha·<span class="stress">kol</span>.</div>
<div class="stanza"><div class="slabel">2-е</div>No·<span class="stress">de</span> le·cha... al she·hin·<span class="stress">chal</span>·ta la·a·vo·<span class="stress">tei</span>·nu <span class="stress">e</span>·retz chem·<span class="stress">da</span>... Ba·<span class="stress">ruch</span>... al ha·<span class="stress">a</span>·retz ve·al ha·ma·<span class="stress">zon</span>.</div>
<div class="stanza"><div class="slabel">3-е</div>Ra·<span class="stress">chem</span> na... al Yis·ra·<span class="stress">el</span>... ve·al Ye·ru·sha·<span class="stress">la</span>·yim... Ba·<span class="stress">ruch</span>... bo·<span class="stress">ne</span> be·ra·cha·<span class="stress">mav</span> Ye·ru·sha·<span class="stress">la</span>·yim, a·<span class="stress">men</span>.</div>
<div class="stanza"><div class="slabel">4-е</div>Ba·<span class="stress">ruch</span>... ha·<span class="stress">El</span> a·<span class="stress">vi</span>·nu... ha·<span class="stress">me</span>·lech ha·<span class="stress">tov</span> ve·ha·mei·<span class="stress">tiv</span> la·<span class="stress">kol</span>... Ha·ra·cha·<span class="stress">man</span> hu yim·<span class="stress">loch</span> a·<span class="stress">le</span>·nu le·o·<span class="stress">lam</span> va·<span class="stress">ed</span>.</div>
<div class="stanza"><div class="slabel">Харахаман</div>O·<span class="stress">se</span> sha·<span class="stress">lom</span> bim·ro·<span class="stress">mav</span>, hu ya·a·<span class="stress">se</span> sha·<span class="stress">lom</span> a·<span class="stress">le</span>·nu ve·al kol Yis·ra·<span class="stress">el</span>. A·<span class="stress">men</span>.</div>
</div>`,
    ru: `<div class="ru-sm">
<div class="stanza"><div class="slabel">Зимун</div>Господа! Благословим! — Да будет имя Господне благословенно!<br>Благословен (Бог наш), из чьего мы ели и чьей добротой живём.</div>
<div class="stanza"><div class="slabel">1-е</div>Благословен Ты... питающий весь мир в доброте Своей... Он даёт хлеб всякой плоти, ибо вечна Его любовь. <strong>Благословен Ты — питающий всё.</strong></div>
<div class="stanza"><div class="slabel">2-е</div>Благодарим Тебя за землю желанную, добрую... за Исход из Египта, за Тору, за жизнь, добро и милость. <strong>Благословен Ты — за Землю и за пропитание.</strong></div>
<div class="stanza"><div class="slabel">3-е</div>Сжалься над Израилем, над Иерусалимом... и да не заставишь нас зависеть от даров людских, но лишь от Твоей руки — полной, открытой и щедрой. <strong>Благословен Ты — строящий Иерусалим. Амен.</strong></div>
<div class="stanza"><div class="slabel">4-е</div>Благословен Ты... Царь благой и творящий добро всем каждый день — даруя милость, любовь, сострадание, благословение, избавление, жизнь и мир. <strong>Милосердный да воцарится над нами вовеки!</strong></div>
<div class="stanza"><div class="slabel">Харахаман</div>Милосердный да благословит всех сотрапезников... да удостоит нас дней Мессии.<br>Творящий мир в высотах Своих — да сотворит Он мир для нас и для всего Израиля. Аминь.</div>
</div>`,
  },

  {
    id: 'kiddush-leil',
    titleHe: 'קִדּוּשׁ לֵיל שַׁבָּת',
    titleRu: 'Кидуш — освящение Шаббата (пятница вечером)',
    time: 'Шаббат, вечер',
    cats: ['shabbat'],
    note: 'В пятницу вечером перед трапезой. Произносится стоя, над бокалом вина или виноградного сока. После «сабри мараньян» все поднимают бокалы.',
    heb: `
<div class="stanza"><div class="slabel">Ваехулу — Берешит 1:31–2:3</div><div class="heb-md">וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם הַשִּׁשִּׁי. וַיְכֻלּוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל-צְבָאָם. וַיְכַל אֱלֹהִים בַּיּוֹם הַשְּׁבִיעִי מְלַאכְתּוֹ אֲשֶׁר עָשָׂה, וַיִּשְׁבֹּת בַּיּוֹם הַשְּׁבִיעִי מִכָּל-מְלַאכְתּוֹ אֲשֶׁר עָשָׂה. וַיְבָרֶךְ אֱלֹהִים אֶת-יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ, כִּי בוֹ שָׁבַת מִכָּל-מְלַאכְתּוֹ אֲשֶׁר-בָּרָא אֱלֹהִים לַעֲשׂוֹת.</div></div>
<div class="stanza"><div class="slabel">Над вином</div><div class="p-center heb-md">סַבְרִי מָרָנָן!<br><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">בּוֹרֵא פְּרִי הַגָּפֶן.</span></div></div>
<div class="stanza"><div class="slabel">Кидуш на Шаббат</div><div class="heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְרָצָה בָנוּ, וְשַׁבַּת קָדְשׁוֹ בְּאַהֲבָה וּבְרָצוֹן הִנְחִילָנוּ, זִכָּרוֹן לְמַעֲשֵׂה בְרֵאשִׁית. כִּי הוּא יוֹם תְּחִלָּה לְמִקְרָאֵי קֹדֶשׁ, זֵכֶר לִיצִיאַת מִצְרָיִם. כִּי-בָנוּ בָחַרְתָּ וְאוֹתָנוּ קִדַּשְׁתָּ מִכָּל-הָעַמִּים, וְשַׁבַּת קָדְשְׁךָ בְּאַהֲבָה וּבְרָצוֹן הִנְחַלְתָּנוּ. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, מְקַדֵּשׁ הַשַּׁבָּת.</span></div></div>`,
    trans: `<div class="trans-sm italic">
<div class="stanza"><div class="slabel">Ваехулу</div>Va·ye·<span class="stress">hi</span> e·<span class="stress">rev</span>... yom ha·shi·<span class="stress">shi</span>. Va·ye·chul·<span class="stress">lu</span> ha·sha·<span class="stress">ma</span>·yim ve·ha·a·<span class="stress">retz</span>... Va·ye·<span class="stress">chal</span> E·lo·<span class="stress">him</span>... va·yish·<span class="stress">bot</span>... Va·ye·va·<span class="stress">rech</span> E·lo·<span class="stress">him</span> et yom ha·she·vi·<span class="stress">i</span> va·ye·ka·<span class="stress">desh</span> o·<span class="stress">to</span>...</div>
<div class="stanza"><div class="slabel">Над вином</div><div class="p-center">Sav·<span class="stress">ri</span> ma·ra·<span class="stress">nan</span>!<br>Ba·<span class="stress">ruch</span>... bo·<span class="stress">re</span> pe·<span class="stress">ri</span> ha·<span class="stress">ga</span>·fen.</div></div>
<div class="stanza"><div class="slabel">Кидуш</div>Ba·<span class="stress">ruch</span>... a·<span class="stress">sher</span> ki·de·<span class="stress">sha</span>·nu be·mitz·vo·<span class="stress">tav</span> ve·ra·<span class="stress">tza</span> va·<span class="stress">nu</span>, ve·sha·<span class="stress">bat</span> kod·<span class="stress">sho</span> be·a·ha·<span class="stress">va</span> u·ve·ra·<span class="stress">tzon</span> hin·chi·<span class="stress">la</span>·nu, zi·ka·<span class="stress">ron</span> le·ma·a·<span class="stress">se</span> ve·re·<span class="stress">shit</span>. Ki hu yom te·chi·<span class="stress">la</span>... <span class="stress">ze</span>·cher li·tzi·<span class="stress">at</span> Mitz·<span class="stress">ra</span>·yim. Ki·<span class="stress">va</span>·nu va·<span class="stress">char</span>·ta... Ba·<span class="stress">ruch</span>... me·ka·<span class="stress">desh</span> ha·sha·<span class="stress">bat</span>.</div>
</div>`,
    ru: `<div class="ru-sm">
<div class="stanza"><div class="slabel">Ваехулу</div>И был вечер, и было утро — день шестой. И завершены были небо и земля и всё воинство их. И завершил Бог в день седьмой работу Свою и почил... И благословил Бог день седьмой, и освятил его.</div>
<div class="stanza"><div class="slabel">Над вином</div>Сабри мараньян! (Прошу вашего внимания!)<br><strong>Благословен Ты... создающий плод виноградной лозы.</strong></div>
<div class="stanza"><div class="slabel">Кидуш</div>Благословен Ты... освятивший нас Своими заповедями. Свой святой Шаббат в любви и благоволении дал нам в наследие — в память о Творении. Ибо это первый из священных праздников — память об Исходе из Египта. Ибо нас Ты избрал и освятил среди всех народов. <strong>Благословен Ты — освящающий Шаббат.</strong></div>
</div>`,
  },

  {
    id: 'havdalah',
    titleHe: 'הַבְדָּלָה',
    titleRu: 'Хавдала — завершение Шаббата',
    time: 'Суббота, ночь',
    cats: ['shabbat'],
    note: 'В субботу ночью, после появления трёх звёзд. Четыре благословения: вино → благовония → огонь → разделение. Свечу тушат в пролитом вине.',
    heb: `
<div class="stanza"><div class="slabel">Вступление</div><div class="heb-md"><span class="hl">הִנֵּה אֵל יְשׁוּעָתִי</span>, אֶבְטַח וְלֹא אֶפְחָד, כִּי-עָזִּי וְזִמְרָת יָהּ יְהוָה, וַיְהִי-לִי לִישׁוּעָה. וּשְׁאַבְתֶּם-מַיִם בְּשָׂשׂוֹן, מִמַּעַיְנֵי הַיְשׁוּעָה. לַיהוָה הַיְשׁוּעָה. יְהוָה צְבָאוֹת עִמָּנוּ, מִשְׂגָּב-לָנוּ אֱלֹהֵי יַעֲקֹב סֶּלָה. <span class="hl">לַיְּהוּדִים הָיְתָה אוֹרָה וְשִׂמְחָה וְשָׂשֹׂן וִיקָר, כֵּן תִּהְיֶה-לָּנוּ. כּוֹס-יְשׁוּעוֹת אֶשָּׂא, וּבְשֵׁם יְהוָה אֶקְרָא.</span></div></div>
<div class="stanza"><div class="slabel">1. Над вином</div><div class="p-center heb-md">סַבְרִי מָרָנָן!<br><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">בּוֹרֵא פְּרִי הַגָּפֶן.</span></div></div>
<div class="stanza"><div class="slabel">2. Над благовониями (בְּשָׂמִים)</div><div class="p-center heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">בּוֹרֵא מִינֵי בְשָׂמִים.</span></div></div>
<div class="stanza"><div class="slabel">3. Над огнём (смотреть на ногти)</div><div class="p-center heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">בּוֹרֵא מְאוֹרֵי הָאֵשׁ.</span></div></div>
<div class="stanza"><div class="slabel">4. Хавдала — разделение</div><div class="heb-md"><span class="hl">בָּרוּךְ אַתָּה יְהוָה</span> אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, <span class="hl">הַמַּבְדִּיל בֵּין קֹדֶשׁ לְחֹל,</span> בֵּין אוֹר לְחֹשֶׁךְ, בֵּין יִשְׂרָאֵל לָעַמִּים, בֵּין יוֹם הַשְּׁבִיעִי לְשֵׁשֶׁת יְמֵי הַמַּעֲשֶׂה. <span class="hl">בָּרוּךְ אַתָּה יְהוָה, הַמַּבְדִּיל בֵּין קֹדֶשׁ לְחֹל.</span></div></div>
<div class="stanza"><div class="slabel">Элияху ха-Нави (поют)</div><div class="heb-md">אֵלִיָּהוּ הַנָּבִיא, אֵלִיָּהוּ הַתִּשְׁבִּי,<br>אֵלִיָּהוּ, אֵלִיָּהוּ, אֵלִיָּהוּ הַגִּלְעָדִי.<br>בִּמְהֵרָה בְיָמֵינוּ יָבֹא אֵלֵינוּ,<br>עִם מָשִׁיחַ בֶּן דָּוִד, עִם מָשִׁיחַ בֶּן דָּוִד.</div></div>`,
    trans: `<div class="trans-sm italic">
<div class="stanza"><div class="slabel">Вступление</div>Hi·<span class="stress">ne</span> El ye·shu·a·<span class="stress">ti</span>, ev·<span class="stress">tach</span>... La·ye·hu·<span class="stress">dim</span> ha·ye·<span class="stress">ta</span> o·<span class="stress">ra</span> ve·sim·<span class="stress">cha</span> ve·sa·<span class="stress">son</span> vi·<span class="stress">kar</span>, <span class="stress">ken</span> tih·ye·<span class="stress">la</span>·nu.</div>
<div class="stanza"><div class="slabel">1. Вино</div><div class="p-center">Sav·<span class="stress">ri</span> ma·ra·<span class="stress">nan</span>!<br>Ba·<span class="stress">ruch</span>... bo·<span class="stress">re</span> pe·<span class="stress">ri</span> ha·<span class="stress">ga</span>·fen.</div></div>
<div class="stanza"><div class="slabel">2. Благовония</div><div class="p-center">Ba·<span class="stress">ruch</span>... bo·<span class="stress">re</span> mi·<span class="stress">nei</span> ve·sa·<span class="stress">mim</span>.</div></div>
<div class="stanza"><div class="slabel">3. Огонь</div><div class="p-center">Ba·<span class="stress">ruch</span>... bo·<span class="stress">re</span> me·o·<span class="stress">rei</span> ha·<span class="stress">esh</span>.</div></div>
<div class="stanza"><div class="slabel">4. Хавдала</div>Ba·<span class="stress">ruch</span>... ha·mav·<span class="stress">dil</span> <span class="stress">bein</span> <span class="stress">ko</span>·desh le·<span class="stress">chol</span>, <span class="stress">bein</span> or le·<span class="stress">cho</span>·shech, <span class="stress">bein</span> Yis·ra·<span class="stress">el</span> la·a·<span class="stress">mim</span>, <span class="stress">bein</span> yom ha·she·vi·<span class="stress">i</span> le·she·<span class="stress">shet</span> ye·<span class="stress">mei</span> ha·ma·a·<span class="stress">se</span>. Ba·<span class="stress">ruch</span>... ha·mav·<span class="stress">dil</span> <span class="stress">bein</span> <span class="stress">ko</span>·desh le·<span class="stress">chol</span>.</div>
<div class="stanza"><div class="slabel">Элияху</div>E·li·<span class="stress">ya</span>·hu ha·na·<span class="stress">vi</span>, E·li·<span class="stress">ya</span>·hu ha·tish·<span class="stress">bi</span>,<br>bim·he·<span class="stress">ra</span> ve·ya·<span class="stress">me</span>·nu ya·<span class="stress">vo</span> e·<span class="stress">le</span>·nu,<br>im ma·<span class="stress">shi</span>·ach ben Da·<span class="stress">vid</span>.</div>
</div>`,
    ru: `<div class="ru-sm">
<div class="stanza"><div class="slabel">Вступление</div>Вот Бог — спасение моё, буду уповать и не убоюсь... Евреям было — свет и радость, и веселье, и почёт, — так да будет и нам! Чашу спасения подниму и именем Господним воззову.</div>
<div class="stanza"><div class="slabel">1. Над вином</div><strong>Благословен Ты... создающий плод виноградной лозы.</strong></div>
<div class="stanza"><div class="slabel">2. Над благовониями</div><strong>Благословен Ты... создающий различные виды благовоний.</strong></div>
<div class="stanza"><div class="slabel">3. Над огнём</div><strong>Благословен Ты... создающий огни пламени.</strong></div>
<div class="stanza"><div class="slabel">4. Хавдала</div>Благословен Ты... <strong>разделяющий священное и будничное</strong>, свет и тьму, Израиль и народы, день седьмой и шесть будних дней. <strong>Благословен Ты — разделяющий священное и будничное.</strong></div>
<div class="stanza"><div class="slabel">Элияху</div>Элияху-пророк, Элияху Тишби, Элияху Гиладский.<br>Скоро, при нас, пусть придёт к нам — вместе с Мессией, сыном Давида.</div>
</div>`,
  },

  {
    id: 'ashrei',
    titleHe: 'אַשְׁרֵי — תְּהִלִּים קמ״ה',
    titleRu: 'Ашрей — Псалом 145 (полностью)',
    time: 'Утро / День',
    cats: ['shacharit', 'mincha', 'daily'],
    note: 'Трижды в день — дважды в Шахарите и один раз в Минхе. Псалом составлен по алфавитному акростиху. При стихе «פּוֹתֵחַ» принято сосредоточиться особо.',
    heb: `<div class="heb-md" style="line-height:2.1">
<span class="hl">אַשְׁרֵי יוֹשְׁבֵי בֵיתֶךָ</span> עוֹד יְהַלְלוּךָ סֶּלָה.<br>
אַשְׁרֵי הָעָם שֶׁכָּכָה לּוֹ, <span class="hl">אַשְׁרֵי הָעָם שֶׁיְּהוָה אֱלֹהָיו.</span><br><br>
תְּהִלָּה לְדָוִד.<br>
<span class="hl">א</span> — אֲרוֹמִמְךָ אֱלוֹהַי הַמֶּלֶךְ, וַאֲבָרְכָה שִׁמְךָ לְעוֹלָם וָעֶד.<br>
<span class="hl">ב</span> — בְּכָל-יוֹם אֲבָרְכֶךָּ, וַאֲהַלְלָה שִׁמְךָ לְעוֹלָם וָעֶד.<br>
<span class="hl">ג</span> — גָּדוֹל יְהוָה וּמְהֻלָּל מְאֹד, וְלִגְדֻלָּתוֹ אֵין חֵקֶר.<br>
<span class="hl">ד</span> — דּוֹר לְדוֹר יְשַׁבַּח מַעֲשֶׂיךָ, וּגְבוּרֹתֶיךָ יַגִּידוּ.<br>
<span class="hl">ה</span> — הֲדַר כְּבוֹד הוֹדֶךָ, וְדִבְרֵי נִפְלְאוֹתֶיךָ אָשִׂיחָה.<br>
<span class="hl">ו</span> — וֶעֱזוּז נוֹרְאֹתֶיךָ יֹאמֵרוּ, וּגְדֻלָּתְךָ אֲסַפְּרֶנָּה.<br>
<span class="hl">ז</span> — זֵכֶר רַב-טוּבְךָ יַבִּיעוּ, וְצִדְקָתְךָ יְרַנֵּנוּ.<br>
<span class="hl">ח</span> — חַנּוּן וְרַחוּם יְהוָה, אֶרֶךְ אַפַּיִם וּגְדָל-חָסֶד.<br>
<span class="hl">ט</span> — טוֹב-יְהוָה לַכֹּל, וְרַחֲמָיו עַל-כָּל-מַעֲשָׂיו.<br>
<span class="hl">י</span> — יוֹדוּךָ יְהוָה כָּל-מַעֲשֶׂיךָ, וַחֲסִידֶיךָ יְבָרְכוּכָה.<br>
<span class="hl">כ</span> — כְּבוֹד מַלְכוּתְךָ יֹאמֵרוּ, וּגְבוּרָתְךָ יְדַבֵּרוּ.<br>
<span class="hl">ל</span> — לְהוֹדִיעַ לִבְנֵי הָאָדָם גְּבוּרֹתָיו, וּכְבוֹד הֲדַר מַלְכוּתוֹ.<br>
<span class="hl">מ</span> — מַלְכוּתְךָ מַלְכוּת כָּל-עֹלָמִים, וּמֶמְשַׁלְתְּךָ בְּכָל-דּוֹר וָדוֹר.<br>
<span class="hl">נ</span> — סוֹמֵךְ יְהוָה לְכָל-הַנֹּפְלִים, וְזוֹקֵף לְכָל-הַכְּפוּפִים.<br>
<span class="hl">ע</span> — עֵינֵי כֹל אֵלֶיךָ יְשַׂבֵּרוּ, וְאַתָּה נוֹתֵן-לָהֶם אֶת-אָכְלָם בְּעִתּוֹ.<br>
<span class="hl">פ</span> — <span class="hl">פּוֹתֵחַ אֶת-יָדֶךָ, וּמַשְׂבִּיעַ לְכָל-חַי רָצוֹן.</span><br>
<span class="hl">צ</span> — צַדִּיק יְהוָה בְּכָל-דְּרָכָיו, וְחָסִיד בְּכָל-מַעֲשָׂיו.<br>
<span class="hl">ק</span> — קָרוֹב יְהוָה לְכָל-קֹרְאָיו, לְכֹל אֲשֶׁר יִקְרָאֻהוּ בֶאֱמֶת.<br>
<span class="hl">ר</span> — רְצוֹן-יְרֵאָיו יַעֲשֶׂה, וְאֶת-שַׁוְעָתָם יִשְׁמַע וְיוֹשִׁיעֵם.<br>
<span class="hl">ש</span> — שׁוֹמֵר יְהוָה אֶת-כָּל-אֹהֲבָיו, וְאֵת כָּל-הָרְשָׁעִים יַשְׁמִיד.<br>
<span class="hl">ת</span> — תְּהִלַּת יְהוָה יְדַבֶּר-פִּי, וִיבָרֵךְ כָּל-בָּשָׂר שֵׁם קָדְשׁוֹ לְעוֹלָם וָעֶד.<br>
<span class="hl">וַאֲנַחְנוּ נְבָרֵךְ יָהּ מֵעַתָּה וְעַד-עוֹלָם, הַלְלוּיָהּ.</span>
</div>`,
    trans: `<div class="trans-sm italic" style="line-height:2.0">
<span class="stress">Ash</span>·rei yosh·<span class="stress">vei</span> vei·te·<span class="stress">cha</span>... <span class="stress">Ash</span>·rei ha·<span class="stress">am</span> she·A·do·<span class="stress">nai</span> E·lo·<span class="stress">hav</span>.<br><br>
Te·hi·<span class="stress">la</span> le·Da·<span class="stress">vid</span>.<br>
A — A·ro·<span class="stress">mim</span>·cha E·lo·<span class="stress">hai</span> ha·<span class="stress">me</span>·lech...<br>
B — Be·chol <span class="stress">yom</span> a·var·<span class="stress">ke</span>·cha...<br>
G — Ga·<span class="stress">dol</span> A·do·<span class="stress">nai</span> um·hu·<span class="stress">lal</span> me·<span class="stress">od</span>...<br>
D — Dor le·<span class="stress">dor</span> ye·sha·<span class="stress">bach</span> ma·a·se·<span class="stress">cha</span>...<br>
H — Ha·dar ke·<span class="stress">vod</span> ho·<span class="stress">de</span>·cha...<br>
V — Ve·e·<span class="stress">zuz</span> nor·o·te·<span class="stress">cha</span>...<br>
Z — Ze·<span class="stress">cher</span> rav tuv·<span class="stress">cha</span> ya·<span class="stress">bi</span>·u...<br>
CH — Chan·<span class="stress">nun</span> ve·ra·<span class="stress">chum</span> A·do·<span class="stress">nai</span>...<br>
T — Tov A·do·<span class="stress">nai</span> la·<span class="stress">kol</span>...<br>
Y — Yo·du·<span class="stress">cha</span> A·do·<span class="stress">nai</span> kol ma·a·se·<span class="stress">cha</span>...<br>
K — Ke·<span class="stress">vod</span> mal·chu·te·<span class="stress">cha</span> yo·<span class="stress">me</span>·ru...<br>
L — Le·ho·<span class="stress">di</span>·a liv·nei ha·a·<span class="stress">dam</span>...<br>
M — Mal·chu·te·<span class="stress">cha</span> mal·<span class="stress">chut</span> kol o·la·<span class="stress">mim</span>...<br>
N/S — So·<span class="stress">mech</span> A·do·<span class="stress">nai</span> le·chol ha·nof·<span class="stress">lim</span>...<br>
A — Ei·nei <span class="stress">chol</span> e·le·<span class="stress">cha</span> ye·sab·<span class="stress">be</span>·ru...<br>
P — <span class="stress">Po</span>·te·ach et ya·<span class="stress">de</span>·cha, u·mas·<span class="stress">bi</span>·a le·chol <span class="stress">chai</span> ra·<span class="stress">tzon</span>.<br>
TZ — Tza·<span class="stress">dik</span> A·do·<span class="stress">nai</span> be·chol de·ra·<span class="stress">chav</span>...<br>
K — Ka·<span class="stress">rov</span> A·do·<span class="stress">nai</span> le·chol ko·re·<span class="stress">av</span>...<br>
R — Re·<span class="stress">tzon</span> ye·re·<span class="stress">av</span> ya·a·<span class="stress">se</span>...<br>
SH — Sho·<span class="stress">mer</span> A·do·<span class="stress">nai</span> et kol o·ha·<span class="stress">vav</span>...<br>
T — Te·hi·<span class="stress">lat</span> A·do·<span class="stress">nai</span> ye·da·<span class="stress">ber</span> pi...<br>
Va·a·<span class="stress">nach</span>·nu ne·va·<span class="stress">rech</span> Yah me·a·<span class="stress">ta</span> ve·ad o·<span class="stress">lam</span>, Hal·le·lu·<span class="stress">yah</span>.
</div>`,
    ru: `<div class="ru-sm" style="line-height:2.0">
<strong>Счастливы пребывающие в доме Твоём...</strong> Счастлив народ, чей Бог — Господь.<br><br>
Хвала Давида (алфавитный акростих):<br>
А — Возвеличу Тебя, Боже мой, Царь, и буду благословлять имя Твоё вечно.<br>
Б — Каждый день буду я благословлять Тебя...<br>
Г — Велик Господь и весьма хвалим, и величию Его нет предела.<br>
Д — Поколение поколению будет хвалить дела Твои...<br>
Х — Великолепие славы Твоей...<br>
В — И страшную мощь Твою будут говорить...<br>
З — Память о великой доброте Твоей возгласят...<br>
Х — <strong>Милостив и сострадателен Господь, долготерпелив и велик в любви.</strong><br>
Т — Благ Господь ко всем, и милосердие Его — на всех созданиях Его.<br>
Й — Благодарить будут Тебя, Господи, все создания Твои...<br>
К — Славу царства Твоего будут говорить...<br>
Л — Чтобы поведать сынам человеческим о могуществе Его...<br>
М — <strong>Царство Твоё — царство всех миров, и владычество Твоё — в каждом поколении.</strong><br>
Н/С — Поддерживает Господь всех падающих и поднимает всех согнутых.<br>
А — Очи всех к Тебе обращены, и Ты даёшь им пищу в своё время.<br>
П — <strong>Ты открываешь руку Твою и насыщаешь всё живое по воле.</strong><br>
Ц — Праведен Господь во всех путях Своих...<br>
К — Близок Господь ко всем взывающим к Нему в истине.<br>
Р — Желание боящихся Его Он исполняет...<br>
Ш — Хранит Господь всех любящих Его...<br>
Т — Хвалу Господу будут говорить уста мои...<br>
<strong>А мы будем благословлять Господа отныне и вовек. Аллилуйя.</strong>
</div>`,
  },
];
