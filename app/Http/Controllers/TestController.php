<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Repository\StaticClass;
use Illuminate\Support\Facades\StaticClass;
use Illuminate\Support\Facades\Auth;
use App\Scripts\MakeUrl;
use App\Models\User;
use App\Models\Book;
use App;

class TestController extends Controller
{   

    public $user;

    public function __construct() {
        //$user = User::find(1);
        //Auth::login($user);
        //dd($request-user());
        /*
        $this->middleware(function ($request, $next){
            $this->user = Auth::user()->email;
            return $next($request);
        });
        */
        //$this->user = 'user test';
        //$this->user = Auth::user();
        
    }

    public function index(Request $request) {
        
        //dd($this->user);
        $book = factory(App\Models\Book::class)->make();
        //$makeUrl = new MakeUrl();
        //$book = $makeUrl->getUrl(['q' => 'isbn:[9784844328407]'])
        //$book = app('makeBookData')->googleBooks('isbn:[9784844321521]');
        //$book = ['title' => 'book_test01'];
        //$book = '{"title": "book_test01", "authors": "author01", "isbn": "090706060665"}';
        //$book = '{"title": "book_test01", "authors": "author01"}';
        //$user = User::find(10);
        //Auth::login($user);
        //dd(Auth::user());
        //dd($request->user()->email);
        return view('test', ['book' => $book]);
        return view('test');
    }

    public function methodTest(){
        echo 'test';
        $array1 = [ "a1" => "a2", "b1" => "b2", "c1" => "c2"];
        $array2 = [ "a1" => "a2", "b1" => [ "c1" => "c2"]];
        $array3 = ["red" => 0, "blue" => 1, "green" => 2];
        $array4 = ["red", "green"];
        $array5 = ["yellow" => 3, "pink" => 4];
        $num1 = [9, 7, 8, 4, 6, 9, 3];
        $num2 = [[2], [[4]], [[[3]]], [9], 100];
        $num3 = [5 => 6, 3 => 8, 2 => [7 => 9] ];
        $list = [];
        $a1 = filter_var($num2, FILTER_CALLBACK, ['options' => function ($value) {
            return $value + 1;
}]);
    //dd($a1);
        $b1 = array_map(function ($s) {
            //echo "test".$s;
            return "test".$s;
        }, $array1);
    //dd($b1);

        $c1 = array_walk($array1, function(&$s) {
            //echo "test".$s;
            $s = "test".$s;
        });
        //dd($array1);

        $d1 = array_filter($num3, function ($value){
            return $value > 4;
        }, ARRAY_FILTER_USE_KEY);
        //dd($d1);
        $e1 = filter_var($num2, FILTER_CALLBACK, ['options' => function ($value) {
        //$list += $value;
    return $value + 1;
}]);
        //dd($e1);

        $list2 = &$list;

        array_walk_recursive($num3, function($value, $key, $user){
            //array_push($user, $value);
            return $value + 1;
        }, $num2);

        //dd($num2);

         $f1 = array_filter($array3, function ($key) use ($array4) {
            if (in_array($key, $array4)) {
                return $key;
            }
        }, ARRAY_FILTER_USE_KEY);
        //dd($f1);

         $array3 + $array5;
         $g1 = array_merge($array3, $array5);

         dd($g1);

    }

    public function staticTest() {
        $staticA = app('static');  //（1）
        $staticB = app('static');  //（1）
        $staticA->countUp(10);  //（2）
//Aのプロパティをそれぞれ出力。
print("staticAのstNum: ".$staticA::$staticNum." num: ".$staticA->num);  //（3）
//BのcountUp()を引数5で実行。
$staticB->countUp(5);  //（4）
//Bのプロパティをそれぞれ出力。
print("<br>staticBのstaticNum: ".$staticB::$staticNum." num: ".$staticB->num);  //（5）
//StaticMembersのstaticプロパティのみ出力

    
    $ans = StaticClass::getRandNum(20);  //（1）
print("1回目の結果: ".$ans."(プロパティの値".StaticClass::$staticNum.")");  //（2）
$ans = StaticClass::getRandNum(15);  //（3）
print("<br>2回目の結果: ".$ans."(プロパティの値".StaticClass::$staticNum.")");  //

    $staticA->staticPlus(5);
    $staticA->staticPlus(5);
    $staticA->staticPlus(5);

    //$staticC = StaticClass::countUp(5);

    }

    public function addBookTest()
    {
        $book = factory(Book::class)->make();
        return view('test', ['book' => $book]);

    }

    public function previewMail()
    {   
        $data = ['name' => 'john',
        'email' => 'lowell18@example.com',
        'subject' => 'subject',
        'body' => 'about trouble'
        ];

        return (new App\Mail\ContactMail($data));
    } 



}
