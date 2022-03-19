const state = [];
const setters = [];
let cursor = 0;
function createSetter(cursor) {
  return function setterWithCursor(newVal) {
    state[cursor] = newVal;
  };
}
function useState(initVal) {
  if (state[cursor] === undefined && setters[cursor] === undefined) {
    state.push(initVal);
    setters.push(createSetter(cursor));
  }
  const setter = setters[cursor];
  const value = state[cursor];
  cursor++;
  return [value, setter];
}
 
function RenderFunctionComponent() {
  const [firstName, setFirstName] = useState('Rudi'); // cursor: 0
  const [lastName, setLastName] = useState('Yardley'); // cursor: 1
  return (
    <div>
      <button onClick={() => setFirstName('Richard')}>Richard</button>
      <button onClick={() => setLastName('Fred')}>Fred</button>
    </div>
  );
}
 
function MyComponent() {
  cursor = 0; // resetting the cursor
  return <RenderFunctionComponent />; // render
}
 
console.log(state); // Pre-render: []
MyComponent();
console.log(state); // First-render: ['Rudi', 'Yardley']
MyComponent();
console.log(state); // Subsequent-render: ['Rudi', 'Yardley']
 
// click the 'Richard' button
 
console.log(state); // After-click: ['Richard', 'Yardley']