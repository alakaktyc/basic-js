module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';

    let month = date.getMonth();

    if (month <= 1 || month === 11) return "winter";
    if (month <= 4) return "spring";
    if (month <= 7) return "summer";
    if (month <= 10) return "autumn";
};
