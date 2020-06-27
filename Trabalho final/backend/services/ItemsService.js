const repository = require('../persistence/ItemRepositoryPgSequelize');
class ItemsService {
    constructor(repository) {
        this.repository = repository;
    }

    findAll = async () => {
        //TODO: regras de negocio adicional
        return await this.repository.findAll();
    }

    findById = async (id) => {
        //TODO: regras de negocio adicional
        return await this.repository.findById(id);
    }

    add = async (Item) => {
        //TODO: regras de negocio adicional
        return await this.repository.add(Item);
    }

    update = async (Item) => {
        //TODO: regras de negocio adicional
        return await this.repository.update(Item);
    }

    deleteById = async (id) => {
        //TODO: regras de negocio adicional
        return await this.repository.deleteById(id);
    }
}
module.exports = new ItemsService(repository);