"use strict";

$(function () {
  var listShop = [{
    area : '北海道・東北エリア',
    city : [{
      name : '札幌院',
      shop : [{
        name : "札幌院",
        address: "北海道札幌市中央区北四条西2丁目1-18<br>邦洋札幌N4・2ビル 2階",
        time: "10:00-20:00",
        station: "「地下鉄さっぽろ駅13番出口」徒歩1分<br>「JR札幌駅南口」徒歩4分",
        open: "",
        map: "!1m14!1m8!1m3!1d11659.248838641513!2d141.352472!3d43.066417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b294917698e61%3A0x5662b3e38d269ed9!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOacreW5jOmZog!5e0!3m2!1sja!2sjp!4v1691305530635!5m2!1sja!2sjp",
      }],
    },
    {
      name : '仙台院',
      shop : [{
        name : "仙台院",
        address: "宮城県仙台市青葉区中央3丁目1-3<br>aune仙台 4階",
        time: "10:00-20:00",
        station: "「仙台駅中央出口・北出口」徒歩3分",
        open: "",
        map: "!1m14!1m8!1m3!1d12531.291132959228!2d140.879226!3d38.260416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a2952058adfd1%3A0xb8fcd5af54cf347f!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOS7meWPsOmZog!5e0!3m2!1sja!2sjp!4v1691306013473!5m2!1sja!2sjp",
      },],
    },
    ]
  },

  {
    area : '東京エリア',
    city : [
      {
        name : '渋谷院',
        shop : [{
          name : "渋谷院",
          address: "東京都渋谷区宇田川町33-1<br>グランド東京渋谷ビル4階",
          time: "10:00-20:00",
          station: "「JR渋谷駅A2出口」徒歩2分",
          open: "",
          map: "!1m14!1m8!1m3!1d12966.63928748615!2d139.6974!3d35.660752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dafd536f55b%3A0x9eae576d9d15c18c!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOa4i-iwt-mZog!5e0!3m2!1sja!2sjp!4v1691306156945!5m2!1sja!2sjp",
        },],
      },
    {
      name : '銀座院',
      shop : [{
        name : "銀座院",
        address: "東京都中央区銀座5丁目9-11<br>銀座ファゼンダビル4階",
        time: "10:00-20:00",
        station: "「銀座駅A3出口」徒歩2分<br>「東銀座駅A1出口」徒歩2分<br>「JR有楽町銀座口」徒歩9分<br>「JR新橋駅銀座口」徒歩9分",
        open: "",
        map: "!1m14!1m8!1m3!1d3241.288445130157!2d139.765011!3d35.669899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188babcbcad7f7%3A0xff317a8fa57bfde0!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOmKgOW6p-mZog!5e0!3m2!1sja!2sjp!4v1691306074451!5m2!1sja!2sjp",
      },],
    },
    {
      name : '池袋院',
      shop : [{
        name : "池袋院",
        address: "東京都豊島区東池袋1丁目30−6<br>セイコーサンシャインビルⅫ 8F",
        time: "10:00-20:00",
        station: "「JR池袋駅東口」徒歩5分",
        open: "",
        map: "!1m14!1m8!1m3!1d809.6969698170915!2d139.716309!3d35.731435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d9c69b094a5%3A0xf4191977a886d984!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOaxoOiii-mZog!5e0!3m2!1sja!2sjp!4v1691306196538!5m2!1sja!2sjp",
      },],
    },
    {
      name : '上野院',
      shop : [{
        name : "上野院",
        address: "東京都台東区東上野2丁目18-6<br>常磐ビル地下1階",
        time: "10:00-20:00",
        station: "「各線上野駅3番出口」徒歩1分<br>「JR御徒町駅北口」徒歩6分<br>「大江戸線上野御徒町駅A8出口」徒歩4分",
        open: "",
        map: "!1m14!1m8!1m3!1d3239.65303225953!2d139.776942!3d35.710155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f1f951b8863%3A0xcf56d57b87b79cfe!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOS4iumHjumZog!5e0!3m2!1sja!2sjp!4v1691306222711!5m2!1sja!2sjp",
      },],
    },
    {
      name : '新宿院',
      shop : [{
        name : "新宿院",
        address: "東京都新宿区新宿4丁目2-23<br>新四curumuビル 地下1階",
        time: "10:00-20:00",
        station: "「新宿駅南東口」徒歩3分<br>新宿三丁目駅直通",
        open: "",
        map: "!1m14!1m8!1m3!1d3240.5221663951015!2d139.703047!3d35.688766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d1fb225cc13%3A0xa4bdeedf9b65868c!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv5paw5a6_6Zmi!5e0!3m2!1sja!2sjp!4v1691306244683!5m2!1sja!2sjp",
      },],
    },
    {
      name : '立川院',
      shop : [{
        name : "立川院",
        address: "東京都立川市柴崎町2丁目3-18<br>粂川第二ビル4F",
        time: "10:00-20:00",
        station: "「立川南駅1番出口」徒歩2分<br>「立川駅南口」徒歩4分",
        open: "",
        map: "!1m14!1m8!1m3!1d12960.764189579668!2d139.411035!3d35.696916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e12229a3c23b%3A0x2989c44b18f3e9f2!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv56uL5bed6Zmi!5e0!3m2!1sja!2sjp!4v1691306272711!5m2!1sja!2sjp",
      },],
    },
    ]
  },

  {
    area : '関東エリア',
    city : [{
      name : '千葉駅前院',
      shop : [{
        name : "千葉駅前院",
        address: "千葉県千葉市中央区富士見2丁目7-4<br>富士見ハイネスビル 5F",
        time: "10:00-20:00",
        station: "「JR千葉駅」徒歩5分",
        open: "",
        map: "!1m14!1m8!1m3!1d12974.829860661093!2d140.11762!3d35.610282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022859953909b11%3A0x1d9fd2492a7e9f32!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv5Y2D6JGJ6aeF5YmN6Zmi!5e0!3m2!1sja!2sjp!4v1691306449290!5m2!1sja!2sjp",
      }],
    },
    {
      name : '川崎院',
      shop : [{
        name : "川崎院",
        address: "神奈川県川崎市川崎区駅前本町26‐4<br>ラウンドクロス川崎 4F",
        time: "10:00-20:00",
        station: "「JR川崎駅中央東口」徒歩2分",
        open: "",
        map: "!1m14!1m8!1m3!1d12987.758278682044!2d139.696841!3d35.530491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018613593c2d0f1%3A0x8c995e9517048743!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv5bed5bSO6Zmi!5e0!3m2!1sja!2sjp!4v1691306419935!5m2!1sja!2sjp",
      }],
    },
    ]
  },

  {
    area : '中部エリア',
    city : [{
      name : '名古屋院',
      shop : [{
        name : "名古屋院",
        address: "愛知県名古屋市中村区名駅南1丁目16-28<br>NMF名古屋柳橋ビル地下1階",
        time: "10:00-20:00",
        station: "「各線名古屋駅広小路口」徒歩7分",
        open: "",
        map: "!1m14!1m8!1m3!1d13046.17865667827!2d136.888855!3d35.167975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037791051c5b87%3A0xc6d09dcc70c0f75!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv5ZCN5Y-k5bGL6Zmi!5e0!3m2!1sja!2sjp!4v1691306472315!5m2!1sja!2sjp",
      }],
    },]
  },

  {
    area : '関西エリア',
    city : [{
      name : '大阪梅田院',
      shop : [{
        name : "大阪梅田院",
        address: "大阪府大阪市北区鶴野町4-11<br>朝日プラザ梅田1階",
        time: "10:00-20:00",
        station: "「大阪梅田駅」徒歩6分<br>「中崎町駅」徒歩6分",
        open: "",
        map: "!1m14!1m8!1m3!1d13119.45648309658!2d135.501073!3d34.708607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7f453b9cb55%3A0xd4e54bde206dcf21!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOWkp-mYquaiheeUsOmZog!5e0!3m2!1sja!2sjp!4v1691306498055!5m2!1sja!2sjp",
      }],
    },
    {
      name : 'なんば心斎橋院',
      shop : [{
        name : "なんば心斎橋院",
        address: "大阪府大阪市中央区心斎橋筋2丁目5-5<br>Shinsaibashi GATE 8階",
        time: "10:00-20:00",
        station: "「なんば駅14番出口」徒歩2分",
        open: "",
        map: "!1m14!1m8!1m3!1d13125.648609170046!2d135.501034!3d34.669546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7756f4356d1%3A0x7472bd6fdb6681e5!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOOBquOCk-OBsOW_g-aWjuapi-mZog!5e0!3m2!1sja!2sjp!4v1691306519716!5m2!1sja!2sjp",
      },],
    },
    {
      name : '天王寺院',
      shop : [{
        name : "天王寺院",
        address: "大阪府大阪市阿倍野区阿倍野筋1丁目5-1<br>あべのルシアス 15F",
        time: "10:00-20:00",
        station: "「天王寺駅14番出口」徒歩3分",
        open: "",
        map: "!1m14!1m8!1m3!1d13129.296411879677!2d135.510906!3d34.646517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000dd2f69b0f161%3A0x83272c32c0e95f48!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv5aSp546L5a-66Zmi!5e0!3m2!1sja!2sjp!4v1691306542964!5m2!1sja!2sjp",
      },],
    },
    {
      name : '京都院',
      shop : [{
        name : "京都院",
        address: "京都府京都市下京区四条通麩屋町西入立売東町28番地<br>SAKIZO PLAZA地下1階",
        time: "10:00-20:00",
        station: "「京都河原町駅11番出口」徒歩30秒<br>「鳥丸駅13番出口」徒歩1分",
        open: "",
        map: "!1m18!1m12!1m3!1d3268.1197084270757!2d135.7656065!3d35.0037084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109b96505f21b%3A0x9dbccb9d9c5e8411!2z44OH44Kj44Kq44Kv44Oq44OL44OD44KvIOS6rOmDvemZog!5e0!3m2!1sja!2sjp!4v1691306566790!5m2!1sja!2sjp",
      },],
    },
    {
      name : '神戸三宮院',
      shop : [{
        name : "神戸三宮院",
        address: "兵庫県神戸市中央区元町通1丁目7-1<br>VEGAビル 5F",
        time: "10:00-20:00",
        station: "「元町駅東出口」徒歩3分<br>「阪神 神戸三宮駅A4出口」徒歩11分",
        open: "",
        map: "!1m14!1m8!1m3!1d13122.558936128211!2d135.189303!3d34.689041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008fcdafae7eb7%3A0x2ef537ae6b0ac96c!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv56We5oi45LiJ5a6u6Zmi!5e0!3m2!1sja!2sjp!4v1691306585259!5m2!1sja!2sjp",
      }],
    },]
  },

  {
    area : '中国・九州エリア',
    city : [{
      name : '広島院',
      shop : [{
        name : "広島院",
        address: "広島県広島市中区紙屋町2丁目3-20<br>ソシオスクエア紙屋町ビル 3F",
        time: "10:00-20:00",
        station: "「本通駅 西1出口」徒歩2分<br>「紙屋町西駅」徒歩4分",
        open: "",
        map: "!1m18!1m12!1m3!1d3292.302200932732!2d132.4560363!3d34.393664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa3412e946bfb%3A0xaa48c642165dd102!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv5bqD5bO26Zmi!5e0!3m2!1sja!2sjp!4v1691306605211!5m2!1sja!2sjp",
      }],
    },
    {
      name : '福岡天神院',
      shop : [{
        name : "福岡天神院",
        address: "福岡県福岡市中央区天神2丁目8-22<br>Gビル天神西通り01 3階",
        time: "10:00-20:00",
        station: "「天神駅3番出口」徒歩2分",
        open: "",
        map: "!1m14!1m8!1m3!1d13294.310538728723!2d130.396104!3d33.590314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419136b14ca31d%3A0xa29a2d4f962060af!2z44OH44Kj44Kq44Kv44Oq44OL44OD44Kv56aP5bKh5aSp56We6Zmi!5e0!3m2!1sja!2sjp!4v1691306631687!5m2!1sja!2sjp",
      }],
    },
  ]
  },
  ]

  var htmlListShop = '<ul>';
  $.each(listShop, function(key, area) {
    htmlListShop += '<li><h3 class="shop_ttl01 fs36 tac">'+ area.area +'</h3><div class="shop_area sec dn">';

    $.each(area.city, function(key, city) {
      htmlListShop += '<ul class="shop_ttl02 relative fs32 tac">' +'<h4>' + city.name +'</h4>';
      $.each(city.shop, function(key, value) {
        htmlListShop += '<li class="shop_info fs24 dn">';
        if(value.name) {
          htmlListShop += '<h5 class="fs28 tac mb15">' + value.name + '</h5>';
        }
        if(value.address) {
          htmlListShop += '<ul class="sec aic"><li>住所</li><li>' + value.address + '</li></ul>';
        }
        if(value.time) {
          htmlListShop += '<ul class="sec aic"><li>診療時間</li><li>' + value.time + '</li></ul>';
        }
        if(value.station) {
          htmlListShop += '<ul class="sec aic"><li>最寄り駅</li><li>' + value.station + '</li></ul>';
        }
        if(value.open) {
          htmlListShop += '<p class="shop_open fs34 tac">' + value.open + '</p>';
        }
        if(value.map) {
          htmlListShop += '<div id="map"><iframe src="https://www.google.com/maps/embed?pb=' + value.map + '" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>';
        }
        htmlListShop += '</li>';
      });
      htmlListShop += '</ul>';
    });
    htmlListShop += '</div></li>';
  });
  htmlListShop += '</ul>';
  $('#shop_list').append(htmlListShop);

  //アコーディオンをクリックした時の動作
  $('.shop_ttl02').on('click', function() {//タイトル要素をクリックしたら
    $('.shop_info').removeClass('active');//クラス名.shop_infoがついたすべてのアコーディオンを閉じる
      
    var findElm = $(this).next(".shop_info");//タイトル直後のアコーディオンを行うエリアを取得
      
    if($(this).hasClass('active')){//タイトル要素にクラス名activeがあれば
      $(this).removeClass('active');//クラス名を除去
    }else{//それ以外は
      $('.active').removeClass('active'); //クラス名activeを全て除去した後
      $(this).addClass('active');//クリックしたタイトルにクラス名activeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く
    }
  });
});