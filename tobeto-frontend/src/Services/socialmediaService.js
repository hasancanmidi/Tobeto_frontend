import axios from "axios";
import API_URL from "./config";

//update fonksiyonları yoruma alındı daha sonra düzenlenecek
//api url endpointleri ve konfigürasyonları oluşturulmadı, hazırlanıcak, geçici url verildi

const BASE_URL = API_URL; 

 const socialMediaService = {
  addUserSocial: async (userId, socialMediaId, link) => {
    try {
      const response = await axios.post(`${BASE_URL}/UserSocials/add`, {
        userId: userId,
        socialMediaId: socialMediaId,
        link: link,
      });
      console.log("responseee", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding user social:", error);
      throw error;
    }
  },

  // updateUserSocial: async (userSocialId, userId, socialMediaId, link) => {
  //   try {
  //     const response = await axios.put(`${BASE_URL}/UserSocials/update`, {
  //       id: userSocialId,
  //       userId: userId,
  //       socialMediaId: socialMediaId,
  //       link: link,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error updating user social:", error);
  //     throw error;
  //   }
  // },

  deleteUserSocial: async (userSocialId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/UserSocials/delete`, {
        data: { Id: userSocialId },
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting user social:", error);
      throw error;
    }
  },

  getUserSocialsByUserId: async (userId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/UserSocials/getListByUser`,
        {
          params: { id: userId },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error getting user socials by user id:", error);
      throw error;
    }
  },

  addSocialMedia: async (name) => {
    try {
      const response = await axios.post(`${BASE_URL}/SocialMedias/add`, {
        name: name,
      });
      return response.data;
    } catch (error) {
      console.error("Error adding social media:", error);
      throw error;
    }
  },

  // updateSocialMedia: async (socialMediaId, name) => {
  //   try {
  //     const response = await axios.put(`${BASE_URL}/SocialMedias/update`, {
  //       id: socialMediaId,
  //       name: name,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error updating social media:", error);
  //     throw error;
  //   }
  // },

  deleteSocialMedia: async (socialMediaId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/SocialMedias/delete`, {
        params: { id: socialMediaId },
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting social media:", error);
      throw error;
    }
  },

  getSocialMedias: async (pageIndex, pageSize) => {
    try {
      const response = await axios.get(`${BASE_URL}/SocialMedias/getList`, {
        params: {
          PageIndex: pageIndex,
          PageSize: pageSize,
        },
      });
      const { items, size, index } = response.data; 
      console.log("Received data:", response.data); 
      console.log("Index:", index); 
      console.log("Size:", size); 
      return { items, size, index }; 
    } catch (error) {
      console.error("Error getting social medias:", error);
      throw error;
    }
  },

  getUserSocials: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/UserSocials/getList`);
      console.log("Received data:", response.data); 
      return response.data; 
    } catch (error) {
      console.error("Error getting social medias:", error);
      throw error;
    }
  },
};

export default socialMediaService;


