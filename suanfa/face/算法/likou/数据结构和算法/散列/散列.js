
// --------------------------------------------------------------
// 散列
class HashTable {
  constructor() {
      this.table = []
  }
  // 散列函数
  static loseloseHashCode(key) {
      let hash = 0
      for (let codePoint of key) {
          hash += codePoint.charCodeAt()
      }
      return hash % 37
  }

  // 修改和增加元素
  put(key, value) {
      const position = HashTable.loseloseHashCode(key)
      console.log(`${position} - ${key}`)
      this.table[position] = value
  }

  get(key) {
      return this.table[HashTable.loseloseHashCode(key)]
  }

  remove(key) {
      this.table[HashTable.loseloseHashCode(key)] = undefined
  }
}
const hash = new HashTable()
hash.put('Surmon', 'surmon.me@email.com') // 19 - Surmon
hash.put('John', 'johnsnow@email.com') // 29 - John
hash.put('Tyrion', 'tyrion@email.com') // 16 - Tyrion

// 测试get方法
console.log(hash.get('Surmon')) // surmon.me@email.com
console.log(hash.get('Loiane')) // undefined
console.log(hash)

// 散列冲突： Tyrion 和 Aaron 有相同的散列值（16)，Donnie 和 Ana 有相同的散列值（13)，Jonathan、Jamie 和 Sue 有相同的散列值（5), Mindy 和 Paul 也有相同的散列值（32)，导致最终的数据对象中，只有最后一次被添加/修改的数据会覆盖原本数据，进而生效
const hash = new HashTable()
hash.put('Gandalf',    'gandalf@email.com')
hash.put('John', 'johnsnow®email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron',    'aaronOemail.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana©email.com')
hash.put('Jonathan', 'jonathan@email.com')    
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue',    'sueOemail.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul©email.com')
hash.put('Nathan', 'nathan@email.com')

// 处理冲突有几种方法：分离链接、线性探查和双散列法
// 分离链接法
class HashTable {
  constructor() {
      this.table = []
  }
  // 散列函数
  static loseloseHashCode(key) {
      let hash = 0
      for (let codePoint of key) {
          hash += codePoint.charCodeAt()
      }
      return hash % 37
  }

  put(key, value) {
      const position = HashTable.loseloseHashCode(key)
      if (this.table[position] === undefined) {
          this.table[position] = new LinkedList()
      }
      this.table[position].append({ key, value })
  }
  
  get(key) {
      const position = HashTable.loseloseHashCode(key)
      if (this.table[position] === undefined) return undefined
      const getElementValue = node => {
          if (!node && !node.element) return undefined
          if (Object.is(node.element.key, key)) {
              return node.element.value
          } else {
              return getElementValue(node.next)
          }
      }
      return getElementValue(this.table[position].head)
  }
  
  remove(key) {
      const position = HashTable.loseloseHashCode(key)
      if (this.table[position] === undefined) return undefined
      const getElementValue = node => {
          if (!node && !node.element) return false
          if (Object.is(node.element.key, key)) {
              this.table[position].remove(node.element)
              if (this.table[position].isEmpty) {
                  this.table[position] = undefined
              }
              return true
          } else {
              return getElementValue(node.next)
          }
      }
      return getElementValue(this.table[position].head)
  }    
}

// 线性探测法： 当想向表中某个位置加人一个新元素的时候，如果索引为 index 的位置已经被占据了，就尝试 index+1的位置。如果index+1 的位置也被占据了，就尝试 index+2 的位置
class HashTable {
  constructor() {
      this.table = []
  }
  // 散列函数
  static loseloseHashCode(key) {
      let hash = 0
      for (let codePoint of key) {
          hash += codePoint.charCodeAt()
      }
      return hash % 37
  }

  put(key, value) {
      const position = HashTable.loseloseHashCode(key)
      if (this.table[position] === undefined) {
          this.table[position] = { key, value }
      } else {
          let index = ++position
          while (this.table[index] !== undefined) {
              index++
          }
          this.table[index] = { key, value }
      }
      this.table[position].append({ key, value })
  }
  
  get(key) {
      const position = HashTable.loseloseHashCode(key)
      const getElementValue = index => {
          if (this.table[index] === undefined) return undefined
          if (Object.is(this.table[index].key, key)) {
              return this.table[index].value
          } else {
              return getElementValue(index + 1)
          }
      }
      return getElementValue(position)
  }
  
  remove(key) {
      const position = HashTable.loseloseHashCode(key)
      const removeElementValue = index => {
          if (this.table[index] === undefined) return false
          if (Object.is(this.table[index].key, key)) {
              this.table[index] = undefined
              return true
          } else {
              return removeElementValue(index + 1)
          }
      }
      return removeElementValue(position)
  }  
}