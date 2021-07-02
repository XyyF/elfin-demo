(function () {
  window.addEventListener('load', function () {
    const navigations = [
      { title: '详细API文档请查看', links: './docs.html' },
      { title: 'basic', links: './basic.html' },
      { title: 'Redux.applyMiddleware', links: './apply-middleware.html' },
      { title: 'Redux.combineReducers', links: './combine-reducers.html' },
      { title: 'Redux.compose', links: './compose.html' },
    ];
    const wrapper = document.createElement('div');

    for (let i = 0, l = navigations.length; i < l; i++) {
      const navi = navigations[i];
      const div = document.createElement('div');
      div.style.marginTop = '10px';
      div.innerText = navi.title + '：';
      
      const a = document.createElement('a');
      a.href = navi.links;
      a.target = '_blank';
      a.innerText = '点击查看';

      div.appendChild(a);
      wrapper.appendChild(div);
    }

    document.body.appendChild(wrapper);
  }); 
})();
