const { model } = require('mongoose');
const Events = require('../models/events.model')


/*
 * @function Creating/saving a new event
 * @params(req,res, next)
*/

module.exports.saveEvents = async(req,res, next)=>{
    try{
        const eventExist = await Events.findOne({title: req.body.title})
        if(eventExist) return res.status(404).json({status: "failed", msg: "event already exits", eventExist})

        const newEvent = await Events.create(req.body)
        res.status(201).json({status: "success", data: newEvent})

    }catch(err){
        next({msg: "Oops! something went wrong couldn't create event", err})
    }
}


/*
 * @function getting all events if exist
 * @params(req,res)

*/

module.exports.fetchEvents = async (req, res) => {
    Events.find({}, (err, events) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (events.lenght) {
            return res.status(404).json({ success: false, error: "Oops No Events found" })
        }
        return res.status(200).json({ success: true, data: events })
    })
}


/*
 * @function getting a single event if exist
 * @params(req,res)

*/

module.exports.fetchEvent = async (req, res) => {
    const { id } = req.params
    Events.findById(id)
    try {
        const { id } = req.params
        const event = await Events.findById(id)
        if (!event) return res.status(404).json({ status: "failed", msg: "event not found" })

        res.status(200).json({ status: "success", data: event })

    } catch (err) {
        next({ msg: "Oops! something went wrong couldn't get events", err })
    }
}

/*
 * @function deleting an event if exist
 * @params(req,res, next)
 *
*/
module.exports.deleteEvent = (req, res, next) => {
    Events.findByIdAndRemove(
        req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data,
                });
            }
        });
};


/*
* @function updating an event if exist
* @params(req,res, next)

*/

module.exports.updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params
        const event = await Events.findById(id)
        if (!event) return res.status(404).json({ status: "failed", msg: "Event not found" })

        const updatedUser = await Units.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ status: "success", data: updatedUser })

    } catch (err) {
        next({ msg: "something went wrong", err })
    }
}


/*
* @function getting a single event method 2
* @params(req,res)

*/
module.exports.fetchEventsData = async (req, res, next) => {
    const { id } = req.params
    Events.find({ _id: id })
    try {
        const { id } = req.params
        const event = await Events.find({ _id: id })
        if (!event) return res.status(404).json({ status: "failed", msg: "event not found" })

        res.status(200).json({ status: "success", data: event })

    } catch (err) {
        next({ msg: "Oops! something went wrong couldn't get events", err })
    }
}