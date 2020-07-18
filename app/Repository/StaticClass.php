<?php

namespace App\Repository;

class StaticClass
{

     public static $staticNum = 0;
   
    public $num = 0;


    public function countUp(int $plus):void
    {
        //staticプロパティに加算。
        self::$staticNum += $plus;
        //通常プロパティに加算。
        $this->num += $plus;
    }

    public static function getRandNum(int $init): int  //（1）
{
    //非staticプロパティに加算。
    // $this->num += $init;  //（2）
    //staticプロパティに引数を加算。
    self::$staticNum += $init;  //（3）
    //1～100の乱数を発生。
    $rand = rand(1, 100);
    //乱数とプロパティを掛け合わせ、その値を戻り値とする。
    $ans = $rand * self::$staticNum;
    return $ans;
}

public function staticPlus(int $plus):void
    {
        static $num = 0;
        $num += $plus;
        print($num);

    }
   
}
