<?php

return [
    
    'url' => [

        'default' => 'https://www.googleapis.com/books/v1/volumes',
        'googleBooks' => 'https://www.googleapis.com/books/v1/volumes',
    ],

    'bookData' => [
        'googleBooks' => [
            "title", "authors", "publisher", "publishedDate", "description", "industryIdentifiers", "pageCount", "imageLinks"
        ] 
    ]
];
