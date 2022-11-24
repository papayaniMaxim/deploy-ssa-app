import axios from "axios";

export default function getComment() {
  return axios.get("https://test.bpium.ru/api/webrequest/request", ).then(
    (r) => r.data
  );
}
