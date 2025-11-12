const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
f1(hong); //  ⇒ 1, 'Hong'
f2(hong); //  ⇒ 1, 'Hong'
f1(lee); //  ⇒ 2, 'Lee'
f2(lee); //  ⇒ 2, 'Lee'

function f1(user) {
  const { id, name } = user;
  console.log(id, name);
}

function f2({ id, name }) {
  console.log(id, name);
}

console.log("-------------------------");
const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { passwd, ...userInfo } = user;
console.log(userInfo);

console.log("-------------------------");
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr; // { id: id1 } : 변수 이름 바꾸기
console.log(id1, id2, id3);

console.log("----------- 정리하기 --------------");
const user1 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getUserValueExceptInitial(k) {
  // k(변수명) = hong
  const { [k]: val } = user1; // val = hong
  const [, ...rest] = val; // rest = [ 'o', 'n', 'g' ]
  return rest.join("");
}
console.log(getUserValueExceptInitial("name")); // 'ong'
console.log(getUserValueExceptInitial("passwd")); // 'yz'
console.log(getUserValueExceptInitial("addr")); // 'eoul'

console.log("-------------------------");
const ar = [1, 2];
[ar[1], ar[0]] = [ar[0], ar[1]];
console.log(ar);
