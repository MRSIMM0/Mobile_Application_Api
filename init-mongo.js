db.createUser(
    {
      user: "mongouser",
      pwd: "mongouserpass",
      roles: [
        {
          role: "readWrite",
          db: "trials"
        }
      ]
    }
  );
  