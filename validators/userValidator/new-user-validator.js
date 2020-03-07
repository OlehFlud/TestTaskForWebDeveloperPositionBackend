module.exports = userObject => {
    const {username, email, password,bio} = userObject;

    if (!username  || !email || !password || !bio) {
        throw new Error('userMiddleware object is not valid')
    }

};
