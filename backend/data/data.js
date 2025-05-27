const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Mansi Verma",
        email: "mansi@example.com",
      },
      {
        name: "Aayushi",
        email: "aayushi@example.com",
      },
    ],
    _id: "64e76c2146169cb9663a3a5a",
    chatName: "Mansi Verma",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Aayushi",
        email: "aayushi@example.com",
      },
    ],
    _id: "64e76bc946169cb9663a3a57",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Prasoon",
        email: "prasoon@example.com",
      },
      {
        name: "Aayushi",
        email: "aayushi@example.com",
      },
    ],
    _id: "64e76c7546169cb9663a3a61",
    chatName: "Prasoon",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Mansi Verma",
        email: "jon@example.com",
      },
      {
        name: "Aayushi",
        email: "aayushi@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "64e76bc946169cb9663a3a57",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Latika",
        email: "latika@example.com",
      },
      {
        name: "Aayushi",
        email: "aayushi@example.com",
      },
    ],
    _id: "64e77046ae932d07ff559ea7",
    chatName: "Latika",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Mansi Verma",
        email: "jon@example.com",
      },
      {
        name: "Aayushi",
        email: "aayushi@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "64e76bc946169cb9663a3a57",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = { chats };
