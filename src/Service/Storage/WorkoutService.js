import {
   addToTable,
   getAllFromTable,
   removeFromTable,
   updateTable
} from "../StorageService";
import uniqid from "uniqid";

export default class WorkoutService {
   static create(name) {
      addToTable("workout", { id: uniqid(), name, intervals: [] });
   }

   static find(includeItems, id) {
      const intervals = getAllFromTable("workout");
      let search = intervals

      const workoutNames = intervals.map(workout => {
         return { id: workout.id, name: workout.name };
      });

      if (includeItems === undefined) {
         search = workoutNames;
      }

      if (id) {
         search = search.find(s => s.id === id);
      }

      return search;
   }

   static delete(id) {
      removeFromTable("workout", id);
   }

   static update(object) {
      updateTable("workout", object);
   }
}
