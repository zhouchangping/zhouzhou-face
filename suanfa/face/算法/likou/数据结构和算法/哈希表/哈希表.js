class HashMap {
  constructor(size) {
    this.table = new Array(size)
    this.size = 0
  }
  //哈希函数，将value转化，计算出存储的key
  hashConversion (value) {
    let keyCode = 0
    console.log(value)
    for (let item of value) {
      console.log(item + 'item')
      keyCode += item.charCodeAt(0)
      console.log(keyCode)
    }
    let key = keyCode % this.table.length
    return key
  }
  set (value) {
    let key = this.hashConversion(value)
    console.log(key)
    this.size++
    this.table[key] = value
  }
  get (value) {
    let key = this.hashConversion(value)
    return this.table[key]
  }
  delete (value) {
    let key = this.hashConversion(value)
    if (this.table[key] !== undefined) {
      this.table[key] = undefined
      this.size--
      return true
    } else {
      return false
    }

  }
  has (value) {
    let key = this.hashConversion(value)
    if (this.table[key] !== undefined) {
      return true
    } else {
      return false
    }
  }
  showAllData () {
    let result = []
    console.log(this.table)
    for (let item of this.table) {
      if (item !== undefined) {
        result.push(item)
      }
    }
    return result
  }
}

let hashTable = new HashMap(10)
hashTable.set('1')
// hashTable.set('aa')
// hashTable.set('6a')
// hashTable.set('75')
console.log('size:' + hashTable.size)
console.log(hashTable.showAllData())
