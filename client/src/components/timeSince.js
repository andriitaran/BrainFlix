/* DYNAMIC TIMESTAMP */

const timeSince = date => {
  let seconds = Math.floor((new Date() - date) / 1000);
  let intervalType; // placeholder for type of interval - year, month, day, hour, etc.
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = "year"; // check if more than 1 year have passed
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = "month"; // check if more than 1 month have passed
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = "day"; // check if more than 1 day have passed
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hour"; // check if more than 1 hour have passed
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minute"; // check if more than 1 minute have passed
          } else {
            if (interval === 0) {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += "s";
  }
  return `${interval} ${intervalType} ago`; // used ES6 strings template
};

export default timeSince;
