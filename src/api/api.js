import {
    wxRequest
} from '../utils/http';

const api2 = 'https://play.bigxingxing.com/api/v2/' ;

//登录 注册

const login = api2+'user/mp_login';//登录
const bind_phone = api2 +'user/bind_phone';//获取手机号





const img_src = 'https://play.bigxingxing.com/icon/';
//评价
module.exports = {
  img_src,login,bind_phone

}
