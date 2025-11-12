// ------------ //
// for문
function p32() {
  for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(+i.toFixed(1)); // + : 숫자로 변환 (1.0 -> 1)
  }
}

p32();

// 제곱근
function sqrt3() {
  for (let i = 1; i < 11; i = i + 1) {
    if (Math.sqrt(i) % 1 == 0) continue; // 정수면 continue
    console.log(i, +Math.sqrt(i).toFixed(3));
  }
}

sqrt3();
