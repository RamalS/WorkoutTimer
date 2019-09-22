import {
   addToTable,
   getAllFromTable,
   removeFromTable
} from "../StorageService";
import uniqid from "uniqid";

export default class WorkoutService {
   static create(name) {
      addToTable("workout", { id: uniqid(), name, workouts: {} });
   }

   static find() {
      const workouts = getAllFromTable("workout");
      const workoutNames = workouts.map(workout => {
         return { name: workout.name };
      });

      return workoutNames;
   }

   static delete(id) {
      removeFromTable("workout", id);
   }
}
