import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDTO } from './dto/create-request-dto';

@Controller('request')
export class RequestController {
    constructor(private requestService: RequestService){}

    @Post()
    async createRequest(@Body() request: CreateRequestDTO): Promise<Request> {
        return await this.requestService.createRequest(request);
    }

    @Get(':id')
    async getRequestById(@Param('id') id: string) : Promise<Request> {
        return await this.requestService.findById(id);
    }

    @Get()
    async getAllRequests(): Promise<Request []> {
        return await this.requestService.getAllRequests();
    }

    @Get("user/:userId")
    async getRequestsByUser(@Param('userId') userId: string): Promise<Request[]> {
        return await this.requestService.getRequestsByUser(userId);
    }

    @Put(':id')
    async updateRequest(@Param('id') id:string, @Body() request: CreateRequestDTO): Promise<Request> {
        return await this.requestService.updateRequest(id, request);
    }

    @Delete(':id')
    async deleteRequest(@Param('id') id:string): Promise<string> {
        return await this.requestService.deleteRequest(id);
    }


}
