import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateRequestDTO } from './dto/create-request-dto';
import { ReviewRequestDTO } from './dto/review-request-dto';

@Injectable()
export class RequestService {
    constructor(@InjectModel(Request.name) private requestModel: Model<Request>) {}

    async createRequest(request: CreateRequestDTO): Promise<Request> {
        const res = await this.requestModel.create({
            user: new Types.ObjectId(request.userId),
            name: request.name,
            email: request.email,
            type: request.type,
            description: request.description,
            status: request.status || "PENDING",
            preferredDate: request.preferredDate,
            preferredTime: request.preferredTime,
            feedback: request.feedback,
        })
        return res;
    }

    async getAllRequests(): Promise<Request[]> {
        const requests = await this.requestModel.find();
        return requests;
    }

    async findById(id: string): Promise<Request> {
        const res = await this.requestModel.findById(id);
        if(res == null)
            throw new NotFoundException("Request not found");
        return res;
    }

    async updateRequest(id: string, request: CreateRequestDTO): Promise<Request> {
        const res = await this.requestModel.findByIdAndUpdate(id, request, {
            new: true,
            runValidators: true
        });
        if(res == null)
            throw new NotFoundException("Request not found, Update failed");
        return res;
    }

    async getRequestsByUser(userId: string) : Promise<Request[]> {
        return await this.requestModel.find({user: new Types.ObjectId(userId)}).exec();
    }

    async deleteRequest(id: string): Promise<string> {
        const res = await this.requestModel.findByIdAndDelete(id);
        if(res == null)
            throw new NotFoundException("Request not found, delete failed");
        return "Request Deleted Successfully";
    }

    async reviewRequest(request: ReviewRequestDTO, id:string): Promise<Request> {
        const res = await this.requestModel.findByIdAndUpdate(id, request, {
            new: true,
            runValidators: true
        });
        console.log(res)
        if(res == null)
            throw new NotFoundException("Request not found, Update failed");
        return res;
    }
}
