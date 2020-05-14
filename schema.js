const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLBoolean,
} = require("graphql");

// Leaderboard Type
const LeaderboardType = new GraphQLObjectType({
  name: "Leaderboard",
  fields: () => ({
    name: { type: GraphQLString },
    score: { type: GraphQLInt },
    date: { type: GraphQLString },
  }),
});

// EXAMPLE
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
  }),
});

// EXAMPLE
const DogType = new GraphQLObjectType({
  name: "Dog",
  fields: () => ({
    message: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    leaderboard: {
      type: new GraphQLList(LeaderboardType),
      resolve(parent, args) {
        return axios
          .get("http://localhost:8000/api/leaderboard")
          .then((res) => res.data);
      },
    },
    // EXAMPLE
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then((res) => res.data);
      },
    },
    // EXAMPLE
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then((res) => res.data);
      },
    },
    // EXAMPLE
    dogs: {
      type: DogType,
      resolve(parent, args) {
        return axios
          .get("https://dog.ceo/api/breeds/image/random")
          .then((res) => res.data);
      },
    },
  },
});

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addToLeaderboard: {
//       type: LeaderboardType,
//       args: {
//         name: { type: GraphQLString },
//         score: { type: GraphQLInt },
//         date: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         let leaderboardEntry = new LeaderboardType
//       }
//     }
//   }
// })

module.exports = new GraphQLSchema({
  query: RootQuery,
});
