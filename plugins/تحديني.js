let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 سؤال 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 بوت السلطان 」─*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /اتحداك/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.bucin = [ 
 "4هاشيرا و 3قاده من بلاك كلوفر", 
 "خمسة من طاقم اللحية البيضاء", 
 "جيب صوره ل رينغوكو", 
 "4 يونكو قدماء", 
 "جيب الايموجي ذا ⛽", 
 "ارسل خلفية هاتفك", 
 "جيب صوت ل ايزن", 
 "هات 5 هاشيرا",  
 "جيب 3 فواكه شيطان لوغيا",  
 "ارسل صورة ل اكازا", 
 "ارسل الايموجي ذا 🦫",   
 "5 شخصيات بحرف س",  
 "7 شخصيات بحرف ا",  
 "4 اشرار من انميات مختلقة",  
 "5 بطل قصة انمي",  
 "3 انميات اسمها يبدأ بحرف ب", 
  "جيب صورة ل تاتسومي من انمي اكامي غا كيل", 
  "اذكر 4 قدرات لميدوريا",  
 "جيب الايموجي ذا 🪶",  
 "5 شخصيات بحرف ش", 
  "جيب صورة ل هانجي", 
  "5 انواع عمالقة مع اسم كل مستخدم", 
  "4 شعرهم احمر", 
  "4 شعرهم ازرق",  
  "4 شعرهم اخضر", 
  "4 شعرهم وردي", 
  "4 شعرهم اسود",  
 "5 من فيلق الاستطلاع",
 "جيب الايموجي ذا 🧃",  
 "4 شخصيات بحرف ك", 
  "جيب صورة ل لويد", 
  "3 شخصيات تنتهي أسماؤهم بحرف ن", 
  "جيب صورتين ل توشيرو", 
  "جيب صورة فيها ميدوريا و باغوكو",  
  "4 من الهوكاجي", 
  "3 من القادة", 
  "جيب الايموجي ذا 🧉",  
 "4 شعرهم اشقر",  
 "4 شخصيات تبدأ بحرف و",  
 "3 انميات رياضية", 
  "اكتب 5 من طاقم لوفي بشكل معكوس", 
  "اخر رسالة ارسلتها في القروب ، قول لصاحب الرسالة للي فوقها انه غبي", 
  "جيب صورة ل تن تن", 
  "جيب الايموجي ذا 🎟️",  
  "4 يستخدمون سيف من انميات مختلفة", 
  
 "ارسل اخر 9 ايموجيز استخدمتهم (السطر الاول كامل)", 
  
 "جيب صورة ل ياماموتو", 
  
 "جيب الايموجي ذا 💠", 
  
 "اخر رسالة ارسلتها في القروب , قول لصاحب الرسالة للي فوقها انك تحبه", 
  
 "جيب اسم بنتين من انمي بلو لوك", 
  
 "جيب صورة ل ايشيدا من بليتش", 
  
 "هات اسماء 3 مؤلفين انمي", 
  
 "4 مستخدمين سحر", 
  
 "جيب الايموجي ذا 🩼", 
  
 "اخر رسالة ارسلتها في القروب قول لصاحب الرسالة للي فوقها انه معطوب", 
  
 "جيب صورة ل هاشيراما", 
  
 "3 شخصيات تبدأ بحرف ف", 
  
 "3 شخصيات تبدأ بحرف د", 
  
 "شخصية تنتهي بحرف خ", 
  
 "جيب صورة لجميع الهاشيرا", 
  
 "جيب الايموجي ذا 🗜️", 
  
 "اخر رسالة ارسلتها في القروب قول لصاحب الرساله للي فوقها انك تكرهه", 
  
 "جيب صورة ل لوفي بتحول سنيك مان", 
  
 "جيب صورة ل غوكو بتحولاته : سوبر سايان 1 و 2 و 3 و الاحمر والازرق (بصورة وحده)", 
  
 "جيب صورة ل اوراراكا", 
  
 "جيب صورة ل دايجين", 
  
 "3 شخصيات تبدأ بحرف ت", 
  
 "3 شخصيات تبدأ بحرف م", 
  
 "شخصيتان تنتهي بحرف ج", 
  
 "جيب شخصيتان فيها الاحرف التالية : (ا ه ن)", 
  
 "جيب صورة ل اول مايت النحيل",  
  
 "جيب الايموجي ذا 🔌", 
  
 "جيب الايموجي ذا🪡", 
  
 "جيب الايموجي ذا 🥢", 
  
 "اخر رسالة ارسلتها في القروب قول لصاحب الرسالة للي فوقها انه نشبة", 
  
 "جيب الايموجي ذا 🪤", 
  
 "جيب صوره ل اكاينو", 
  
 "3 شخصيات قصيرة", 
  
 "3 شخصيات تبدأ بحرف ي", 
  
 "جيب 6 شخصيات اسماءهم مؤلفة من حرفين فقط ،مثال : ال", 
  
 "جيب 3 اسماء فيها حرف ث", 
  
 "3 شخصيات تبدأ بحرف ر", 
  
 "3 شخصيات تبدأ بحرف ز", 
  
 "جيب صورة ل جين من انمي دكتور ستون", 
  
 "اذكر 3 انميات فيها اسم شخصية جين", 
  
 "هات 4 اسماء فواكه شيطان", 
  
 "جيب الايموجي ذا 〰️", 
  
 "جيب الايموجي ذا 💮", 
  
 "ما هي الشخصية التي يمثلها الايموجي 🍡", 
  
 "ما هي الشخصية التي يمثلها الايموجي 🏴‍☠️", 
  
 "ما هي الشخصيه التي يمثلها الايموجي 🔋☀️", 
  
 "3 شخصيات تبدأ بحرف ل", 
  
 "3 شخصيات تبدأ بحرف ب", 
  
 "جيب صورة ل ناغاتو", 
  
 "اخر رساله ارسلتها في الجروب قول لصاحب الرساله اللي فوقها انه ما يفهم", 
  
 "جيب الايموجي ذا 🇿🇲", 
  
 "هات اسماء 4 شخصيات تتألف من 3 احرف ", 
  
 "جيب صورة ل مادارا", 
  
 "ارسل ملصق لشخصية كيد",  

   "ارسل ملصق لشخصية اوسوب", 
  
 "شخصية تنتهي بحرف و", 
  
 "شخصية تنتهي بحرف ت", 
  
"شخصية تنتهي بحرف ي",
  
 "شخصية تنتهي بحرف س", 
  
 "3 من كونان", 
  
 "جيب الايموجي ذا 🇾🇹", 
   
 "شخصية تبدأ بحرف ع", 
  
 "شخصيتين بنات تكونان بطلتي القصة", 
  
 "4 من اكادمية بطلي", 

"3 شخصيات بحرف ه", 

"جيب صورة ل غوهان", 
  
 "جيب صورة ل غيو", 
  
 " جيب صورة ل تامايو", 
  
 "جيب صورة ل تاما", 
  
 "جيب صورة ل كورو سينسي",  
  
 "جيب صورة ل ايسديث", 
  
 "جيب اسماء شخصيات من حروف التالية (كانجو)", 
  
 "جيب الايموجي ذا 🍢", 
  
 "جيب الايموجي ذا 🦯", 
  
 "جيب صورة ل كيسكي", 
  
 "جيب صورة ل زينو من دراغون بول", 
  
 "جيب صورة ل فادوس", 
  
 "جيب صورة ل كيرا ", 
  
 "جيب صورة ل ساحة المارين فورد", 
  
 "جيب صورة ل سفينة قبعة القش", 
  
 "شخصية تنهتي بحرف د", 
  
 "جيب صورة ل ايزاوا", 
  
 "جيب صورة ل ناتسو", 
  
 "جيب صورة ل كاكاشي", 
  
 "4 شخصيات شعرهم ابيض", 
  
 "2 شخصيات عيونهم ازرق", 
  
 "شخصيتين ليس لديهم شعر", 
  
 "3 شخصيات لديهم ندبة على وجههم", 
  
 "3 فواكه باراميسيا", 
  
 "3 انواع للهاكي", 
  
 "جيب الايموجي ذا ⛩️", 
  
 "جيب صورة ل سموكر ", 
  
 "جيب صورة ل شوتو", 
  
 "ارسل اخر سطر ايموجيز من للي استخدمتهم (صورهم)", 
  
 "3 شخصيات قوتهم النار", 
  
 "من الشخصية التي يمثلها الايموجي 🔥❄️",  
  
 "من الشخصية التي يمثلها الايموجي 👊👨‍🦲", 
  
 "من الشخصية التي يمثلها الايموجي 🖋️📔", 
  
 "من الشخصية التي يمثلها الايموجي🍎📔🖋️", 
  
 "من الشخصية التي يمثلها الايموجي 🌦️👧🚢", 
  
 "جيب الايموجي ذا 🏪", 
  
 "جيب صورة ل كروكودايل", 
  
 "جيب صورة ل كايدو", 
  
 "جيب صورة ل فيفي", 
  
 "ارسل ملصق لشخصية لوفي", 
  
 "جيب صوت ل لوفي", 
  
 "جيب صوت ل باري تيوب", 
  
 "جيب صوت ل زورو", 
  
 "جيب صورة ل روبين", 
  
 "جيب الايموجي ذا 🕕", 
  
 "جيب الايموجي ذا ▫️", 
  
 "شخصيتين فيهما حرفي (م ن)", 
  
 "3 شخصيات انمي غبية", 
  
 "جيب صورة ل تيتش", 
 "جيب الايموجي ذا 🤿", 
  
 "ارسل اعلام البلدان التالية : (سوريا-مصر-العراق)", 
  
 "ارسل اعلام البلدان التالية : (السودان-فليبين-الهند)", 
  
 "ارسل اعلام البلدان التالية : (الصين-موريتانيا-المغرب)", 
  
 "ارسل اعلام البلدان التالية : (السويد-فرنسا-النرويج)", 
  
 "ارسل اعلام البلدان التالية : (بريطانيا-البرتغال-اسبانيا)", 
  
 "ارسل اعلام البلدان التالية : (كندا-المكسيك-البرازيل)", 
  
 "ارسل اعلام البلدان التالية : (ليبيا-روسيا-الجزائر)", 
  
 "ارسل اعلام البلدان التالية : (فلسطين-الكويت-سويسرا)", 
  
 "ارسل اعلام البلدان التالية : (فنلندا-بولندا-تايوان)", 
  
 "ارسل اعلام البلدان التالية : (تركيا-اليونان-ايطاليا)", 
  
 "ارسل ايموجي عن برج ايفل", 
  
 "جيب الايموجي ذا 🪃", 
  
 "جيب صورة ل هانكوك ", 

 "جيب صورة ل شينوبو", 
   
 ] 
