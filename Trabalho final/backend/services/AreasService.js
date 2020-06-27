const repository = require('../persistence/AreaRepositoryPgSequelize');
class AreasService {
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

    add = async (Area) => {
        //TODO: regras de negocio adicional
        return await this.repository.add(Area);
    }

    update = async (Area) => {
        //TODO: regras de negocio adicional
        return await this.repository.update(Area);
    }

    deleteById = async (id) => {
        //TODO: regras de negocio adicional
        return await this.repository.deleteById(id);
    }
}
module.exports = new AreasService(repository);