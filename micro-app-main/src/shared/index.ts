import store from "@/store";

class Shared {
  /**
   * 获取 Token
   */
  public getToken(): string {
    const state = store.getters.info;
    let {token} = state;
    return token || "";
  }

  /**
   * 设置 Token
   */
  public setToken(token: string): void {
    // 将 token 的值记录在 store 中
    store.dispatch('SET_TOKEN_ASYNC',{
      token
    });
  }
}

const shared = new Shared();
export default shared;
