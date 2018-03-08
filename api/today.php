
<?php

//使用当前本机日期去获取后台最新数据  today 是日期对象 url内使用 '.$today.'进行拼接
// 如果不用参数就要自己修改请求日期$url = 'https://moment.douban.com/api/stream/date/2016-11-26';
$today = $_GET['today'];
$url = 'https://moment.douban.com/api/stream/date/'.$today.'';
$html = file_get_contents($url);
echo $html;
?>