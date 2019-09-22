import {
   addToTable,
   getAllFromTable,
   removeFromTable,
   updateTable
} from "../StorageService";
import uniqid from "uniqid";

export default class WorkoutService {
   static async create(name) {
      addToTable("workout", { id: uniqid(), name, intervals: [] });
   }

   static async find(includeItems, id) {
      const items = await getAllFromTable("workout");

      let search = items;

      if (includeItems === "interval") {
         let result = items.map(s => {
            const intervals = getAllFromTable("interval").filter(
               i => i.workoutId === s.id
            );

            return { ...s, intervals };
         });

         search = await result;
      }

      if (id) {
         search = await search.find(s => s.id === id);
      }

      return search;
   }

   static async update(object) {
      updateTable("workout", object);
   }

   static async delete(id) {
      removeFromTable("workout", id);
   }
}
