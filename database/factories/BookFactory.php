<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Book;
use Faker\Generator as Faker;

$factory->define(Book::class, function (Faker $faker) {
    $data = app('makeBookData')->googleBooks("東野圭吾", 20);
    $book = $data["items"][0];
    return [
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
    ];
});
