import ls from "local-storage";

export const addToTable = (tableName, object) => {
   let items = getAllFromTable(tableName);
   if (ls.get(tableName) !== null) {
      ls.set(tableName, [...items, object]);
   } else {
      ls.set(tableName, [object]);
   }
};

export const getAllFromTable = tableName => {
   let items = ls.get(tableName);
   if (items === null) {
      items = [];
   }

   return items;
};

export const removeFromTable = (tableName, id) => {
   let items = ls.get(tableName);

   let object = items.find(o => o.id === id);
   let objectIndex = items.indexOf(object);

   if (objectIndex >= 0) {
      items.splice(objectIndex, 1);
      ls.set(tableName, items);
   }

   return items;
};

export const updateTable = (tableName, object) => {
   let items = ls.get(tableName);
   let data = items.find(d => d.id === object.id);
   items.splice(items.indexOf(data), 1, object);
   ls.set(tableName, items);
};
