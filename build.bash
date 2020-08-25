
cp webpack_user.mix.js webpack.mix.js
rm -r resources/js/bookShelf
cp -r js/bookShelf_user resources/js/bookShelf
npm run dev

cp webpack_gest.mix.js webpack.mix.js
rm -r resources/js/bookShelf
cp -r js/bookShelf_gest resources/js/bookShelf
npm run dev

