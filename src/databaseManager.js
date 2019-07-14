import ls from "local-storage";

export function addToTable(tableName, object) {
   if (ls.get(tableName) !== null)
      ls.set(tableName, [...ls.get(tableName), object]);
   else ls.set(tableName, [object]);
}

export function getAllFromTable(tableName) {
   return ls.get(tableName);
}

export function removeFromTable(tableName, id) {
   let tableData = ls.get(tableName);
   tableData.splice(id - 1, 1);
   ls.set(tableName, tableData);
   return tableData;
}

export function updateTable(tableName, object) {}
