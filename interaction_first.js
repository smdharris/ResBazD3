var cat_image = document.getElementsById('cat_image');
var feed_button = document.getElementsById('feed_button');
var run_button = document.getElementById('run_button');

cat_image addEventListener ('click', meow();
feed_button addEventListener ('click', feed();
feed_button addEventListener ('click', run();


function meow(event) {
  console.log ("meow!");
}

function feed(event) {
    cat_image.style.width = (cat_image.offsetWidth + 30) + 'px';
};

function run(event) {
    cat_image.style.width = (cat_image.offsetWidth - 30) + 'px';
};
