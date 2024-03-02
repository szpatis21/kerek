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
    const kephely_7 = document.querySelector("#kephely_8");
    const kephely_8 = document.querySelector("#kephely_7");

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
    setTimeout(function() {
        placeholder.scrollIntoView({ behavior: "smooth", inline: 'nearest'});
    }, 50);
};

const placeholder = document.querySelector("#placeholder");
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

const buttonContentPairs = {
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
    fej_belso: { content: komm_tart, placeholder: belso_al_fej},
    szuk_belso: { content: szuk_tart, placeholder: belso_al_fej},
    reg_belso: { content: reg_tart, placeholder: belso_al_fej},
    jat_belso: { content: jat_tart, placeholder: belso_al_fej},
    hig_belso: { content: hig_tart, placeholder: belso_al_fej},
    moz_belso3: { content: moz_tart, placeholder: belso_al_fej},
    egy_belso2: { content: egy_tart, placeholder: belso_al_fej},
    bes_belso3: { content: bes_tart, placeholder: belso_al_fej},
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
                });}
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