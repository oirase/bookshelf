<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testModel()
    {
        //$user = factory(App\User::class, 10)->make();
        //dd($user);
    }

    public function testInsertBook() {
        //$data = app('makeBookData')->googleBooks("東野圭吾");
        $data = factory(App\Book::class)->make();
        //dd($data["items"][9]);
        $book = ["addBook" => $data ];
        $response = $this->json('POST', 'insert', $book);
        //$response->assertStatus(200);
        //dd($response);
    }

    public function testDeleteBook() {
        $response = $this->json('POST', '/delete', ['isbn' => P'KEY:BT000075044300100101900209']);
        dd($response);
    }
}
