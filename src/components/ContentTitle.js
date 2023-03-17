class ContentTitle {
  constructor($main, $title) {
    this.$main = $main;
    this.$title = $title;
  }
  render() {
    const div = document.createElement('div');
    div.setAttribute('class', 'content_title');

    const h1 = document.createElement('h1');
    h1.innerText = this.$title;

    div.appendChild(h1);
    this.$main.appendChild(div);
  }
}

export default ContentTitle;

{
  /* 
<div class="content_title">
  <h1>CardView</h1>
</div>; 
*/
}
