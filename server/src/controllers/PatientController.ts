import { Request, Response, NextFunction } from "express";
import { Citi, Crud } from "../global";

class PatientController implements Crud {
    constructor(private readonly citi = new Citi("Patient")) {}
    create = async (request: Request, response: Response) => {
        const { name, tutorName , age , species} = request.body;
        const isAnyUndefined = this.citi.areValuesUndefined(
            name,
            tutorName,
            age,
            species,
       );
      if (isAnyUndefined) return response.status(400).send();

      const newPatient = { name, tutorName, age, species };
      const { httpStatus, message } = await this.citi.insertIntoDatabase(newPatient);

      return response.status(httpStatus).send({ message });
    };

    get = async (request: Request, response: Response) => {
        try {
            const { httpStatus, values } = await this.citi.getAll();
            return response.status(httpStatus).send(values);
        } catch (error) {
            return response.status(500).send({ message: "Internal server error" });
        }
    };

    findById = async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            const { httpStatus, value } = await this.citi.findById(id);
            return response.status(httpStatus).send(value);
        } catch (error) {
            return response.status(500).send({ message: "Internal server error" });
        }
    };

    update = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { name, tutorName , age , species} = request.body;
        const updatedValues = { name, tutorName , age , species};
        const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
            id,
            updatedValues
        );

        return response.status(httpStatus).send({ messageFromUpdate });
    };

    delete = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);
        return response.status(httpStatus).send({ messageFromDelete });
    };
}
export default new PatientController();