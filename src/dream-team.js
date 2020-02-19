module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let nameTeam = [];
    for (let i = 0; i < members.length; i++){
      if (typeof members[i] === "string"){
          let word = members[i].replace( /\s/g, "").split('');
          nameTeam.push(word[0].toUpperCase());
      }
    }
    return nameTeam.sort().join('')
};