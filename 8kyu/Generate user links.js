function generateLink(user) {
    let link = 'http://www.codewars.com/users/';
    const value = encodeURIComponent(user);
    return link + value;
    }