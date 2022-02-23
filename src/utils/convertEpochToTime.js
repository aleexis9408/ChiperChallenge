import moment from 'moment';

export const convertEpochToTimeAgo = epoch => {
  const unixEpochTimeMS = epoch * 1000;
  const currentDate = new Date(unixEpochTimeMS);
  let newDate = moment.parseZone(currentDate).format('YYYY-MM-DD');
  let FormatedDate =
    moment.duration(moment().diff(newDate)).humanize() + ' ago';
  return FormatedDate;
};
