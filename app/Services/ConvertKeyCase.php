<?php

namespace App\Services;

use Illuminate\Support\Str;

class ConvertKeyCase {

    public function toCamel($data)
    {
        return $this->convertKey($data, 'camel');
    }

    public function toSnake($data)
    {
        return $this->convertKey($data, 'snake');
    }

    private function convertKey($data, $case)
    {
        if (is_array($data) || is_object($data)) {
          $result = [];
          foreach ($data as $key => $value) {
              $result[Str::$case($key)] = $this->convertKey($value, $case);
          }
          return $result;
        } else {
          return $data;
        }
    }
}
