const repository = require('../persistence/UsuarioRepositoryPgSequelize');
class UsuariosService {
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

    add = async (Usuario) => {
        //TODO: regras de negocio adicional
        return await this.repository.add(Usuario);
    }

    update = async (Usuario) => {
        //TODO: regras de negocio adicional
        return await this.repository.update(Usuario);
    }

    deleteById = async (id) => {
        //TODO: regras de negocio adicional
        return await this.repository.deleteById(id);
    }
}
module.exports = new UsuariosService(repository);