import axios from "axios"
import { BookingModel } from "../model/bookingModel"
import { ListTicketModel } from "../model/listTicketModel"
import { ResponseModel } from "../model/responseModel"
import { TicketBookedModel } from "../model/ticketBookedModel"
import { TicketModel } from "../model/ticketModel"
import { UpdateSeatModel } from "../model/updateSeatModel"

import { Constant } from "../service/infastructural/constant"
import { ToastCustomSuccess, ToastCustomWarning } from "../service/infastructural/toast"
import { StorageService } from "../service/storageService"
import { url } from "./contants"



const storageService = new StorageService()

const customePost = async (url: string, dataForm: any,messErr = "Vui lòng thử lại"): Promise<ResponseModel> => {

    const token = storageService.get(Constant.auths.token)
    try {
        const res = await axios({
            url: url,
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: dataForm
        })

        const response: ResponseModel = {
            isSuccess: true,
            data: res.data
        }
        ToastCustomSuccess(response.data.message)
        return response
    } catch (error) {

        const response: ResponseModel = {
            isSuccess: false,
            data: null
        }
        ToastCustomWarning(messErr)
        return response
    }
}

const customeGet = async (url: string): Promise<ResponseModel> => {

    const token = storageService.get(Constant.auths.token)
    try {
        
        const res = await axios({
            url: url,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        const response: ResponseModel = {
            isSuccess: true,
            data: res.data
        }
        
        ToastCustomSuccess(response.data.message)
        return response
    } catch (error) {

        const response: ResponseModel = {
            isSuccess: false,
            data: null
        }
        
        ToastCustomWarning("Vui lòng thử lại")
        return response
    }
}
const orderApi = async (data: BookingModel): Promise<ResponseModel> => {
    const result = await customePost(url.order, data,"Vui lòng thử vị trí khác")
    const tickets: Array<TicketModel> = data.seats.map((e, index) => {
        return {
            ...e,
            code: result.data.ticketCodes[index],
            movie:data.movie,
            date:data.date,
            hall:data.hall
        }
    })
    const dataStore: ListTicketModel = {
        ...data,
        tickets
    }

    storageService.set(Constant.bookingData.isData, true)
    storageService.set(Constant.bookingData.data, dataStore)
    return result
}

const getTicket = async (codeId: string): Promise<ResponseModel> => {

    const result = await customeGet(url.ticketLink + codeId)
    
    return result
}
const getAllOrder = async (): Promise<ResponseModel> => {

    const result = await customeGet(url.getAllOrder)
    
    return result
}
const getBooked = async (data:UpdateSeatModel): Promise<ResponseModel> => {

    const result = await customePost(url.getBooked,data)
    
    return result
}
export {
    orderApi,
    getTicket,
    getAllOrder,
    getBooked
}