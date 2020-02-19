const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

    if (typeof sampleActivity === 'string') {
      let sampleActivityNum = parseFloat(sampleActivity);
        if (sampleActivityNum > 0 && sampleActivityNum < MODERN_ACTIVITY) {
            return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) * HALF_LIFE_PERIOD / 0.693);
        }
    }
    return false
};
