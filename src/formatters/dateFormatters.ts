const dateFormatter = (
  date: string,
  isNeedToSplit?: boolean,
  separator?: string,
  extractedElem = 0,
) => {
  if (isNeedToSplit) {
    return new Date(+date).toLocaleString('ru-RU').split(`${separator}`)[
      extractedElem
    ];
  }
  return new Date(+date).toLocaleString('ru-RU');
};

const formatToTimestamp = (date: Date) => {
  return date.valueOf().toString();
};

export {dateFormatter, formatToTimestamp};
