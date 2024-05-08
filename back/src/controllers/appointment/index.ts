import { Request, Response } from "express";
import { getAllAppointmentsService, getAllAppointmentByIdService, postAppointmentService, putAppointmentService } from "../../services/appointment";

function getAllAppointmentsController(req: Request, res: Response) {
    res.status(200).send("this is get all Appointments");
}

function getAllAppointmentByIdController(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).send(`this is get Appointment by id, your id is: ${id}`);
}

function postAppointmentController(req: Request, res: Response) {
    const appointments = req.body;
    res.send(201).json({message: "This is post Appointment", body: appointments});
}

function putAppointmentController(req: Request, res: Response) {
    const appointments = req.body;
    res.send(201).json({message: "This is put Appointment", body: appointments});
}

export { 
    getAllAppointmentsController,
    getAllAppointmentByIdController, 
    postAppointmentController, 
    putAppointmentController 
};