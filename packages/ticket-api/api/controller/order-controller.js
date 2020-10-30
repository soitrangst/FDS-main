const jwt = require('jsonwebtoken');
const Order = require("../models/order")
const Ticket = require("../models/ticket")



exports.get_all_order = async (req, res, next) => {
    try {
        const orders = await Order.find()
            .limit(50)
            .populate('tickets', "_id used")
        res.status(200).json({
            message: "Get Successfully",
            data: orders
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

exports.create_new = async (req, res, next) => {
    try {
        const { movie, customerName, customerEmail, hall, date, seats } = req.body
        const ticketId = []
        const ticketCodes = []

        await seats.map(async (e) => {
            let zone = e.zone,
                loc = e.loc,
                price = e.price,
                name = e.name

            const checkTickets = await Ticket.find({ movie, date, hall, loc })
            if (checkTickets.length > 0) {
                return res.status(500).json({
                    message: "Your tickets were booked !!!"
                })
            } else {
                let secretKey = new Date().toISOString()
                let code = jwt.sign({ ...e }, secretKey)
                ticketCodes.push(code)
                try {
                    const ticket = new Ticket({
                        zone,
                        loc,
                        price,
                        name,
                        date,
                        code,
                        movie,
                        hall
                    })
                    ticketId.push(ticket._id)
                    await ticket.save()

                } catch (error) {
                    return res.status(500).json({
                        message: error
                    })
                }
            }
        })

        const order = new Order({
            movie,
            customerName,
            customerEmail,
            hall,
            date,
            tickets: ticketId
        });
        await order.save()

        res.json({
            message: "Create successfull",
            ticketCodes,
        })



    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

exports.get_specific = async (req, res, next) => {
    try {
        const ticket = await Ticket.findOne(
            { code: req.params.code }
        )
        console.log(ticket);
        if (ticket) {
            res.status(200).json({
                message: "Get ticket successfully",
                data: ticket
            })
            await Ticket.findOneAndUpdate(
                { code: req.params.code },
                { $set: { used: true, update: new Date() } },
                { new: true, useFindAndModify: false }
            )
        } else {
            res.status(404).json({
                message: "code not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

exports.get_booked = async (req, res, next) => {
    const { movie, date, hall } = req.body
    try {
        const tickets = await Ticket.find({ movie, date, hall })
            .select("_id loc")
        res.status(200).json({
            message: "Update seats Successfully",
            data: tickets
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}
