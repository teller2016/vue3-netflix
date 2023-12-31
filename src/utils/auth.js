import firebase from "firebase/compat/app";

export class AuthAPI {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async login() {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      console.log(response);
      alert("로그인 성공!");
    } catch (error) {
      console.log(error);
      alert("로그인 실패!");
    }
  }

  async signIn() {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password);
      console.log(response);
      alert("회원가입 완료");
    } catch (error) {
      console.log(error);
      alert("회원가입 실패");
    }
  }
}
