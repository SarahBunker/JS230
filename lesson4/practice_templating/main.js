let post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
};

let post2 = {
  title: 'Different Title',
  published: 'This year',
  body: 'Create a posts array, adding the existing post to it. Add a second post with no tags property. Modify your template to check for the existence of tags, and if none exist, output a "Not tagged" message. Wrap the template in an each loop to output each post.',
}

let posts = [post1, post2];

post1.tags = ['Food', 'Cooking', 'Vegetables'];
post1.body = '<p>' + post1.body + '<p>';
post2.body = '<p>' + post2.body + '<p>';

$(function () {
  let $template = $('#post');
  let postTemplate = Handlebars.compile(($template).html());
  let tagTemplate = Handlebars.compile($('#tag').html());
  Handlebars.registerPartial('tag', $('#tag').html());

  let $body = $('body');
  posts.forEach( (post) => {
    $body.append(postTemplate(post));
  })
  // $body.append(postTemplate({posts: posts}));
});
