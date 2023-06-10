const TransactionRepository = require("../repository/transaction-Repository");

class TransactionService{
    constructor(){
        this.transactionRepository = new TransactionRepository();
    }

    async create(data){
        try {
            const transaction = await this.transactionRepository.create(data);
            return transaction;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error ;
        }
    }



}



module.exports = TransactionService;