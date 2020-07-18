<?php

use Illuminate\Database\Seeder;

class MemberInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userId = DB::table('users')->pluck('user_id');
        $bookId = DB::table('books')->pluck('book_id');
        $count = DB::table('users')->count();
        for($i=0;$i<$count;$i++) {
            DB::table('member_info')->insert([
                'book_id' => $bookId[$i],
                'user_id' => $userId[5],
            ]);
        }
    }
}
