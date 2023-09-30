const choice = (items) => {
  const randomChoice = Math.floor(Math.random() * items.length);
  return items[randomChoice];
};

const remove = (items, item) => {
  let index = items.indexOf(item);

  if (index !== -1) {
    return items.splice(index, 1)[0];
  } else {
    return undefined;
  }
};

export { choice, remove };
