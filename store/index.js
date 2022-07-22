export const state = () => ({
  profile: null,
});

export const getters = {
  authenticated(state) {
    return state.profile !== null;
  },
};

export const mutations = {
  setProfile(state, { profile }) {
    state.profile = profile;
  },
  updateLocalStorage(state, payload) {
    Object.entries(payload).forEach(([key, val]) => {
      localStorage.setItem(key, val);
    });
  },
};

export const actions = {
  async login({ commit }, payload) {
    console.log(process.env.BASE_URL);
    await this.$axios.$post(
      // process.env.BASE_URL + "/rcms-api/6/login",
      "https://fcslabo.g.kuroco.app/rcms-api/6/login",
      payload
    );

    commit("setProfile", { profile: {} }); // ダミーのオブジェクトをstore.state.profileに適用
    commit("updateLocalStorage", { authenticated: true });
  },
  async restoreLoginState({ commit }) {
    const authenticated = JSON.parse(localStorage.getItem("authenticated"));

    if (!authenticated) {
      throw new Error("need to login");
    }
    commit("setProfile", { profile: {} }); // ダミーのオブジェクトをstore.
    await null;
  },
};
