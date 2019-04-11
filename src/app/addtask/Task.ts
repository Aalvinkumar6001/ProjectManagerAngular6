import { User } from "src/app/adduser/User";
import { ParentTask } from "src/app/addtask/ParentTask";
import { Project } from "src/app/addproject/Project";

export class Task {
    taskId:number;
    project:Project;
    taskName: String;
    priorityValue: number;
    parentTaskData: ParentTask;
    startDate:Date;
    endDate:Date;
    user:User;
    selectProject:String;
    selectUser:String;
    selectParent:String
    taskStatus:boolean;
    }
 
    