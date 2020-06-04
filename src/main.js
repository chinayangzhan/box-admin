/*
*
* @Author : zyang@conviva.com
* @Date : 2020/4/26
* @Version : 1.0
*
*/

var _baseUrl="/mediamgr/";

function _generateMenuList(menuEleId) {
  var is_home = false
  if (window.location.pathname.split('/').length > 2) {
    is_home = window.location.pathname.split('/')[2].length < 3
  }
  var menu = `
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="layui-nav-item layui-nav-itemed ${ is_home ? 'layui-this' : ''}">
          <a href="/mediamgr/"><img class="menu-icon" src="/src/images/menu/home.png" alt="">首页</a>
        </li>
        <li class="layui-nav-item layui-nav-itemed ${window.location.pathname.includes(
      'devices') ? 'layui-this' : ''}">
          <a href="/mediamgr/devices"><img class="menu-icon" src="/src/images/menu/shebei.png" alt="">设备管理</a>
        </li>
        <li class="layui-nav-item layui-nav-itemed ${window.location.pathname.includes(
      'groups') ? 'layui-this' : ''}">
          <a href="/mediamgr/groups"><img class="menu-icon" src="/src/images/menu/mudi.png" alt="">目的管理</a>
        </li>
        <li class="layui-nav-item layui-nav-itemed ${window.location.pathname.includes(
      'unitystream') ? 'layui-this' : ''}">
          <a href="/mediamgr/unitystream"><img class="menu-icon" src="/src/images/menu/vps.png" alt="">UnityStream</a>
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


function _getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
