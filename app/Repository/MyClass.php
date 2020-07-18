<?php

namespace App\Repository;

class Myclass
{

    public $slack;

    public function __construct(Slack $slack){

        $this->slack = $slack;

    }

    public static function run(){

        //$this->slack->send();
        return 'hello';

    }
   
}
