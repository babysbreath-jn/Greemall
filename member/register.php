<?php
    header("Content-type:type/html;charset=utf-8");

    // var_dump($_POST);

    //模拟官方的返回，生成对应的内容
    $responseData = array("code" => 0,"msg" => "");

    //将数据取出
    $username = $_POST["username"];
    $password = $_POST["password"];
    $repassword = $_POST["repassword"];
    $createtime = $_POST['createTime'];

    //初步的判断
    if(!$username){
        $responseData['code'] = 1;
        $responseData['msg'] = "手机号不能为空";
        echo json_encode($responseData);
        exit;
    }

    if(!$password){
        $responseData['code'] = 2;
        $responseData['msg'] = "密码不能为空";
        echo json_encode($responseData);
        exit;
    }

    if(!$repassword){
        $responseData['code'] = 3;
        $responseData['msg'] = "两次密码不一致";
        echo json_encode($responseData);
        exit;
    }

    //验证数据库是否有同名的用户
    //1、链接数据库

    $link = mysql_connect("localhost","root","123456");

    //2、判断数据库是否链接成功
    if(!$link){
        $responseData['code'] = 4;
        $responseData['msg'] = "服务区繁忙";
        echo json_encode($responseData);
        exit;
    }

    //3、设置访问字符集
    mysql_set_charset("utf8");

    //4、选择数据库
    mysql_select_db("qd2004");

    //5、准备sql语句
    $sql = "select * from students where username = '{$username}'";

    //6、发送sql语句
    $res = mysql_query($sql);

    //7、取出一行
    $row = mysql_fetch_assoc($res);
    if($row){
        $responseData['code'] = 5;
        $responseData['msg'] = "用户名已存在";
        echo json_encode($responseData);
        exit;
    }

    $password = md5(md5(md5($password)."qingdao")."qingdao");

    //注册
    // $sql2 = "INSERT INTO users(username,password,createtime) VALUES('{$username}','{$password}',{$createtime})";
    $sql2 = "insert into user(username,password,createtime) values('{$username}','{$password}','{$createtime}')";

    $res = mysql_query($sql2);

    if(!$res){
        $responseData['code'] = 6;
        $responseData['msg'] = "注册失败";
        echo json_encode($responseData);
        exit;
    }

    
    $responseData['msg'] = "注册成功";
    echo json_encode($responseData);
    

    mysql_close($link);
?>