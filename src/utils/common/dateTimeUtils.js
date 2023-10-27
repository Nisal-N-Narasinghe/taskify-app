export const convertFirebaseTimestampToTime = (firebaseTimestamp) => {
  const date = new Date(
    firebaseTimestamp.seconds * 1000 + firebaseTimestamp.nanoseconds / 1000000
  );

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};
