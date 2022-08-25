import { Component } from '@angular/core';

@Component({
  selector: 'workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['../pages.component.less', './workbench.component.less']
})
export class WorkbenchComponent {
  title = '工作台';

  basicInfo = {
    welcomeText1: '你好，王尚明',
    welcomeText2: '欢迎回来，迎接新的挑战！',
  }

  myList = [
    {
      name: '幸福就业',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_1.png'
    },
    {
      name: '社保智办',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_2.png'
    },
    {
      name: '网签电子合同',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_3.png'
    },
    {
      name: '智慧企退',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_4.png'
    },
    {
      name: '技时享',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_5.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_6.png'
    },
  ];
  
}
