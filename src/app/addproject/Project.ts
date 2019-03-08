import { User } from "src/app/adduser/User";

export class Project {
    projectId:number;
    projectName:String;
    startDate: Date;
    endDate: Date;
    priorityValue: number;
    user: User;
    activeProject: boolean; 
    numberOFTask:number;
    }

    