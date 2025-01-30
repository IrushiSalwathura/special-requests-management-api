import { REQUEST_TYPE, STATUS } from "../types";

export interface CreateRequestDTO {
    type: REQUEST_TYPE,
    description: string,
    status: STATUS,
    userId: string
}