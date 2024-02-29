
/* TEVÉKENYSÉGEK */

// Térkép
const map = document.querySelector("#map");
const maphely = document.querySelector("#maphely")


//Kisképek

const keps = document.querySelector('#kep');
const keps2 = document.querySelector('#kep2');

    const kephely_1 = document.querySelector("#kephely_1");
    const kephely_2 = document.querySelector("#kephely_2");
    const kephely_3 = document.querySelector("#kephely_3");
    const kephely_4 = document.querySelector("#kephely_4");
    const kephely_5 = document.querySelector(".kephely_5");
    const kephely_6 = document.querySelector(".kephely_6");
    const kephely_7 = document.querySelector("#kephely_8");
    const kephely_8 = document.querySelector("#kephely_7");

 // Fő területek   
const isk2 = document.querySelector('#isk2');
const isk = document.querySelector('#isk');
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

const szoci2 = document.querySelector('#szoci2');
const erz = document.querySelector('#erz');            
const erz2 = document.querySelector('#erz2');
const akr = document.querySelector('#akr');            
const akr2 = document.querySelector('#akr2');

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
// Főkatergóriák
    taszo.addEventListener('click', function() {
        changeContent(tamopk, placeholder);
        changeContent(keps2, kephely_3);
    });
    ellint.addEventListener('click', function() {
        changeContent(szocik, placeholder);
        changeContent(keps, kephely_5);
        changeContent(keps2, kephely_6);
    });
    
    fejfog.addEventListener('click', function() {
        changeContent(fejfogk, placeholder);
        changeContent(keps2, kephely_1);
    });

    isknep.addEventListener('click',function() {
        changeContent(isknepk, placeholder);
        changeContent(keps, kephely_2);
    });
    tag.addEventListener('click',function() {
        changeContent(tagozatok, placeholder);});
     ter.addEventListener('click',function() {
        changeContent(terapiak, placeholder);});


const alcikktart3 = document.querySelector("#alcikktart3")    
const alcikktart2 = document.querySelector("#alcikktart2");
const alcikktart = document.querySelector("#alcikktart");
// Alkategóriák
    pszi.addEventListener('click',function() {
        changeContent(pszitart, alcikktart2);
    });
    tanak.addEventListener('click',function() {
        changeContent(tanaktart, alcikktart2);
        changeContent(keps, kephely_4);
    });
    ertak.addEventListener('click',function() {
        changeContent(ertaktart, alcikktart2);
    });
    
    fejnev.addEventListener('click',function() {changeContent(fejnevtart, alcikktart2);});
    gesztint.addEventListener('click',function() {changeContent(geszttart, alcikktart);});
    krisztint.addEventListener('click',function() {changeContent(kriszttart, alcikktart);});

//Al-al kategóriák
    // Pszihés
const belso_al = document.querySelector("#belsoalcikk");
    const egy = document.querySelector("#egy_belso");
        const egy_tart= document.querySelector("#egy_tart");
    const dis = document.querySelector("#dis_belso");
        const dis_tart=document.querySelector("#dis_tart");
    const bes = document.querySelector("#bes_belso");
        const bes_tart = document.querySelector("#bes_tart");
    const log = document.querySelector("#log_belso");
        const log_tart = document.querySelector("#log_tart");
    const moz = document.querySelector("#moz_belso");
        const moz_tart = document.querySelector("#moz_tart");
    const kon = document.querySelector("#kon_belso");
        const kon_tart = document.querySelector("#kon_tart");
    const gyo = document.querySelector("#gyo_belso");
        const gyo_tart = document.querySelector("#gyo_tart");
    const zen = document.querySelector("#zen_belso");
        const zen_tart = document.querySelector("#zen_tart"); 
    const lat = document.querySelector("#lat_belso");
        const lat_tart = document.querySelector("#lat_tart");       

egy.addEventListener('click', function() {
    changeContent(egy_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }
});
dis.addEventListener('click', function() {
    changeContent(dis_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
bes.addEventListener('click', function() {
    changeContent(bes_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
log.addEventListener('click', function() {
    changeContent(log_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
moz.addEventListener('click', function() {
    changeContent(moz_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
kon.addEventListener('click', function() {
    changeContent(kon_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
gyo.addEventListener('click', function() {
    changeContent(gyo_tart,belso_al)
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
zen.addEventListener('click', function() {
    changeContent(zen_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
lat.addEventListener('click', function() {
    changeContent(lat_tart,belso_al);
    if (window.innerWidth < 1000) {
        pszitart.style.gridTemplateColumns = '100%';
    } else {
        pszitart.style.gridTemplateColumns = '35% 65%';
    }});
    //Értelmikleg akadályoztatott
const belso_al_ert = document.querySelector("#belsoalcikk_ert")
    const nep = document.querySelector("#nep_belso");
        const nep_tart= document.querySelector("#nep_tart");    
    const ayr = document.querySelector("#ayr_belso");
        const ayr_tart= document.querySelector("#ayr_tart");
    const lov = document.querySelector("#lov_belso");
        const lov_tart= document.querySelector("#lov_tart");
    const sub = document.querySelector("#sub_belso");
        const sub_tart= document.querySelector("#sub_tart");
    const kez = document.querySelector("#kez_belso");
        const kez_tart= document.querySelector("#kez_tart");         
    const alt = document.querySelector("#alt_belso");
        const alt_tart= document.querySelector("#alt_tart");
    const on = document.querySelector("#on_belso");
        const on_tart= document.querySelector("#on_tart");  
    const moz2 = document.querySelector("#moz_belso2");
    const gyo2 = document.querySelector("#gyo_belso2");    
    const zen2 = document.querySelector("#zen_belso2");
    const bes2 = document.querySelector("#bes_belso2");
    const log2 = document.querySelector("#log_belso2");
    

sub.addEventListener('click', function() {
    changeContent(sub_tart,belso_al_ert);
     if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } 
});
nep.addEventListener('click', function() {
    changeContent(nep_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
ayr.addEventListener('click', function() {
    changeContent(ayr_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
lov.addEventListener('click', function() {
    changeContent(lov_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
kez.addEventListener('click', function() {
    changeContent(kez_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
alt.addEventListener('click', function() {
    changeContent(alt_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
on.addEventListener('click', function() {
    changeContent(on_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
moz2.addEventListener('click', function() {
    changeContent(moz_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
gyo2.addEventListener('click', function() {
    changeContent(gyo_tart,belso_al_ert)
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
zen2.addEventListener('click', function() {
    changeContent(zen_tart,belso_al_ert)
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
bes2.addEventListener('click', function() {
    changeContent(bes_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });
log2.addEventListener('click', function() {
    changeContent(log_tart,belso_al_ert);
    if (window.innerWidth < 1000) {
        ertaktart.style.gridTemplateColumns = '100%';
    } else {
        ertaktart.style.gridTemplateColumns = '35% 65%';
    } });

//Fejlesztő fogalkoztatás
const belso_al_fej = document.querySelector("#belsoalcikk_fej")
    const komm = document.querySelector("#komm_belso");
        const komm_tart= document.querySelector("#komm_tart");    
    const eszt = document.querySelector("#eszt_belso");
        const eszt_tart= document.querySelector("#eszt_tart");
    const erzi = document.querySelector("#erz_belso");
        const erzi_tart= document.querySelector("#erz_tart");
    const fej = document.querySelector("#fej_belso");
        const fej_tart= document.querySelector("#fej_tart");
    const szuk = document.querySelector("#szuk_belso");
        const szuk_tart= document.querySelector("#szuk_tart");         
    const reg = document.querySelector("#reg_belso");
        const reg_tart= document.querySelector("#reg_tart");
    const jat = document.querySelector("#jat_belso");
        const jat_tart= document.querySelector("#jat_tart");
    const hig = document.querySelector("#hig_belso");
        const hig_tart= document.querySelector("#hig_tart");      
    const moz3 = document.querySelector("#moz_belso3");
    const egy2 = document.querySelector("#egy_belso2");    
    const bes3 = document.querySelector("#bes_belso3");

komm.addEventListener('click', function() {
    changeContent(komm_tart,belso_al_fej);
    fejnevtart.style.gridTemplateColumns = '35% 65%'; 
});
reg.addEventListener('click', function() {
    changeContent(reg_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
eszt.addEventListener('click', function() {
    changeContent(eszt_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
erzi.addEventListener('click', function() {
    changeContent(erzi_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }
});
fej.addEventListener('click', function() {
    changeContent(fej_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
szuk.addEventListener('click', function() {
    changeContent(szuk_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
jat.addEventListener('click', function() {
    changeContent(jat_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
hig.addEventListener('click', function() {
    changeContent(hig_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
moz3.addEventListener('click', function() {
    changeContent(moz_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
egy2.addEventListener('click', function() {
    changeContent(egy_tart,belso_al_fej)
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});
bes3.addEventListener('click', function() {
    changeContent(bes_tart,belso_al_fej);
    if (window.innerWidth < 1000) {
        fejnevtart.style.gridTemplateColumns = '100%';
    } else {
        fejnevtart.style.gridTemplateColumns = '35% 65%';
    }});

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