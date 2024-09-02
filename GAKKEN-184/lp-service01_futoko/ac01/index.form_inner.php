<?php if(!(function_exists('_h'))):exit;endif;
?>

          <?php /*
          <dl class="hpckbox clearfix">
            <dt class="aj fwb mb10"><span>ご希望の内容を選択してください。</span><span class="hs">必須</span></dt>
            <dd class="aj f_bb">
              <div>
<?php
if(isset($_POST['confirm_x'])):
    _h(implode('/',$dt['hope_title']));
else:
?>
                <ul class="bgon is-require is-ver2 clearfix">
<?php
$labelid=1;
foreach(array(
    "資料請求(お問合せ)",
    "学習相談",
    "体験指導",
    "入会希望",
    //"大学入試 共通テスト説明会 参加希望",
    //"高校入試問題傾向説明会 参加希望",
    //"中学受験 親の会 参加希望",
    //"思考探求ゼミ(小４～小６) 参加希望",
    ) as $k=>$v):
?>
<li><input class="is-checkbox validate[required]" data-errormessage-value-missing="ご希望の内容を選択して下さい。"
name="hope_title[]" type="checkbox" value="<?php _h($v); ?>" id="fmcate1_<?php _h($k); ?>"<?php
    if(in_array($v,$dt['hope_title'])): ?> checked="checked"<?php
    endif;
?>><label class="checkbox01"
for="fmcate1_<?php _h($k); ?>"><?php _h($v); ?></label></li>
<?php
endforeach;
?>
                </ul>
<?php if(!(empty($dt["err"]["hope_title"]))): ?><div class="error_text"><?php _h($dt['err']['hope_title']); ?></div><?php endif; ?>
<?php
endif;
?>
              </div>

            </dd>
          </dl>
          */ ?>
<?php
/*
error_field
error_text
*/
?>

          <div class="com_tbbox">
            <table summary="フォーム">
              <tbody>
                <tr id="fmhide_3">
                  <th class="mb10">
                    <div>学習目的<span class="hs">必須</span><span class="fs18 fwn">複数選択可能</span></div>
                  </th>
                  <td class="clm2 bgon is-require f_bb">
<?php
if(isset($_POST['confirm_x'])):
    _h(implode('/',$dt['purpose']));
else:
?>
                    <ul class="clearfix fl_l">
<?php
foreach(array(
    //"1" => "苦手克服",
    //"2" => "習慣づけ",
    "3" => "学校補習",
    //"4" => "内部進学対策",
    "5" => "受験対策",
    "6" => "不登校",
    //"7"=>"プロ家庭教師",
    //"8"=>"オンライン授業",
) as $k=>$v):
?>
<li class="dt3"><input class="is-checkbox validate[required]"
id="purpose<?php _h($k); ?>" type="checkbox" name="purpose[]" value="<?php _h($v); ?>"<?php
    if(in_array($v,$dt['purpose'])): ?> checked="checked"<?php
    endif;
?>><label class="checkbox01" for="purpose<?php _h($k); ?>"><?php _h($v); ?></label></li>
<?php
endforeach;
?>
                    </ul>
<?php if(!empty($dt["err"]["purpose"])): ?><div class="error_text"><?php _h($dt["err"]["purpose"]); ?></div><?php endif; ?>
<?php
endif;
?>

                  </td>
                </tr>

                <?php /*
                <tr>
                  <th class="mb10">
                    <div>ご希望のご連絡方法<span class="hs">必須</span></div>
                  </th>
                  <td class="<?php if($dt["method"]!="電話"): ?>clm2 bgon is-require f_bb<?php else: ?>mb30<?php endif; ?>">
<?php
if(isset($_POST['confirm_x'])):
    _h($dt['method']);
else:
?>
                    <ul class="clearfix fl_l">
<?php
foreach(array(
    "1" => "電話",
    "2" => "メール",
    //"3" => "LINE",
) as $k=>$v):
?>
<li class="dt3"><input class="is-radio validate[required]"
id="method<?php _h($k); ?>" type="radio" name="method" value="<?php _h($v); ?>"<?php
    if($v==$dt['method']): ?> checked="checked"<?php
    endif;
?>><label class="radio01" for="method<?php _h($k); ?>"><?php _h($v); ?></label></li>
<?php
endforeach;
?>
                    </ul>
<?php if(!empty($dt["err"]["method"])): ?><div class="error_text"><?php _h($dt["err"]["method"]); ?></div><?php endif; ?>
<?php
endif;
?>

                  </td>
                </tr>

                <tr id="fmhide_6" <?php if($dt["method"]!="電話"): ?>style="display: none;"<?php endif; ?>>
                  <th class="mb10">
                    <div>ご希望の時間帯<span class="hs">必須</span></div>
                  </th>
                  <td class="clm2 bgon is-require f_bb">
<?php
if(isset($_POST['confirm_x'])):
    _h($dt['method_time']);
else:
?>
                    <select class="wid1 is-require validate[required]"
name="method_time" id="method_time">
                      <option value="">選択してください</option>
<?php
foreach(array(
    "1" => "9時～12時",
    "2" => "12時～15時",
    "3" => "15時～18時",
    "4" => "18時～21時",
    "5" => "指定なし",
) as $k=>$v):
?>
<option value="<?php _h($v); ?>"<?php
    if($v==$dt['method_time']): ?> selected="selected"<?php
    endif;
?>><?php _h($v); ?></option>
<?php
endforeach;
?>
                    </select>
<?php if(!empty($dt["err"]["method_time"])): ?><div class="error_text"><?php _h($dt["err"]["method_time"]); ?></div><?php endif; ?>
<?php
endif;
?>

                  </td>
                </tr>
                */ ?>

                <tr>
                  <th class="mb10">
                    <div>お子様の学年<span class="hs">必須</span></div>
                  </th>
                  <td class="mb30">
<?php
if(isset($_POST['confirm_x'])):
    _h($dt['school_year']);
else:
?>
                    <select class="wid1 is-require validate[required]"
name="school_year" id="school_year">
                      <option value="">選択してください</option>
<?php
foreach(array(
//    "1" => "幼児",
    "15" => "年少",
    "16" => "年中",
    "17" => "年長",
    "2" => "小学1年生",
    "3" => "小学2年生",
    "4" => "小学3年生",
    "5" => "小学4年生",
    "6" => "小学5年生",
    "7" => "小学6年生",
    "8" => "中学1年生",
    "9" => "中学2年生",
    "10" => "中学3年生",
    "11" => "高校1年生",
    "12" => "高校2年生",
    "13" => "高校3年生",
    "14" => "その他",
) as $k=>$v):
?>
<option value="<?php _h($v); ?>"<?php
    if($v==$dt['school_year']): ?> selected="selected"<?php
    endif;
?>><?php _h($v); ?></option>
<?php
endforeach;
?>
                    </select>
<?php if(!empty($dt["err"]["school_year"])): ?><div class="error_text"><?php _h($dt["err"]["school_year"]); ?></div><?php endif; ?>
<?php
endif;
?>

                  </td>
                </tr>

                <tr>
                  <th class="mb10">
                    <div>保護者の方のお名前（漢字）<span class="hs">必須</span></div>
                  </th>
                  <td class="mb30"><?php
if(isset($_POST['confirm_x'])):_h($dt['gurdian_name']);
else:
?><input name="gurdian_name" id="gurdian_name" type="text" value="<?php _h($dt['gurdian_name']); ?>"
class="com_inp01 is-require validate[required]" placeholder="例）山田　花子" maxlength="100">
<?php if(!(empty($dt["err"]["gurdian_name"]))): ?><div class="error_text"><?php _h($dt["err"]["gurdian_name"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
                <?php /*
                <tr>
                  <th class="mb10">
                    <div>保護者の方のお名前（フリガナ）<span class="hs">必須</span></div>
                  </th>
                  <td class="mb30"><?php
if(isset($_POST['confirm_x'])):_h($dt['gurdian_name_kana']);
else:
?><input name="gurdian_name_kana" id="gurdian_name_kana" type="text" value="<?php _h($dt['gurdian_name_kana']); ?>"
class="com_inp01 is-require validate[required]" placeholder="例）ヤマダ　ハナコ" maxlength="100">
<?php if(!(empty($dt["err"]["gurdian_name_kana"]))): ?><div class="error_text"><?php _h($dt["err"]["gurdian_name_kana"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
                */ ?>
                <tr>
                  <th class="mb10">
                    <div>電話番号<span class="hs">必須</span><span class="fs18 fwn">ハイフンなし</span></div>
                  </th>
                  <td class="mb30"><?php
if(isset($_POST['confirm_x'])):_h($dt['tel']);
else:
?><input name="tel" id="tel" type="tel"
value="<?php _h($dt['tel']); ?>" class="com_inp01 is-require validate[required]" placeholder="例）0312345678" data-errormessage-value-missing="電話番号を入力して下さい。" maxlength="15">
<?php if(!(empty($dt["err"]["tel"]))): ?><div class="error_text"><?php _h($dt["err"]["tel"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
                <tr>
                  <th class="mb10">
                    <div>メールアドレス<span class="hs">必須</span><span class="fs18 fwn">半角英数字</span></div>
                  </th>
                  <td class="mb30">
                    <div class="ml"><?php
if(isset($_POST['confirm_x'])):_h(implode('',$dt['mail']));
else:
?><input name="mail[]" id="mail1" type="text"
value="<?php _h(implode('',$dt['mail'])); ?>" class="com_inp02 is-require validate[required]" placeholder="例）otoiawase@gakken-lstaffing.jp"
maxlength="150"></div>
<?php if(!(empty($dt["err"]["mail"]))): ?><div class="error_text"><?php _h($dt["err"]["mail"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
                <tr>
                  <th class="mb10">
                    <div>郵便番号<span class="hs">必須</span><span class="fs18 fwn">ハイフンなし、入力完了で住所が自動表示されます</span></div>
                  </th>
                  <td class="mb30"><?php
if(isset($_POST['confirm_x'])):_h($dt['zipcode']);
else:
?><input name="zipcode" id="zipcode" type="text"
value="<?php _h($dt['zipcode']); ?>" class="com_inp01 is-require validate[required]" placeholder="例）1710033" maxlength="8">
<?php if(!(empty($dt["err"]["zipcode"]))): ?><div class="error_text"><?php _h($dt["err"]["zipcode"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
                <tr>
                  <th class="mb10">
                    <div>都道府県</div>
                  </th>
                  <td class="mb30"><?php
if(isset($_POST['confirm_x'])):_h($dt['pref']);
else:
?><select name="pref" id="pref">
                      <option value="">都道府県を選択してください</option>
<?php
foreach(array(
"北海道","青森県","岩手県","宮城県","秋田県",
"山形県","福島県","茨城県","栃木県","群馬県",
"埼玉県","千葉県","東京都","神奈川県","新潟県",
"富山県","石川県","福井県","山梨県","長野県",
"岐阜県","静岡県","愛知県","三重県","滋賀県",
"京都府","大阪府","兵庫県","奈良県","和歌山県",
"鳥取県","島根県","岡山県","広島県","山口県",
"徳島県","香川県","愛媛県","高知県","福岡県",
"佐賀県","長崎県","熊本県","大分県","宮崎県",
"鹿児島県","沖縄県",
) as $k=>$v):
?>
<option value="<?php _h($v); ?>"<?php
    if($v==$dt['pref']): ?> selected="selected"<?php
    endif;
?>><?php _h($v); ?></option>
<?php
endforeach;
?>
                    </select>
<?php if(!(empty($dt["err"]["pref"]))): ?><div class="error_text"><?php _h($dt["err"]["pref"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
                <tr>
                  <th class="mb10">
                    <div>市区町村・建物名</div>
                  </th>
                  <td class="mb30">
                    <div><?php
if(isset($_POST['confirm_x'])):_h($dt['address']);
else:
?><input name="address" id="address" type="text"
value="<?php _h($dt['address']); ?>" maxlength="300" placeholder="例）○○区△△町1-2-3" class="com_inp02"></div>
<?php if(!(empty($dt["err"]["address"]))): ?><div class="error_text"><?php _h($dt["err"]["address"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
                <tr>
                  <th class="bot mb10">
                    <div>ご相談内容、ご質問・ご要望など</div>
                  </th>
                  <td class="mb30"><?php
if(isset($_POST['confirm_x'])):_h(nl2br($dt['note']),0);
else:
?><textarea id="note" name="note" class="com_txt" cols="20" rows="4"><?php _h($dt['note']); ?></textarea>
<?php if(!(empty($dt["err"]["note"]))): ?><div class="error_text"><?php _h($dt["err"]["note"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>

<?php /*
                <tr>
                  <th class="bot mb10">
                    <div>ご興味のある内容があれば選択してください。</div>
                  </th>
                  <td class="f_bb">
<?php
if(isset($_POST['confirm_x'])):
    _h(implode('/',$dt['hope']));
else:
?>
                    <ul class="clearfix fl_l ver2 ver3">
<?php
$labelid=1;
foreach(array(
"大学入試共通テスト説明会",
"高校入試説明会",
"中学受験 親の会",
"思考探求ゼミ（小4〜小6）",
"プロ家庭教師",
"オンライン授業",
) as $k=>$v):
?>
<li><input class="is-checkbox" name="hope[]" type="checkbox" value="<?php _h($v); ?>"
id="hope_<?php _h($k); ?>"<?php
    if(in_array($v,$dt['hope'])): ?> checked="checked"<?php
    endif;
?>><label class="checkbox01" for="hope_<?php _h($k); ?>"><?php _h($v); ?></label></li>
<?php
endforeach;
?>
                    </ul>
<?php if(!(empty($dt["err"]["hope"]))): ?><div class="error_text"><?php _h($dt["err"]["hope"]); ?></div><?php endif; ?>
<?php
endif;
?>
                  </td>
                </tr>
*/ ?>

              </tbody>
            </table>
          </div>
          <div class="fs18 tac mb30">送信にあたっては本サイトの「<a href="https://www.kame.co.jp/privacy/" target="_blank">個人情報保護方針</a>」に<br>同意していただけたものとして承ります。</div>
          <div class="btnFormContact">
<?php


if(isset($_POST['confirm_x'])):
?>
<button type="button" class="btn_box btn_box03 h_img fs40 white fwb tac back">入力内容を修正する</button>
<button type="button" class="btn_box btn_box02 h_img fs40 white fwb tac fin">この内容で送信する</button>
<?php
else:
?>
<button type="button" class="btn_box btn_box02 h_img fs40 white fwb tac confirm">入力内容を確認する</button>
<?php
endif;


?>
          </div>
