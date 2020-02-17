module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let nameTeam = [];
    let concatArray = [].concat(...members);
    for (let i = 0; i < concatArray.length; i++){
      if (typeof concatArray[i] === "string"){
          let word = concatArray[i].replace( /\s/g, "").split('');
          nameTeam.push(word[0].toUpperCase());
      }
    }
    return nameTeam.sort().join('')
};