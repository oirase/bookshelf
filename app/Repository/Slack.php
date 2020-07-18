<?php

namespace App\Repository;

class Slack implements Message
{

    public $myObject;

    public function __construct(MyObject $myObject){

        $this->myObject = $myObject;

    }

    public function send(){

        $this->myObject->send();
        //dd('something happens');

    }
   
}
