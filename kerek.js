

fetch('tartalom.html')
  .then(response => response.text())
  .then(htmlContent => {

    const parsedContent = new DOMParser().parseFromString(htmlContent, 'text/html');
    const placeholder = document.querySelector('#placeholder');
    placeholder.appendChild(parsedContent.body);

function changeContent(newContent, placeholder) {
    if (!(placeholder instanceof Element)) {
        console.error("A placeholder nem egy érvényes DOM elem.");
        return;
    }

    while (placeholder.firstChild) {
        placeholder.removeChild(placeholder.firstChild);
    }

    let gyujto = document.querySelector(".gyujto")
    if (!gyujto) {
        const gyujto = document.createElement('div');
        gyujto.classList.add("gyujto");
        placeholder.appendChild(gyujto);

        const fel = document.createElement('button');
        fel.textContent = 'Ugrás a tartalom tetejére';
        fel.classList.add('fel');
        gyujto.appendChild(fel);

        fel.addEventListener('click', function() {
            placeholder.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'start' });
        });

        const kilep = document.createElement('button');
        kilep.textContent = " Tartalom összecsukása";
        kilep.classList.add('kilep');
        gyujto.appendChild(kilep);

        kilep.addEventListener('click', function() {
            while (placeholder.firstChild) {
                placeholder.removeChild(placeholder.firstChild);
            }
            placeholder.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'start' });
        });
    }

    placeholder.appendChild(newContent);
    newContent.style.display = 'grid';

    setTimeout(function () {
        newContent.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
    }, 50);
}
    
const ures = document.querySelector("#ures")
//TEVÉKENYSÉGEK FÜL TARTALOM CSERÉLGETÉSE
//kisképek
const keps = document.querySelector('#kep');
const keps2 = document.querySelector('#kep2');
    //felhasználási helyük
    const kephely_1 = document.querySelector("#kephely_1");
    const kephely_2 = document.querySelector("#kephely_2");
    const kephely_3 = document.querySelector("#kephely_3");
    const kephely_4 = document.querySelector("#kephely_4");
    const kephely_5 = document.querySelector(".kephely_5");
    const kephely_6 = document.querySelector(".kephely_6");
 // Fő területek   
const csop = document.querySelector("#csop");
    const csoportok = document.querySelector("#csoportok");
const isk = document.querySelector('#iskerzk');
    const iskolak = document.querySelector('#iskolak');
const kony = document.querySelector("#kony");
    const konyvtar = document.querySelector("#konyvtar");    
    const isknep = document.querySelector('#isknep');
        const isknepk = document.querySelector("#isknepk");
    const tag = document.querySelector("#tag");
        const tagozatok = document.querySelector("#tagozatok");
            const pszi = document.querySelector("#pszi");
                const pszitart = document.querySelector("#pszitart");
            const tanak = document.querySelector("#tanak");
                const tanaktart = document.querySelector("#tanaktart");
            const ertak = document.querySelector("#ertak");
                const ertaktart = document.querySelector("#ertaktart");
            const fejnev = document.querySelector("#fejnev");
                const fejnevtart = document.querySelector("#fejnevtart");
    const ter = document.querySelector("#ter");
        const terapiak = document.querySelector("#terapiak");
    const szoci = document.querySelector('#szoci'); 
    const taszo = document.querySelector("#taszo");
        const tamopk = document.querySelector("#tamopk");
    const fejfog = document.querySelector("#fejfog");
        const fejfogk = document.querySelector("#fejfogk")
    const ellint = document.querySelector("#elint");                        //alkat gombja
        const szocik = document.querySelector("#szocik");                  //akat divje
            const gesztint = document.querySelector("#geszkep");          // alkat 1 gomb
                const geszttart= document.querySelector("#geszt");       // alkat 1 tart
            const krisztint = document.querySelector("#krisztkep");     // alkat 2 gomb
                const kriszttart = document.querySelector("#kriszt");
                const kilep = document.querySelector("#kilep")

    const alcikktart3 = document.querySelector("#alcikktart3")    
    const alcikktart2 = document.querySelector("#alcikktart2");
    const alcikktart = document.querySelector("#alcikktart");
    //Al-al kategóriák
    const belso_al = document.querySelector("#belsoalcikk");
     // Pszihés
        const egy_tart= document.querySelector("#egy_tart");
        const dis_tart=document.querySelector("#dis_tart");
        const bes_tart = document.querySelector("#bes_tart");
        const log_tart = document.querySelector("#log_tart");
        const moz_tart = document.querySelector("#moz_tart");
        const kon_tart = document.querySelector("#kon_tart"); 
        const gyo_tart = document.querySelector("#gyo_tart");
        const zen_tart = document.querySelector("#zen_tart"); 
        const lat_tart = document.querySelector("#lat_tart");  
    const belso_al_ert = document.querySelector("#belsoalcikk_ert")
    //Ért Ak
        const sub_tart= document.querySelector("#sub_tart");
        const nep_tart= document.querySelector("#nep_tart");    
        const ayr_tart= document.querySelector("#ayr_tart");
        const lov_tart= document.querySelector("#lov_tart");
        const kez_tart= document.querySelector("#kez_tart"); 
        const alt_tart= document.querySelector("#alt_tart");
        const on_tart= document.querySelector("#on_tart"); 
    const belso_al_fej = document.querySelector("#belsoalcikk_fej")
    //Fejlesztő fogalkoztatás
        const komm_tart= document.querySelector("#komm_tart");    
        const eszt_tart= document.querySelector("#eszt_tart");
        const erzi_tart= document.querySelector("#erz_tart");
        const fej_tart= document.querySelector("#fej_tart");
        const szuk_tart= document.querySelector("#szuk_tart");         
        const reg_tart= document.querySelector("#reg_tart");
        const jat_tart= document.querySelector("#jat_tart");
        const hig_tart= document.querySelector("#hig_tart");  
    /* PÁLYÁZATOK  */
    const paly = document.querySelector("#paly");
    const paly_tar = document.querySelector("#paly_tar")
        const paly_01 = document.querySelector("#paly_01");
        const paly_01_2 = document.querySelector("#paly_01_2");
        const paly_01_tar = document.querySelector("#paly_01_tar");
        const paly_02 = document.querySelector("#paly_02");
        const paly_02_2 = document.querySelector("#paly_02_2");
        const paly_02_tar = document.querySelector("#paly_02_tar");
        const paly_03 = document.querySelector("#paly_03");      
        const paly_03_2 = document.querySelector("#paly_03_2");
        const paly_03_tar = document.querySelector("#paly_03_tar"); 
        const paly_04 = document.querySelector("#paly_04");      
        const paly_04_2 = document.querySelector("#paly_04_2");
        const paly_04_tar = document.querySelector("#paly_04_tar");      
        const paly_05 = document.querySelector("#paly_05");      
        const paly_05_2 = document.querySelector("#paly_05_2");
        const paly_05_tar = document.querySelector("#paly_05_tar"); 
    /* KAPCSOLAT */
    const terkepmenu = document.querySelector("#terkepmenu");
    const terkepekel = document.querySelector("#terkepekel");
    const terkepekel2 = document.querySelector("#terkepekel2");
    /* DOKUMENTUMOK */
    const doku = document.querySelector("#doku");
    const dok = document.querySelector("#dok");
    const dok2 = document.querySelector("#dok2");
        const megjelenito = document.querySelector("#megjelenito");
        const pdf_tart = document.querySelector("#pdf_tart")
            const suldok = document.querySelector("#suldok");
                const suldok_tart = document.querySelector("#suldok_tart");
            const adadok = document.querySelector("#adadok");
                const adadok_tart = document.querySelector("#adadok_tart");
            const besdok = document.querySelector("#besdok");
                const besdok_tart = document.querySelector("#besdok_tart");
            const kozdok = document.querySelector("#kozdok");
                const kozdok_tart = document.querySelector("#kozdok_tart");
            const merdok = document.querySelector("#merdok");
                const merdok_tart = document.querySelector("#merdok_tart");
    /* INTÉZMÉNYVÁLASZTÓ */
    const int_sul = document.querySelector("#int_sul");
    const kep2 =document.querySelector(".kep2");
    const kep2_mini = document.querySelector("#kep2_mini")

const buttonContentPairs = {
    kilep : {gomb: kilep, content1: ures, placeholder1: placeholder},
    taszo: { gomb: taszo, content1: tamopk, placeholder1: placeholder, content2: keps2, placeholder2: kephely_3 },
    ellint: { gomb: ellint, content1: szocik, placeholder1: placeholder, content2: keps, placeholder2: kephely_5, content3: keps2, placeholder3: kephely_6 },
    fejfog: { gomb: fejfog, content1: fejfogk, placeholder1: placeholder, content2: keps2, placeholder2: kephely_1 },
    isknep: { gomb: isknep, content1: isknepk, placeholder1: placeholder, content2: keps, placeholder2: kephely_2 },
    tag: { gomb: tag, content1: tagozatok, placeholder1: placeholder },
    ter: { gomb: ter, content1: terapiak, placeholder1: placeholder },
    csop: { gomb: csop, content1: csoportok, placeholder1: placeholder },
    isk: { gomb: isk, content1: iskolak, placeholder1: placeholder },
    kony: { gomb: kony, content1: konyvtar, placeholder1: placeholder },
    pszi: {gomb: pszi, content1:pszitart, placeholder1: alcikktart2},
    tanak: {gomb:tanak, content1:tanaktart, placeholder1: alcikktart2, content2: keps2,placeholder2: kephely_4},
    ertak: {gomb:ertak, content1:ertaktart, placeholder1: alcikktart2},
    fejnev: {gomb:fejnev, content1:fejnevtart, placeholder1: alcikktart2},
    gesztint: {gomb:gesztint, content1:geszttart, placeholder1: alcikktart},
    krisztint: {gomb:krisztint, content1:kriszttart, placeholder1: alcikktart},
    /* PÁLYÁZATOK */
    paly_01: { gomb: paly_01, content1: paly, placeholder1: placeholder, content2: paly_01_tar, placeholder2: paly_tar},
    paly_01_2: { gomb: paly_01_2, content1: paly, placeholder1: placeholder, content2: paly_01_tar, placeholder2: paly_tar},
    paly_02: { gomb: paly_02, content1: paly, placeholder1: placeholder, content2: paly_02_tar, placeholder2: paly_tar},
    paly_02_2: { gomb: paly_02_2, content1: paly, placeholder1: placeholder, content2: paly_02_tar, placeholder2: paly_tar},
    paly_03: { gomb: paly_03, content1: paly, placeholder1: placeholder, content2: paly_03_tar, placeholder2: paly_tar},
    paly_03_2: { gomb: paly_03_2, content1: paly, placeholder1: placeholder, content2: paly_03_tar, placeholder2: paly_tar},
    paly_04: { gomb: paly_04, content1: paly, placeholder1: placeholder, content2: paly_04_tar, placeholder2: paly_tar},
    paly_04_2: { gomb: paly_04_2, content1: paly, placeholder1: placeholder, content2: paly_04_tar, placeholder2: paly_tar},    
    paly_05: { gomb: paly_05, content1: paly, placeholder1: placeholder, content2: paly_05_tar, placeholder2: paly_tar},
    paly_05_2: { gomb: paly_05_2, content1: paly, placeholder1: placeholder, content2: paly_05_tar, placeholder2: paly_tar},
    /* ELÉRHETŐSÉG */
    terkepekel: { gomb: terkepekel, content1: terkepmenu, placeholder1: placeholder},
    terkepekel2: { gomb: terkepekel2, content1: terkepmenu, placeholder1: placeholder},
    /* DOKUMENTUMOK */
    dok: { gomb: dok, content1: doku, placeholder1: placeholder},
    dok2: { gomb: dok2, content1: doku, placeholder1: placeholder},
    suldok: {gomb: suldok, content1: suldok_tart, placeholder1: megjelenito },
    adadok: {gomb: adadok, content1: adadok_tart, placeholder1: megjelenito },
    besdok: {gomb: besdok, content1: besdok_tart, placeholder1: megjelenito },
    kozdok:{gomb: kozdok, content1: kozdok_tart, placeholder1: megjelenito },
    merdok:{gomb: merdok, content1: merdok_tart, placeholder1: megjelenito },
    /* INTÉZMÉNYVÁLASZTÓ */
    kep2:{gomb:kep2, content1: int_sul, placeholder1:placeholder},
    kep2_mini:{gomb:kep2_mini, content1: int_sul, placeholder1:placeholder},
};

for (const key in buttonContentPairs) {
    if (buttonContentPairs.hasOwnProperty(key)) {
        const pair = buttonContentPairs[key];
        pair.gomb.addEventListener('click', function() {
            changeContent(pair.content1, pair.placeholder1);
            if (pair.content2 && pair.placeholder2) {
                changeContent(pair.content2, pair.placeholder2);
            }
            if (pair.content3 && pair.placeholder3) {
                changeContent(pair.content3, pair.placeholder3);
            }
            
        });
    }
}

function getGridStyles() { return window.innerWidth < 1037 ? '100%' : '35% 65%';}

const buttonContentPairs2 = {
//PSZIHÉS    
    egy_belso: { content: egy_tart, placeholder: belso_al },
    dis_belso: { content: dis_tart, placeholder: belso_al },
    bes_belso: { content: bes_tart, placeholder: belso_al },
    log_belso: { content: log_tart, placeholder: belso_al },
    moz_belso: { content: moz_tart, placeholder: belso_al },
    kon_belso: { content: kon_tart, placeholder: belso_al },
    gyo_belso: { content: gyo_tart, placeholder: belso_al },
    zen_belso: { content: zen_tart, placeholder: belso_al },
    lat_belso: { content: lat_tart, placeholder: belso_al },
//ÉRTAK
    nep_belso: { content: nep_tart, placeholder: belso_al_ert },
    ayr_belso: { content: ayr_tart, placeholder: belso_al_ert },
    lov_belso: { content: lov_tart, placeholder: belso_al_ert },
    kez_belso: { content: kez_tart, placeholder: belso_al_ert },
    sub_belso: { content: sub_tart, placeholder: belso_al_ert },
    on_belso: { content: on_tart, placeholder: belso_al_ert },
    alt_belso: { content: alt_tart, placeholder: belso_al_ert },
    on_belso: { content: on_tart, placeholder: belso_al_ert },
    moz_belso2: { content: moz_tart, placeholder: belso_al_ert},
    gyo_belso2: { content: gyo_tart, placeholder: belso_al_ert},
    zen_belso2: { content: zen_tart, placeholder: belso_al_ert},
    bes_belso2: { content: bes_tart, placeholder: belso_al_ert},
    log_belso2: { content: log_tart, placeholder: belso_al_ert},
//FEJLESZTŐ
    komm_belso: { content: komm_tart, placeholder: belso_al_fej},
    eszt_belso: { content: eszt_tart, placeholder: belso_al_fej},
    erz_belso: { content: erzi_tart, placeholder: belso_al_fej},
    fej_belso: { content: fej_tart, placeholder: belso_al_fej},
    szuk_belso: { content: szuk_tart, placeholder: belso_al_fej},
    reg_belso: { content: reg_tart, placeholder: belso_al_fej},
    jat_belso: { content: jat_tart, placeholder: belso_al_fej},
    hig_belso: { content: hig_tart, placeholder: belso_al_fej},
    moz_belso3: { content: moz_tart, placeholder: belso_al_fej},
    egy_belso2: { content: egy_tart, placeholder: belso_al_fej},
    bes_belso3: { content: bes_tart, placeholder: belso_al_fej},
//DOKUMENTUMTÁR
    pdf_1: {content: pdf1, placeholder: pdf_tart},
    pdf_2: {content: pdf2, placeholder: pdf_tart},
    pdf_3: {content: pdf3, placeholder: pdf_tart},
    pdf_4: {content: pdf4, placeholder: pdf_tart},
    pdf_5: {content: pdf5, placeholder: pdf_tart},
    pdf_6: {content: pdf6, placeholder: pdf_tart},
    pdf_7: {content: pdf7, placeholder: pdf_tart},
    pdf_8: {content: pdf8, placeholder: pdf_tart},
    pdf_9: {content: pdf9, placeholder: pdf_tart},
    pdf_10: {content: pdf10, placeholder: pdf_tart},
    pdf_11: {content: pdf11, placeholder: pdf_tart},
    pdf_12: {content: pdf12, placeholder: pdf_tart},
    pdf_13: {content: pdf13, placeholder: pdf_tart},
    pdf_14: {content: pdf14, placeholder: pdf_tart},
    pdf_15: {content: pdf15, placeholder: pdf_tart},
    pdf_16: {content: pdf16, placeholder: pdf_tart},
    pdf_17: {content: pdf17, placeholder: pdf_tart},
    pdf_18: {content: pdf18, placeholder: pdf_tart},
   /*  pdf_19: {content: pdf19, placeholder: pdf_tart},
    pdf_20: {content: pdf20, placeholder: pdf_tart}, */
    pdf_21: {content: pdf21, placeholder: pdf_tart},
    pdf_22: {content: pdf22, placeholder: pdf_tart},
    pdf_23: {content: pdf23, placeholder: pdf_tart},
    pdf_24: {content: pdf24, placeholder: pdf_tart},
    pdf_25: {content: pdf25, placeholder: pdf_tart},
    pdf_26: {content: pdf26, placeholder: pdf_tart},
    pdf_27: {content: pdf27, placeholder: pdf_tart},
    pdf_28: {content: pdf28, placeholder: pdf_tart},
    pdf_29: {content: pdf29, placeholder: pdf_tart},
    pdf_30: {content: pdf30, placeholder: pdf_tart},
    pdf_31: {content: pdf31, placeholder: pdf_tart},
    pdf_32: {content: pdf32, placeholder: pdf_tart},
    pdf_33: {content: pdf33, placeholder: pdf_tart},
    pdf_34: {content: pdf34, placeholder: pdf_tart},
    pdf_35: {content: pdf35, placeholder: pdf_tart},
    pdf_36: {content: pdf36, placeholder: pdf_tart},
    pdf_37: {content: pdf37, placeholder: pdf_tart},
    pdf_38: {content: pdf38, placeholder: pdf_tart},
    pdf_39: {content: pdf39, placeholder: pdf_tart},
    pdf_40: {content: pdf40, placeholder: pdf_tart},
    pdf_41: {content: pdf41, placeholder: pdf_tart},
    pdf_42: {content: pdf42, placeholder: pdf_tart},
    pdf_43: {content: pdf43, placeholder: pdf_tart},
    pdf_44: {content: pdf44, placeholder: pdf_tart},
    pdf_45: {content: pdf45, placeholder: pdf_tart},
    pdf_46: {content: pdf46, placeholder: pdf_tart},
    pdf_47: {content: pdf47, placeholder: pdf_tart},
    pdf_48: {content: pdf48, placeholder: pdf_tart},
    pdf_49: {content: pdf49, placeholder: pdf_tart},
    pdf_50: {content: pdf50, placeholder: pdf_tart},
    pdf_51: {content: pdf51, placeholder: pdf_tart},
    pdf_52: {content: pdf52, placeholder: pdf_tart},
    pdf_53: {content: pdf53, placeholder: pdf_tart},
    pdf_54: {content: pdf54, placeholder: pdf_tart},
    pdf_55: {content: pdf55, placeholder: pdf_tart},
    pdf_56: {content: pdf56, placeholder: pdf_tart},
    pdf_57: {content: pdf57, placeholder: pdf_tart},
    pdf_58: {content: pdf58, placeholder: pdf_tart},
    pdf_59: {content: pdf59, placeholder: pdf_tart},
    pdf_60: {content: pdf60, placeholder: pdf_tart},
    pdf_61: {content: pdf61, placeholder: pdf_tart},
    pdf_62: {content: pdf62, placeholder: pdf_tart},
    pdf_63: {content: pdf63, placeholder: pdf_tart},
    pdf_64: {content: pdf64, placeholder: pdf_tart},
    pdf_65: {content: pdf65, placeholder: pdf_tart},
    pdf_66: {content: pdf66, placeholder: pdf_tart},
    pdf_67: {content: pdf67, placeholder: pdf_tart},
    pdf_68: {content: pdf68, placeholder: pdf_tart},
    pdf_69: {content: pdf69, placeholder: pdf_tart},
    pdf_70: {content: pdf70, placeholder: pdf_tart},
    pdf_71: {content: pdf71, placeholder: pdf_tart},
    pdf_72: {content: pdf72, placeholder: pdf_tart},
    pdf_73: {content: pdf73, placeholder: pdf_tart},
    pdf_74: {content: pdf74, placeholder: pdf_tart},
    pdf_75: {content: pdf75, placeholder: pdf_tart},
};

function handleButtonClick(pair) {
    changeContent(pair.content, pair.placeholder);
    pszitart.style.gridTemplateColumns = getGridStyles();
    ertaktart.style.gridTemplateColumns = getGridStyles();
    fejnevtart.style.gridTemplateColumns = getGridStyles();
}
for (const key in buttonContentPairs2) {
    if (buttonContentPairs2.hasOwnProperty(key)) {
        const pair = buttonContentPairs2[key];
        const buttonElement = document.querySelector(`#${key}`);
        
        if (buttonElement) {
            buttonElement.addEventListener('click', function() {
                handleButtonClick(pair);
                
                if (pair.content instanceof HTMLElement && typeof pair.content.id === 'string') {
                    const contentElement = document.getElementById(pair.content.id);
                    if (contentElement) {
                        console.log(contentElement);
                    } else {
                        console.error(`Hiba: ${pair.content.id} elem nem található.`);
                    }
                } else {
                    console.error(`Hiba: ${pair.content} nem érvényes id típusú.`);
                }
            });
        } else {
            console.error(`Hiba: ${key} gomb elem nem található.`);
        }
    }
}; 
    // Médiaváltó eseménykezelő
    window.addEventListener('resize', function() {
        pszitart.style.gridTemplateColumns = getGridStyles();    
    });
    window.addEventListener('resize', function() {
        ertaktart.style.gridTemplateColumns = getGridStyles();    
    });
    window.addEventListener('resize', function() {
        fejnevtart.style.gridTemplateColumns = getGridStyles();    
    });
// TERÁPIÁK

const egy_ter = document.querySelector("#egy_ter");
const besz_ter = document.querySelector("#besz_ter");
const kon_ter = document.querySelector("#kon_ter");
const alt_ter = document.querySelector("#alt_ter");
const moz_ter = document.querySelector("#moz_ter");
const lat_ter = document.querySelector("#lat_ter");
const zen_ter = document.querySelector("#zen_ter");

egy_ter.addEventListener('click', function(){
    changeContent(egy_tart,alcikktart3);
    alcikktart3.style.display = "grid";
});

besz_ter.addEventListener('click', function(){
    changeContent(bes_tart,alcikktart3);
    alcikktart3.style.display = "grid";
});
kon_ter.addEventListener('click', function(){
    changeContent(kon_tart,alcikktart3);
    alcikktart3.style.display = "grid";
});
alt_ter.addEventListener('click', function(){
    changeContent(alt_tart,alcikktart3);
    alcikktart3.style.display = "grid";
});
moz_ter.addEventListener('click', function(){
    changeContent(moz_tart,alcikktart3);
    alcikktart3.style.display = "grid";
});
lat_ter.addEventListener('click', function(){
    changeContent(lat_tart,alcikktart3);
    alcikktart3.style.display = "grid";
});
zen_ter.addEventListener('click', function(){
    changeContent(zen_tart,alcikktart3);
    alcikktart3.style.display = "grid";
});

const feladatok = document.querySelector("#feladatok")
const f1 = document.querySelector('#f1');
const feladatok1 = document.querySelector("#feladatok1")
const f2 = document.querySelector('#f2');
const feladatok2 = document.querySelector("#feladatok2")
const f3 = document.querySelector('#f3');
const feladatok3 = document.querySelector("#feladatok3")
const f4 = document.querySelector('#f4');
const feladatok4 = document.querySelector("#feladatok4")
const f5 = document.querySelector('#f5');
const feladatok5 = document.querySelector("#feladatok5")
const f6 = document.querySelector('#f6');

feladatok.addEventListener('click', function(){
  f1.style.fontSize = '100%';
  f1.style.width = '100%';
});
feladatok1.addEventListener('click', function(){
    f2.style.fontSize = '100%';
    f2.style.width = '100%';
  });
  feladatok2.addEventListener('click', function(){
    f3.style.fontSize = '100%';
    f3.style.width = '100%';
  });
  feladatok3.addEventListener('click', function(){
      f4.style.fontSize = '100%';
      f4.style.width = '100%';
    });
    feladatok4.addEventListener('click', function(){
        f5.style.fontSize = '100%';
        f5.style.width = '100%';
      });
      feladatok5.addEventListener('click', function(){
          f6.style.fontSize = '100%';
          f6.style.width = '100%';
        });
  })
  .catch(error => console.error('Hiba a tartalom.html betöltése közben:', error));

/* KÖTELEZŐ */
function kikapcs() {
  var x = document.getElementById("kotelezo_lent");
  var y = document.getElementById("kotelezo_fent");
  
  if (x.style.transform === "translatex(80%)" || y.style.transform === "translateY(80%)") 
  {y.style.opacity = "1";
  y.style.transform = "translatex(0%)";
  y.style.transition = "all 0.5s"
    x.style.opacity = "1";
    x.style.transform = "translatex(0%)";
    x.style.transition = "all 0.5s"
 
  } else {
    y.style.transform = "translatex(80%)";
    y.style.transition = "all 0.5s"
    y.style.opacity = "0";
    x.style.transform = "translatex(80%)";
    x.style.transition = "all 0.5s"
    x.style.opacity = "0";
  }}

/* MOBILMENU */

function checkUncheck()
{var checkbox = document.getElementById('menu-bar');
    if(checkbox.checked)
    {checkbox.checked = false;
      } else 
            {checkbox.checked = true;}}

 /*  INTÉZMÉNYVÁLASZTÓ */
const pp = document.querySelector('.pp');
const kep = document.querySelector('.kep');
const info = document.querySelector('.info');
const pp3 = document.querySelector('.pp3');
const kep3 = document.querySelector('.kep3');
const info4 = document.querySelector('.info4');
const pp4 = document.querySelector('.pp4');
const kep4 = document.querySelector('.kep4');
const info3 = document.querySelector('.info3');
const pp2 = document.querySelector('.pp2');
const kep2 = document.querySelector('.kep2');
const info2 = document.querySelector('.info2');

kep.addEventListener('mouseover', () => {
  pp.style.visibility =  'visible'
  pp.style.color = 'white';
  pp.style.textShadow = 'black 5px 5px 5px';
  pp.style.transition = "all 1s";
  pp.style.transform = "scale(1.1)";
  info.style.transition = "all 1s";
  info.style.color = 'rgba(255, 255, 255, 0)'
  info.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';  });
kep.addEventListener('mouseout', () => {
  pp.style.visibility =  'hidden'
  pp.style.color = '';
  pp.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info.style.color = '';
  info.style.textShadow = 'black 5px 5px 5px';
  pp.style.transform = "scale(1)";});

kep3.addEventListener('mouseover', () => {
  pp3.style.visibility =  'visible'
  pp3.style.transition = 'all 1s';
  pp3.style.color = 'white';
  pp3.style.textShadow = 'black 5px 5px 5px';
  pp3.style.marginTop = '0px';
  pp3.style.transform = "scale(1.1)";
  info4.style.transition = "all 1s";
  info4.style.color = 'rgba(255, 255, 255, 0)'
  info4.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';  });
kep3.addEventListener('mouseout', () => {
  pp3.style.visibility =  'hidden'
  pp3.style.color = '';
  pp3.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info4.style.color = '';
  info4.style.textShadow = 'black 5px 5px 5px';
  pp3.style.transform = "scale(1)";});

kep4.addEventListener('mouseover', () => {
  pp4.style.visibility =  'visible'
  pp4.style.color = 'white';
  pp4.style.textShadow = 'black 5px 5px 5px';
  pp4.style.transition = "all 1s";
  pp4.style.transform = "scale(1.1)";
  info3.style.transition = "all 1s";
  info3.style.color = 'rgba(255, 255, 255, 0)'
  info3.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';  });
kep4.addEventListener('mouseout', () => {
  pp4.style.visibility =  'hidden'
  pp4.style.color = '';
  pp4.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info3.style.color = '';
  info3.style.textShadow = 'black 5px 5px 5px';
  pp4.style.transform = "scale(1)";});

kep2.addEventListener('mouseover', () => {
  pp2.style.visibility =  'visible'
  pp2.style.color = 'white';
  pp2.style.textShadow = 'black 5px 5px 5px';
  pp2.style.transition = "all 1s";
  pp2.style.transform = "scale(1.1)";
  info2.style.transition = "all 1s";
  info2.style.color = 'rgba(255, 255, 255, 0)'
  info2.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';});
kep2.addEventListener('mouseout', () => {
  pp2.style.visibility =  'hidden'
  pp2.style.color = '';
  pp2.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info2.style.color = '';
  info2.style.textShadow = 'black 5px 5px 5px';
  pp2.style.transform = "scale(1)";});

const fomenu = document.querySelector("#fomenu");
const tamogati = document.querySelector("#szoci")


