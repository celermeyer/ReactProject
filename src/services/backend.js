import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  USERS: `${process.env.REACT_APP_BACKEND_URL}/user`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  APPLIERS: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  CONVERSATION: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation`,
  CONVERSATIONMESSAGES: `${process.env.REACT_APP_BACKEND_URL}/chat/message`,
  OFFERS: `${process.env.REACT_APP_BACKEND_URL}/offre`,
};

export const Backend = {
  login: async function (email, password) {
    return request(ENDPOINTS.LOGIN, {
      method: "POST",
      data: { email, password },
    });
  },

  getUsers: async function () {
    return request(ENDPOINTS.USERS);
  },

  getCompanies: async function () {
    return request(ENDPOINTS.COMPANIES);
  },

  getConversations: async function () {
    return request(ENDPOINTS.CONVERSATION);
  },

  getUserConversations: async function (idUser1) {
    return request(ENDPOINTS.CONVERSATION + "/" + idUser1);
  },

  createConversation: async function (idUser1, idUser2) {
    return request(ENDPOINTS.CONVERSATION + "/" + idUser1 + "/" + idUser2, {method: "POST"});
  },

  closeConversation: async function (idUser1, idUser2) {
    return request(ENDPOINTS.CONVERSATION + "/" + idUser1 + "/" + idUser2, {method: "DELETE"});
  },

  getAppliers: async function () {
    return request(ENDPOINTS.APPLIERS);
  },

  getOffers: async function () {
    return request(ENDPOINTS.OFFERS);
  },

  getConversationMessages: async function (idUser1, idUser2) {
    console.log(idUser1 + ' ' + idUser2);
    return request(ENDPOINTS.CONVERSATIONMESSAGES + "/" + idUser1 + "/" + idUser2);
  },

  sendMessage: async function (idUser1, idUser2, message) {
    console.log(idUser1 + ' ' + idUser2);
    return request(ENDPOINTS.CONVERSATIONMESSAGES + "/" + idUser1 + "/" + idUser2,{
      method: "POST",
      data: { message },
    });
  },
};
