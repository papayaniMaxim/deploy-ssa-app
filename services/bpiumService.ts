import axios from "axios";
import { IStorageRecord, IStorageRecords } from "../interfaces";

export const domain = "https://test-ssa1.bpium.ru/";
export const orderCatalogId = "11";
export const storageCatalogId = "12";

const Authorization = btoa("papayanibusinessmail@gmail.com:test-ssa1");
const reqOpt = {
  headers: {
    Authorization: "Basic " + Authorization,
  },
};
export function getAllOrderRecords() {
  return axios
    .get(domain + "api/v1/catalogs/" + orderCatalogId + "/records/", reqOpt)
    .then((res) => res.data);
}

export function getOrderRecord(recordId: number) {
  return axios
    .get(
      domain + "api/v1/catalogs/" + orderCatalogId + "/records/" + recordId,
      reqOpt
    )
    .then((res) => res.data);
}

export function getAllStorageRecords() {
  return axios
    .get(domain + "api/v1/catalogs/" + storageCatalogId + "/records/", reqOpt)
    .then((res): IStorageRecords => res.data);
}

export function getStorageRecord(recordId: number) {
  return axios
    .get(
      domain + "api/v1/catalogs/" + storageCatalogId + "/records/" + recordId,
      reqOpt
    )
    .then((res): IStorageRecord => res.data);
}

export function createStorageRecord(
  catalogId: number | string,
  recordId: number | string,
  comment: string
) {
  //URL: {domain}/api/v1/catalogs/{catalogId}/records
  const recordConfig = {
    values: {
      "3": [
        {
          catalogId,
          recordId,
        },
      ],
      "4": comment,
    },
  };
  return axios.post(
    domain + "api/v1/catalogs/" + storageCatalogId + "/records/",
    recordConfig,
    reqOpt
  );
}
export function updateOrderRecord(
  catalogId: number | string,
  recordId: number | string,
  comment: string
) {
  //URL: {domain}/api/v1/catalogs/{catalogId}/records
  const recordConfig = {
    values: {
      "3": comment,
    },
  };
  return axios.patch(
    domain + "api/v1/catalogs/" + catalogId + "/records/" + recordId,
    recordConfig,
    reqOpt
  );
}
