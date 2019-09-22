import {
   addToTable,
   getAllFromTable,
   removeFromTable,
   updateTable
} from "../StorageService";
import uniqid from "uniqid";

export default class IntervalService {
   static async create(model) {
      addToTable("interval", {
         id: uniqid(),
         workoutId: model.workoutId,
         name: model.name,
         duration: model.duration
      });
   }

   static async find(id, workoutId) {
      let items = await getAllFromTable("interval");
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
      return await updateTable("interval", model);
   }
}
