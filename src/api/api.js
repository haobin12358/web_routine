

const api2 = 'https://play.bigxingxing.com/api/v2/' ;


const api = 'https://play.bigxingxing.com' ;
//登录 注册

const login = api2+'user/mp_login';//登录
const bind_phone = api2 +'user/bind_phone';//获取手机号

const set_cost = api2 + 'play/set_cost';  //创建费用
const get_cost = api2 +'play/get_cost'; //获取费用
const set_insurance = api2 +'play/set_insurance'; //创建保险
const get_insurance = api2 +'play/get_insurance';//获取费用
const set_play = api2 +'play/set_play';//创建活动
const get_play = api2 +'play/get_play';//获取活动
const get_play_list = api2 +'play/get_play_list';//获取所有活动列表
const set_gather = api2 + 'play/set_gather';//设置集合点
const get_gather = api2 + 'play/get_gather';//获取集合点

const get_playrequire = api2 +'play/get_playrequire';//获取报名必选项
const play_join = api2 + 'play/join';//报名活动
const identity = api2 + 'play/identity';//身份判断
const set_signin = api2 + 'play/set_signin';//发起签到
const get_signin = api2 + 'play/get_signin';//获取签到记录
const get_current_play = api2 +'play/get_current_play';//获取当前活动id
const help = api2 +'play/help';//求救


const scenicspot_list = api2 +'scenicspot/list';//获取景区list
const scenicspot_get = api2 +'scenicspot/get';//获取景区详情







// const img_src = 'https://play.bigxingxing.com/icon/';
const img_src = '../../images/';
//评价
module.exports = {
  api,img_src,login,bind_phone,set_cost,set_insurance,scenicspot_list,scenicspot_get,set_play,get_cost,get_insurance,get_play,
    get_play_list,get_gather,set_gather,get_playrequire,play_join,identity,set_signin,get_signin,get_current_play,help

}
