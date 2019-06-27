import {
    wxRequest
} from '../utils/http';

const api2 = 'https://play.bigxingxing.com/api/v2/' ;

//登录 注册

const login = api2+'user/mp_login';//登录
const bind_phone = api2 +'user/bind_phone';//获取手机号

const set_cost = api2 + 'play/set_cost';  //创建费用
const set_insurance = api2 +'play/set_insurance'; //创建保险

const scenicspot_list = api2 +'scenicspot/list';//获取景区list
const scenicspot_get = api2 +'scenicspot/get';//获取景区详情





const img_src = 'https://play.bigxingxing.com/icon/';
//评价
module.exports = {
  img_src,login,bind_phone,set_cost,set_insurance,scenicspot_list,scenicspot_get

}
