import {
   addToTable,
   getAllFromTable,
   removeFromTable,
   updateTable
} from "../StorageService";
import uniqid from "uniqid";

export default class WorkoutService {
   static create(name) {
      addToTable("workout", { id: uniqid(), name, workouts: {} });
   }

   static find(includeItems) {
      const workouts = getAllFromTable("workout");
      let search = workouts;

      const workoutNames = workouts.map(workout => {
         return { id: workout.id, name: workout.name };
      });

      if (includeItems === undefined) {
         search = workoutNames;
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
