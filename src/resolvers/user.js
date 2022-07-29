
export default {
  Query: {
    users: (_parent, _args, { models }) => {
      return Object.values(models.users);
    },
    user: (_parent, { id }, { models }) => {
      return models.users[id];
    },
    me: (_parent, _args, { me }) => {
      return me;
    }
  },

  User: {
    messages: (user, _args, { models }) => {
      return Object.values(models.messages).filter(
        message => message.userId === user.id
      );
    }
  }
};
