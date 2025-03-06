const formatTimeAgo = (timestamp: number) => {
  const now = Date.now();
  const diff = (now - timestamp) / 1000;

  if (diff < 60 * 30) {
    return "방금 전";
  }

  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / (3600 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 30) {
    return `${days}일 전`;
  } else if (months < 12) {
    return `${months}달 전`;
  } else {
    return `${years}년 전`;
  }
};

export default formatTimeAgo;
