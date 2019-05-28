const guid = () =>
  Array(3)
    .fill(0)
    .map(x =>
      Math.random()
        .toString(16)
        .slice(2)
    )
    .join('');

module.exports = guid;
