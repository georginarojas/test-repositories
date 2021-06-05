const fetch = require("node-fetch");

module.exports = {
  async index(req, res) {
    try {
      const { page } = req.query;

      const pageSize = 4;
      const visibility = "is:public";
      const sort = "sort:interactions-desc";

      const url = "https://api.github.com/search/repositories";

      const apiCall = `${url}?q=${visibility}+${sort}&per_page=${pageSize}&page=${page}`;

      // const url = "https://api.github.com/orgs/rocketseat/repos"

      // const apiCall = `${url}?${sort}&per_page=${pageSize}&page=${page}`;

      const response = await fetch(apiCall);

      if (response == null) {
        return res.status(404).json({
          status: "failure",
          error: "Was not possible loading the repositories",
        });
      }

      if (page >= 1000 / pageSize) {
        return res.status(400).json({
          status: "failure",
          url: "https://docs.github.com/v3/search/",
          error: "Only the first 1000 search results are available",
        });
      }

      const data = await response.json();
      const repositoryList = [];
      var index = 0;

      console.log("Total of repositories: ", data);
      for (repo of data.items) {
        // for (repo of data) {
        repositoryList[index] = {
          name: repo.name,
          description: repo.description,
          url: repo.url,
        };

        console.log("Name ", repo.name);
        console.log("Description ", repo.description);
        console.log("Url ", repo.html_url);

        console.log(
          "RepositoryList ",
          "\n",
          repositoryList[index].name,
          "\n",
          repositoryList[index].description,
          "\n",
          repositoryList[index].url,
          "\n"
        );

        index++;
      }

      return res.status(200).json({ data: { repositoryList, count: 1000 } });
    } catch (error) {
      res.status(500).json({
        status: "failure",
        error: error.message,
      });
    }
  },
};
