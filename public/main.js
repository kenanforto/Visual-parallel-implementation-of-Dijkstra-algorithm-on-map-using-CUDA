
var map = L.map('map').setView([43.856258, 18.413076], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
navigator.geolocation.watchPosition(success,error);

let marker;
let circle;
function success(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    //const acc=position.coords.accuracy;
    marker=L.marker([lat,lon]).addTo(map);
    circle=L.circle([lat,lon],{radius: 50}).addTo(map);
    map.fitBounds(circle.getBounds());
}
function error(err){
    if(err.code===1)
    {
        alert("Greska");
    }
}
let nizMarkera=[[43.8577301081,18.39132651346081],[43.855066875142626,18.392247883073775],[43.85427387794606,18.39251484969335],
[43.854935354385816,18.39434555446796],[43.85530670636418,18.39547834928383],[43.85554653662119,18.39654671974997],[43.85567031960226,18.398613667636734],
[43.85569739709513,18.401577187723742],[43.858838302829724,18.401280205194933],[43.85892339895894,18.403266622644544],[43.85862942999763,18.40427593745679],
[43.85811111277209,18.405338939227118],[43.8580569599662,18.40595097054942],[43.8580453557871,18.406756274920888],[43.855898543799974,18.406616804329893],
[43.85593722578082,18.407744230449953],[43.85637626450471,18.40906207210308],[43.85665670605055,18.409722421687693],[43.856795959293606,18.410028437348863],
[43.8570531901235,18.408714080111373],[43.858024081452875,18.40820942270523],[43.8580414877269,18.407546388772715],[43.857403254357486,18.407648393993103],
[43.85737617763922,18.40672727971853],[43.85678048672711,18.406711173631066],[43.85677661858485,18.407156775383285],[43.85682303627532,18.407763438009816],
[43.85587533459943,18.40572248660166],[43.85739745220461,18.40647549219558],[43.85748061634186,18.406303693929683],[43.85712088226272,18.389215714437682],
[43.856246680724205,18.384452008724384],[43.85485412083228,18.384741918298094],[43.85390251953595,18.384945928738873],[43.85268785191748,18.38532173744555],
[43.85370136609826,18.39061090817838],[43.859480388805736,18.390766193885874],[43.85940302941596,18.38853281642898],[43.854846384297616,18.390764670996177],
[43.85156600316005,18.385653672585285],[43.84971684087456,18.386254966515967],[43.84923713250614,18.386448239565134],[43.84751943541741,18.387049533495823],
[43.84880384421198,18.393728191083188],[43.84911333617183,18.39428653544741],[43.85090835787041,18.3936691740112],[43.85104762453696,18.394495953165936],
[43.851101783708366,18.395580429719494],[43.84944603823759,18.39482881230611],[43.84975552686519,18.396074349733983],[43.849709103673426,18.397009478220667],
[43.849647206028216,18.39790605042087],[43.84969362926814,18.398238909561083],[43.84991027057676,18.399065688715783],[43.85077295941058,18.400888855067752],
[43.85137257882762,18.401972270731893],[43.85204569279747,18.403362762946625],[43.85290061395635,18.40555319083701],[43.852970245004194,18.406573243040874],
[43.85360078912496,18.406492605741157],[43.85419264349146,18.406401337912385],[43.85473420443197,18.406392525521767],[43.85513263541227,18.40659116726674],
[43.853496343627,18.404965474825794],[43.85410367229515,18.40494400859812],[43.854111408926194,18.405437928612606],[43.853519553753465,18.403773632911594],
[43.853753588690545,18.40156629894794],[43.85381935040841,18.400785153707613],[43.85385029707406,18.400048395367833],[43.85380581123714,18.39876107624841],
[43.85370136609826,18.397730286652934],[43.85298958694751,18.392937140602346],[43.85837413998695,18.397994067054935],[43.85817300163292,18.393065604301547],
[43.846776632166765,18.3823806332534],[43.846830795216434,18.381306894091416],[43.846683781110045,18.380748549727233],[43.84839376489157,18.38015331321491],
[43.849244869768484,18.379849487777104],[43.85123137866886,18.379102719309284],[43.851328091142435,18.37964495758608],[43.851535055309014,18.3826334218178],
[43.85171493946853,18.37898547211301],[43.8527187991703,18.378561007199433],[43.85364527511483,18.38330747975319],[43.85393153199501,18.37814338039909],[43.85450597577804,18.381427764567366],
[43.85565484674369,18.381167303681625],[43.85564904442069,18.38116957308489],[43.855128767163116,18.378343530102462],[43.85501852195693,18.377771763998716],
[43.85458914394801,18.377841458655283],[43.85392379534066,18.377949553377416],[43.85391412452126,18.37693811460644],[43.85444988555144,18.376807002920454],
[43.854014700966125,18.37855375623948],[43.85368009021418,18.37378111181813],[43.85372070780443,18.37355562659412],[43.853852231240126,18.37344825267792],
[43.85432803418767,18.373317198741937],[43.85440926845782,18.373188350042504],[43.8544228074921,18.373003130037056],[43.85410754061079,18.371284362364346],
[43.85243253646891,18.371901443687868],[43.85266270726273,18.374121271071814],[43.852765220019435,18.375205856749723],[43.8527400753973,18.375613877631285],
[43.8528406538222,18.37698308970177],[43.85282711442873,18.377216627969492],[43.852627891569426,18.377740075810927],[43.85264916782885,18.378086356690655],
[43.85147315955878,18.37817005268499],[43.85121010190362,18.377305692659636],[43.85102441344844,18.376221216106078],[43.85096251716825,18.375028751815805],
[43.85135130211277,18.37488336283427],[43.851877415017235,18.37469590550897],[43.852393852214654,18.374516210338307],[43.85237837850596,18.37419408858971],
[43.85259114164889,18.375654373849983],[43.85087740967812,18.373798539739557],[43.85064529772404,18.372595951878186],[43.84989866481231,18.37284326694117],
[43.84957757110055,18.372939903465756],[43.84855238081213,18.37315465129815],[43.84730278542481,18.373542904271602],[43.847184788222854,18.373650278187803],
[43.847182853840536,18.3739079755867],[43.847726412800334,18.376738903875808],[43.84802817293158,18.378265765250063],[43.84655224186561,18.38136440538486],
[43.84659479871172,18.38286227151579],[43.84631237543783,18.38435476895087],[43.8460918522258,18.385589568987132],[43.845592770367205,18.387091067117122],
[43.84554634393553,18.388062801058677],[43.845987393577666,18.39019417329518],[43.84639748944197,18.391125443142375],[43.84721767271244,18.392440773615757],
[43.8474459292581,18.393101123200367],[43.84750976355952,18.394105839358158],[43.847449798005606,18.39579022371883],[43.8476587099971,18.396654667283798],
[43.84851756271934,18.396453448135418],[43.84869939031308,18.396601087270174],[43.84887348004297,18.39714332554697],[43.84903402901016,18.397751019159404],
[43.84903402901016,18.397751019159404],[43.84885220243659,18.398000100986486],[43.848772894927684,18.398979887971795],[43.84876515760409,18.399342274938945],
[43.848977933637016,18.400257637574516],[43.849097861611995,18.400590451798017],[43.849382206008386,18.401092424856255],[43.85044993612929,18.40246681098356],
[43.8507439454149,18.402319167570987],[43.85162016186071,18.40388873895605],[43.851328091142435,18.404302804504574],[43.85063175783218,18.403441128827126],
[43.85110952072884,18.404686065226898],[43.85147315955878,18.405103163680472],[43.85166851780188,18.40544139151645],[43.851877415017235,18.405747150510813],
[43.85243640489294,18.40619275226303],[43.85265883885336,18.406244323858942],[43.852954771445035,18.40623627081523],[43.851815519622306,18.406464401887106],
[43.85195478417055,18.40680531407103],[43.85222170697909,18.406644253196752],[43.85246928648715,18.406308709708636],[43.85475354580317,18.409386970171848],
[43.8550359291083,18.410013618914142],[43.8558134433538,18.409052622364207],[43.8558018387381,18.409782764994322],[43.85571673815392,18.40663259394355],
[43.85580570694359,18.40945952246738],[43.85626602160483,18.40937899203026],[43.85627762613021,18.409121478575898],[43.8558018387381,18.41044843194137],
[43.85629309882721,18.410244421500625],[43.85554073428766,18.411190210337875],[43.85580570694359,18.411249265991803],[43.85631824195122,18.411072203835705],
[43.85657160668637,18.410956776875796],[43.85703384949819,18.4105006409265],[43.85582311386517,18.411743055534014],[43.85601265557128,18.41244367033719],
[43.85621766939147,18.412996646005606],[43.85638980309239,18.412894640785215],[43.857714635733586,18.41223903534052],[43.857985400825804,18.412161189251304],
[43.857664350652485,18.41177732750088],[43.856343385064676,18.411919837495525],[43.857211783014506,18.411517185309812],[43.85742066081272,18.411315859216934],
[43.853407371391874,18.409040841194248],[43.85462976091909,18.411757401274013],[43.8556200327972,18.41341095958341],[43.85824262652456,18.412289710659582],
[43.85848631300504,18.413363967432918],[43.85871065840816,18.41433570137451],[43.85886924689076,18.414942364001003],[43.858962078977534,18.415463127494576],
[43.857716569774304,18.41372390365982],[43.85795639033902,18.414673245635974],[43.857144090978494,18.41396528348631],[43.8573839138457,18.41491462546246],
[43.85642848475454,18.414163733503926],[43.856455561903125,18.415311525497696],[43.85751542920208,18.415388168125663],[43.857643076182335,18.415892825531767],
[43.85704351981162,18.416292793369617],[43.85649037536182,18.416351849023503],[43.85652325472081,18.417691801573298],[43.85817880371033,18.417356572501998],
[43.85893500296716,18.417174036844447],[43.847120953573686,18.37353591165116],[43.84705325008324,18.372989264111848],[43.84691397408984,18.37219072996124],
[43.84684240157783,18.371817187533292],[43.847614219541704,18.37150510509248],[43.848213870715114,18.371293413153264],[43.84815197151815,18.37091538322766],
[43.84667797791419,18.370968983816308],[43.84682886082264,18.370706378625837],[43.84682499203491,18.370293713326543],[43.847343407358366,18.37008704476484],
[43.84794886432703,18.36985374386484],[43.84791404588196,18.36956918354469],[43.847987551464364,18.369223509365412],[43.848130693654376,18.36874385294607],
[43.84813456235746,18.36847856811081],[43.848020435511394,18.367918522347487],[43.84796820789884,18.367596539311855],[43.84789470229259,18.36714367934053],
[43.84897599931286,18.366860175517555],[43.849086255689464,18.366959322375195],[43.84929709626319,18.36690304983437],[43.84959304553594,18.37010364064579],
[43.849678154858836,18.370650288185146],[43.84977873844753,18.371593523154953],[43.84984837314031,18.37249924309756],[43.85044413329984,18.371984751295837],
[43.85016559682313,18.37150241523175],[43.84996443078097,18.37102543845723],[43.84985611032338,18.37051630594512],[43.84984643884438,18.36676264667915],
[43.85002052522631,18.36767640555615],[43.85009789678853,18.367992603642623],[43.850262311024956,18.368855449268416],[43.85031066806706,18.369211842026917],
[43.85038223641745,18.369662022353417],[43.85044800185285,18.369900510740653],[43.85061048085304,18.370679182160398],[43.85093737178607,18.37059929283816],
[43.85078843353582,18.372424766872534],[43.85082131603865,18.372218434222887],[43.8509122263933,18.371717340645176],[43.8540263059296,18.370425741635312],
[43.85399535935527,18.36981478262077],[43.85389865120701,18.368785799017328],[43.85383675790982,18.368534299602434],[43.85374004950434,18.368319928018387],
[43.85364140676922,18.36829482399269],[43.85322362396439,18.368380572626283],[43.85209211417054,18.368523060487714],[43.852161746162366,18.36940028386737],
[43.85235516793534,18.371284889582334],[43.850923831960515,18.371324971428937],[43.85046734461418,18.369167570172458],[43.85048668736925,18.36879777918994],
[43.85049055591951,18.368448061203893],[43.85042479053101,18.368091668445388],[43.850378367860145,18.367893374730137],[43.85095284586869,18.367679003146094],
[43.850871606890266,18.36649192049943],[43.85079810486207,18.366473162985812],[43.850635626373034,18.366529435526637],[43.85098959679873,18.368656978622415],
[43.85095864864862,18.366431101565826],[43.850991531057595,18.366353391866586],[43.851618227622254,18.366077388452144],[43.85169559711182,18.365969751358385],
[43.85182712501373,18.365894721303977],[43.85186967809638, 18.36606889821603],[43.85194317880396,18.366639662558537],[43.852014745195355,18.367424798485132],
[43.85204762702208,18.367928571707672],[43.85173041334938,18.371022651074547],[43.85176909803393,18.371070884680936],[43.85196058685301,18.372081110770797],
[43.85907038289612,18.386439888487786],[43.85866811020693,18.384862703431146],[43.85742259486299,18.380920748525853],[43.8565600022182,18.378372008908133],
[43.85578249770689,18.376046077221204],[43.855515590835786,18.375110047857024],[43.855302838126356,18.37405962709517],[43.85515584490188, 18.370940520547247],
[43.85512103066407,18.370163423555052],[43.85488119869575,18.369102233011496],[43.854300956073004,18.36731035327986],[43.8542197216553,18.366886969401346],
[43.85410754061079,18.365740081426676],[43.85394893946368,18.365086248095317],[43.85379420623074,18.36506481093695],[43.85364334094205,18.364925469407314],
[43.85811111277209,18.38300777381772],[43.859480388805736,18.389497806773452],[43.85744193536223,18.403404737424676],[43.85750189086997,18.403461009965504],
[43.85753090157789,18.403356503818287],[43.85764887831133,18.403270755184653],[43.85750189086997,18.40540466274203],[43.855709001731164,18.39986710887118],
[43.85569352888259,18.3994062099655],[43.85578636591365,18.399524114336725],[43.855794102326364,18.39967685409033],[43.85587146639845,18.39958842581191],
[43.856186723954345,18.399566988653504],[43.85629890108754,18.39950522604819],[43.85639367125974,18.399387321676965],[43.856573540764174,18.39909792003847],
[43.85775525057578,18.398888412850674],[43.85784034825074,18.39882946066506],[43.85787709493645,18.398719595228233],[43.85804728981711,18.39785591623279],
[43.858147859290966,18.397791604757607],[43.8582658348037,18.39783715871921],[43.858465038828164,18.3992314689263],[43.85873966852796,18.400951800888308],
[43.85877641465946,18.401308193646774]
];
for(let i=0;i<nizMarkera.length;i++)
{
    L.marker(nizMarkera[i]).addTo(map);
}



var firstNode=null; //ovo saljemo kao prvu tacku u c++
var lastNode=null; //ovo saljemo kao drugu tacku u c++
var shortNiz=[];

function findNearestMarker(markerMap)
{
    let nearestMarker=null;
    let maxDistance=20;
    
    nizMarkera.forEach( marker=> {
        let distance=markerMap.distanceTo([marker[0],marker[1]]);
        if(distance<maxDistance)
        {
            nearestMarker=marker;
            maxDistance=distance;
        }
    });
    
    return nearestMarker;
}
function findIndex(cord)
{
    let index;
    for(let i=0;i<nizMarkera.length;i++)
    {
        if(nizMarkera[i]===cord)
        {
            index=i;
            break;
        }
    }
    return index;
}
function sendNodes(cord1,cord2)
{
    console.log(cord1,cord2);
    fetch('/primi-koordinate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({ cord1,cord2 }),
    })
    .then(response => response.json())
    .then(async data => {
        console.log('Odgovor od servera:', data.data);
        await data.data.forEach(marker =>
            {
                shortNiz.push(marker);
            }
            );
            let nodes=returnCord(shortNiz);
            // console.log("proba: "+nodes);
            createPolyline(nodes);
        })
        .catch(error => {
            console.error('Greška prilikom slanja zahtjeva:', error);
        });
}
function returnCord(data)
{
    var niz=[];
    for(let i=0;i<data.length;i++)
    {
        niz.push(nizMarkera[data[i]]);
    }
    // console.log(niz);
    return niz;
}

function onMapClick(e){
    mark=e.latlng;
    // console.log(mark);
    mark=findNearestMarker(mark);
    // console.log(mark);
    if(firstNode)
    {
        lastNode=mark;
        let first;
        let last;
        first=findIndex(firstNode);
        last=findIndex(lastNode);
        sendNodes(first,last); 
    }  
    else
    {
        firstNode=mark;
    }
}
function createPolyline(nizNodov) {
    for(let i=0;i<nizNodov.length;i++)
    {   
        if(i>0)
        {
            L.polyline([nizNodov[i-1], nizNodov[i]], {

                color: 'red',
                weight: 8,
                opacity: 0.6,
                smoothFactor: 1
            }).addTo(map);
        }
    }
}
// function toRadians(degrees) {
//     return degrees * (Math.PI / 180);
//   }
  
// function calculateDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371; // Zemljina srednji radijus u kilometrima
  
//     // Konvertuj koordinate u radijane
//     const lat1Rad = toRadians(lat1);
//     const lon1Rad = toRadians(lon1);
//     const lat2Rad = toRadians(lat2);
//     const lon2Rad = toRadians(lon2);
  
//     // Razlika u koordinatama
//     const deltaLat = lat2Rad - lat1Rad;
//     const deltaLon = lon2Rad - lon1Rad;
  
//     // Haversin formula za udaljenost
//     const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
//               Math.cos(lat1Rad) * Math.cos(lat2Rad) *
//               Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
//     // Udaljenost u kilometrima
//     const distance = R * c;
  
//     return distance*1000;
//   }
// function onMapClick(e) //////// TRENUTNA FUNKCIJA ZA POPUP ID-a
// {
//     map.closePopup();
//     mark=e.latlng;
//     mark=findNearestMarker(mark);
//     let broj=0;
//     for(let i=0;i<nizMarkera.length;i++)
//     {
//         if(nizMarkera[i]===mark)
//         {
//             broj=i;
//             break;
//         }
//     }
//     let distance=0;
//     if(!firstNode)
//     {
//         firstNode=mark;
//     }
//     else
//     {
//         lastNode=mark;
//         distance=calculateDistance(firstNode[0],firstNode[1],lastNode[0],lastNode[1]);
//     }
//     var tempmarker=L.marker(mark).addTo(map);
//     tempmarker.bindPopup("ID: "+broj+" udaljenost "+distance);
//     distance=0;
//     console.log(mark);
//     if(lastNode)
//     {
//         firstNode=null;
//         lastNode=null;
//     }
//     // tempmarker.remove();
// }
map.on('click',onMapClick);