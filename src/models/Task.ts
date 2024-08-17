import mongoose from "mongoose";
    
export interface validate extends mongoose.Document {
    title:string;
    description:string;
}

const taskSchemma = new mongoose.Schema<validate>({
   title:{
      required:true,
      type:String
   },
   description:{
    required:true,
    type:String
   }
})

const TaskModel = (mongoose.models.todo as mongoose.Model<validate>) || mongoose.model<validate>("todo",taskSchemma);
export default TaskModel;