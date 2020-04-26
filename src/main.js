/*
*
* @Author : zyang@conviva.com
* @Date : 2020/4/26
* @Version : 1.0
*
*/

function _generateMenuList(menuEleId) {
  var menu = `
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="layui-nav-item layui-nav-itemed ${window.location.pathname.includes('home') ? 'layui-this' : ''}">
          <a href="/home.html"><img class="menu-icon" src="./src/images/menu/home.svg" alt="">首页</a>
        </li>
        <li class="layui-nav-item layui-nav-itemed ${window.location.pathname.includes('management') ? 'layui-this' : ''}">
          <a href="/management.html"><img class="menu-icon" src="./src/images/menu/manage.svg" alt="">设备管理</a>
        </li>
        <li class="layui-nav-item layui-nav-itemed ${window.location.pathname.includes('object') ? 'layui-this' : ''}">
          <a href="/object.html"><img class="menu-icon" src="./src/images/menu/test.svg" alt="">目的管理</a>
        </li>
        <li class="layui-nav-item layui-nav-itemed ${window.location.pathname.includes('unity_stream') ? 'layui-this' : ''}">
          <a href="/unity_stream.html"><img class="menu-icon" src="./src/images/menu/cloud1.svg" alt="">UnityStream</a>
        </li>
      </ul>
  `;

  var style = document.createElement('style')
  style.innerHTML = `
    .menu-icon {
        width: 15px; height: 15px; margin-right: 10px;
    }
    .title-icon {
        width: 25px; height: 25px; margin-right: 10px;
    }
  `;
  document.getElementsByTagName('head')[0].appendChild(style);

  var menuEle = document.getElementById(menuEleId)
  if (menuEle) {
    menuEle.innerHTML = menu
  }
}
