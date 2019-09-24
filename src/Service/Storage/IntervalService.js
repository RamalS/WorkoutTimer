import {
   addToTable,
   getAllFromTable,
   removeFromTable,
   updateTable
} from "../StorageService";
import uniqid from "uniqid";

export default class IntervalService {
   static tableName = "interval";
   static async create(model) {
      addToTable(this.tableName, {
         id: uniqid(),
         workoutId: model.workoutId,
         name: model.name,
         duration: model.duration
      });
   }

   static async find(id, workoutId) {
      let items = await getAllFromTable(this.tableName);
      let intervals = items;

      if (id) {
         intervals = await items.find(i => i.id === id);
      }

      if (workoutId) {
         intervals = await items.find(i => i.workoutId === workoutId);
      }

      return intervals;
   }

   static async update(model) {
      return await updateTable(this.tableName, model);
   }

   static async delete(id, workoutId) {
      return await removeFromTable(this.tableName, id).filter(i => i.workoutId === workoutId);
   }
}
