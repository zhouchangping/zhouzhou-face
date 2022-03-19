//User类
class User {
  //构造器
  constructor(opt) {
    this.name = opt.name;
    this.viewPage = opt.viewPage;
  }

  //静态方法
  static getInstance(role) {
    switch (role) {
      case 'superAdmin':
        return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] });
        break;
      case 'admin':
        return new User({ name: '管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据'] });
        break;
      case 'user':
        return new User({ name: '普通用户', viewPage: ['首页', '通讯录', '发现页'] });
        break;
      default:
        throw new Error('参数错误, 可选参数:superAdmin、admin、user')
    }
  }
}
//调用
let superAdmin = User.getInstance('superAdmin');
let admin = User.getInstance('admin');
let normalUser = User.getInstance('user');