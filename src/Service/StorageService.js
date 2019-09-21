import ls from "local-storage";

export const addToTable = (tableName, object) => {
   if (ls.get(tableName) !== null) {
      ls.set(tableName, [...ls.get(tableName), object]);
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
   let tableData = ls.get(tableName);
   tableData.splice(id - 1, 1);
   ls.set(tableName, tableData);
   return tableData;
};

export const updateTable = (tableName, object) => {};
