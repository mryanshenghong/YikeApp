<?php
/**
 * Created by PhpStorm.
 * User: shenghongyan
 * Date: 2018/3/5
 * Time: 下午3:02
 */
$today = strtotime('-1day',time());
$older = date('Y-m-d',$today);
$url = 'https://moment.douban.com/api/stream/date/'.$older.'';
$html = file_get_contents($url);
echo $html;