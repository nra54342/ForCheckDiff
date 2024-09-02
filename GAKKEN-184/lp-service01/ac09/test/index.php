<?php
#ini_set("display_errors", 1);
require_once dirname($_SERVER["DOCUMENT_ROOT"]). "/lib/inc.php";
require_once dirname($_SERVER["DOCUMENT_ROOT"]). "/lib/token.php";
require_once dirname($_SERVER["DOCUMENT_ROOT"]). "/lib/is.php";

if(!(function_exists('_h'))):
function _h($_,$_2=null){
///
if(isset($_2) and empty($_2)):
    echo $_;
    return;
endif;
echo h($_);
///
}
endif;

//アフィリエイト用のコードを追加
//session_start();
session_regenerate_id(true);

if(isset($_GET['aid'])){

    //値を取得する
    $_SESSION['page']['entry']['aid'] = $_GET['aid'];

}

$sql = "describe data_apply";
$res = mysql_query($sql);
$dt["db_field"] = array();
while($row = mysql_fetch_assoc($res)){
    $dt["db_field"][] = $row["Field"];
}

//思考探求ゼミ
$dt["db_field"][] = "hope";
$dt["db_field"][] = "people";
$dt["db_field"][] = "course";

$dt["db_field"][] = "method";
$dt["db_field"][] = "method_time";



if(isset($_POST['confirm_x'])):
    foreach($dt["db_field"] as $key):
        if(!(isset($_POST[$key]))):continue;endif;
        if(
        is_array($_POST[$key])
        ){
            foreach($_POST[$key] as $val){
                $dt[$key][] = trim($val);
            }
            continue;
        }
        $dt[$key] = trim($_POST[$key]);
        $dt[$key] = preg_replace("/\r\n/u", "\n", $dt[$key]);
        $dt[$key] = preg_replace("/\r/u", "\n", $dt[$key]);
    endforeach;
elseif(isset($_POST['token'])):
    foreach($dt["db_field"] as $k):
        $dt[$k]=isset($_SESSION['lp-service/ac01'][$k])?$_SESSION['lp-service/ac01'][$k]:'';
    endforeach;
else:
    $_SESSION['lp-service/ac01']=array();
endif;

foreach($dt["db_field"] as $k):
    if(!(isset($dt[$k]))):$dt[$k]='';endif;
endforeach;
foreach(array('mail','hope_title','hope','purpose',) as $k):
    if(is_array($dt[$k])):continue;
    endif;
    $dt[$k]=array();
endforeach;



/*
foreach($dt["db_field"] as $key){
    if(!(isset($_POST['confirm_x']))):
        $_POST[$key]=isset($_SESSION['lp-service/ac01'][$key])?$_SESSION['lp-service/ac01'][$key]:$dt[$key];
    endif;


    if(
    isset($_POST[$key])
    ){
        if(
        is_array($_POST[$key])
        ){
            foreach($_POST[$key] as $val){
                $dt[$key][] = trim($val);
            }
            continue;
        }
        $dt[$key] = trim($_POST[$key]);
        $dt[$key] = preg_replace("/\r\n/u", "\n", $dt[$key]);
        $dt[$key] = preg_replace("/\r/u", "\n", $dt[$key]);
        continue;
    }
    if(
    $key == "mail"
    ){
        $dt[$key] = array("", "");
        continue;
    } elseif(
    $key == "hope_title"
    ){
        $dt[$key] = array();
        continue;
    } elseif(
    $key == "hope" or
    $key == "course" or
    $key == "purpose" or
    $key == "week"
    ){
        $dt[$key] = array();
        continue;
    }
    $dt[$key] = "";
}
*/
if(
isset($_POST["confirm_x"])
){
    $dt["err"] = array();

    /*
    if(
    empty($dt["hope_title"])
    ){
        $dt["err"]["hope_title"] = "ご希望の内容にチェックを入れてください。";
    }
    */



    if(
    empty($dt["purpose"])
    ){
        $dt["err"]["purpose"] = "学習目的を選択してください。";
    }

    /*
    if(
    empty($dt["method"])
    ){
        $dt["err"]["method"] = "ご希望のご連絡方法を選択してください。";
    } elseif(
    $dt["method"]=="電話" and
    empty($dt["method_time"])
    ){
        $dt["err"]["method_time"] = "ご希望の時間帯を選択してください。";
    }
    */

    /*
    if(
    empty($dt["name"])
    ){
        $dt["err"]["name"] = "お子様のお名前(漢字)を入力してください。";
    }
    if(
    empty($dt["name_kana"])
    ){
        $dt["err"]["name_kana"] = "お子様のお名前(カナ)を入力してください。";
    }
    */
    if(
    empty($dt["gurdian_name"])
    ){
        $dt["err"]["gurdian_name"] = "保護者の方のお名前(漢字)を入力してください。";
    }
    /*
    if(
    empty($dt["gurdian_name_kana"])
    ){
        $dt["err"]["gurdian_name_kana"] = "保護者の方のお名前(フリガナ)を入力してください。";
    }
    */
    /*
    if(
    empty($dt["school_type"])
    ){
        $dt["err"]["school_type"] = "お子様の学校種別を選択してください。";
    }
    */
    if(
    empty($dt["school_year"])
    ){
        $dt["err"]["school_year"] = "お子様の学年を選択してください。";
    }
    /*
    if(
    empty($dt["sex"])
    ){
        $dt["err"]["sex"] = "お子様の性別を選択してください。";
    }
    if(
    empty($dt["gurdian_name"])
    ){
        $dt["err"]["gurdian_name"] = "保護者の方のお名前(漢字)を入力してください。";
    }
    */
    if(
    empty($dt["tel"])
    ){
        $dt["err"]["tel"] = "電話番号を入力してください。";
    } elseif(
    !telCk($dt["tel"])
    ){
        $dt["err"]["tel"] = "電話番号が不正です。";
    }

    if(
    empty($dt["mail"][0])
    ){
        $dt["err"]["mail"] = "メールアドレスを入力してください。";
    } elseif(
    !(mailCk($dt["mail"][0]))
    ){
        $dt["err"]["mail"] = "メールアドレスが不正です。";
    }

    if(
    empty($dt["zipcode"])
    ){
        $dt["err"]["zipcode"] = "郵便番号を入力してください。";
    } elseif(
    !preg_match("/^[0-9]{7}$/u", $dt["zipcode"])
    ){
        $dt["err"]["zipcode"] = "郵便番号が不正です。";
    }
    
    /*
    if(
    empty($dt["pref"])
    ){
        $dt["err"]["pref"] = "都道府県を選択してください。";
    }
    */
    /*
    if(
    empty($dt["address"])
    ){
        $dt["err"]["address"] = "市区町村・建物名を入力してください。";
    }
    */
    #var_dump($dt['err']);
    #if(
    #!(count($dt["err"]))
    #){
    #    require_once "confirm.html";
    #    exit;
    #}
    if($dt["err"]):
        $_POST['confirm_x']=null;
    else:
        $_SESSION['lp-service/ac01']=$dt;
        #$_SESSION['lp-service/ac01']=$_POST;
    endif;

} elseif(
    isset($_POST["send_btn_x"]) and
    Token::valid()
){
    $admin = adminTo("q");
    $mail   = array_filter($dt["mail"]);
    $mail   = implode("@", $mail);
    $to     = $mail;
    $from     = $admin["from"];
    //$reply_to = "sensei@kame.co.jp";
    $reply_to = isset($admin["reply_to"])?$admin["reply_to"]:'';
    $bcc     = BCC;

#if($bcc): $bcc.=',shimizu@kipply.jp'; endif;

    $header  = "From: {$from} \n";
    $header .= "Reply-To: {$reply_to} \n";
    $header .= "Bcc: {$bcc} \n";
    $header .= "Content-Type: text/plain;charset=ISO-2022-JP \n";

    $dt["ip"]         = $_SERVER["REMOTE_ADDR"];
    $dt["host_name"] = gethostbyaddr($dt["ip"]);
    $dt["ua"]        = $_SERVER["HTTP_USER_AGENT"];
    
    $hope_title = implode("/", $dt["hope_title"]);

    $purpose = implode("/", $dt["purpose"]);

    $note  = $dt["note"];
    /*
    if($dt["method"]!="電話"){
        $dt["method_time"] = "";
    }

    $note  = "{$dt["note"]}
ご希望のご連絡方法:{$dt["method"]}";
    if($dt["method"]=="電話"){
        $note .= "
ご希望の時間帯:{$dt["method_time"]}";
    }
    */

    /*
    $match = array("①" => "(1)", "②" => "(2)", "③" => "(3)", "④" => "(4)", "⑤" => "(5)", "⑥" => "(6)");
    $search = array_keys($match);
    $replace = array_values($match);
    #$course =  implode("/", $dt["course"]);
    #$course_mail =  str_replace($search,$replace,$course);
    $course=$course_mail='';

    $note = $dt["note"];
    $note_mail = "";
    $hope =  implode("/", $dt["hope"]);
    if(!empty($hope)){
        $note = "{$dt["note"]}
{$hope}";
        $note_mail = $hope;
    }
    */

    mb_internal_encoding("ISO-2022-JP");
    
    $subj = mb_convert_encoding("お問い合わせを頂きまして有難うございます。", "ISO-2022-JP", "utf8");
    $subj = mb_encode_mimeheader($subj, "ISO-2022-JP", "B", "\n");
    mb_internal_encoding("utf8");

    if(in_array('資料請求(電子)', $dt['hope_title'])):

        include $_SERVER['DOCUMENT_ROOT']. '/entry/user.mail.electronic.catalog.php';

    else:

        include $_SERVER['DOCUMENT_ROOT']. '/entry/user.mail.other.php';

    endif;


    $body = mb_convert_encoding($body, "ISO-2022-JP", "utf8");

    //メール送信
    if(
    mail($to, $subj, $body, $header, "-f {$from}")
    ){
    }
    mb_internal_encoding("ISO-2022-JP");
    if(
    isset($_SESSION["fromsite"])
    ){
        $fromsite = $_SESSION["fromsite"];
    } else{
        $fromsite = "";
    }
    //$subj = "{$hope_title}　{$dt["name"]}";
    //$subj = "{$hope_title}　{$dt["gurdian_name"]}";
    $subj = "お問合せ　{$dt["gurdian_name"]}";
    if(Is::sp()):
        $subj = "【SP】{$subj}";
    endif;
    $subj = mb_convert_encoding($subj, "ISO-2022-JP", "utf8");
    $subj = mb_encode_mimeheader($subj, "ISO-2022-JP", "B", "\n");
    

foreach(array(
'utm_source',
'utm_medium',
'utm_campaign',
'utm_term',
'utm_content',
) as $k):
    $dt[$k]=(isset($_SESSION[$k]) and !(is_array($_SESSION[$k])))?$_SESSION[$k]:'';
endforeach;



    $body = "
学習目的:{$purpose}
学年:{$dt["school_year"]}
保護者（氏名）:{$dt["gurdian_name"]}
電話番号:{$dt["tel"]}
メール:{$mail}
郵便番号:{$dt["zipcode"]}
住所１（都道府県）:{$dt["pref"]}
住所２（市区郡以降）:{$dt["address"]}

ご相談内容、ご質問・ご要望など:
{$dt["note"]}
---------------------------------------------------------


リモートホスト:{$dt["host_name"]}
ＩＰアドレス:{$dt["ip"]}
ブラウザ:{$dt["ua"]}
fromsite:{$fromsite}
utm_source:{$dt["utm_source"]}
utm_medium:{$dt["utm_medium"]}
utm_campaign:{$dt["utm_campaign"]}
utm_term:{$dt["utm_term"]}
utm_content:{$dt["utm_content"]}
";


    $to     = $admin["to"];
    //$to     = "furuichi@kipply.jp,moribe@kipply.jp";
    //$to     = 'shimizu@kipply.jp';
    $body = mb_convert_encoding($body, "ISO-2022-JP", "utf8");

    //メール送信
    if(
    #mail($to, $subj, $body, $header)
    mail($to, $subj, $body, $header, "-f {$from}")
    ){
    }



    
    $dt["created"] = date("Y-m-d H:i:s");
$_SESSION['page']['entry']['usr']['created']=$dt['created'];



    $field = array();
    $value = array();
    foreach($dt["db_field"] as $key){
if(in_array($key,array('id'))):continue;endif;
if(in_array($key,array('hope'))):continue;endif;
if(in_array($key,array('people'))):continue;endif;
if(in_array($key,array('course'))):continue;endif;
if(in_array($key,array('method'))):continue;endif;
if(in_array($key,array('method_time'))):continue;endif;
        if(
        isset($dt[$key])
        ){
            $field[] = $key;
            if(
            $key == "mail"
            ){
                $value[] = "'". dbEsc($mail). "'";
                continue;
            } elseif(
            $key == "hope_title"
            ){
                $value[] = "'". dbEsc($hope_title). "'";
                continue;
            } elseif( $key == "purpose"){ $value[] = "'". dbEsc($purpose). "'"; continue;
            #} elseif($key=="week"){$value[]="'". dbEsc($week)."'"; continue;
            #} elseif($key=="inquiry"){$value[]="'". dbEsc($inquiry)."'"; continue;
            } elseif(
            $key == "fromsite"
            ){
                $value[] = "'". dbEsc($fromsite). "'";
                continue;

            } elseif( $key == "note"){

                $value[] = "'". dbEsc($note). "'";
                continue;


            }
            $value[] = "'". dbEsc($dt[$key]). "'";
        }
    }
    $field = implode(",", $field);
    $value = implode(",", $value);
    $sql = "
insert data_apply ({$field}) values({$value})
";

#mb_internal_encoding("utf8");
#mb_send_mail("shimizu@kipply.jp", "Subj", $sql, "From: debug@".$_SERVER['HTTP_HOST']);

    //echo $sql;
    $sql = utf8_4To3($sql);
    if(
    mysql_query($sql)
    ){
    }
    
    //アフィリエイト用に申し込み区分をセッションに保持
	$_SESSION['page']['entry']['hope_title'] = $hope_title;
	$mail=array_filter($dt['mail']);
	$mail=implode('@', $mail);
	$mail=explode('@', $mail);
	$_SESSION['page']['entry']['usr']['mail'] = $mail[0];
	$_SESSION['page']['entry']['usr']['tel'] = $dt["tel"];

#mb_send_mail("shimizu@kipply.jp",'debug：'.$_SERVER['HTTP_HOST'], var_export($_SESSION['page']['entry']['usr'],true), "From: debug@".$_SERVER['HTTP_HOST']);

    $_SESSION['page']['entry']['usr']['onetag'] = 1;
    
    header("Location: /entry/end.html");
    exit;
}




