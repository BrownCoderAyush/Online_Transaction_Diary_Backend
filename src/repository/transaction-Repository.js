const {  transaction } = require('../models/index.js');



class TransactionRepository {
    constructor(){
        
    }
    async create(data) {
        try {
            const Transaction = await transaction.create({
                Amount: data.Amount,
                TransactionType: data.TransactionType,
                PartyName: data.PartyName,
                userId : data.userId     
            });
            

            return Transaction;
           
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async delete(Id) {
        try {
            await transaction.destroy({
                where: {
                    id: Id
                }
            }
            )
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async update(id , data){
        try {
            
            await transaction.update(data,{ where: { id: id } });
            const updatedTransaction = await this.findById(id);
            return updatedTransaction;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

    async findById(Id) {
        try {

            const employee = await transaction.findByPk(Id);
            return employee;

        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }



   


}

module.exports = TransactionRepository;