import { addToTable, getAllFromTable } from "../StorageService";

export default class WorkoutService {
   static create(name) {
      addToTable("workout", { name, workouts: {} });
   }

   static find() {
      const workouts = getAllFromTable("workout");
      const workoutNames = workouts.map(workout => {
         return { name: workout.name };
      });

      return workoutNames;
   }
}
