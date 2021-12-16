import bcrypt from 'bcrypt'

//hash password recieving a plain password
export const hashPassword = (password) => {
    // promise gives success or reject
    return new Promise((resolve, reject) => {
        // salt is the strenght of the hash
      bcrypt.genSalt(12, (err, salt) => {
        if (err) {
          reject(err);
        }
        // if no error hash the password
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
    });
  };
  
  //compare password we give the pain and hashed password
  export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
  };
  