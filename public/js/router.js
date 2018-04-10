router
  .on({
    "/": () => {
      loadDatas();
    },
    "/hero/:id": (params, query) => {
      loadData(params.id);
    },
    "*": () => {
      loadDatas();
    }
  })
  .resolve();
