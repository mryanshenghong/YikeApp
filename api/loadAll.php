<?php
/**
 * Created by PhpStorm.
 * User: shenghongyan
 * Date: 2018/3/8
 * Time: 下午12:22
 */
$url = 'https://moment.douban.com/api/auth_authors/all';
$html = file_get_contents($url);
echo $html;