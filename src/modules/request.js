//接口规范
//需要返回状态status,成功为200，失败为404
/*
{
  "status": 200,
  "msg": "注册成功",
  "data": {
    "id": 1,
    "username": "hunger",
    "avatar": "http://avatar.com/1.png",
    "updatedAt": "2017-12-27T07:40:09.697Z",
    "createdAt": "2017-12-27T07:40:09.697Z"
  }
}
*/

import axios from 'axios';

function request(url,data={},method='get') {
	return new Promise((resolve,reject) => {
		let config = {
			withCredentials: true,
			baseURL: 'https://easy-mock.com/mock/5b0f9157b6b9de5a525896c6/youzan',
			url,
			method,
		};
		if (method.toLowerCase() == 'get') {
			config.params = data;
		} else {
			config.data = data;
		}
		axios(config).then(({data}) => {
			if (data.status == 200) {
				resolve(data);
			} else {
				reject(data);
			}
		}).catch(err => {
			console.dir(err);
			document.write(err);
		});
	});
}

export default request;

//使用方法：
// request('/user', {name:'stage', age:24}, 'get').then(data => console.log(data));