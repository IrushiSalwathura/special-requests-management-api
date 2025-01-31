import { REQUEST_TYPE, STATUS } from "../types";

export interface CreateRequestDTO {
    name: string,
    email: string,
    type: REQUEST_TYPE,
    description: string,
    status: STATUS,
    userId: string,
    preferredDate: string,
    preferredTime: string,
    feedback:string,
}