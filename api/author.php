<?php
/**
 * Created by PhpStorm.
 * User: shenghongyan
 * Date: 2018/3/7
 * Time: 下午3:08
 */

// 接口
$pathName = 'https://moment.douban.com/api/auth_authors/';
// 请求参数
$queryString = '?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
// 推荐作者
$recUrl = $pathName .'rec' . $queryString;
// 热门作者
$allUrl = $pathName . 'all' . $queryString;
// 获取豆瓣推荐作者数据
$rec = file_get_contents($recUrl);
$rec = json_decode($rec);
// 获取豆瓣执门作者数据
$all = file_get_contents($allUrl);
$all = json_decode($all);
// 返回结果
echo json_encode(array('rec'=>$rec, 'all'=>$all));