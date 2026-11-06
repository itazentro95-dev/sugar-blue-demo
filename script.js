/* Sugar Blue : i18n + depth engine
   FR is the default render (works with JS off). EN dictionary mirrors every key. */
(function(){
"use strict";
var KEY = "sugarblue-lang";

var FR = {
"meta.title":"Sugar Blue, café de spécialité & brunch à Nantes",
"top.addr":"4 rue de l’Arche Sèche, Nantes",
"top.hours":"Du lundi au vendredi, 9h30-16h30",
"nav.sig":"Signatures","nav.carte":"La carte","nav.brunch":"Le brunch","nav.lieu":"Le lieu","nav.visite":"Visite",
"hero.eyebrow":"Café de spécialité à Nantes, depuis 2014",
"hero.title":"All you need is good coffee & fresh food.",
"hero.sub":"C’est la devise de la maison, et elle la tient : cafés d’origine torréfiés en Bretagne, cuisine maison qui change chaque semaine, et un brunch de saison le premier dimanche du mois, rue de l’Arche Sèche, à deux pas de la place Royale.",
"hero.call":"Appeler le café","hero.menu":"Découvrir la carte",
"hero.reviews":"plus de 630 avis Google",
"hero.imgalt":"Latte au sésame noir dans une tasse en céramique, devant un mur bleu ardoise",
"hero.caption":"Le latte au sésame noir, la signature de la maison.",
"hero.chalk":"celui dont tout le monde parle ↗",
"chip.kicker":"Un dimanche par mois",
"chip.title":"Le brunch du premier dimanche",
"chip.text":"De saison, composé avec les produits du moment. Date annoncée sur Instagram.",
"chip.link":"Suivre @sugarbluecafe",
"day1.time":"Le matin · dès 9h30","day1.title":"Commencer doucement",
"day1.text":"Espresso ou filtre du moment, brioche encore tiède, scones au mascarpone et à la confiture.",
"day2.time":"Le déjeuner · la semaine","day2.title":"La carte de la semaine",
"day2.text":"Une carte courte, faite maison, qui change chaque semaine : quiches, wraps, salades, soupe du jour.",
"day3.time":"Le goûter · jusqu’à 16h30","day3.title":"La pause de l’après-midi",
"day3.text":"Cakes maison, chocolat chaud épicé, et le calme de la pièce pour lire ou travailler un moment.",

"sig.title":"Trois choses que les habitués commandent les yeux fermés.",
"sig1.alt":"Latte au sésame noir, spirale grise sur mousse crème",
"sig1.tag":"La signature","sig1.title":"Latte au sésame noir",
"sig1.text":"La boisson dont les avis parlent en premier : sésame noir, lait soyeux, une douceur légèrement fumée, et cette spirale grise qu’on photographie avant de boire.",
"sig2.alt":"Œufs turcs : œufs pochés sur yaourt, beurre au piment, pain grillé",
"sig2.tag":"Le plat du matin","sig2.title":"Œufs turcs",
"sig2.text":"Œufs pochés sur yaourt à l’ail, beurre au piment, pain grillé pour saucer. Les avis Google les disent « top class » : la maison n’a rien à ajouter.",
"sig3.alt":"Gâteau aux carottes sous cloche et Tigré au caramel, au comptoir",
"sig3.tag":"Côté douceurs","sig3.title":"Le Tigré & le carrot cake",
"sig3.text":"Le Tigré au cœur fondant de caramel, que les habitués signalent comme un détour obligé, et le gâteau aux carottes, là depuis les débuts.",

"carte.title":"Pas de carte figée : une cuisine de semaine.",
"carte.lede":"Le déjeuner se compose chaque semaine selon les produits et la saison. Voici ce qui revient, le plus souvent, au comptoir et sur l’ardoise.",
"carte.g1":"Côté café",
"carte.i1":"Espresso & café filtre, origines qui tournent","carte.i1n":"Brésil, Éthiopie, Costa Rica, Colombie, selon les arrivages",
"carte.i2":"Latte au sésame noir","carte.i2n":"la signature",
"carte.i3":"Latte au matcha","carte.i4":"Latte à la pistache","carte.i5":"Chocolat chaud épicé",
"carte.i6":"Iced latte, smoothies & jus frais",
"carte.g2":"Le déjeuner, la semaine",
"carte.j1":"Quiche du moment & salade","carte.j2":"Wraps & club sandwich","carte.j3":"Samosas & quesadillas",
"carte.j4":"Salades de saison","carte.j4n":"dont la salade de quinoa",
"carte.j5":"Soupe du jour & houmous","carte.j6":"Grilled cheese","carte.j7":"Œufs turcs · avocat & œuf",
"carte.g3":"Les douceurs",
"carte.k1":"Gâteau aux carottes","carte.k2":"Le Tigré, cœur fondant de caramel","carte.k3":"Cinnamon roll",
"carte.k4":"Scones, mascarpone & confiture","carte.k5":"Brioche",
"carte.k6":"Cakes sans gluten & sans lactose","carte.k6n":"selon les jours",
"carte.note":"Les prix sont affichés au comptoir : la carte change trop souvent pour être figée ici. Allergie ou régime particulier ? Dites-le à l’équipe : la cuisine s’adapte quand elle peut.",
"brunch.alt":"Table de brunch : pancakes, toasts Bénédicte à l’avocat, granola, jus d’orange",

"brunch.title":"Le brunch du premier dimanche.",
"brunch.text":"Le reste du mois, le week-end, la maison se repose. Mais le premier dimanche, Sugar Blue ouvre pour un brunch de saison : produits frais et locaux, assiettes généreuses (pancakes, toasts Bénédicte & avocat, granola, smoothies), composées selon le moment de l’année.",
"brunch.note":"La date et les horaires sont annoncés sur Instagram. Pensez à appeler : les places partent vite.",
"brunch.ig":"Suivre @sugarbluecafe","brunch.call":"Appeler",
"coffee.alt":"Café filtre versé lentement à la bouilloire col de cygne, sacs de grains en toile de jute",
"coffee.chalk":"fraîchement torréfié",

"coffee.title":"Un café de spécialité, torréfié en Bretagne.",
"coffee.text":"Depuis l’ouverture, les grains viennent de chez Caffè Cataldi, torréfacteur breton : deux origines en espresso, une troisième en filtre, moulues à la commande. La presse spécialisée s’en était fait l’écho dès 2014 ; la maison, elle, continue simplement de les servir.",
"coffee.note":"Selon les arrivages : demandez l’origine du jour au comptoir.",

"lieu.title":"Une longue pièce douce, rue piétonne.",
"lieu.lede":"Bois, pierre, couleurs chaudes et meubles chinés : la salle s’étire le long de la rue de l’Arche Sèche, entre l’ardoise du jour et les tabourets habillés de sacs de café recyclés.",
"lieu.p1":"Tabourets en sacs de café recyclés","lieu.p2":"Un coin jeux pour les petits",
"lieu.p3":"On y parle aussi anglais","lieu.p4":"Accès fauteuil possible",
"gal1.alt":"La salle : pierre bleue, chaises chinées, tabourets en toile de jute, comptoir au fond",
"gal1.cap":"La salle, entre pierre et bois chiné",
"gal2.alt":"Table de brunch partagée, lumière du matin",
"gal2.cap":"Le premier dimanche, la table se remplit",
"gal3.alt":"Filtre versé à la bouilloire, vapeur, sacs de grains",
"gal3.cap":"Le filtre, versé lentement",
"gal4.alt":"Œufs turcs sur yaourt, beurre au piment",
"gal4.cap":"Les œufs turcs, beurre au piment",
"gal.hint":"Faites défiler →",

"voices.title":"Les habitués racontent mieux que nous.",
"voices.src":"avis Google",
"voices.score":"633 avis Google, et un titre de n°1 des cafés de Loire-Atlantique sur Wanderlog.",
"visite.title":"Passer nous voir",
"visite.access":"Rue piétonne, à deux pas de la place Royale, la Tour Bretagne marque l’autre bout de la rue.",
"visite.call":"Appeler","visite.dir":"Itinéraire",
"hours.title":"Horaires","hours.week":"Du lundi au vendredi","hours.sat":"Samedi","hours.closed":"Fermé",
"hours.sun":"Dimanche","hours.sunv":"Fermé, sauf le brunch du premier dimanche du mois",
"hours.note":"Horaires selon la fiche Google du café. Un autre annuaire public affiche 9h00-17h00 : en cas de doute, un appel ou le compte Instagram confirme.",
"foot.note":"Site de démonstration non officiel, réalisé à titre de concept. Photographies d’ambiance générées ; informations issues de sources publiques (fiche Google, presse spécialisée), à confirmer par la maison.",
"bar.call":"Appeler","bar.carte":"La carte","bar.dir":"Itinéraire"
};

var EN = {
"meta.title":"Sugar Blue, specialty coffee & brunch in Nantes",
"top.addr":"4 Rue de l’Arche Sèche, Nantes",
"top.hours":"Monday to Friday, 9:30am-4:30pm",
"nav.sig":"Signatures","nav.carte":"The menu","nav.brunch":"The brunch","nav.lieu":"The room","nav.visite":"Visit",
"hero.eyebrow":"Specialty coffee · central Nantes · since 2014",
"hero.title":"All you need is good coffee & fresh food.",
"hero.sub":"It is the house motto, and the house keeps it: single-origin coffees roasted in Brittany, homemade food that changes every week, and a seasonal brunch on the first Sunday of the month, on Rue de l’Arche Sèche, a stone’s throw from Place Royale.",
"hero.call":"Call the café","hero.menu":"Explore the menu",
"hero.reviews":"over 630 Google reviews",
"hero.imgalt":"Black sesame latte in a ceramic cup, against a slate-blue wall",
"hero.caption":"The black sesame latte, the house signature.",
"hero.chalk":"the one everyone talks about ↗",
"chip.kicker":"One Sunday a month",
"chip.title":"First-Sunday brunch",
"chip.text":"Seasonal, built on whatever is freshest. The date is announced on Instagram.",
"chip.link":"Follow @sugarbluecafe",
"day1.time":"Morning · from 9:30am","day1.title":"Start slowly",
"day1.text":"Espresso or the filter of the moment, still-warm brioche, scones with mascarpone and jam.",
"day2.time":"Lunch · weekdays","day2.title":"The week’s menu",
"day2.text":"A short homemade menu that changes every week: quiches, wraps, salads, soup of the day.",
"day3.time":"Afternoon · until 4:30pm","day3.title":"The afternoon pause",
"day3.text":"Homemade cakes, spiced hot chocolate, and the calm of the room to read or work a while.",

"sig.title":"Three things regulars order without thinking.",
"sig1.alt":"Black sesame latte, grey swirl on cream foam",
"sig1.tag":"The signature","sig1.title":"Black sesame latte",
"sig1.text":"The drink reviews mention first: black sesame, silky milk, a gently smoky sweetness, and that grey swirl everyone photographs before drinking.",
"sig2.alt":"Turkish eggs: poached eggs on yogurt, chilli butter, grilled toast",
"sig2.tag":"The morning plate","sig2.title":"Turkish eggs",
"sig2.text":"Poached eggs on garlicky yogurt, chilli butter, grilled toast for mopping up. Google reviews call them “top class”: the house has nothing to add.",
"sig3.alt":"Carrot cake under a glass dome and a caramel Tigré, at the counter",
"sig3.tag":"Something sweet","sig3.title":"The Tigré & the carrot cake",
"sig3.text":"The Tigré with its flowing caramel centre, which regulars flag as a detour worth making, and the carrot cake, there since the beginning.",

"carte.title":"No fixed menu: a weekday kitchen.",
"carte.lede":"Lunch is composed each week around the produce and the season. Here is what comes back, most often, at the counter and on the blackboard.",
"carte.g1":"Coffee side",
"carte.i1":"Espresso & filter coffee, rotating origins","carte.i1n":"Brazil, Ethiopia, Costa Rica, Colombia, as deliveries arrive",
"carte.i2":"Black sesame latte","carte.i2n":"the signature",
"carte.i3":"Matcha latte","carte.i4":"Pistachio latte","carte.i5":"Spiced hot chocolate",
"carte.i6":"Iced latte, smoothies & fresh juices",
"carte.g2":"Lunch, on weekdays",
"carte.j1":"Quiche of the moment & salad","carte.j2":"Wraps & club sandwich","carte.j3":"Samosas & quesadillas",
"carte.j4":"Seasonal salads","carte.j4n":"including the quinoa salad",
"carte.j5":"Soup of the day & hummus","carte.j6":"Grilled cheese","carte.j7":"Turkish eggs · avocado & egg",
"carte.g3":"Something sweet",
"carte.k1":"Carrot cake","carte.k2":"The Tigré, flowing caramel centre","carte.k3":"Cinnamon roll",
"carte.k4":"Scones, mascarpone & jam","carte.k5":"Brioche",
"carte.k6":"Gluten-free & lactose-free cakes","carte.k6n":"on the days they are baked",
"carte.note":"Prices are shown at the counter: the menu changes too often to be frozen here. An allergy or a particular diet? Tell the team: the kitchen adapts when it can.",
"brunch.alt":"Brunch table: pancakes, eggs Benedict avocado toasts, granola, orange juice",

"brunch.title":"First-Sunday brunch.",
"brunch.text":"The rest of the month, the house rests at weekends. But on the first Sunday, Sugar Blue opens for a seasonal brunch: fresh local produce, generous plates (pancakes, Benedict & avocado toasts, granola, smoothies), composed around the time of year.",
"brunch.note":"The date and hours are announced on Instagram. Do call ahead: seats go fast.",
"brunch.ig":"Follow @sugarbluecafe","brunch.call":"Call",
"coffee.alt":"Filter coffee poured slowly from a gooseneck kettle, burlap bean sacks",
"coffee.chalk":"freshly roasted",

"coffee.title":"Specialty coffee, roasted in Brittany.",
"coffee.text":"Since opening day, the beans come from Caffè Cataldi, a Breton roaster: two origins as espresso, a third as filter, ground to order. The specialty press wrote about it back in 2014; the house simply keeps serving them.",
"coffee.note":"As deliveries arrive: ask at the counter for today’s origin.",

"lieu.title":"One long, gentle room, on a pedestrian street.",
"lieu.lede":"Wood, stone, warm colours and salvaged furniture: the room stretches along Rue de l’Arche Sèche, between the day’s blackboard and the stools dressed in recycled coffee sacks.",
"lieu.p1":"Stools in recycled coffee sacks","lieu.p2":"A play corner for little ones",
"lieu.p3":"English spoken here too","lieu.p4":"Wheelchair access possible",
"gal1.alt":"The room: blue stone, salvaged chairs, burlap stools, counter at the back",
"gal1.cap":"The room, between stone and salvaged wood",
"gal2.alt":"Shared brunch table, morning light",
"gal2.cap":"On the first Sunday, the table fills up",
"gal3.alt":"Filter poured from the kettle, steam, bean sacks",
"gal3.cap":"The filter, poured slowly",
"gal4.alt":"Turkish eggs on yogurt, chilli butter",
"gal4.cap":"Turkish eggs, chilli butter",
"gal.hint":"Scroll →",

"voices.title":"Regulars tell it better than we do.",
"voices.src":"Google review",
"voices.score":"633 Google reviews, and a Wanderlog ranking as the #1 café in Loire-Atlantique.",
"visite.title":"Come and see us",
"visite.access":"A pedestrian street, a stone’s throw from Place Royale, the Tour Bretagne marks the other end of the street.",
"visite.call":"Call","visite.dir":"Directions",
"hours.title":"Opening hours","hours.week":"Monday to Friday","hours.sat":"Saturday","hours.closed":"Closed",
"hours.sun":"Sunday","hours.sunv":"Closed, except first-Sunday brunch",
"hours.note":"Hours per the café’s Google listing. Another public directory shows 9:00am-5:00pm: if in doubt, a call or the Instagram account confirms.",
"foot.note":"Unofficial concept demo site. Generated atmosphere photography; information from public sources (Google listing, specialist press), to be confirmed by the house.",
"bar.call":"Call","bar.carte":"Menu","bar.dir":"Directions"
};

var dicts = {fr:FR, en:EN};

function apply(lang){
  var d = dicts[lang] || FR;
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var k = el.getAttribute("data-i18n");
    if(d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function(el){
    var k = el.getAttribute("data-i18n-alt");
    if(d[k] !== undefined) el.setAttribute("alt", d[k]);
  });
  document.documentElement.lang = lang;
  document.title = d["meta.title"];
  document.querySelectorAll(".lang-btn").forEach(function(b){
    b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
  });
  try{ localStorage.setItem(KEY, lang); }catch(e){}
}
var saved = "fr";
try{ saved = localStorage.getItem(KEY) || "fr"; }catch(e){}
if(saved !== "fr") apply(saved);
document.querySelectorAll(".lang-btn").forEach(function(b){
  b.addEventListener("click", function(){ apply(b.getAttribute("data-lang")); });
});

/* ---------- reveals ---------- */
var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var revealEls = document.querySelectorAll("[data-reveal]");
if(reduced || !("IntersectionObserver" in window)){
  revealEls.forEach(function(el){ el.classList.add("in"); });
}else{
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.classList.add("in"); io.unobserve(en.target);
        if(en.target.hasAttribute("data-tilt")){
          var t = en.target;
          setTimeout(function(){ t.style.transition = "transform .12s ease-out, opacity .3s ease"; }, 780);
        }
      }
    });
  }, {threshold:.15});
  revealEls.forEach(function(el){ io.observe(el); });
}

/* ---------- depth engine (single lerped rAF loop) ---------- */
var fine = window.matchMedia("(pointer: fine)").matches;
if(!reduced){
  var layers = [];
  function reg(el, fn){ layers.push({el:el, fn:fn, cur:0, tgt:0}); }
  var ghost = document.querySelector(".hero-ghost");
  var chip = document.querySelector(".hero-chip");
  var plxImgs = document.querySelectorAll("[data-plx-img]");
  if(ghost) reg(ghost, function(v){ this.el.style.transform = "translate3d(0," + v.toFixed(1) + "px,0)"; });
  if(chip) reg(chip, function(v){ this.el.style.transform = "translate3d(0," + v.toFixed(1) + "px,44px)"; });
  plxImgs.forEach(function(img){
    reg(img, function(v){ this.el.style.transform = "translate3d(0," + v.toFixed(1) + "px,0)"; });
  });
  var tilts = [];
  if(fine){
    document.querySelectorAll("[data-tilt]").forEach(function(card){
      var st = {el:card, rx:0, ry:0, trx:0, try_:0};
      card.addEventListener("pointermove", function(e){
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5;
        var y = (e.clientY - r.top) / r.height - .5;
        st.try_ = x * 8; st.trx = -y * 8;
      });
      card.addEventListener("pointerleave", function(){ st.trx = 0; st.try_ = 0; });
      tilts.push(st);
    });
  }
  var track = document.querySelector("[data-snap]");
  var snapCards = track ? track.querySelectorAll(".snap-card") : [];
  if(track) track.style.perspective = "1200px";

  function measure(){
    var vh = window.innerHeight;
    layers.forEach(function(L){
      var r = L.el.getBoundingClientRect();
      var c = r.top + r.height/2 - vh/2;
      var rate = L.el === ghost ? -0.05 : (L.el === chip ? 0.06 : -0.055);
      var v = Math.max(-30, Math.min(30, c * rate));
      L.tgt = v;
    });
  }
  var ticking = false;
  function loop(){
    layers.forEach(function(L){
      L.cur += (L.tgt - L.cur) * .08;
      L.fn(L.cur);
    });
    tilts.forEach(function(st){
      st.rx += (st.trx - st.rx) * .1;
      st.ry += (st.try_ - st.ry) * .1;
      st.el.style.transform = "perspective(1100px) rotateX(" + st.rx.toFixed(2) + "deg) rotateY(" + st.ry.toFixed(2) + "deg)";
    });
    if(track){
      var tr = track.getBoundingClientRect();
      var centre = tr.left + tr.width/2;
      snapCards.forEach(function(c){
        var r = c.getBoundingClientRect();
        var d = (r.left + r.width/2 - centre) / tr.width;
        var ry = Math.max(-11, Math.min(11, d * -16));
        c.style.transform = "rotateY(" + ry.toFixed(2) + "deg)";
      });
    }
    if(ticking) requestAnimationFrame(loop);
  }
  function onScroll(){
    measure();
    if(!ticking){ ticking = true; requestAnimationFrame(loop); setTimeout(function(){
      ticking = false; measure();
      layers.forEach(function(L){ L.fn(L.tgt); L.cur = L.tgt; });
    }, 900); }
  }
  measure();
  layers.forEach(function(L){ L.cur = L.tgt; L.fn(L.cur); });
  window.addEventListener("scroll", onScroll, {passive:true});
  window.addEventListener("resize", onScroll);
  if(track) track.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
}
})();
