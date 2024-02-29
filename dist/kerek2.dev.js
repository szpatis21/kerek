"use strict";

/* TEVÉKENYSÉGEK */
// Térkép
var map = document.querySelector("#map");
var maphely = document.querySelector("#maphely"); //Kisképek

var keps = document.querySelector('#kep');
var keps2 = document.querySelector('#kep2');
var kephely_1 = document.querySelector("#kephely_1");
var kephely_2 = document.querySelector("#kephely_2");
var kephely_3 = document.querySelector("#kephely_3");
var kephely_4 = document.querySelector("#kephely_4");
var kephely_5 = document.querySelector(".kephely_5");
var kephely_6 = document.querySelector(".kephely_6");
var kephely_7 = document.querySelector("#kephely_8");
var kephely_8 = document.querySelector("#kephely_7"); // Fő területek   

var isk2 = document.querySelector('#isk2');
var isk = document.querySelector('#isk');
var isknep = document.querySelector('#isknep');
var isknepk = document.querySelector("#isknepk");
var tag = document.querySelector("#tag");
var tagozatok = document.querySelector("#tagozatok");
var pszi = document.querySelector("#pszi");
var pszitart = document.querySelector("#pszitart");
var tanak = document.querySelector("#tanak");
var tanaktart = document.querySelector("#tanaktart");
var ertak = document.querySelector("#ertak");
var ertaktart = document.querySelector("#ertaktart");
var fejnev = document.querySelector("#fejnev");
var fejnevtart = document.querySelector("#fejnevtart");
var ter = document.querySelector("#ter");
var terapiak = document.querySelector("#terapiak");
var szoci = document.querySelector('#szoci');
var taszo = document.querySelector("#taszo");
var tamopk = document.querySelector("#tamopk");
var fejfog = document.querySelector("#fejfog");
var fejfogk = document.querySelector("#fejfogk");
var ellint = document.querySelector("#elint"); //alkat gombja

var szocik = document.querySelector("#szocik"); //akat divje

var gesztint = document.querySelector("#geszkep"); // alkat 1 gomb

var geszttart = document.querySelector("#geszt"); // alkat 1 tart

var krisztint = document.querySelector("#krisztkep"); // alkat 2 gomb

var kriszttart = document.querySelector("#kriszt");
var szoci2 = document.querySelector('#szoci2');
var erz = document.querySelector('#erz');
var erz2 = document.querySelector('#erz2');
var akr = document.querySelector('#akr');
var akr2 = document.querySelector('#akr2');

function changeContent(newContent, placeholder) {
  if (!(placeholder instanceof Element)) {
    console.error("A placeholder nem egy érvényes DOM elem.");
    return;
  }

  while (placeholder.firstChild) {
    placeholder.removeChild(placeholder.firstChild);
  }

  placeholder.appendChild(newContent);
  newContent.style.display = 'grid';
  setTimeout(function () {
    placeholder.scrollIntoView({
      behavior: "smooth",
      inline: 'nearest'
    });
  }, 50);
}

;
var placeholder = document.querySelector("#placeholder"); // Főkatergóriák

taszo.addEventListener('click', function () {
  changeContent(tamopk, placeholder);
  changeContent(keps2, kephely_3);
});
ellint.addEventListener('click', function () {
  changeContent(szocik, placeholder);
  changeContent(keps, kephely_5);
  changeContent(keps2, kephely_6);
});
fejfog.addEventListener('click', function () {
  changeContent(fejfogk, placeholder);
  changeContent(keps2, kephely_1);
});
isknep.addEventListener('click', function () {
  changeContent(isknepk, placeholder);
  changeContent(keps, kephely_2);
});
tag.addEventListener('click', function () {
  changeContent(tagozatok, placeholder);
});
ter.addEventListener('click', function () {
  changeContent(terapiak, placeholder);
});
var alcikktart3 = document.querySelector("#alcikktart3");
var alcikktart2 = document.querySelector("#alcikktart2");
var alcikktart = document.querySelector("#alcikktart"); // Alkategóriák

pszi.addEventListener('click', function () {
  changeContent(pszitart, alcikktart2);
});
tanak.addEventListener('click', function () {
  changeContent(tanaktart, alcikktart2);
  changeContent(keps, kephely_4);
});
ertak.addEventListener('click', function () {
  changeContent(ertaktart, alcikktart2);
});
fejnev.addEventListener('click', function () {
  changeContent(fejnevtart, alcikktart2);
});
gesztint.addEventListener('click', function () {
  changeContent(geszttart, alcikktart);
});
krisztint.addEventListener('click', function () {
  changeContent(kriszttart, alcikktart);
}); //Al-al kategóriák
// Pszihés

var belso_al = document.querySelector("#belsoalcikk");
var egy = document.querySelector("#egy_belso");
var egy_tart = document.querySelector("#egy_tart");
var dis = document.querySelector("#dis_belso");
var dis_tart = document.querySelector("#dis_tart");
var bes = document.querySelector("#bes_belso");
var bes_tart = document.querySelector("#bes_tart");
var log = document.querySelector("#log_belso");
var log_tart = document.querySelector("#log_tart");
var moz = document.querySelector("#moz_belso");
var moz_tart = document.querySelector("#moz_tart");
var kon = document.querySelector("#kon_belso");
var kon_tart = document.querySelector("#kon_tart");
var gyo = document.querySelector("#gyo_belso");
var gyo_tart = document.querySelector("#gyo_tart");
var zen = document.querySelector("#zen_belso");
var zen_tart = document.querySelector("#zen_tart");
var lat = document.querySelector("#lat_belso");
var lat_tart = document.querySelector("#lat_tart");
egy.addEventListener('click', function () {
  changeContent(egy_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
dis.addEventListener('click', function () {
  changeContent(dis_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
bes.addEventListener('click', function () {
  changeContent(bes_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
log.addEventListener('click', function () {
  changeContent(log_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
moz.addEventListener('click', function () {
  changeContent(moz_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
kon.addEventListener('click', function () {
  changeContent(kon_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
gyo.addEventListener('click', function () {
  changeContent(gyo_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
zen.addEventListener('click', function () {
  changeContent(zen_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
});
lat.addEventListener('click', function () {
  changeContent(lat_tart, belso_al);

  if (window.innerWidth < 1000) {
    pszitart.style.gridTemplateColumns = '100%';
  } else {
    pszitart.style.gridTemplateColumns = '35% 65%';
  }
}); //Értelmikleg akadályoztatott

var belso_al_ert = document.querySelector("#belsoalcikk_ert");
var nep = document.querySelector("#nep_belso");
var nep_tart = document.querySelector("#nep_tart");
var ayr = document.querySelector("#ayr_belso");
var ayr_tart = document.querySelector("#ayr_tart");
var lov = document.querySelector("#lov_belso");
var lov_tart = document.querySelector("#lov_tart");
var sub = document.querySelector("#sub_belso");
var sub_tart = document.querySelector("#sub_tart");
var kez = document.querySelector("#kez_belso");
var kez_tart = document.querySelector("#kez_tart");
var alt = document.querySelector("#alt_belso");
var alt_tart = document.querySelector("#alt_tart");
var on = document.querySelector("#on_belso");
var on_tart = document.querySelector("#on_tart");
var moz2 = document.querySelector("#moz_belso2");
var gyo2 = document.querySelector("#gyo_belso2");
var zen2 = document.querySelector("#zen_belso2");
var bes2 = document.querySelector("#bes_belso2");
var log2 = document.querySelector("#log_belso2");
sub.addEventListener('click', function () {
  changeContent(sub_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
nep.addEventListener('click', function () {
  changeContent(nep_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
ayr.addEventListener('click', function () {
  changeContent(ayr_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
lov.addEventListener('click', function () {
  changeContent(lov_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
kez.addEventListener('click', function () {
  changeContent(kez_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
alt.addEventListener('click', function () {
  changeContent(alt_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
on.addEventListener('click', function () {
  changeContent(on_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
moz2.addEventListener('click', function () {
  changeContent(moz_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
gyo2.addEventListener('click', function () {
  changeContent(gyo_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
zen2.addEventListener('click', function () {
  changeContent(zen_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
bes2.addEventListener('click', function () {
  changeContent(bes_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
});
log2.addEventListener('click', function () {
  changeContent(log_tart, belso_al_ert);

  if (window.innerWidth < 1000) {
    ertaktart.style.gridTemplateColumns = '100%';
  } else {
    ertaktart.style.gridTemplateColumns = '35% 65%';
  }
}); //Fejlesztő fogalkoztatás

var belso_al_fej = document.querySelector("#belsoalcikk_fej");
var komm = document.querySelector("#komm_belso");
var komm_tart = document.querySelector("#komm_tart");
var eszt = document.querySelector("#eszt_belso");
var eszt_tart = document.querySelector("#eszt_tart");
var erzi = document.querySelector("#erz_belso");
var erzi_tart = document.querySelector("#erz_tart");
var fej = document.querySelector("#fej_belso");
var fej_tart = document.querySelector("#fej_tart");
var szuk = document.querySelector("#szuk_belso");
var szuk_tart = document.querySelector("#szuk_tart");
var reg = document.querySelector("#reg_belso");
var reg_tart = document.querySelector("#reg_tart");
var jat = document.querySelector("#jat_belso");
var jat_tart = document.querySelector("#jat_tart");
var hig = document.querySelector("#hig_belso");
var hig_tart = document.querySelector("#hig_tart");
var moz3 = document.querySelector("#moz_belso3");
var egy2 = document.querySelector("#egy_belso2");
var bes3 = document.querySelector("#bes_belso3");
komm.addEventListener('click', function () {
  changeContent(komm_tart, belso_al_fej);
  fejnevtart.style.gridTemplateColumns = '35% 65%';
});
reg.addEventListener('click', function () {
  changeContent(reg_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
eszt.addEventListener('click', function () {
  changeContent(eszt_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
erzi.addEventListener('click', function () {
  changeContent(erzi_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
fej.addEventListener('click', function () {
  changeContent(fej_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
szuk.addEventListener('click', function () {
  changeContent(szuk_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
jat.addEventListener('click', function () {
  changeContent(jat_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
hig.addEventListener('click', function () {
  changeContent(hig_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
moz3.addEventListener('click', function () {
  changeContent(moz_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
egy2.addEventListener('click', function () {
  changeContent(egy_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
});
bes3.addEventListener('click', function () {
  changeContent(bes_tart, belso_al_fej);

  if (window.innerWidth < 1000) {
    fejnevtart.style.gridTemplateColumns = '100%';
  } else {
    fejnevtart.style.gridTemplateColumns = '35% 65%';
  }
}); // TERÁPIÁK

var egy_ter = document.querySelector("#egy_ter");
var besz_ter = document.querySelector("#besz_ter");
var kon_ter = document.querySelector("#kon_ter");
var alt_ter = document.querySelector("#alt_ter");
var moz_ter = document.querySelector("#moz_ter");
var lat_ter = document.querySelector("#lat_ter");
var zen_ter = document.querySelector("#zen_ter");
egy_ter.addEventListener('click', function () {
  changeContent(egy_tart, alcikktart3);
  alcikktart3.style.display = "grid";
});
besz_ter.addEventListener('click', function () {
  changeContent(bes_tart, alcikktart3);
  alcikktart3.style.display = "grid";
});
kon_ter.addEventListener('click', function () {
  changeContent(kon_tart, alcikktart3);
  alcikktart3.style.display = "grid";
});
alt_ter.addEventListener('click', function () {
  changeContent(alt_tart, alcikktart3);
  alcikktart3.style.display = "grid";
});
moz_ter.addEventListener('click', function () {
  changeContent(moz_tart, alcikktart3);
  alcikktart3.style.display = "grid";
});
lat_ter.addEventListener('click', function () {
  changeContent(lat_tart, alcikktart3);
  alcikktart3.style.display = "grid";
});
zen_ter.addEventListener('click', function () {
  changeContent(zen_tart, alcikktart3);
  alcikktart3.style.display = "grid";
});