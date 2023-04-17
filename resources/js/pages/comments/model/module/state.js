const state = function () {
  return {
    list: [],
    pagination: {
      page: 1,
      allPages: 1,
    },
    sorting: [
      {
        name: 'id',
        value: true,
        directionUp: false,
      },
      {
        name: 'date',
        value: false,
        directionUp: false,
      },
    ],
  }
}

export default state
