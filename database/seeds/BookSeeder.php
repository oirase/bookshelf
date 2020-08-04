<?php

use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = app('googleBooks')->googleBooks("東野圭吾", 10);
        foreach($data["items"] as $key => $book) {
            if(isset($book['authors']) && is_array($book['authors'])) {
                $data["items"][$key]['authors'] = implode(', ', $book['authors']);
            }
        }   
        foreach($data["items"] as $book) {
            DB::table('books')->insert([
                'book_id' => $book['bookId'],
                'isbn' => $book['isbn'] ?? '',
                'title' => $book['title'] ?? '',
                'authors' => $book['authors'] ?? '',
                'publisher' => $book['publisher'] ?? '',
                'published_date' => $book['publishedDate'] ?? '',
                'description' => $book['description'] ?? '',
                'page_count' => $book['pageCount'] ?? '',
                'thumbnail' => $book['thumbnail'] ?? '',
                'small_thumbnail' => $book['smallThumbnail'] ?? '',
            ]);
        }
        //factory(App\Book::class, 10)->create();
    }
}
