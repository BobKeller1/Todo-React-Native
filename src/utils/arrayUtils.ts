const groupBy = <T>(
  tasks: T[],
  getGroupKey: (item: T) => string,
): Record<string, T[]> => {
  const groupedTasks: Record<string, T[]> = tasks.reduce(
    (acc: Record<string, T[]>, task) => {
      (acc[getGroupKey(task)] = acc[getGroupKey(task)] || []).push(task);
      return acc;
    },
    {},
  );
  return groupedTasks;
};

export {groupBy};
