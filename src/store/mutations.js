// 상태(History)를 관리 함 => state의 값을 변화시킨다.
export default {
  MUT_COORDS(state, v) {
    console.log("mut-coords");
    state.coords = v;
  },
};
