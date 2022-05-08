import axios from "axios";
import { baseUrl } from "../url/httpUrl";

class Http {
  static get() {}

  static post(data) {
    return axios.post(`${baseUrl}v1/auth/register`, data);
  }

  static delete() {}

  static put() {}

  static test() {}
}

export default Http;
