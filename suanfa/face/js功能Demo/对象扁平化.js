/*
 * @Author: zhouchangping
 * @Date: 2022-02-17 11:07:28
 * @LastEditTime: 2022-02-17 11:07:28
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/对象扁平化.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
let flatten = (obj) => {
	let result = {};
    
    let process = (key, value) => {
    	// 首先判断是基础数据类型还是引用数据类型
        if (Object(value) !== value) {
        	// 基础数据类型
            if (key) {
            	result[key] = value;
            }
        } else if(Array.isArray(value)){
       		for (let i = 0; i< value.length; i++) {
            	process(`${key}[${i}]`, value[i])
            }
            if (value.length === 0) {
            	result[key] = [];
            }
        } else {
        	let objArr = Object.keys(value);
            objArr.forEach(item => {
            	process(key?`${key}.${item}`:`${item}`, value[item])
            });
            if (objArr.length === 0 && key) {
            	result[key] = {};
            }
        }
    }
    process('', obj)
    return result;
}
