const axios = require("axios");

class Toggl {
  constructor(api_url, api_key) {
    this.apiUrl = api_url;
    this.apiKey = api_key;
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: api_key,
        password: "api_token",
      },
    });
  }

  async getTimesheets(date_from = "", date_to = "") {
    try {
      const { data } = await this.axiosInstance.get(`time_entries?start_date=${date_from}&end_date=${date_to}`);
      return data;
    } catch (err) {
      console.error(err);
    }
    return null;
  }

  async getProject(id) {
    try {
      const { data } = await this.axiosInstance.get(`projects/${id}`);
      return data.data;
    } catch (err) {
      console.error(err);
    }
    return null;
  }
}

module.exports = Toggl;
