const Carro = require('../../models/Carro');

exports.add = (req, res, next) => {
    const form = {
        ...req.body
    }

    if (form.kilometragem.length > 0 && form.ano.length > 0 && form.modelo.length > 0 && form.marca.length > 0) {
        new Carro({
                ...form
            })
            .save()
            .then(carro => {
                res
                    .status(200)
                    .json({'message': "Carro criada com sucesso"});
            })
            .catch(err => {
                res
                    .status(500)
                    .json({
                        'message': "Erro ao criar Carro:" + err.message
                    });
            });
    } else {
        return res
            .status(500)
            .json({'message': "Preencha todos os campos!"});
    }
}

exports.get = (req, res, next) => {

    const id = req.params.id;

    Carro
        .findOne({id})
        .then(carro => {
            return res
                .status(200)
                .json({carro});
        })
        .catch(err => {
            res
                .status(500)
                .json({'message': err});
        });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Carro
        .findOne({id})
        .then(carro => {
            carro.remove();
            return res
                .status(200)
                .json({message: 'Removido com sucesso'});
        })
        .catch(err => {
            res
                .status(500)
                .json({'message': "Carro não encontrada"});
        });
}

exports.edit = (req, res, next) => {
    const id = req.body.id;

    Carro
        .findById(id)
        .then(carro => {
            carro.modelo = req.body.modelo;
            carro.kilometragem = req.body.kilometragem;
            carro.ano = req.body.ano;
            carro.marca = req.body.marca;
            carro.save();
            return res
                .status(200)
                .json({message: 'Editado com sucesso'});
        })
        .catch(err => {
            res
                .status(500)
                .json({message: "Carro não encontrado"});
        });
}

exports.getAll = (req, res, next) => {
    Carro
        .find()
        .then(carros => {
            return res
                .status(200)
                .json({carros});
        })
        .catch(err => {
            res
                .status(500)
                .json({'message': "Erro ao consultar no banco de dados"});
        });
}