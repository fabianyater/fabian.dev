export const splitItem = (item) => {
  return item.split(':');
}

export const getTaskTitle = (itemParts) => {
  return itemParts[0];
}

export const getTaskDescription = (itemParts) => {
  if (itemParts.length > 1) {
    itemParts.shift();
    return itemParts.join(':').trim();
  }
  return itemParts.join(':');
}