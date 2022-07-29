import { v4 as uuidv4 } from 'uuid';

export default {
  Query: {
    messages: (_parent, _args, { models }) => {
      return Object.values(models.messages);
    },
    message: (_parent, { id }, { models }) => {
      return models.messages[id];
    }
  },

  Mutation: {
    createMessage: (_parent, { text }, { me, models }) => {
      const id = uuidv4();
      const message = {
        id,
        text,
        userId: me.id
      };

      models.messages[id] = message;
      models.users[me.id].messageIds.push(id);

      return message;
    },

    deleteMessage: (_parent, { id }, { models }) => {
      const { [id]: message, ...otherMessages } = models.messages;

      if (!message) {
        return false;
      }

      models.messages = otherMessages;

      return true;
    }
  },

  Message: {
    user: (message, _args, { models }) => {
      return models.users[message.userId];
    }
  }
};
