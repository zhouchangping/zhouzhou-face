public class StackOfArray<Item> implements Iterable<Item>{
//存储数据的数组
Item[] a = (Item[])new Object[1];
//记录元素个数N
int N = 0;
//构造器
public StackOfArray(){}
//添加元素
public void push(Item item){
//自动扩容
if (N == a.length ) resize(2*a.length );
a[N++] = item;
}
//删除元素
public Item pop(){
Item item = a[--N];
a[N] = null;
if (N > 0 && N == a.length / 4) resize(a.length / 2);
return item;
}
//是否为空
public boolean isEmpty(){
return N == 0;
}
//元素个数
public int size(){
return N;
}
//改变数组容量
private void resize(int length) {
Item[] temp = (Item[])new Object[length];
for (int i = 0; i < N; i++) {
temp[i] = a[i];
}
a = temp;
}
//返回栈中最近添加的元素而不删除它
public Item peek(){
return a[N-1];
}
@Override
public Iterator<Item> iterator() {
return new ArrayIterator();
}
//内部类
class ArrayIterator implements Iterator{
//控制迭代数量
int i = N;
@Override
public boolean hasNext() {
return i > 0;
}
@Override
public Item next() {
return a[--i];
}
}
}

实现代码：（栈的链表实现）
public class StackOfLinked<Item> implements Iterable<Item> {
//定义一个内部类，就可以直接使用类型参数
private class Node{
Item item;
Node next;
}
private Node first;
private int N;
//构造器
public StackOfLinked(){}
//添加
public void push(Item item){
Node oldfirst = first;
first = new Node();
first.item = item;
first.next = oldfirst;
N++;
}
//删除
public Item pop(){
Item item = first.item;
first = first.next;
N--;
return item;
}
//是否为空
public boolean isEmpty(){
return N == 0;
}
//元素数量
public int size(){
return N;
}
//返回栈中最近添加的元素而不删除它
public Item peek(){
return first.item;
}
@Override
public Iterator<Item> iterator() {
return new LinkedIterator();
}
//内部类：迭代器
class LinkedIterator implements Iterator{
int i = N;
Node t = first;
@Override
public boolean hasNext() {
return i > 0;
}
@Override
public Item next() {
Item item = (Item) t.item;
t = t.next;
i--;
return item;
}
}
}