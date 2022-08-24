import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.less'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  constructor(public router: Router) {}

  searchValue?: string;

  currentMenuName: string = '工作台';

  currentUrl: string = this.router.routerState.snapshot.url;

  menus = [
    {
      name: '工作台',
      icon: 'assets/images/common/menu_icon11.png',
      active: 'assets/images/common/menu_icon12.png',
      path: '/pages/workbench',
    },
    {
      name: '用户管理',
      icon: 'assets/images/common/menu_icon21.png',
      active: 'assets/images/common/menu_icon22.png',
      path: '/pages/members',
    },
    {
      name: '科室管理',
      icon: 'assets/images/common/menu_icon31.png',
      active: 'assets/images/common/menu_icon32.png',
      path: '/pages/departments',
    },
    {
      name: '应用系统',
      icon: 'assets/images/common/menu_icon41.png',
      active: 'assets/images/common/menu_icon42.png',
      path: '/pages/applications',
    },
  ];

  copyRightText = 'Copyright©2021-2022 建设单位：相城区信息中心';

  search = () => {
    console.log(this.searchValue)
  }

  logout() {
    this.router.navigate(['/auth/login']);
  }

  handleClickMenu(currentUrl: string) {
    this.currentUrl = currentUrl;
  }
}
