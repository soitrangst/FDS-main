import React from 'react';
import { getBooked } from '../../api';
import { ResponseModel } from '../../model/responseModel';
import { SeatModel } from '../../model/seatModel';
import { TicketBookedModel } from '../../model/ticketBookedModel';
import { ToastCustomWarning } from '../../service/infastructural/toast';
import shallowCompare from 'react-addons-shallow-compare';



interface StateType {
    seatBooked: any
}

type PropType = {
    updateSeat: (e: Array<SeatModel>) => void,
    hall: string,
    date: string,
    movie: string
}

class Seat extends React.Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            seatBooked: {
                "00601001": "",
                "00200501": "",
                "00200601": "",
                "00200701": "",
                "00200801": "",
                "00200901": "",
                "00201001": "",
                "00201101": "",
                "00201201": "",
                "00201301": "",
                "00201401": "",
                "00201501": "",
                "00201601": "",
                "00201701": "",
                "00201801": "",
                "00201901": "",
                "00300301": "",
                "00300401": "",
                "00300501": "",
                "00300601": "",
                "00300701": "",
                "00300801": "",
                "00300901": "",
                "00301001": "",
                "00301101": "",
                "00301201": "",
                "00301301": "",
                "00301401": "",
                "00301501": "",
                "00301601": "",
                "00301701": "",
                "00301801": "",
                "00301901": "",
                "00302001": "",
                "00400301": "",
                "00400401": "",
                "00400501": "",
                "00400601": "",
                "00400701": "",
                "00400801": "",
                "00400901": "",
                "00401001": "",
                "00401101": "",
                "00401201": "",
                "00401301": "",
                "00401401": "",
                "00401501": "",
                "00401601": "",
                "00401701": "",
                "00401801": "",
                "00401901": "",
                "00402001": "",
                "00500301": "",
                "00500401": "",
                "00500501": "",
                "00500601": "",
                "00500701": "",
                "00500801": "",
                "00500901": "",
                "00501001": "",
                "00501101": "",
                "00501201": "",
                "00501301": "",
                "00501401": "",
                "00501501": "",
                "00501601": "",
                "00501701": "",
                "00501801": "",
                "00501901": "",
                "00502001": "",
                "00600301": "",
                "00600401": "",
                "00600501": "",
                "00600601": "",
                "00600701": "",
                "00600801": "",
                "00600901": "",
                "00601101": "",
                "00601201": "",
                "00601301": "",
                "00601401": "",
                "00601501": "",
                "00601601": "",
                "00601701": "",
                "00601801": "",
                "00601901": "",
                "00602001": "",
                "00700301": "",
                "00700401": "",
                "00700501": "",
                "00700601": "",
                "00700701": "",
                "00700801": "",
                "00700901": "",
                "00701001": "",
                "00701101": "",
                "00701201": "",
                "00701301": "",
                "00701401": "",
                "00701501": "",
                "00701601": "",
                "00701701": "",
                "00701801": "",
                "00701901": "",
                "00702001": "",
                "00800301": "",
                "00800401": "",
                "00800501": "",
                "00800601": "",
                "00800701": "",
                "00800801": "",
                "00800901": "",
                "00801001": "",
                "00801101": "",
                "00801201": "",
                "00801301": "",
                "00801401": "",
                "00801501": "",
                "00801601": "",
                "00801701": "",
                "00801801": "",
                "00801901": "",
                "00802001": "",
                "00900301": "",
                "00900401": "",
                "00900501": "",
                "00900601": "",
                "00900701": "",
                "00900801": "",
                "00900901": "",
                "00901001": "",
                "00901301": "",
                "00901401": "",
                "00901501": "",
                "00901601": "",
                "00901701": "",
                "00901801": "",
                "00901901": "",
                "00902001": "",
                "01000301": "",
                "01000401": "",
                "01000501": "",
                "01000601": "",
                "01000701": "",
                "01000801": "",
                "01000901": "",
                "01001001": "",
                "01001101": "",
                "01001201": "",
                "01001301": "",
                "01001401": "",
                "01001501": "",
                "01001601": "",
                "01001701": "",
                "01001801": "",
                "01001901": "",
                "01002001": "",
                "01002201": "",
                "01002301": "",
                "01100301": "",
                "01100401": "",
                "01100501": "",
                "01100601": "",
                "01100701": "",
                "01100801": "",
                "01100901": "",
                "01101001": "",
                "01101101": "",
                "01101201": "",
                "01101301": "",
                "01101401": "",
                "01101501": "",
                "01101601": "",
                "01101701": "",
                "01101801": "",
                "01101901": "",
                "01102001": "",
                "01102201": "",
                "01102301": "",
                "01200301": "",
                "01200401": "",
                "01200501": "",
                "01200601": "",
                "01200701": "",
                "01200801": "",
                "01200901": "",
                "01201001": "",
                "01201301": "",
                "01201401": "",
                "01201501": "",
                "01201601": "",
                "01201701": "",
                "01201801": "",
                "01201901": "",
                "01202001": "",
                "01202201": "",
                "01202301": "",
                "01300301": "",
                "01300401": "",
                "01300501": "",
                "01300601": "",
                "01300701": "",
                "01300801": "",
                "01300901": "",
                "01301001": "",
                "01301101": "",
                "01301201": "",
                "01301301": "",
                "01301401": "",
                "01301501": "",
                "01301601": "",
                "01301701": "",
                "01301801": "",
                "01301901": "",
                "01302001": "",
                "01302201": "",
                "01302301": "",
                "01400301": "",
                "01400401": "",
                "01400501": "",
                "01400601": "",
                "01400701": "",
                "01400801": "",
                "01400901": "",
                "01401001": "",
                "01401101": "",
                "01401201": "",
                "01401301": "",
                "01401401": "",
                "01401501": "",
                "01401601": "",
                "01401701": "",
                "01401801": "",
                "01401901": "",
                "01402001": "",
                "01402201": "",
                "01402301": "",
                "01500301": "",
                "01500401": "",
                "01500501": "",
                "01500601": "",
                "01500701": "",
                "01500801": "",
                "01501501": "",
                "01501601": "",
                "01501701": "",
                "01501801": "",
                "01501901": "",
                "01502001": "",
                "01502101": "",
                "01502201": "",
            }
        }
    }

    shouldComponentUpdate(nextProps: PropType, nextState: StateType): boolean {
        if (JSON.stringify(nextProps) == JSON.stringify(this.props)) {
            return false
        }
        return true
    }

    componentDidUpdate(prevProps: PropType): void {
        if (
            prevProps.date !== this.props.date ||
            prevProps.hall !== this.props.hall ||
            prevProps.movie !== this.props.movie) {
            this.updateSeatAvailabel()
        }
    }

    getBookedSeats = async (): Promise<ResponseModel> => {
        const { hall, date, movie } = this.props
        if (hall && date && movie) {
            const response: ResponseModel = await getBooked({ hall, date, movie })
            return response
        }
        return { isSuccess: false, data: null }
    }

    updateSeatAvailabel = async (): Promise<void> => {
        const result: ResponseModel = await this.getBookedSeats()
        if (result.isSuccess) {
            const setBooked: Array<TicketBookedModel> = result.data.data
            // const seats = document.querySelector('[data-loc="00601001"]')
            // console.log(seats);

            setBooked.map((e) => {
                const element: HTMLElement = document.querySelector(`[data-loc="${e.loc}"]`)
                const classList = element.classList
                classList.add('seat-disable')
                classList.add('disable')
                classList.remove('active')
            })
        }
    }

    render(): JSX.Element {
        let seats: Array<SeatModel> = []
        const selectedseats = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

            const element = e.target as HTMLElement
            const zone = element.getAttribute('data-zone')
            const loc = element.getAttribute('data-loc')
            const indexSeat = seats.length - 1

            if (indexSeat > -1 && seats[indexSeat].zone != zone) {
                ToastCustomWarning('Vui lòng chọn cùng loại ghế')
                return
            }

            if (element.classList.value.split(' ').indexOf('seat-disable') >= 0) {
                return
            }
            if (element.classList.value.split(' ').indexOf('checked') === -1) {
                element.classList.add('checked')
                const data: SeatModel = {
                    zone,
                    loc,
                    price: parseFloat(element.getAttribute('data-price')),
                    name: element.textContent.trim()
                }
                seats.push(data)
            } else {
                const newSeats: Array<SeatModel> = seats.filter(s => s.loc !== loc)
                seats = [...newSeats]
                element.classList.remove('checked')
            }
            this.props.updateSeat(seats)
        }

        return (
            <React.Fragment>
                <div className="ticketbox">
                    {this.props.movie}
                    <div className="screen"><span className="text-screen">Phòng chiếu</span></div>

                    <div className="row">

                        <div className="seat empty">
                            Q88
                        </div>
                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00200501" data-price="75000">
                            A18							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00200601" data-price="75000">
                            A17							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00200701" data-price="75000">
                            A16							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00200801" data-price="75000">
                            A15							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00200901" data-price="75000">
                            A14							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201001" data-price="75000">
                            A13							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201101" data-price="75000">
                            A12							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201201" data-price="75000">
                            A11							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201301" data-price="75000">
                            A10							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201401" data-price="75000">
                            A9							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201501" data-price="75000">
                            A8							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201601" data-price="75000">
                            A7							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201701" data-price="75000">
                            A6							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201801" data-price="75000">
                            A5							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00201901" data-price="75000">
                            A4
                            </div>
                        <div className="seat seat-unavailable disable">
                            A3
                            </div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                   
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00300301" data-price="75000">
                            B20							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00300401" data-price="75000">
                            B19							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00300501" data-price="75000">
                            B18							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00300601" data-price="75000">
                            B17							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00300701" data-price="75000">
                            B16							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00300801" data-price="75000">
                            B15							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00300901" data-price="75000">
                            B14							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301001" data-price="75000">
                            B13							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301101" data-price="75000">
                            B12							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301201" data-price="75000">
                            B11							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301301" data-price="75000">
                            B10							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301401" data-price="75000">
                            B9							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301501" data-price="75000">
                            B8							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301601" data-price="75000">
                            B7							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301701" data-price="75000">
                            B6							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301801" data-price="75000">
                            B5							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00301901" data-price="75000">
                            B4							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00302001" data-price="75000">
                            B3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00400301" data-price="75000">
                            C20							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00400401" data-price="75000">
                            C19							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00400501" data-price="75000">
                            C18							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00400601" data-price="75000">
                            C17							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00400701" data-price="75000">
                            C16							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00400801" data-price="75000">
                            C15							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00400901" data-price="75000">
                            C14							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401001" data-price="75000">
                            C13							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401101" data-price="75000">
                            C12							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401201" data-price="75000">
                            C11							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401301" data-price="75000">
                            C10							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401401" data-price="75000">
                            C9							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401501" data-price="75000">
                            C8							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401601" data-price="75000">
                            C7							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401701" data-price="75000">
                            C6							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401801" data-price="75000">
                            C5							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00401901" data-price="75000">
                            C4							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00402001" data-price="75000">
                            C3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00500301" data-price="75000">
                            D20							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00500401" data-price="75000">
                            D19							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00500501" data-price="75000">
                            D18							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00500601" data-price="75000">
                            D17							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00500701" data-price="75000">
                            D16							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00500801" data-price="75000">
                            D15							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00500901" data-price="75000">
                            D14							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501001" data-price="75000">
                            D13							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501101" data-price="75000">
                            D12							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501201" data-price="75000">
                            D11							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501301" data-price="75000">
                            D10							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501401" data-price="75000">
                            D9							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501501" data-price="75000">
                            D8							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501601" data-price="75000">
                            D7							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501701" data-price="75000">
                            D6							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501801" data-price="75000">
                            D5							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00501901" data-price="75000">
                            D4							</div>

                        <div className="seat seat-standard active" onClick={(e) => selectedseats(e)} data-zone="Thường" data-loc="00502001" data-price="75000">
                            D3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00600301" data-price="75000">
                            E20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00600401" data-price="75000">
                            E19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00600501" data-price="75000">
                            E18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00600601" data-price="75000">
                            E17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00600701" data-price="75000">
                            E16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00600801" data-price="75000">
                            E15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00600901" data-price="75000">
                            E14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601001" data-price="75000">
                            E13							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601101" data-price="75000">
                            E12							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601201" data-price="75000">
                            E11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601301" data-price="75000">
                            E10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601401" data-price="75000">
                            E9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601501" data-price="75000">
                            E8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601601" data-price="75000">
                            E7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601701" data-price="75000">
                            E6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601801" data-price="75000">
                            E5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00601901" data-price="75000">
                            E4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00602001" data-price="75000">
                            E3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00700301" data-price="75000">
                            F20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00700401" data-price="75000">
                            F19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00700501" data-price="75000">
                            F18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00700601" data-price="75000">
                            F17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00700701" data-price="75000">
                            F16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00700801" data-price="75000">
                            F15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00700901" data-price="75000">
                            F14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701001" data-price="75000">
                            F13							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701101" data-price="75000">
                            F12							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701201" data-price="75000">
                            F11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701301" data-price="75000">
                            F10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701401" data-price="75000">
                            F9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701501" data-price="75000">
                            F8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701601" data-price="75000">
                            F7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701701" data-price="75000">
                            F6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701801" data-price="75000">
                            F5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00701901" data-price="75000">
                            F4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00702001" data-price="75000">
                            F3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00800301" data-price="75000">
                            G20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00800401" data-price="75000">
                            G19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00800501" data-price="75000">
                            G18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00800601" data-price="75000">
                            G17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00800701" data-price="75000">
                            G16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00800801" data-price="75000">
                            G15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00800901" data-price="75000">
                            G14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801001" data-price="75000">
                            G13							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801101" data-price="75000">
                            G12							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801201" data-price="75000">
                            G11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801301" data-price="75000">
                            G10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801401" data-price="75000">
                            G9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801501" data-price="75000">
                            G8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801601" data-price="75000">
                            G7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801701" data-price="75000">
                            G6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801801" data-price="75000">
                            G5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00801901" data-price="75000">
                            G4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00802001" data-price="75000">
                            G3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00900301" data-price="75000">
                            H20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00900401" data-price="75000">
                            H19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00900501" data-price="75000">
                            H18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00900601" data-price="75000">
                            H17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00900701" data-price="75000">
                            H16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00900801" data-price="75000">
                            H15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00900901" data-price="75000">
                            H14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901001" data-price="75000">
                            H13							</div>
                        <div className="seat seat-disable disable">
                            H12							</div>
                        <div className="seat seat-disable disable">
                            H11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901301" data-price="75000">
                            H10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901401" data-price="75000">
                            H9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901501" data-price="75000">
                            H8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901601" data-price="75000">
                            H7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901701" data-price="75000">
                            H6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901801" data-price="75000">
                            H5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00901901" data-price="75000">
                            H4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="00902001" data-price="75000">
                            H3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>            </div>											<div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88
                        </div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01000301" data-price="75000">
                            J20
                            </div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01000401" data-price="75000">
                            J19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01000501" data-price="75000">
                            J18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01000601" data-price="75000">
                            J17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01000701" data-price="75000">
                            J16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01000801" data-price="75000">
                            J15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01000901" data-price="75000">
                            J14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001001" data-price="75000">
                            J13							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001101" data-price="75000">
                            J12							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001201" data-price="75000">
                            J11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001301" data-price="75000">
                            J10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001401" data-price="75000">
                            J9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001501" data-price="75000">
                            J8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001601" data-price="75000">
                            J7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001701" data-price="75000">
                            J6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001801" data-price="75000">
                            J5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01001901" data-price="75000">
                            J4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01002001" data-price="75000">
                            J3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01002201" data-price="75000">
                            J2							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01002301" data-price="75000">
                            J1							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01100301" data-price="75000">
                            K20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01100401" data-price="75000">
                            K19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01100501" data-price="75000">
                            K18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01100601" data-price="75000">
                            K17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01100701" data-price="75000">
                            K16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01100801" data-price="75000">
                            K15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01100901" data-price="75000">
                            K14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101001" data-price="75000">
                            K13							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101101" data-price="75000">
                            K12							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101201" data-price="75000">
                            K11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101301" data-price="75000">
                            K10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101401" data-price="75000">
                            K9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101501" data-price="75000">
                            K8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101601" data-price="75000">
                            K7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101701" data-price="75000">
                            K6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101801" data-price="75000">
                            K5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01101901" data-price="75000">
                            K4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01102001" data-price="75000">
                            K3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01102201" data-price="75000">
                            K2							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01102301" data-price="75000">
                            K1							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01200301" data-price="75000">
                            L20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01200401" data-price="75000">
                            L19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01200501" data-price="75000">
                            L18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01200601" data-price="75000">
                            L17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01200701" data-price="75000">
                            L16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01200801" data-price="75000">
                            L15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01200901" data-price="75000">
                            L14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201001" data-price="75000">
                            L13							</div>
                        <div className="seat seat-disable disable">
                            L12							</div>
                        <div className="seat seat-disable disable">
                            L11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201301" data-price="75000">
                            L10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201401" data-price="75000">
                            L9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201501" data-price="75000">
                            L8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201601" data-price="75000">
                            L7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201701" data-price="75000">
                            L6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201801" data-price="75000">
                            L5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01201901" data-price="75000">
                            L4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01202001" data-price="75000">
                            L3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01202201" data-price="75000">
                            L2							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01202301" data-price="75000">
                            L1							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                    <div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01300301" data-price="75000">
                            M20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01300401" data-price="75000">
                            M19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01300501" data-price="75000">
                            M18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01300601" data-price="75000">
                            M17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01300701" data-price="75000">
                            M16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01300801" data-price="75000">
                            M15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01300901" data-price="75000">
                            M14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301001" data-price="75000">
                            M13							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301101" data-price="75000">
                            M12							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301201" data-price="75000">
                            M11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301301" data-price="75000">
                            M10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301401" data-price="75000">
                            M9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301501" data-price="75000">
                            M8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301601" data-price="75000">
                            M7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301701" data-price="75000">
                            M6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301801" data-price="75000">
                            M5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01301901" data-price="75000">
                            M4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01302001" data-price="75000">
                            M3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01302201" data-price="75000">
                            M2							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01302301" data-price="75000">
                            M1							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>            </div>											<div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01400301" data-price="75000">
                            N20							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01400401" data-price="75000">
                            N19							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01400501" data-price="75000">
                            N18							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01400601" data-price="75000">
                            N17							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01400701" data-price="75000">
                            N16							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01400801" data-price="75000">
                            N15							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01400901" data-price="75000">
                            N14							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401001" data-price="75000">
                            N13							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401101" data-price="75000">
                            N12							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401201" data-price="75000">
                            N11							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401301" data-price="75000">
                            N10							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401401" data-price="75000">
                            N9							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401501" data-price="75000">
                            N8							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401601" data-price="75000">
                            N7							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401701" data-price="75000">
                            N6							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401801" data-price="75000">
                            N5							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01401901" data-price="75000">
                            N4							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01402001" data-price="75000">
                            N3							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01402201" data-price="75000">
                            N2							</div>

                        <div className="seat seat-vipprime active" onClick={(e) => selectedseats(e)} data-zone="Vipprime" data-loc="01402301" data-price="75000">
                            N1							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>            </div>											<div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01500301" data-price="90000" data-spec="1">
                            P20							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01500401" data-price="90000" data-spec="1">
                            P19							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01500501" data-price="90000" data-spec="2">
                            P18							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01500601" data-price="90000" data-spec="2">
                            P17							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01500701" data-price="90000" data-spec="3">
                            P16							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01500801" data-price="90000" data-spec="3">
                            P15							</div>
                        <div className="seat seat-disable disable">
                            P14							</div>
                        <div className="seat seat-disable disable">
                            P13							</div>
                        <div className="seat seat-disable disable">
                            P12							</div>
                        <div className="seat seat-disable disable">
                            P11							</div>
                        <div className="seat seat-disable disable">
                            P10							</div>
                        <div className="seat seat-disable disable">
                            P9							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01501501" data-price="90000" data-spec="7">
                            P8							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01501601" data-price="90000" data-spec="7">
                            P7							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01501701" data-price="90000" data-spec="8">
                            P6							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01501801" data-price="90000" data-spec="8">
                            P5							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01501901" data-price="90000" data-spec="9">
                            P4							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01502001" data-price="90000" data-spec="9">
                            P3							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01502101" data-price="90000" data-spec="10">
                            P2							</div>

                        <div className="seat seat-sw active" onClick={(e) => selectedseats(e)} data-zone="Sw" data-loc="01502201" data-price="90000" data-spec="10">
                            P1							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>            </div>											<div className="row">

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>

                        <div className="seat empty">
                            Q88							</div>
                    </div>
                </div>

                <div className="ticketbox-notice">
                    <div className="iconlist">
                        <div className="icon checked">Checked</div>
                        <div className="icon occupied">Đã chọn</div>
                        <div className="icon unavailable">Không thể chọn</div>
                    </div>

                    <div className="iconlist">
                        <div className="icon zone-standard" title="Standard">
                            Thường						</div>
                        <div className="icon zone-vipprime" title="VIP(Prime)">
                            VIP(Prime)						</div>
                        <div className="icon zone-sw" title="Sweetbox">
                            Sweetbox						</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Seat;