//后台接口地址
let url = {
	hotLists:'/hotLists',//最热商品推荐
};

//通过注释手动切换接口域名
//let host = ''; //真实后台域名
let host = 'https://easy-mock.com/mock/5b0f9157b6b9de5a525896c6/youzan';//测试用的虚拟域名

for (let key in url) {
	url[key] = host + url[key];
}

export default url;