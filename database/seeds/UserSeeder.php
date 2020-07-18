<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        DB::table('users')->insert([
            'name' => Str::random(5),
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
        ]);
        */
        factory(App\User::class, 10)->create();
    }
}
