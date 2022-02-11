const axios = require("axios");

class Kimai {
  constructor(api_url, api_user, api_key) {
    this.apiUrl = api_url;
    this.apiUser = api_user;
    this.apiKey = api_key;
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-USER": this.apiUser,
        "X-AUTH-TOKEN": this.apiKey,
      },
    });
  }

  async getProjects() {
    try {
      const { data } = await this.axiosInstance.get("projects");
      return data;
    } catch (err) {
      console.error(err);
    }
    return null;
  }

  async createTimesheet(start_date, end_date, projectId, description) {
    try {
      const { data } = await this.axiosInstance.post("timesheets", {
        project: projectId,
        begin: start_date,
        end: end_date,
        activity: 1,
        description
      });
      return data;
    } catch (err) {
      console.error(err);
    }
    return null;
  }
}

module.exports = Kimai;
