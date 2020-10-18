//模拟数据
const banners = [
  {name:'1',path:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=146582959,1387686334&fm=26&gp=0.jpg',link: ''},
  {name:'2',path:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3229832838,1229290198&fm=26&gp=0.jpg',link: ''},
  {name:'3',path:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1853702120,4241269966&fm=26&gp=0.jpg',link: ''},
  {name:'4',path:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1456110616,1460448780&fm=26&gp=0.jpg',link: ''}
]

const recommends = [
  {title: '十点抢券',path:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=827361466,1751132309&fm=15&gp=0.jpg',link:''},
  {title: '好物特卖',path:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1839956931,708452285&fm=26&gp=0.jpg',link:''},
  {title: '内购福利',path:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1740333367,565958372&fm=26&gp=0.jpg',link:''},
  {title: '初秋上新',path:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2231944327,1768481979&fm=15&gp=0.jpg',link:''},
]

const popList = [
  {id:1,title:"2020流行秋季韩版百搭文艺女青年",price:"128.89",cfav: "2231",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1383796611,3922914997&fm=26&gp=0.jpg"},
  {id:2,title:"2020流行秋季流行外套可爱女孩",price:"228.99",cfav: "5000",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1181851952,492696435&fm=26&gp=0.jpg"},
  {id:3,title:"2020流行秋季可爱女孩外套衣服",price:"200.00",cfav: "1278",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1927787954,2589280807&fm=26&gp=0.jpg"},
  {id:4,title:"2020流行秋季韩版百搭文艺女青年",price:"67.89",cfav: "6890",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2528151148,2376651278&fm=26&gp=0.jpg"},
  {id:5,title:"2020流行秋季韩版百搭文艺女青年",price:"99.89",cfav: "1321",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3899161469,3982926278&fm=26&gp=0.jpg"},
  {id:6,title:"2020流行秋季韩版百搭文艺女青年",price:"542.89",cfav: "896",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2206313685,2556912469&fm=26&gp=0.jpg"},
  {id:7,title:"2020秋冬流行季职业装女装套装",price:"34.89",cfav: "5343",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1236748717,2837803954&fm=26&gp=0.jpg"},
  {id:8,title:"2020流行秋季韩版百搭文艺女青年",price:"132.89",cfav: "1211",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1562890457,600657732&fm=26&gp=0.jpg"},
  {id:9,title:"2020流行秋季韩版百搭文艺女青年",price:"88.88",cfav: "7686",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2703303823,3552726963&fm=26&gp=0.jpg"},
  {id:10,title:"2020流行秋季韩版百搭文艺女青年",price:"67.89",cfav: "3422",path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1585266038,3955547922&fm=26&gp=0.jpg"},
  {id:11,title:"秋季品牌职业套装女装时尚女士ol正装西服小西装免费代理",price:"228.00",cfav: "21231",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3710673319,1766670976&fm=26&gp=0.jpg"},
  {id:12,title:"2020秋季流行新品女装韩版时尚淑女修身气质网纱两件套套装连",price:"332.89",cfav: "6565",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3605345053,2960879638&fm=26&gp=0.jpg"},
  {id:13,title:"2020流行款时尚女装连衣裙",price:"222.89",cfav: "2651",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1575613470,1912712132&fm=26&gp=0.jpg"},
  {id:14,title:"2020流行秋季韩版百搭文艺女青年",price:"128.89",cfav: "2231",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3024830613,1333691851&fm=26&gp=0.jpg"},
  {id:15,title:"2020流行秋季韩版百搭文艺女青年",price:"232.00",cfav: "7896",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2571728842,2288690582&fm=26&gp=0.jpg"},
  {id:16,title:"2020流行秋季韩版百搭文艺女青年",price:"98.89",cfav: "678",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=18618171,1934073196&fm=26&gp=0.jpg"},
  {id:17,title:"2020新款秋季流行韩版百搭文艺女青年",price:"99.89",cfav: "421",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=658800842,216783559&fm=26&gp=0.jpg"},
  {id:18,title:"2020新款秋季流行韩版百搭文艺女青年",price:"213.89",cfav: "22231",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2557457320,4267002774&fm=26&gp=0.jpg"},
  {id:19,title:"小样传奇小香风v领连衣..",price:"228.00",cfav: "2231",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=873568383,1633231763&fm=11&gp=0.jpg"},
  {id:20,title:"打底衫女装长袖中长款2020新款",price:"66.66",cfav: "666",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1900243132,1205648421&fm=26&gp=0.jpg"},
  {title:"小样传奇小香风v领连衣..",price:"228.00",cfav: "2231",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=873568383,1633231763&fm=11&gp=0.jpg"},
  {title:"秋装新款韩版小西装女装可爱职业套装黄",price:"122.99",cfav: "5000",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924577861,3473756156&fm=26&gp=0.jpg"},
  {title:"打底衫女装长袖中长款2020新款",price:"66.66",cfav: "666",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1900243132,1205648421&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"122.00",cfav: "342",path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3109158389,3379614315&fm=11&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"89.89",cfav: "6743",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4121544547,1461194840&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"212.12",cfav: "1222",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1691896298,2997502857&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"67.89",cfav: "7841",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1719755675,219883970&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"78.89",cfav: "3421",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=493313578,378976054&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"128.00",cfav: "7843",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494126448,2421220903&fm=15&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"129.00",cfav: "236",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2779301190,2811444903&fm=26&gp=0.jpg"},

];
const newsList = [
  {title:"小样传奇小香风v领连衣..",price:"228.00",cfav: "2231",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=873568383,1633231763&fm=11&gp=0.jpg"},
  {title:"秋装新款韩版小西装女装可爱职业套装黄",price:"122.99",cfav: "5000",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924577861,3473756156&fm=26&gp=0.jpg"},
  {title:"打底衫女装长袖中长款2020新款",price:"66.66",cfav: "666",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1900243132,1205648421&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"122.00",cfav: "342",path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3109158389,3379614315&fm=11&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"89.89",cfav: "6743",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4121544547,1461194840&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"212.12",cfav: "1222",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1691896298,2997502857&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"67.89",cfav: "7841",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1719755675,219883970&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"78.89",cfav: "3421",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=493313578,378976054&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"128.00",cfav: "7843",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494126448,2421220903&fm=15&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"129.00",cfav: "236",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2779301190,2811444903&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"321.89",cfav: "673",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1944448277,3687095284&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"213.00",cfav: "2323",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3543741290,1636655881&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"125.89",cfav: "987",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2945954440,239428405&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"68.78",cfav: "3233",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2877656536,733447604&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"98.89",cfav: "2122",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1362704343,58071893&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"99.00",cfav: "6571",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=337554971,2739289174&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"128.28",cfav: "2312",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3700601154,2869981119&fm=15&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"222.00",cfav: "1254",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4058837643,1410972580&fm=26&gp=0.jpg"},
  {title:"2020流行秋季流行外套可爱女孩",price:"228.99",cfav: "5000",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1181851952,492696435&fm=26&gp=0.jpg"},
  {title:"秋季品牌职业套装女装时尚女士ol正装西服小西装免费代理",price:"228.00",cfav: "21231",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3710673319,1766670976&fm=26&gp=0.jpg"},
  {title:"与牧衬衣长袖女装2017秋季新款中长百搭白色衬衫打底上衣...",price:"212.89",cfav: "2222",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2174758562,2045519879&fm=26&gp=0.jpg"},
  {title:"2020新款秋季流行外套可爱女孩",price:"123.99",cfav: "5000",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3712769733,1032907939&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"67.00",cfav: "1211",path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3328987881,1645719017&fm=26&gp=0.jpg"},
  {title:"kesuoer2020新款秋装经典v领点点衫修身优雅气质...",price:"88.89",cfav: "898",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3799766629,1590915460&fm=26&gp=0.jpg"},
  {title:"卡玛kama 专柜新款秋季韩版",price:"99.89",cfav: "343",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3733345944,923469357&fm=26&gp=0.jpg"},
  {title:"热卖针织衫开衫秋季女...",price:"77.00",cfav: "980",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2779192381,1822002728&fm=26&gp=0.jpg"},
  {title:"格蓝凯 2014秋款套...",price:"231.89",cfav: "23",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3716675391,1064842164&fm=26&gp=0.jpg"},
  {title:"套头毛衣女宽松韩版潮...",price:"111.00",cfav: "44",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3431645427,1588072412&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"78.89",cfav: "654",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=298205558,2268716488&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"88.89",cfav: "667",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2583523630,1513838353&fm=26&gp=0.jpg"},
];
const sellList = [
  {title:"与牧衬衣长袖女装2017秋季新款中长百搭白色衬衫打底上衣...",price:"212.89",cfav: "2222",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2174758562,2045519879&fm=26&gp=0.jpg"},
  {title:"2020新款秋季流行外套可爱女孩",price:"123.99",cfav: "5000",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3712769733,1032907939&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"67.00",cfav: "1211",path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3328987881,1645719017&fm=26&gp=0.jpg"},
  {title:"kesuoer2020新款秋装经典v领点点衫修身优雅气质...",price:"88.89",cfav: "898",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3799766629,1590915460&fm=26&gp=0.jpg"},
  {title:"卡玛kama 专柜新款秋季韩版",price:"99.89",cfav: "343",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3733345944,923469357&fm=26&gp=0.jpg"},
  {title:"热卖针织衫开衫秋季女...",price:"77.00",cfav: "980",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2779192381,1822002728&fm=26&gp=0.jpg"},
  {title:"格蓝凯 2014秋款套...",price:"231.89",cfav: "23",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3716675391,1064842164&fm=26&gp=0.jpg"},
  {title:"套头毛衣女宽松韩版潮...",price:"111.00",cfav: "44",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3431645427,1588072412&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"78.89",cfav: "654",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=298205558,2268716488&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"88.89",cfav: "667",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2583523630,1513838353&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"69.89",cfav: "874",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1371590224,789289303&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"68.88",cfav: "342",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=102618683,618239667&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"312.00",cfav: "12111",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1171350179,2987420836&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"98.89",cfav: "453",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1255012741,3794896450&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"88.00",cfav: "786",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1825751963,4142479828&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"136.89",cfav: "99",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2012132969,76444159&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"166.00",cfav: "100",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1585497489,3845482048&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"132.00",cfav: "232",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3025545472,3349170149&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"122.00",cfav: "896",path:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=137424921,903262557&fm=26&gp=0.jpg"},
  {title:"专柜正品代购秋冬款卓雅 半...",price:"99.99",cfav: "342",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2615604431,1445715684&fm=26&gp=0.jpg"},
  {title:"小样传奇小香风v领连衣..",price:"228.00",cfav: "2231",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=873568383,1633231763&fm=11&gp=0.jpg"},
  {title:"秋装新款韩版小西装女装可爱职业套装黄",price:"122.99",cfav: "5000",path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924577861,3473756156&fm=26&gp=0.jpg"},
  {title:"打底衫女装长袖中长款2020新款",price:"66.66",cfav: "666",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1900243132,1205648421&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"122.00",cfav: "342",path:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3109158389,3379614315&fm=11&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"89.89",cfav: "6743",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4121544547,1461194840&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"212.12",cfav: "1222",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1691896298,2997502857&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"67.89",cfav: "7841",path:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1719755675,219883970&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"78.89",cfav: "3421",path:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=493313578,378976054&fm=26&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"128.00",cfav: "7843",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494126448,2421220903&fm=15&gp=0.jpg"},
  {title:"2020新款秋季韩版百搭文艺女青年",price:"129.00",cfav: "236",path:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2779301190,2811444903&fm=26&gp=0.jpg"},

];
function getGoodsList(type,page){
  if (type=="pop") {
    return popList;
  } else if (type=="news") {
    return newsList
  } else if (type=="sell") {
    return sellList
  }
}

export {
  banners,recommends,getGoodsList
}
