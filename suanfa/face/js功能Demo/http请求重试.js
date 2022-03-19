//最大重试次数
const MAX_RETRY = 3
//请求超时时间
const REQUEST_TIMEOUT = 15 * 1000
// 重试间隔500ms
const RETRY_INTERVAL = 500 

function sleep(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms));
}


async function request(url,method,params,retry = MAX_RETRY,hookResult = null){

	let res 
	let requireRetry
	try {
		//构造请求的参数
		let config = {
			url: url,
			method: method,
			timeout: REQUEST_TIMEOUT
		}
		if(Object.is(method,'get')){
			config['params'] = params
		}else if (Object.is(method,"post")){
			config['data'] = params
		}
		res = await axios.request(config)
		//发生服务器错误，重试
		if (res && res.status > 500){
			console.log('返回的状态码:', res.status)
			requiretRetry = true
		} 
		//使用调用者逻辑判断，如果未达到期许，重试
		if (hookResult && !hookResult(res)){
			console.log('hookResult函数返回为false，需要重试')
			requiretRetry = true
		}
	}catch(err){
		console.log(err)
		// 发生网络错误，重试
    	requireRetry = true
	}
	if (requireRetry && retry > 0){
    	// 500ms之后重试
    	await sleep(RETRY_INTERVAL)
    	console.log('重试', retry)
    	res = await request(url, method, params, --retry, hookResult)
  	}

	return res
}

//use example

async function test()
{
 	let res =await request("https://www.baidu.com/s","get",{"wd":"hello"})
	console.log("result is : " , res)
}


————————————————
版权声明：本文为CSDN博主「藏红」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/ch717828/article/details/103281602