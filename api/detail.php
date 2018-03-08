<?php
/**
 * Created by PhpStorm.
 * User: shenghongyan
 * Date: 2018/3/7
 * Time: 下午11:58
 */

$url = $_GET['url'];
//$url = 'https://moment.douban.com/api/stream/date/'.$today.'';
$html = file_get_contents($url);
echo $html;
?>