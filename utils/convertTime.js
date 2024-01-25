module.exports = (dateString) => {
    const date = new Date(dateString);

    date.setUTCHours(date.getUTCHours() + 7);

    const day = ("0" + date.getUTCDate()).slice(-2);
    const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
    const year = date.getUTCFullYear();
    const hours = ("0" + date.getUTCHours()).slice(-2);
    const minutes = ("0" + date.getUTCMinutes()).slice(-2);
    const seconds = ("0" + date.getUTCSeconds()).slice(-2);
    const vietnamDateTime = day + "/" + month + "/" + year + " - " + hours + ":" + minutes + ":" + seconds;

    return vietnamDateTime;
}