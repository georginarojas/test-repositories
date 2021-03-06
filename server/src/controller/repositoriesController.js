const fetch = require("node-fetch");
const nodemail = require("../nodemail");

module.exports = {
  async index(req, res) {
    try {
      const { page } = req.query;

      const pageSize = 4;
      const visibility = "is:public";
      const sort = "sort:interactions-desc";

      const url = "https://api.github.com/search/repositories";

      const apiCall = `${url}?q=${visibility}+${sort}&per_page=${pageSize}&page=${page}`;

      const response = await fetch(apiCall);

      if (response == null) {
        return res.json({
          status: "failure",
          error: "Was not possible loading the repositories",
        });
      }

      if (page >= 1000 / pageSize) {
        return res.json({
          status: "failure",
          url: "https://docs.github.com/v3/search/",
          error: "Only the first 1000 search results are available",
        });
      }

      const data = await response.json();
      const repositoryList = [];
      var index = 0;

      for (repo of data.items) {
        repositoryList[index] = {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        };
        index++;
      }

      return res
        .status(200)
        .json({ status: "success", data: { repositoryList, count: 999 } });
    } catch (error) {
      res.status(500).json({
        status: "failure",
        error: error.message,
      });
    }
  },

  async send(req, res) {
    try {
      const name = req.body.name;
      const description = req.body.description;
      const url = req.body.url;
      const email = req.body.email;

      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        return res.status(400).json({
          status: "failure",
          error: "Invalid email",
        });
      }

      const response = await nodemail(email, name, description, url);


      if (!response) {
        return res.json({ status: "failure", message: "E-mail not send" });
      }

      return res
        .status(200)
        .json({ status: "success", message: "E-mail send" });
    } catch (error) {
      res.status(500).json({
        status: "failure",
        error: error.message,
      });
    }
  },
};
